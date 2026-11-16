import { featuredTitle, movies, runtimes, tvShows } from "./data/movies.js";
import { WATCHLIST_KEY, FAVORITES_KEY, VIEWED_KEY, THEME_KEY, loadSavedIds, saveIds } from "./src/storage.js";
import {
    rankRecommendations,
    matchesRuntime,
    matchesEra,
    getDateSeed,
    getDoubleFeaturePair,
    formatRating,
    textOf
} from "./src/recommendations.js";
import { moodDefaults, extraMoodRules, moodNotes, moodLabels } from "./src/constants/editorial.js";
import { originalMovieQuotes } from "./src/constants/quotes.js";
import { initCinemaParticles } from "./src/particles.js";
import { createMovieCard, renderFeatureCard, revealMovieCardsAsParticles } from "./src/ui/cards.js";
import { openMovieModal } from "./src/ui/modal.js";
import { showToast } from "./src/ui/toast.js";

// Normalize catalog data
const allTitles = [featuredTitle, ...movies, ...tvShows];
allTitles.forEach(item => {
    if (!item.language) item.language = "English";
    if (!item.region) item.region = "United States";
    if (!item.mood) {
        item.mood = moodDefaults[item.genre] ? [...moodDefaults[item.genre]] : ["thoughtful"];
    }
    if (item.genre === "Mystery" && Array.isArray(item.mood)) {
        item.mood = item.mood.filter(mood => mood !== "cozy");
    }
    Object.entries(extraMoodRules).forEach(([mood, matches]) => {
        if (matches(item, textOf) && Array.isArray(item.mood) && !item.mood.includes(mood)) {
            item.mood.push(mood);
        }
    });
});

// App State
const pageRecommendationOffset = Math.floor(Math.random() * 10000);
let watchlistIds = loadSavedIds(WATCHLIST_KEY);
let favoriteIds = loadSavedIds(FAVORITES_KEY);
let viewedIds = loadSavedIds(VIEWED_KEY);

const CATALOG_PAGE_SIZE = 24;
let visibleMovieCount = CATALOG_PAGE_SIZE;
let selectedMood = "cozy";
let selectedGenre = "All";
let selectedLanguage = "All";
let selectedEra = "all";
let selectedType = "all"; // "all" | "movie" | "tv"
let currentWatchlistTab = "all"; // "all" | "to-watch" | "watched"
let doubleFeatureOffset = 0;
let lastSurprisePickId = null;

// DOM Elements
const searchInput = document.getElementById("movie-search");
const searchAllMoodsCheckbox = document.getElementById("search-all-moods");
const languageSelect = document.getElementById("language-select");
const eraSelect = document.getElementById("era-select");
const clearFiltersBtn = document.getElementById("clear-all-filters");
const genreButtons = document.querySelectorAll(".genre-button");
const typeButtons = document.querySelectorAll(".type-button");
const movieModal = document.getElementById("movie-modal");
const closeModalButton = movieModal?.querySelector(".modal-close");
const themeToggle = document.getElementById("theme-toggle");
const menuToggle = document.getElementById("menu-toggle");
const siteNavigation = document.getElementById("site-navigation");
const backToTopButton = document.getElementById("back-to-top");
const readingProgressFill = document.getElementById("reading-progress-fill");
const quoteElement = document.getElementById("movie-quote");
const quoteButton = document.getElementById("next-quote");
const renderCinemaParticles = initCinemaParticles();

// Populate language select dropdowns
[...new Set(allTitles.map(item => item.language))].sort().forEach(language => {
    const option = document.createElement("option");
    option.value = language;
    option.textContent = language;
    languageSelect?.append(option);
});

const movieNightLanguage = document.getElementById("night-language");
const selectedNightMood = document.getElementById("selected-night-mood");
const selectedMoodLabel = document.getElementById("selected-mood-label");
if (movieNightLanguage) {
    [...new Set(allTitles.map(item => item.language).filter(Boolean))].sort().forEach(language => {
        const option = document.createElement("option");
        option.value = language;
        option.textContent = language;
        movieNightLanguage.append(option);
    });
}

// Global Image Error Handler for Broken Posters
document.addEventListener("error", event => {
    const image = event.target;
    if (!image.matches || !image.matches(".movie-poster, .modal-poster, .hero-recommendation-poster")) return;

    const fallback = document.createElement("span");
    fallback.className = `${image.className} poster-unavailable`;
    fallback.setAttribute("role", "img");
    fallback.setAttribute("aria-label", `Movie poster unavailable for ${image.dataset.title || "this title"}`);
    fallback.textContent = "Poster unavailable";
    image.replaceWith(fallback);
}, true);

// Filtering & Catalog Logic
function filterTitles(items) {
    const searchText = (searchInput?.value || "").trim().toLowerCase();

    return items.filter(item => {
        // Content type filter
        if (selectedType === "movie" && tvShows.includes(item)) return false;
        if (selectedType === "tv" && !tvShows.includes(item)) return false;

        // Search text matching: title, language, region, genre, description
        if (searchText) {
            const searchableText = `${item.title} ${item.language} ${item.region || ""} ${item.genre} ${item.description || ""}`.toLowerCase();
            if (!searchableText.includes(searchText)) return false;
        }

        // Genre filter
        if (selectedGenre !== "All" && item.genre !== selectedGenre) return false;

        // Language filter
        if (selectedLanguage !== "All" && item.language !== selectedLanguage) return false;

        // Era filter
        if (!matchesEra(item, selectedEra)) return false;

        return true;
    });
}

function getActiveCardOptions(item) {
    return {
        isFavorite: favoriteIds.includes(item.id),
        isInWatchlist: watchlistIds.includes(item.id),
        isViewed: viewedIds.includes(item.id),
        showMoodReason: true,
        selectedMood
    };
}

function renderMovies(items, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (items.length === 0) {
        container.innerHTML = '<p class="no-results">No titles found matching your search and filters. Try clearing a filter or searching another keyword.</p>';
        return;
    }

    const visibleItems = items.slice(0, visibleMovieCount);
    container.innerHTML = visibleItems.map(item => createMovieCard(item, getActiveCardOptions(item))).join("");
    revealMovieCardsAsParticles(container);

    if (items.length > visibleItems.length) {
        container.insertAdjacentHTML("beforeend", `<button class="load-more-button" type="button" data-load-more>Load ${Math.min(CATALOG_PAGE_SIZE, items.length - visibleItems.length)} more (${visibleItems.length} of ${items.length})</button>`);
    }
}

function renderWatchlist() {
    const watchlistGrid = document.getElementById("watchlist-grid");
    if (!watchlistGrid) return;

    const allSaved = watchlistIds
        .map(id => allTitles.find(title => title.id === id))
        .filter(Boolean);

    const toWatch = allSaved.filter(item => !viewedIds.includes(item.id));
    const watched = allSaved.filter(item => viewedIds.includes(item.id));

    // Update count badges
    const countSavedEl = document.getElementById("count-saved");
    const countToWatchEl = document.getElementById("count-towatch");
    const countWatchedEl = document.getElementById("count-watched");
    if (countSavedEl) countSavedEl.textContent = allSaved.length;
    if (countToWatchEl) countToWatchEl.textContent = toWatch.length;
    if (countWatchedEl) countWatchedEl.textContent = watched.length;

    let displayList = allSaved;
    if (currentWatchlistTab === "to-watch") displayList = toWatch;
    if (currentWatchlistTab === "watched") displayList = watched;

    if (displayList.length === 0) {
        const emptyMsg = currentWatchlistTab === "watched"
            ? "You haven't marked any saved titles as watched yet."
            : (currentWatchlistTab === "to-watch"
                ? "No titles waiting to watch. Add more from the catalog above!"
                : "Your watchlist is empty. Add a movie or TV show to save it here.");
        watchlistGrid.innerHTML = `<p class="empty-watchlist">${emptyMsg}</p>`;
        return;
    }

    watchlistGrid.innerHTML = displayList.map(item => createMovieCard(item, {
        ...getActiveCardOptions(item),
        showMoodReason: false
    })).join("");
    revealMovieCardsAsParticles(watchlistGrid);
}

function renderHeroRecommendation() {
    const result = document.getElementById("hero-recommendation");
    if (!result) return;

    const candidates = filterTitles(movies).filter(item => item.mood && item.mood.includes(selectedMood));

    if (!candidates.length) {
        result.innerHTML = `<p class="hero-recommendation-empty">No ${moodLabels[selectedMood] || selectedMood} picks match the current filters. <button class="hero-clear-filters" type="button" data-clear-filters>Clear filters</button></p>`;
        return;
    }

    const posterCandidates = candidates.filter(item => String(item.poster || "").includes("image.tmdb.org"));
    const rankedCandidates = rankRecommendations(posterCandidates.length ? posterCandidates : candidates, {
        mood: selectedMood,
        genre: selectedGenre,
        language: selectedLanguage,
        era: selectedEra
    }, { viewedIds, watchlistIds, favoriteIds });

    const topMatches = rankedCandidates.slice(0, Math.min(12, rankedCandidates.length));
    const recommendation = topMatches[pageRecommendationOffset % topMatches.length];

    result.innerHTML = `
        <div class="hero-recommendation-card">
            ${recommendation.poster
                ? `<img class="hero-recommendation-poster" src="${recommendation.poster}" alt="" loading="lazy">`
                : `<span class="hero-recommendation-poster poster-unavailable" aria-hidden="true">No poster</span>`}
            <div class="hero-recommendation-copy">
                <span class="hero-recommendation-label">Tonight's match</span>
                <h2>${recommendation.title}</h2>
                <p>${recommendation.description}</p>
                <button class="hero-recommendation-link" type="button" data-item-id="${recommendation.id}">View why it fits <span aria-hidden="true">&#8594;</span></button>
            </div>
            <span class="hero-recommendation-meta">${recommendation.year} <span aria-hidden="true">&#183;</span> ${recommendation.language}${recommendation.rating ? ` <span aria-hidden="true">&#183;</span> &#9733; ${formatRating(recommendation.rating)}` : ""}</span>
        </div>
    `;
    result.classList.remove("recommendation-is-new");
    requestAnimationFrame(() => result.classList.add("recommendation-is-new"));
}

function renderMovieNightResult() {
    const form = document.getElementById("movie-night-form");
    const result = document.getElementById("movie-night-result");
    if (!form || !result) return;

    const formData = new FormData(form);
    const mood = formData.get("night-mood");
    const language = formData.get("night-language");
    const runtimeChoice = formData.get("night-runtime");
    const candidates = movies.filter(item =>
        (language === "All" || item.language === language) &&
        item.mood.includes(mood) &&
        matchesRuntime(item, runtimeChoice)
    );

    if (candidates.length === 0) {
        result.innerHTML = `<p class="no-results">No catalog titles match all three choices. Try any runtime or another language.</p>`;
        return;
    }

    const recommendation = rankRecommendations(candidates, {
        mood,
        language,
        runtime: runtimeChoice
    }, { viewedIds, watchlistIds, favoriteIds })[0];

    const runtimeText = recommendation.runtime ? ` at ${recommendation.runtime}` : "";
    result.innerHTML = renderFeatureCard(
        recommendation,
        `A ${mood} pick${runtimeText}, selected from ${candidates.length} catalog title${candidates.length === 1 ? "" : "s"} matching your choices.`
    );
}

function renderFilmOfDay() {
    const result = document.getElementById("film-of-day");
    const dateLabel = document.getElementById("daily-date");
    if (!result) return;

    const today = new Date();
    const languages = ["English", "Hindi", "Telugu"];
    const dateSeed = getDateSeed(today);
    const language = languages[dateSeed % languages.length];
    const candidates = movies.filter(movie => movie.language === language);
    const item = candidates[Math.floor(dateSeed / languages.length) % candidates.length];
    if (dateLabel) dateLabel.textContent = today.toLocaleDateString(undefined, { dateStyle: "long" });
    result.innerHTML = renderFeatureCard(
        item,
        `Chosen from our ${language} collection today so the daily spotlight keeps moving across languages, regions, and film traditions.`
    );
}

function renderDoubleFeature() {
    const result = document.getElementById("double-feature");
    if (!result) return;

    const [first, second] = getDoubleFeaturePair(movies, doubleFeatureOffset);
    if (!first || !second) return;

    const sharedDetails = [];
    if (first.language === second.language) sharedDetails.push(`${first.language} language`);
    if (first.genre === second.genre) sharedDetails.push(`${first.genre} genre`);
    if (Math.floor(Number(first.year) / 10) === Math.floor(Number(second.year) / 10)) sharedDetails.push(`${Math.floor(Number(first.year) / 10) * 10}s release period`);
    const connection = sharedDetails.length
        ? `Both titles share ${sharedDetails.join(" and ")} details in the catalog.`
        : "These titles are paired as a contrast across the catalog.";
    result.innerHTML = `
        <div class="double-feature-pair">
            ${renderFeatureCard(first, `Start here: ${first.description}`)}
            <span class="double-feature-plus" aria-hidden="true">+</span>
            ${renderFeatureCard(second, `Follow with this: ${second.description}`)}
        </div>
        <p class="pairing-note">${connection}</p>
    `;
}

function updateUrlParams() {
    const params = new URLSearchParams(window.location.search);
    if (selectedMood && selectedMood !== "cozy") {
        params.set("mood", selectedMood);
    } else {
        params.delete("mood");
    }
    if (selectedGenre && selectedGenre !== "All") {
        params.set("genre", selectedGenre);
    } else {
        params.delete("genre");
    }
    if (selectedType && selectedType !== "all") {
        params.set("type", selectedType);
    } else {
        params.delete("type");
    }
    const query = params.toString();
    const newUrl = query ? `${window.location.pathname}?${query}` : window.location.pathname;
    window.history.replaceState({}, "", newUrl);
}

function updateCatalogs(resetVisibleCount = false) {
    if (resetVisibleCount) visibleMovieCount = CATALOG_PAGE_SIZE;

    const searchText = (searchInput?.value || "").trim();
    const shouldSearchAllMoods = searchAllMoodsCheckbox ? searchAllMoodsCheckbox.checked : true;
    const isSearchingAcrossMoods = searchText.length > 0 && shouldSearchAllMoods;

    const candidatePool = filterTitles(allTitles);
    const moodFiltered = isSearchingAcrossMoods
        ? candidatePool
        : candidatePool.filter(item => item.mood && item.mood.includes(selectedMood));

    const ranked = rankRecommendations(moodFiltered, {
        mood: isSearchingAcrossMoods ? undefined : selectedMood,
        genre: selectedGenre,
        language: selectedLanguage,
        era: selectedEra
    }, { viewedIds, watchlistIds, favoriteIds });

    renderMovies(ranked, "trending-movies");
    renderWatchlist();

    const catalogCount = document.getElementById("catalog-count");
    if (catalogCount) {
        const moodContext = isSearchingAcrossMoods
            ? `matching "${searchText}" across all moods`
            : `matching ${selectedMood} mood and your filters`;
        catalogCount.textContent = `${ranked.length} ranked suggestions ${moodContext}.`;
    }

    const moodCaption = document.getElementById("mood-results-caption");
    if (moodCaption) {
        moodCaption.textContent = isSearchingAcrossMoods
            ? `${ranked.length} stories found across the collection`
            : `${ranked.length} stories selected for your ${selectedMood} mood`;
    }

    renderHeroRecommendation();
    updateUrlParams();
}

// Watchlist & Favorites Management
function toggleWatchlist(itemId) {
    const id = Number(itemId);
    const wasSaved = watchlistIds.includes(id);
    const previousIds = [...watchlistIds];
    watchlistIds = wasSaved
        ? watchlistIds.filter(savedId => savedId !== id)
        : [...watchlistIds, id];

    if (!saveIds(WATCHLIST_KEY, watchlistIds)) {
        watchlistIds = previousIds;
        return;
    }

    updateCatalogs();
    const title = allTitles.find(item => item.id === id);
    showToast(wasSaved ? `Removed "${title?.title || "item"}" from your watchlist.` : `Added "${title?.title || "item"}" to your watchlist.`);
}

function toggleFavorite(itemId) {
    const id = Number(itemId);
    const wasFavorite = favoriteIds.includes(id);
    const previousIds = [...favoriteIds];
    favoriteIds = wasFavorite
        ? favoriteIds.filter(savedId => savedId !== id)
        : [...favoriteIds, id];

    if (!saveIds(FAVORITES_KEY, favoriteIds)) {
        favoriteIds = previousIds;
        return;
    }

    updateCatalogs();
    const title = allTitles.find(item => item.id === id);
    showToast(wasFavorite ? `Removed "${title?.title || "item"}" from favorites.` : `Added "${title?.title || "item"}" to favorites.`);
}

function toggleSeen(itemId) {
    const id = Number(itemId);
    const wasSeen = viewedIds.includes(id);
    const previousIds = [...viewedIds];
    viewedIds = wasSeen
        ? viewedIds.filter(savedId => savedId !== id)
        : [...viewedIds, id];

    if (!saveIds(VIEWED_KEY, viewedIds)) {
        viewedIds = previousIds;
        return wasSeen;
    }

    updateCatalogs();
    const title = allTitles.find(item => item.id === id);
    showToast(wasSeen ? `Marked "${title?.title || "item"}" as unwatched.` : `Marked "${title?.title || "item"}" as watched.`);
    return !wasSeen;
}

function exportWatchlistAsJSON() {
    const savedTitles = watchlistIds.map(id => allTitles.find(t => t.id === id)).filter(Boolean);
    if (!savedTitles.length) {
        showToast("Your watchlist is empty. Nothing to export.");
        return;
    }

    const payload = savedTitles.map(item => ({
        id: item.id,
        title: item.title,
        year: item.year,
        genre: item.genre,
        language: item.language,
        rating: item.rating,
        watched: viewedIds.includes(item.id)
    }));

    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `cineverse-watchlist-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("Watchlist exported successfully!");
}

function clearAllWatchlist() {
    if (!watchlistIds.length) {
        showToast("Your watchlist is already empty.");
        return;
    }
    if (window.confirm("Are you sure you want to clear your entire watchlist?")) {
        watchlistIds = [];
        saveIds(WATCHLIST_KEY, watchlistIds);
        updateCatalogs();
        showToast("Watchlist cleared.");
    }
}

// Modal open helper with current context
function handleOpenModal(itemId) {
    const item = allTitles.find(title => title.id === Number(itemId));
    if (!item) return;

    openMovieModal(item, {
        selectedMood,
        moodLabels,
        runtimes,
        tvShows,
        isWatched: viewedIds.includes(item.id),
        onToggleWatched: toggleSeen
    });
}

// Event Listeners for Filters & Search
searchInput?.addEventListener("input", () => updateCatalogs(true));
searchAllMoodsCheckbox?.addEventListener("change", () => updateCatalogs(true));

languageSelect?.addEventListener("change", () => {
    selectedLanguage = languageSelect.value;
    updateCatalogs(true);
});

eraSelect?.addEventListener("change", () => {
    selectedEra = eraSelect.value;
    updateCatalogs(true);
});

clearFiltersBtn?.addEventListener("click", () => {
    if (searchInput) searchInput.value = "";
    selectedGenre = "All";
    selectedLanguage = "All";
    selectedEra = "all";
    selectedType = "all";
    if (languageSelect) languageSelect.value = "All";
    if (eraSelect) eraSelect.value = "all";

    genreButtons.forEach(btn => {
        const isAll = btn.dataset.genre === "All";
        btn.classList.toggle("active", isAll);
        btn.setAttribute("aria-pressed", String(isAll));
    });

    typeButtons.forEach(btn => {
        const isAll = btn.dataset.type === "all";
        btn.classList.toggle("active", isAll);
        btn.setAttribute("aria-pressed", String(isAll));
    });

    updateCatalogs(true);
    showToast("Filters reset.");
});

genreButtons.forEach(button => {
    button.addEventListener("click", () => {
        selectedGenre = button.dataset.genre;
        genreButtons.forEach(btn => {
            const isSelected = btn === button;
            btn.classList.toggle("active", isSelected);
            btn.setAttribute("aria-pressed", String(isSelected));
        });
        updateCatalogs(true);
    });
});

typeButtons.forEach(button => {
    button.addEventListener("click", () => {
        selectedType = button.dataset.type;
        typeButtons.forEach(btn => {
            const isSelected = btn === button;
            btn.classList.toggle("active", isSelected);
            btn.setAttribute("aria-pressed", String(isSelected));
        });
        updateCatalogs(true);
    });
});

document.querySelectorAll(".mood-button").forEach(button => {
    button.addEventListener("click", () => {
        selectedMood = button.dataset.mood;
        if (selectedNightMood) selectedNightMood.value = selectedMood;
        if (selectedMoodLabel) selectedMoodLabel.textContent = button.textContent.trim().toLowerCase();
        visibleMovieCount = CATALOG_PAGE_SIZE;

        document.querySelectorAll(".mood-button").forEach(moodButton => {
            const selected = moodButton === button;
            moodButton.classList.toggle("active", selected);
            moodButton.setAttribute("aria-pressed", String(selected));
        });

        const moodNote = document.getElementById("mood-note");
        if (moodNote) moodNote.textContent = moodNotes[selectedMood];
        updateCatalogs();
    });
});

// Watchlist tab switching
document.querySelectorAll(".watchlist-tab").forEach(tab => {
    tab.addEventListener("click", () => {
        currentWatchlistTab = tab.dataset.watchlistTab;
        document.querySelectorAll(".watchlist-tab").forEach(t => {
            const isActive = t === tab;
            t.classList.toggle("active", isActive);
            t.setAttribute("aria-selected", String(isActive));
        });
        renderWatchlist();
    });
});

document.getElementById("export-watchlist")?.addEventListener("click", exportWatchlistAsJSON);
document.getElementById("clear-watchlist")?.addEventListener("click", clearAllWatchlist);

// Grid interactions (delegation)
document.querySelectorAll(".movie-grid").forEach(grid => {
    grid.addEventListener("click", event => {
        const favoriteButton = event.target.closest(".favorite-button");
        const watchlistButton = event.target.closest(".watchlist-button");
        const seenButton = event.target.closest(".seen-button");
        const openButton = event.target.closest(".movie-open, .movie-title-open");

        if (favoriteButton) {
            toggleFavorite(favoriteButton.dataset.itemId);
        } else if (watchlistButton) {
            toggleWatchlist(watchlistButton.dataset.itemId);
        } else if (seenButton) {
            toggleSeen(seenButton.dataset.seenId);
        } else if (openButton) {
            handleOpenModal(openButton.dataset.itemId);
        }
    });
});

document.getElementById("trending-movies")?.addEventListener("click", event => {
    if (event.target.closest("[data-load-more]")) {
        visibleMovieCount += CATALOG_PAGE_SIZE;
        updateCatalogs();
    }
});

// Surprise pick & discovery interactions
document.getElementById("surprise-pick")?.addEventListener("click", () => {
    const matchingFilms = filterTitles(movies).filter(item => item.mood && item.mood.includes(selectedMood));
    if (!matchingFilms.length) {
        showToast("No films match those filters. Try another mood or reset filters.");
        return;
    }

    const rankedFilms = rankRecommendations(matchingFilms, {
        mood: selectedMood,
        genre: selectedGenre,
        language: selectedLanguage,
        era: selectedEra
    }, { viewedIds, watchlistIds, favoriteIds });

    const freshPicks = rankedFilms.filter(item => item.id !== lastSurprisePickId);
    const options = (freshPicks.length ? freshPicks : rankedFilms).slice(0, 8);
    const pickedFilm = options[Math.floor(Math.random() * options.length)];
    lastSurprisePickId = pickedFilm.id;
    handleOpenModal(pickedFilm.id);
});

document.querySelectorAll(".feature-result").forEach(result => {
    result.addEventListener("click", event => {
        const detailButton = event.target.closest("[data-item-id]");
        if (detailButton) handleOpenModal(detailButton.dataset.itemId);
    });
});

document.getElementById("hero-recommendation")?.addEventListener("click", event => {
    const detailButton = event.target.closest("[data-item-id]");
    if (detailButton) handleOpenModal(detailButton.dataset.itemId);

    if (event.target.closest("[data-clear-filters]")) {
        clearFiltersBtn?.click();
    }
});

document.getElementById("new-double-feature")?.addEventListener("click", () => {
    doubleFeatureOffset += 1;
    renderDoubleFeature();
});

document.getElementById("movie-night-form")?.addEventListener("submit", event => {
    event.preventDefault();
    renderMovieNightResult();
});

// Modal close triggers
closeModalButton?.addEventListener("click", () => movieModal?.close());
movieModal?.addEventListener("close", () => document.body.classList.remove("modal-open"));
movieModal?.addEventListener("click", event => {
    if (event.target === movieModal) movieModal.close();
});

// Navigation Menu
menuToggle?.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.textContent = isOpen ? "Menu" : "Close";
    siteNavigation?.classList.toggle("is-open", !isOpen);
});

siteNavigation?.addEventListener("click", event => {
    if (!event.target.closest("a")) return;
    menuToggle?.setAttribute("aria-expanded", "false");
    if (menuToggle) menuToggle.textContent = "Menu";
    siteNavigation?.classList.remove("is-open");
});

// Quotes
const movieQuotes = [...originalMovieQuotes];
let currentQuote = 0;
let lastQuote = -1;
if (quoteElement) quoteElement.textContent = movieQuotes[currentQuote];

quoteButton?.addEventListener("click", () => {
    let nextQuote = currentQuote;
    while (movieQuotes.length > 1 && nextQuote === lastQuote) {
        nextQuote = Math.floor(Math.random() * movieQuotes.length);
    }
    lastQuote = currentQuote;
    currentQuote = nextQuote;
    if (quoteElement) quoteElement.textContent = movieQuotes[currentQuote];
});

// Theme Management
function setTheme(theme) {
    const isLight = theme === "light";
    document.body.classList.toggle("light-theme", isLight);
    if (themeToggle) {
        themeToggle.setAttribute("aria-pressed", String(isLight));
        themeToggle.textContent = isLight ? "Dark theme" : "Light theme";
    }
    renderCinemaParticles();
}

try {
    setTheme(localStorage.getItem(THEME_KEY) === "light" ? "light" : "dark");
} catch {
    setTheme("dark");
}

themeToggle?.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("light-theme") ? "dark" : "light";
    setTheme(nextTheme);
    try {
        localStorage.setItem(THEME_KEY, nextTheme);
    } catch {
        showToast("Theme will reset when you close this page.");
    }
});

// Scrolling & Back-to-top
function updateBackToTopVisibility() {
    if (backToTopButton) backToTopButton.hidden = window.scrollY < 480;
}

let progressUpdateQueued = false;
function updateScrollProgress() {
    if (progressUpdateQueued) return;
    progressUpdateQueued = true;
    window.requestAnimationFrame(() => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
        if (readingProgressFill) {
            readingProgressFill.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
        }
        renderCinemaParticles();
        progressUpdateQueued = false;
    });
}

window.addEventListener("scroll", () => {
    updateBackToTopVisibility();
    updateScrollProgress();
}, { passive: true });
window.addEventListener("resize", updateScrollProgress, { passive: true });
window.addEventListener("resize", renderCinemaParticles, { passive: true });

backToTopButton?.addEventListener("click", () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
});

// Site loader dismiss
const siteLoader = document.getElementById("site-loader");
if (siteLoader) {
    const loaderDuration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 250 : 900;
    window.setTimeout(() => {
        siteLoader.classList.add("is-hidden");
        window.setTimeout(() => siteLoader.remove(), 450);
    }, loaderDuration);
}

// Service Worker Registration for Offline Support
if ("serviceWorker" in navigator && window.location.protocol.startsWith("http")) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js").catch(() => {});
    });
}

// Initial deep link parameters check
function initFromUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const movieParam = params.get("movie");
    if (movieParam) {
        handleOpenModal(movieParam);
    }
    const moodParam = params.get("mood");
    if (moodParam && moodNotes[moodParam]) {
        selectedMood = moodParam;
        document.querySelectorAll(".mood-button").forEach(btn => {
            const isMatch = btn.dataset.mood === moodParam;
            btn.classList.toggle("active", isMatch);
            btn.setAttribute("aria-pressed", String(isMatch));
        });
        const moodNote = document.getElementById("mood-note");
        if (moodNote) moodNote.textContent = moodNotes[selectedMood];
    }
    const genreParam = params.get("genre");
    if (genreParam) {
        selectedGenre = genreParam;
        genreButtons.forEach(btn => {
            const isMatch = btn.dataset.genre === genreParam;
            btn.classList.toggle("active", isMatch);
            btn.setAttribute("aria-pressed", String(isMatch));
        });
    }
    const typeParam = params.get("type");
    if (typeParam && ["all", "movie", "tv"].includes(typeParam)) {
        selectedType = typeParam;
        typeButtons.forEach(btn => {
            const isMatch = btn.dataset.type === typeParam;
            btn.classList.toggle("active", isMatch);
            btn.setAttribute("aria-pressed", String(isMatch));
        });
    }
}

// Initialize catalogs & views
initFromUrlParams();
updateCatalogs();
renderFilmOfDay();
renderDoubleFeature();
updateBackToTopVisibility();
updateScrollProgress();
renderCinemaParticles();
