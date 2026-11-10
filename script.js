import { featuredTitle, movies, runtimes, tvShows } from './data/movies.js';

const allTitles = [featuredTitle, ...movies, ...tvShows];
allTitles.forEach(item => {
    if (!item.language) item.language = "English";
    if (!item.region) item.region = "United States";
});

const WATCHLIST_KEY = "cineVerseWatchlist";
const FAVORITES_KEY = "cineVerseFavorites";
const VIEWED_KEY = "cineVerseViewed";
const THEME_KEY = "cineVerseTheme";
const pageRecommendationOffset = Math.floor(Math.random() * 10000);

function loadSavedIds(storageKey) {
    try {
        const savedIds = JSON.parse(localStorage.getItem(storageKey) || "[]");
        return Array.isArray(savedIds) ? savedIds.map(Number).filter(Number.isFinite) : [];
    } catch {
        return [];
    }
}

let watchlistIds = loadSavedIds(WATCHLIST_KEY);
let favoriteIds = loadSavedIds(FAVORITES_KEY);
let viewedIds = loadSavedIds(VIEWED_KEY);
const moodDefaults = {
    Action: ["thrilled", "wonder"], Adventure: ["wonder", "uplifted"], Animation: ["wonder"],
    Comedy: ["uplifted"], Crime: ["thrilled", "thoughtful"], Documentary: ["thoughtful", "wonder"],
    Drama: ["thoughtful"], Fantasy: ["wonder"], Horror: ["thrilled"],
    Mystery: ["thrilled", "thoughtful"], Romance: ["romantic"], "Sci-Fi": ["wonder", "thoughtful"],
    Thriller: ["thrilled", "thoughtful"]
};
movies.forEach(item => {
    if (!item.mood) item.mood = moodDefaults[item.genre] || ["thoughtful"];
});
tvShows.forEach(item => {
    if (!item.mood) item.mood = moodDefaults[item.genre] || ["thoughtful"];
});
// A mystery can be thoughtful or tense, but its genre alone does not make it cozy.
[...movies, ...tvShows].forEach(item => {
    if (item.genre === "Mystery") item.mood = item.mood.filter(mood => mood !== "cozy");
});

const textOf = item => `${item.title} ${item.description}`.toLowerCase();
const formatRating = rating => Number(rating).toFixed(1);

function getRatingQualityScore(item) {
    const rating = Number(item.rating);
    if (!Number.isFinite(rating) || rating <= 0) return 0;
    return Math.min(1, Math.max(0, (rating - 7) / 2));
}

function getRecommendationScore(item, preferences = {}) {
    const {
        mood,
        genre = "All",
        language = "All",
        runtime = "any"
    } = preferences;
    let score = 0;

    if (mood && item.mood.includes(mood)) score += 5;
    if (genre !== "All" && item.genre === genre) score += 3;
    if (language !== "All" && item.language === language) score += 3;
    if (runtime !== "any" && matchesRuntime(item, runtime)) score += 2;
    score += getRatingQualityScore(item);
    if (viewedIds.includes(item.id)) score -= 1;
    if (watchlistIds.includes(item.id)) score -= 0.5;
    if (favoriteIds.includes(item.id)) score -= 0.5;

    return score;
}

function rankRecommendations(items, preferences = {}) {
    return [...items].sort((a, b) =>
        getRecommendationScore(b, preferences) - getRecommendationScore(a, preferences) ||
        Number(String(b.poster || "").includes("image.tmdb.org")) - Number(String(a.poster || "").includes("image.tmdb.org")) ||
        Number(b.rating || 0) - Number(a.rating || 0) ||
        Number(b.year || 0) - Number(a.year || 0) ||
        a.title.localeCompare(b.title)
    );
}

const extraMoodRules = {
    adventurous: item => ["Action", "Adventure", "Animation"].includes(item.genre) || (item.genre === "Fantasy" && /quest|journey|adventure|expedition|explore|travel/.test(textOf(item))),
    romantic: item => item.genre === "Romance" || /romance|love|lovers|relationship|wedding|couple|fall for/.test(textOf(item)),
    spooky: item => item.genre === "Horror" || /ghost|haunt|haunted|demon|nightmare|supernatural|monster|vampire|witch|curse/.test(textOf(item)),
    mindbending: item => ["Sci-Fi", "Mystery"].includes(item.genre) || /time loop|time travel|dream|reality|parallel|memory|identity|simulation|consciousness|twist/.test(textOf(item)),
    nostalgic: item => Number(item.year) <= 1990
};
[...movies, ...tvShows].forEach(item => {
    Object.entries(extraMoodRules).forEach(([mood, matches]) => {
        if (matches(item) && !item.mood.includes(mood)) item.mood.push(mood);
    });
});

function createMovieCard(item, showMoodReason = true) {
    const isFavorite = favoriteIds.includes(item.id);
    const isInWatchlist = watchlistIds.includes(item.id);
    const moodReason = getMoodReason(item, selectedMood);

    return `
        <article class="movie-card">
            <button class="movie-open" type="button" data-item-id="${item.id}" aria-label="View details for ${item.title}">
            ${item.poster ? `<img class="movie-poster" src="${item.poster}" alt="Movie poster for ${item.title}" data-title="${item.title}" loading="lazy">` : `<span class="movie-poster poster-unavailable" role="img" aria-label="Movie poster unavailable for ${item.title}"><span>Poster unavailable</span><small>${item.title}</small></span>`}
            </button>
            <div class="movie-card-content">
                <div class="movie-card-topline">
                    <span class="movie-genre">${item.genre}</span>
                    ${Number.isFinite(Number(item.rating)) && Number(item.rating) > 0 ? `<span class="card-rating" aria-label="Rating ${formatRating(item.rating)} out of 10${item.ratingSource ? ` from ${item.ratingSource}` : ""}">&#9733; ${item.ratingSource ? `${item.ratingSource} ` : ""}${formatRating(item.rating)}</span>` : ""}
                </div>
                <h3><button class="movie-title-open" type="button" data-item-id="${item.id}">${item.title}</button></h3>
                <span class="movie-language">${item.language} <span aria-hidden="true">&#183;</span> ${item.region}</span>
                <p class="movie-card-description">${item.description}</p>
                ${showMoodReason ? `<p class="mood-match-reason">${moodReason}</p>` : ""}
                <span class="movie-year">${item.year}</span>
            </div>
            <button class="favorite-button ${isFavorite ? "is-favorite" : ""}" type="button" data-item-id="${item.id}" aria-pressed="${isFavorite}" aria-label="${isFavorite ? "Remove" : "Add"} ${item.title} ${isFavorite ? "from" : "to"} favorites">&#9829;</button>
            <button class="watchlist-button" type="button" data-item-id="${item.id}" aria-pressed="${isInWatchlist}">${isInWatchlist ? "Remove from Watchlist" : "+ Add to Watchlist"}</button>
        </article>
    `;
}

const CATALOG_PAGE_SIZE = 24;
let visibleMovieCount = CATALOG_PAGE_SIZE;
let movieCardParticleObserver;

function revealMovieCardsAsParticles(container) {
    const cards = [...container.querySelectorAll(".movie-card")];
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) return;

    if (!movieCardParticleObserver) {
        movieCardParticleObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle("is-particle-visible", entry.isIntersecting);
            });
        }, { threshold: 0.18 });
    }

    cards.forEach((card, index) => {
        card.classList.add("particle-card");
        card.style.setProperty("--particle-delay", `${Math.min(index * 45, 360)}ms`);
        movieCardParticleObserver.observe(card);
    });
}

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

function renderMovies(items, containerId) {
    const container = document.getElementById(containerId);
    if (items.length === 0) {
        container.innerHTML = '<p class="no-results">No movies found. Try another title or genre.</p>';
        return;
    }

    const visibleItems = items.slice(0, visibleMovieCount);
    container.innerHTML = visibleItems.map(item => createMovieCard(item)).join("");
    revealMovieCardsAsParticles(container);
    if (items.length > visibleItems.length) {
        container.insertAdjacentHTML("beforeend", `<button class="load-more-button" type="button" data-load-more>Load ${Math.min(CATALOG_PAGE_SIZE, items.length - visibleItems.length)} more (${visibleItems.length} of ${items.length})</button>`);
    }
}

function getRuntimeMinutes(item) {
    const runtimeMatch = String(item.runtime || "").match(/\d+/);
    return runtimeMatch ? Number(runtimeMatch[0]) : null;
}

function matchesRuntime(item, runtimeChoice) {
    if (runtimeChoice === "any") return true;
    const runtime = getRuntimeMinutes(item);
    if (runtime === null) return false;
    if (runtimeChoice === "short") return runtime < 100;
    if (runtimeChoice === "medium") return runtime >= 100 && runtime <= 150;
    return runtime > 150;
}

function renderFeatureCard(item, reason) {
    return `
        <div class="feature-card">
            <div class="feature-card-poster">
                ${item.poster
                    ? `<img class="movie-poster" src="${item.poster}" alt="Movie poster for ${item.title}" data-title="${item.title}" loading="lazy">`
                    : `<span class="movie-poster poster-unavailable" role="img" aria-label="Movie poster unavailable for ${item.title}"><span>Poster unavailable</span><small>${item.title}</small></span>`}
            </div>
            <div class="feature-card-copy">
                <span class="section-kicker">${item.genre}</span>
                <h3>${item.title}</h3>
                <p class="feature-card-meta">${item.year} · ${item.language}${item.runtime ? ` · ${item.runtime}` : ""}${item.rating ? ` · ★ ${formatRating(item.rating)}` : ""}</p>
                <p>${reason}</p>
                <button class="feature-link" type="button" data-item-id="${item.id}">View details</button>
            </div>
        </div>
    `;
}

function renderHeroRecommendation() {
    const result = document.getElementById("hero-recommendation");
    const candidates = filterTitles(movies).filter(item => item.mood.includes(selectedMood));

    if (!candidates.length) {
        result.innerHTML = `<p class="hero-recommendation-empty">No ${moodLabels[selectedMood] || selectedMood} picks match the current filters. <button class="hero-clear-filters" type="button" data-clear-filters>Clear filters</button></p>`;
        return;
    }

    const posterCandidates = candidates.filter(item => String(item.poster || "").includes("image.tmdb.org"));
    const rankedCandidates = rankRecommendations(posterCandidates.length ? posterCandidates : candidates, {
        mood: selectedMood,
        genre: selectedGenre,
        language: selectedLanguage
    });
    // Keep the strongest matches, but rotate among them on every fresh page load.
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
    })[0];
    const runtimeText = recommendation.runtime ? ` at ${recommendation.runtime}` : "";
    result.innerHTML = renderFeatureCard(
        recommendation,
        `A ${mood} pick${runtimeText}, selected from ${candidates.length} catalog title${candidates.length === 1 ? "" : "s"} matching your choices.`
    );
}

function getDateSeed(date = new Date()) {
    return Number(`${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}${String(date.getDate()).padStart(2, "0")}`);
}

function renderFilmOfDay() {
    const result = document.getElementById("film-of-day");
    const dateLabel = document.getElementById("daily-date");
    const today = new Date();
    const candidates = movies;
    const item = candidates[getDateSeed(today) % candidates.length];
    dateLabel.textContent = today.toLocaleDateString(undefined, { dateStyle: "long" });
    result.innerHTML = renderFeatureCard(item, "The same catalog title stays featured for everyone throughout this calendar day.");
}

let doubleFeatureOffset = 0;

function getDoubleFeaturePair() {
    const candidates = movies;
    const first = candidates[doubleFeatureOffset % candidates.length];
    const partners = candidates
        .filter(item => item.id !== first.id)
        .map(item => ({
            item,
            score: (item.language === first.language ? 4 : 0) +
                (item.genre === first.genre ? 4 : 0) +
                (Math.floor(Number(item.year) / 10) === Math.floor(Number(first.year) / 10) ? 1 : 0)
        }))
        .sort((a, b) => b.score - a.score || Number(b.item.rating || 0) - Number(a.item.rating || 0) || a.item.title.localeCompare(b.item.title));
    return [first, partners[0].item];
}

function renderDoubleFeature() {
    const result = document.getElementById("double-feature");
    const [first, second] = getDoubleFeaturePair();
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

const moodLabels = {
    cozy: "a cozy night", uplifted: "an uplifting night", thrilled: "a thrilling night",
    thoughtful: "a thoughtful mood", wonder: "a sense of wonder", weepy: "a good cry",
    adventurous: "an adventure", romantic: "a romantic night", spooky: "a spooky night",
    mindbending: "a mind-bending story", nostalgic: "a nostalgic night"
};

function getMoodReason(item, mood) {
    const moodName = mood.replace(/\b\w/g, letter => letter.toUpperCase());
    const specificMoodReasons = {
        "Forrest Gump|cozy": "Forrest's gentle outlook and the people he meets give this decades-spanning story a warm center, even as life brings real heartbreak.",
        "Monsters, Inc.|cozy": "Sulley and Mike's growing bond with Boo turns a scream-powered factory into a funny story about friendship and kindness.",
        "Roman Holiday|cozy": "A princess trades her formal schedule for one carefree day in Rome and an easygoing connection with a reporter.",
        "Toy Story|cozy": "Woody and Buzz's rivalry gives way to an adventure about friendship, play, and finding your place.",
        "Finding Nemo|cozy": "Marlin's determined search for Nemo is softened by Dory's warmth and humor, keeping this ocean adventure rooted in family.",
        "City Lights|cozy": "The Tramp's efforts to help a blind flower seller turn this silent comedy into a tender story about kindness.",
        "Shrek|cozy": "Beneath the fairy-tale jokes, Shrek and Donkey's unlikely friendship gives this adventure a warm-hearted center.",
        "The Apartment|cozy": "Baxter's choice to stand by Fran gives this city comedy a tender, human center beneath its office satire.",
        "Aladdin|cozy": "A street kid, a runaway princess, and a wish-granting genie make this a playful fairy-tale escape.",
        "Groundhog Day|cozy": "Phil's repeated day in Punxsutawney gradually becomes a warm comedy about paying attention to the people around him.",
        "Singin' in the Rain|cozy": "The backstage chaos of Hollywood's switch to talkies keeps this romance light, funny, and full of performance.",
        "Toy Story 2|cozy": "The toys' rescue mission and Woody's bond with the gang make this a playful story about friendship and belonging.",
        "Willy Wonka & the Chocolate Factory|cozy": "Charlie's visit to Wonka's wonderfully strange factory offers a colorful, imaginative escape.",
        "Ice Age|cozy": "An unlikely trio's comic journey with a lost baby turns a prehistoric setting into a warm story of found family.",
        "Pretty Woman|cozy": "Vivian's lively presence gradually unsettles Edward's guarded routine in this modern fairy-tale romance.",
        "The General|cozy": "Buster Keaton turns a train rescue during the Civil War into a nimble silent comedy built around physical gags and determination.",
        "Fantasia|cozy": "Classical music and hand-painted animation make this an imaginative, low-dialogue escape into visual storytelling.",
        "Grease|cozy": "A summer romance spills into high-school life, carried by energetic songs and an ensemble of memorable classmates.",
        "Parda Hai Parda (film)|thrilled": "A murder tied to a mysterious bag turns four friends' new-neighbor story into a crime puzzle they investigate together."
    };
    if (specificMoodReasons[`${item.title}|${mood}`]) return specificMoodReasons[`${item.title}|${mood}`];

    if (mood === "nostalgic" && Number(item.year) <= 1990) {
        return `A classic from ${item.year}, selected for a nostalgic movie night.`;
    }
    if (mood === "adventurous" && ["Action", "Adventure", "Animation"].includes(item.genre)) {
        return `Its ${item.genre.toLowerCase()} genre brings the sense of adventure you picked.`;
    }
    if (mood === "adventurous" && item.genre === "Fantasy") {
        return "Its story cues point to a journey, exploration, or quest.";
    }
    if (mood === "romantic" && (item.genre === "Romance" || /romance|love|lovers|relationship|wedding|couple|fall for/.test(textOf(item)))) {
        return item.genre === "Romance" ? "A romance pick for a night centered on matters of the heart." : "Its story details point to love or a relationship.";
    }
    if (mood === "spooky" && (item.genre === "Horror" || /ghost|haunt|haunted|demon|nightmare|supernatural|monster|vampire|witch|curse/.test(textOf(item)))) {
        return item.genre === "Horror" ? "Its horror genre fits the eerie mood you picked." : "Its story includes an eerie or supernatural cue.";
    }
    if (mood === "mindbending" && (["Sci-Fi", "Mystery"].includes(item.genre) || /time loop|time travel|dream|reality|parallel|memory|identity|simulation|consciousness|twist/.test(textOf(item)))) {
        return ["Sci-Fi", "Mystery"].includes(item.genre) ? `Its ${item.genre} genre is a natural fit for a mind-bending pick.` : "Its story includes a puzzle, twist, or reality-bending cue.";
    }
    if (mood === "uplifted" && ["Comedy", "Animation", "Adventure"].includes(item.genre)) {
        return `Its ${item.genre.toLowerCase()} genre suits a brighter, more uplifting night.`;
    }
    if (mood === "thoughtful" && ["Drama", "Documentary", "Mystery"].includes(item.genre)) {
        return `Its ${item.genre.toLowerCase()} genre leaves room for reflection.`;
    }
    if (mood === "cozy" && /warm|gentle|kind-hearted|heartwarming|friendship|family|charming|innocent|lovable|kindness|feel-good/i.test(textOf(item))) {
        return "Its story centers on warmth, kindness, or friendship, which suits a softer movie night.";
    }
    if (mood === "weepy" && ["Drama", "Romance"].includes(item.genre)) {
        return `Its ${item.genre.toLowerCase()} story is a natural fit when you want something emotional.`;
    }
    if (mood === "wonder" && ["Fantasy", "Sci-Fi", "Animation", "Adventure"].includes(item.genre)) {
        return `Its ${item.genre === "Sci-Fi" ? "science-fiction" : item.genre.toLowerCase()} world invites a sense of discovery.`;
    }
    if (mood === "thrilled" && ["Action", "Thriller", "Horror", "Crime"].includes(item.genre)) {
        return `Its ${item.genre.toLowerCase()} genre brings the tension and momentum you picked.`;
    }
    return `CineVerse's mood guide groups this ${item.genre.toLowerCase()} under ${moodName.toLowerCase()}.`;
}

const searchInput = document.getElementById("movie-search");
const genreButtons = document.querySelectorAll(".genre-button");
const languageSelect = document.getElementById("language-select");
[...new Set(allTitles.map(item => item.language))].sort().forEach(language => {
    const option = document.createElement("option");
    option.value = language;
    option.textContent = language;
    languageSelect.append(option);
});
let selectedGenre = "All";
let selectedLanguage = "All";
let selectedMood = "cozy";

function filterTitles(items) {
    const searchText = searchInput.value.trim().toLowerCase();

    return items.filter(item => {
        const matchesTitle = `${item.title} ${item.language} ${item.region}`.toLowerCase().includes(searchText);
        const matchesGenre = selectedGenre === "All" || item.genre === selectedGenre;
        const matchesLanguage = selectedLanguage === "All" || item.language === selectedLanguage;
        return matchesTitle && matchesGenre && matchesLanguage;
    });
}

function updateCatalogs(resetVisibleCount = false) {
    if (resetVisibleCount) visibleMovieCount = CATALOG_PAGE_SIZE;
    const filteredMovies = rankRecommendations(
        filterTitles(movies).filter(item => item.mood.includes(selectedMood)),
        {
            mood: selectedMood,
            genre: selectedGenre,
            language: selectedLanguage
        }
    );
    renderMovies(filteredMovies, "trending-movies");
    renderWatchlist();
    document.getElementById("catalog-count").textContent = `${filteredMovies.length} ranked suggestions match this mood and your filters.`;
    document.getElementById("mood-results-caption").textContent = `${filteredMovies.length} films selected for your ${selectedMood} mood`;
    renderHeroRecommendation();
}

function renderWatchlist() {
    const watchlistGrid = document.getElementById("watchlist-grid");
    const savedTitles = watchlistIds
        .map(id => allTitles.find(title => title.id === id))
        .filter(Boolean)
        .filter(item => {
            const searchText = searchInput.value.trim().toLowerCase();
            const matchesSearch = `${item.title} ${item.language} ${item.region}`.toLowerCase().includes(searchText);
            const matchesGenre = selectedGenre === "All" || item.genre === selectedGenre;
            const matchesLanguage = selectedLanguage === "All" || item.language === selectedLanguage;
            return matchesSearch && matchesGenre && matchesLanguage;
        });

    if (savedTitles.length === 0) {
        watchlistGrid.innerHTML = '<p class="empty-watchlist">Your watchlist is empty. Add a movie or show to save it here.</p>';
        return;
    }

    watchlistGrid.innerHTML = savedTitles.map(item => createMovieCard(item, false)).join("");
    revealMovieCardsAsParticles(watchlistGrid);
}

function saveIds(storageKey, ids) {
    try {
        localStorage.setItem(storageKey, JSON.stringify(ids));
        return true;
    } catch {
        showToast("Could not save to browser storage.");
        return false;
    }
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(showToast.timeoutId);
    showToast.timeoutId = setTimeout(() => toast.classList.remove("show"), 2400);
}

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
    showToast(wasSaved ? `Removed ${title.title} from your watchlist.` : `Added ${title.title} to your watchlist.`);
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
    showToast(wasFavorite ? `Removed ${title.title} from favorites.` : `Added ${title.title} to favorites.`);
}

searchInput.addEventListener("input", () => updateCatalogs(true));
document.getElementById("trending-movies").addEventListener("click", event => {
    if (event.target.closest("[data-load-more]")) {
        visibleMovieCount += CATALOG_PAGE_SIZE;
        updateCatalogs();
    }
});

genreButtons.forEach(button => {
    button.addEventListener("click", () => {
        selectedGenre = button.dataset.genre;

        genreButtons.forEach(genreButton => {
            const isSelected = genreButton === button;
            genreButton.classList.toggle("active", isSelected);
            genreButton.setAttribute("aria-pressed", isSelected);
        });

        updateCatalogs(true);
    });
});

languageSelect.addEventListener("change", () => {
    selectedLanguage = languageSelect.value;
    updateCatalogs(true);
});

const moodNotes = {
    cozy: "Gentle, warm stories for a softer evening.",
    uplifted: "Bright-hearted films to send you back lighter.",
    thrilled: "Tension, momentum, and stories that keep you leaning in.",
    thoughtful: "Films that leave a little room to think afterward.",
    wonder: "Worlds and ideas that make the familiar feel new.",
    weepy: "Tender, moving stories for letting the feelings out.",
    adventurous: "Big journeys, daring choices, and worlds to explore.",
    romantic: "Love stories, tender chemistry, and matters of the heart.",
    spooky: "Ghosts, monsters, and eerie nights for a little shiver.",
    mindbending: "Puzzles and strange ideas that keep your mind spinning.",
    nostalgic: "Older favorites and timeless stories to revisit."
};

document.querySelectorAll(".mood-button").forEach(button => {
    button.addEventListener("click", () => {
        selectedMood = button.dataset.mood;
        visibleMovieCount = CATALOG_PAGE_SIZE;
        document.querySelectorAll(".mood-button").forEach(moodButton => {
            const selected = moodButton === button;
            moodButton.classList.toggle("active", selected);
            moodButton.setAttribute("aria-pressed", String(selected));
        });
        document.getElementById("mood-note").textContent = moodNotes[selectedMood];
        updateCatalogs();
    });
});

updateCatalogs();

const movieModal = document.getElementById("movie-modal");
const modalContent = document.getElementById("modal-content");
const closeModalButton = movieModal.querySelector(".modal-close");

// Hand-written picks keep the details panel personal for well-known titles across the collection.
const specificWhyWatch = {
    "Forrest Gump": "Follow Forrest through decades of American history as his gentle outlook keeps shaping the lives around him—and as he holds on to the love he never quite leaves behind.",
    "Monsters, Inc.": "A company that runs on children's screams changes overnight when its top scarer meets a little girl who is more curious than afraid.",
    "Roman Holiday": "A princess escapes her official schedule for one day in Rome, where an American reporter's plan for an exclusive becomes something more human.",
    "Toy Story": "A new toy threatens Woody's place as Andy's favorite, turning a rivalry into a rescue mission and an unexpected friendship.",
    "The Great Dictator": "Charlie Chaplin uses mistaken identity and sharp satire to set a humble barber against a dictator—and gives the film a final plea for compassion.",
    "Finding Nemo": "A cautious clownfish crosses the ocean to find his son, meeting a forgetful ally and learning that protecting someone sometimes means letting them grow.",
    "Notorious": "A government agent recruits Alicia for a dangerous undercover mission; the espionage plot gets sharper as trust and attraction pull in opposite directions.",
    "Donnie Darko": "A teenager survives a bizarre near-accident, then follows visions of a giant rabbit into a puzzle about fate, time, and what is real.",
    "City Lights": "A resourceful tramp tries to help a blind flower seller, building a tender silent comedy around generosity, dignity, and one painful misunderstanding.",
    "Shrek": "An ogre sent to rescue a princess finds that the fairy-tale rules—and the first impressions people make of him—are due for a rewrite.",
    "Edward Scissorhands": "An unfinished young man with blades for hands is welcomed into a picture-perfect suburb, where his kindness clashes with the neighbors' fear of difference.",
    "The Apartment": "An office worker lends his apartment to executives chasing promotions, until the arrangement forces him to choose between career convenience and doing right by someone he loves.",
    "Aladdin": "A streetwise young man finds a magic lamp and a chance to change his life, but winning a princess's trust takes more than pretending to be a prince.",
    "Groundhog Day": "A cynical weatherman wakes to the same small-town day again and again; the clever loop becomes a story about how he chooses to treat people when nothing seems to change.",
    "Who Framed Roger Rabbit": "A hard-boiled detective investigates a murder in a world shared by humans and cartoon characters, mixing film noir clues with gleefully impossible visuals.",
    "Singin' in the Rain": "Hollywood's shift from silent pictures to sound turns a romance into a backstage comedy about performers trying to stay afloat as the industry changes around them.",
    "Toy Story 2": "When Woody is stolen by a collector, the toys mount a rescue while he discovers the tempting promise—and cost—of being remembered as a rare original.",
    "Willy Wonka & the Chocolate Factory": "Five children enter a candy-maker's impossible factory, where each strange room turns the tour into a test of character as well as imagination.",
    "Some Like It Hot": "Two musicians hide in an all-women band after witnessing a mob hit, and their disguise becomes a fast-moving comedy of close calls and mistaken assumptions.",
    "Ice Age": "A mammoth, a sloth, and a saber-toothed cat form an unlikely team to return a human baby to its family during a prehistoric migration.",
    "The Matrix": "A computer hacker learns that everyday reality is a simulation and must decide whether to accept the truth or help challenge the system controlling it.",
    "2001: A Space Odyssey": "A mysterious object links humanity's origins to a mission in deep space, where a quiet journey becomes a visual meditation on evolution and artificial intelligence.",
    "Alien": "A commercial spaceship answers a distress signal, bringing an unseen predator aboard and turning routine protocol into a claustrophobic survival story.",
    "The Thing": "An Antarctic research team cannot tell who is still human after an alien starts imitating them, making suspicion as dangerous as the creature itself.",
    "Mahanati": "Savitri's rise to fame and the private costs of that success make this biographical drama a portrait of a performer whose life extended far beyond her screen image.",
    "Agent Sai Srinivasa Athreya": "A small-town detective's investigation in Nellore starts as an unusual case and opens into a much larger mystery, giving the film a distinctive local setting and an inventive sleuth.",
    "Kshanam": "An NRI returns to help his former girlfriend find her missing daughter, then discovers that the evidence challenges his own memory of the child.",
    "Pelli Choopulu": "An arranged introduction brings together a carefree young man and an ambitious woman, who discover a shared business plan before they understand each other.",
    "Bommarillu": "A young man pushes back against his controlling father to make his own choices about work, independence, and the relationship he wants.",
    "Eega": "A murdered man returns as a housefly and wages an ingenious revenge campaign, turning a simple reincarnation premise into an unusually playful action story.",
    "3 Idiots": "Two friends retrace their college years while searching for a missing companion, using the reunion to question the pressure to follow a conventional path to success.",
    "Andhadhun": "A blind pianist becomes entangled in a crime he may have witnessed, and the film keeps shifting what you think he—and everyone around him—can see.",
    "Taare Zameen Par": "A patient art teacher recognizes what others miss in a struggling schoolboy, making the story's emotional turn depend on being understood rather than being fixed.",
    "Dangal (film)": "A former wrestler trains his daughters to compete in a sport their village does not expect them to pursue, turning a family ambition into a hard-won athletic journey.",
    "Bowling for Columbine": "Michael Moore uses the Columbine shootings as a starting point to question America's relationship with guns and fear, building a documentary from interviews, archival footage, and uncomfortable comparisons.",
    "Fight Club": "An insomniac and a soap salesman create a secret fight club that spreads beyond their control; its appeal lies in watching rebellion turn into a new kind of power and identity crisis.",
    "Daybreak Express": "Duke Ellington's music drives a short, impressionistic portrait of New York's Third Avenue elevated railway shortly before its demolition—a city landmark captured as it disappears.",
    "Evil Dead II": "A remote cabin, an ancient book, and one increasingly besieged Ash give this horror film room to swing between supernatural terror and outrageous physical comedy.",
    "The Birds": "A quiet California town is besieged by birds for reasons no one can explain, turning an ordinary coastal setting into a suspenseful fight to stay safe.",
    "It's a Wonderful Life": "When George Bailey loses hope, an angel shows him how Bedford Falls would have changed if he had never been born, reframing his ordinary acts of care as the town's greatest wealth.",
    "Dawn of the Dead": "As zombies overrun the city, a small group of survivors barricades themselves inside a shopping mall, where staying alive becomes a test of both trust and what consumer comfort can really protect.",
    "Madhumati": "A man caught in a storm finds shelter in a mansion and begins to recognize its people and places from another life, drawing him into a haunting tale of love and reincarnation.",
    "Raat (film)": "After moving into a new house, a family's daughter becomes linked to a dead cat and a series of disturbing events, bringing supernatural dread into an everyday home.",
    "Aalaap (film)": "Four college musicians enter a Maoist-controlled village and choose to challenge its violence with music, giving this drama an unusual premise about art as a form of resistance.",
    "Gangs of Wasseypur": "A dispute between two families in a coal-mining town grows into a generational crime saga, where revenge keeps reshaping the people who inherit it.",
    "Deedar (1951 film)": "A traumatized young man who has lost his sight earns a living through song while searching for the childhood sweetheart he has never forgotten.",
    "Khaleja": "When a mysterious illness strikes a remote village, its people look to a reluctant taxi driver for help, pulling an ordinary outsider into a story of fate and responsibility.",
    "Manjhi – The Mountain Man": "After losing his wife to a dangerous mountain path, Dashrath Manjhi spends decades carving a safer route through the rock with only a hammer and chisel.",
    "Gangs of Wasseypur – Part 2": "The feud between two crime families continues into a new generation, tracing how the children inherit—and reshape—the power struggle their elders began.",
    "Bhayaanak": "When people in Mangalpur die in a strange pattern, Inspector Vijay must find the link between the deaths before the next one occurs.",
    "Sutradhaarulu": "In a rural community shaped by violence, the story follows people trying to break its hold and imagine a more peaceful way to live.",
    "English Pellam East Godavari Mogudu": "Sireesha's curiosity about dating challenges the expectations of a tradition-conscious setting, giving the film its central culture clash.",
    "Shankam": "A man follows his girlfriend back to India, then finds himself responsible for escorting a volatile relative through a journey full of rivalries and close calls.",
    "Guna 369": "Guna believes problems should be solved without violence; after he is framed by someone close to him, holding to that principle becomes his hardest test.",
    "Sye Raa Narasimha Reddy": "A frame story set during the 1857 uprising introduces the earlier revolt of Telugu chieftain Uyyalawada Narasimha Reddy against British rule.",
    "Yatra": "This political drama follows Y. S. Rajasekhara Reddy's 1999–2004 padayatra and how meeting voters on the road shaped his public campaign.",
    "Falaknuma Das": "A group of young men led by Das tries to control the local meat trade, but unexpected setbacks draw them into crime and force them to face the consequences.",
    "Sita": "A self-interested businesswoman is drawn into a dangerous bargain with an MLA, turning her carefully controlled life into a contest for agency and survival.",
    "Gaddalakonda Ganesh": "A young filmmaker searching for a compelling antagonist becomes fascinated by a ruthless real-life gangster, blurring the line between observing violence and using it for art.",
    "Special": "A man who can read thoughts through touch becomes consumed by revenge, turning his unusual ability into a dangerous weapon against the people he blames.",
    "Court: State vs. A Nobody": "A determined lawyer defends a 19-year-old boy in a high-stakes case, challenging a system that appears to have judged him before the evidence is heard.",
    "Gopi Gopika Godavari": "Two strangers fall in love over the phone, but an accident leaves Gopi unable to recognize Gopika when she later saves and treats him. Their romance turns on whether they can find each other again.",
    "Rahasyam": "An aspiring director seeks out a holy man to learn about spirits for his first horror film; then the spirit Divya starts chasing him and demands a role in his movie.",
    "Magnet": "Its focus on young people making poor choices and searching for a better direction gives this Telugu drama a chance to explore how ambition can go off course.",
    "Chikati Gadilo Chithakotudu": "Two couples trapped in a haunted house face a ghost with its own agenda; the film blends horror with adult comedy, so expect a deliberately bawdy tone alongside the scares.",
    "Parda Hai Parda (film)": "Four friends become involved with a new girl in their neighborhood after her brother is killed over a bag. Their effort to uncover what happened gives this neighborhood drama a murder mystery at its center."
};

function getWhyWatchReason(item) {
    if (item.whyWatch) return item.whyWatch;
    if (specificWhyWatch[item.title]) return specificWhyWatch[item.title];

    const format = item.genre ? item.genre.toLowerCase() : "movie";
    const yearText = item.year ? ` from ${item.year}` : "";
    const languageText = item.language ? ` in ${item.language}` : "";
    const description = item.description
        ? ` Its story snapshot: ${item.description}`
        : "";

    return `A ${format} worth exploring${yearText}${languageText}.${description}`;
}

function openMovieModal(itemId) {
    const item = allTitles.find(title => title.id === Number(itemId));

    if (!item) return;

    if (!viewedIds.includes(item.id)) {
        viewedIds = [...viewedIds, item.id];
        saveIds(VIEWED_KEY, viewedIds);
    }

    const watchSearchUrl = `https://www.justwatch.com/in/search?q=${encodeURIComponent(`${item.title} ${item.year}`)}`;
    const whyWatchReason = getWhyWatchReason(item);

    modalContent.innerHTML = `
        ${item.poster ? `<img class="modal-poster" src="${item.poster}" alt="Movie poster for ${item.title}" data-title="${item.title}">` : `<div class="modal-poster poster-unavailable" role="img" aria-label="Official poster not added for ${item.title}"><span>Poster not added yet</span><small>${item.title}</small></div>`}
        <div class="modal-details">
            <span class="section-kicker">${tvShows.includes(item) ? "TV show details" : "Movie details"}</span>
            <h2 id="modal-title">${item.title}</h2>
            <div class="modal-meta">
                ${Number.isFinite(Number(item.rating)) && Number(item.rating) > 0 ? `<span class="card-rating">&#9733; ${item.ratingSource ? `${item.ratingSource} ` : ""}${formatRating(item.rating)}</span>` : `<span class="card-rating rating-unavailable">Rating not listed</span>`}
                <span>${item.year}</span>
                <span>${item.genre}</span>
                <span>${item.language}</span>
                <span>${item.region}</span>
                <span>${item.runtime || runtimes[item.id] || "Runtime not listed"}</span>
            </div>
            ${whyWatchReason ? `<section class="why-watch" aria-labelledby="why-watch-title">
                <h3 id="why-watch-title">Why watch this?</h3>
                <p>${whyWatchReason}</p>
            </section>` : ""}
            ${item.mood.includes(selectedMood) ? `<p class="why-watch-mood"><strong>Mood guide note for ${moodLabels[selectedMood] || selectedMood}:</strong> ${getMoodReason(item, selectedMood)}</p>` : ""}
            <h3 class="modal-story-label">Story snapshot</h3>
            <p class="modal-synopsis">${item.description}</p>
            <div class="where-to-watch">
                <span class="where-to-watch-label">Where to watch in India</span>
                <p>Streaming, rental, and purchase options can change. Check the current listings before you choose.</p>
                <a class="watch-options-link" href="${watchSearchUrl}" target="_blank" rel="noopener noreferrer" aria-label="Check where to watch ${item.title} in India on JustWatch">
                    Check JustWatch <span aria-hidden="true">&#8599;</span>
                </a>
            </div>
        </div>
    `;

    document.body.classList.add("modal-open");
    movieModal.showModal();
}

const movieNightLanguage = document.getElementById("night-language");
[...new Set(allTitles.map(item => item.language).filter(Boolean))].sort().forEach(language => {
    const option = document.createElement("option");
    option.value = language;
    option.textContent = language;
    movieNightLanguage.append(option);
});

document.getElementById("movie-night-form").addEventListener("submit", event => {
    event.preventDefault();
    renderMovieNightResult();
});

document.querySelectorAll(".feature-result").forEach(result => {
    result.addEventListener("click", event => {
        const detailButton = event.target.closest("[data-item-id]");
        if (detailButton) openMovieModal(detailButton.dataset.itemId);
    });
});

document.getElementById("hero-recommendation").addEventListener("click", event => {
    const detailButton = event.target.closest("[data-item-id]");
    if (detailButton) openMovieModal(detailButton.dataset.itemId);

    if (event.target.closest("[data-clear-filters]")) {
        searchInput.value = "";
        selectedGenre = "All";
        selectedLanguage = "All";
        languageSelect.value = "All";
        genreButtons.forEach(button => {
            const isSelected = button.dataset.genre === "All";
            button.classList.toggle("active", isSelected);
            button.setAttribute("aria-pressed", String(isSelected));
        });
        updateCatalogs(true);
    }
});

document.getElementById("new-double-feature").addEventListener("click", () => {
    doubleFeatureOffset += 1;
    renderDoubleFeature();
});

renderFilmOfDay();
renderDoubleFeature();

let lastSurprisePickId = null;
document.getElementById("surprise-pick").addEventListener("click", () => {
    const matchingFilms = filterTitles(movies).filter(item => item.mood.includes(selectedMood));
    if (!matchingFilms.length) {
        showToast("No films match those filters. Try another mood or clear a filter.");
        return;
    }

    const rankedFilms = rankRecommendations(matchingFilms, {
        mood: selectedMood,
        genre: selectedGenre,
        language: selectedLanguage
    });
    const freshPicks = rankedFilms.filter(item => item.id !== lastSurprisePickId);
    const options = (freshPicks.length ? freshPicks : rankedFilms).slice(0, 8);
    const pickedFilm = options[Math.floor(Math.random() * options.length)];
    lastSurprisePickId = pickedFilm.id;
    openMovieModal(pickedFilm.id);
});

document.querySelectorAll(".movie-grid").forEach(grid => {
    grid.addEventListener("click", event => {
        const favoriteButton = event.target.closest(".favorite-button");
        const watchlistButton = event.target.closest(".watchlist-button");
        const openButton = event.target.closest(".movie-open, .movie-title-open");

        if (favoriteButton) {
            toggleFavorite(favoriteButton.dataset.itemId);
        } else if (watchlistButton) {
            toggleWatchlist(watchlistButton.dataset.itemId);
        } else if (openButton) {
            openMovieModal(openButton.dataset.itemId);
        }
    });
});

closeModalButton.addEventListener("click", () => movieModal.close());
movieModal.addEventListener("close", () => document.body.classList.remove("modal-open"));

movieModal.addEventListener("click", event => {
    if (event.target === movieModal) movieModal.close();
});

const themeToggle = document.getElementById("theme-toggle");
const menuToggle = document.getElementById("menu-toggle");
const siteNavigation = document.getElementById("site-navigation");

// A decorative film-reel constellation for the opening section. It is deliberately
// independent of catalog rendering so it cannot affect search, cards, or controls.
const renderCinemaParticles = (() => {
    const canvas = document.getElementById("cinema-particles");
    const context = canvas?.getContext("2d");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compactLayout = window.matchMedia("(max-width: 760px)");
    let width = 0;
    let height = 0;
    let particles = [];

    if (!canvas || !context) return () => {};

    const randomPointInReel = () => {
        const holeCenters = [
            [-0.19, -0.19], [0.19, -0.19], [-0.19, 0.19], [0.19, 0.19], [0, 0]
        ];
        let x;
        let y;

        do {
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.sqrt(Math.random()) * 0.52;
            x = Math.cos(angle) * radius;
            y = Math.sin(angle) * radius;
        } while (holeCenters.some(([holeX, holeY]) => Math.hypot(x - holeX, y - holeY) < 0.075));

        return { x, y };
    };

    function resizeParticles() {
        const nextWidth = Math.round(canvas.clientWidth);
        const nextHeight = Math.round(canvas.clientHeight);
        if (!nextWidth || !nextHeight || (nextWidth === width && nextHeight === height)) return;

        width = nextWidth;
        height = nextHeight;
        const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
        canvas.width = Math.round(width * pixelRatio);
        canvas.height = Math.round(height * pixelRatio);
        context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

        const count = Math.max(240, Math.min(520, Math.round((width * height) / 2100)));
        particles = Array.from({ length: count }, () => ({
            ...randomPointInReel(),
            angle: Math.random() * Math.PI * 2,
            drift: 0.45 + Math.random(),
            size: 0.65 + Math.random() * 1.35,
            alpha: 0.25 + Math.random() * 0.65
        }));
    }

    return () => {
        if (compactLayout.matches) return;
        resizeParticles();
        if (!particles.length) return;

        const bounds = canvas.getBoundingClientRect();
        const scrollProgress = reducedMotion.matches
            ? 0
            : Math.min(1, Math.max(0, (-bounds.top + height * 0.12) / Math.max(height * 0.88, 1)));
        const spread = scrollProgress * scrollProgress * Math.min(230, width * 0.22);
        const scale = Math.min(width, height) * 0.74;
        const centerX = width * 0.51;
        const centerY = height * 0.5;
        const isLightTheme = document.body.classList.contains("light-theme");

        context.clearRect(0, 0, width, height);
        context.fillStyle = isLightTheme ? "#342e26" : "#f3c78d";

        particles.forEach(particle => {
            const x = centerX + particle.x * scale + Math.cos(particle.angle) * spread * particle.drift;
            const y = centerY + particle.y * scale + Math.sin(particle.angle) * spread * particle.drift * 0.65;
            context.globalAlpha = particle.alpha * (1 - scrollProgress * 0.55);
            context.fillRect(x, y, particle.size, particle.size);
        });

        context.globalAlpha = 1;
    };
})();

menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.textContent = isOpen ? "Menu" : "Close";
    siteNavigation.classList.toggle("is-open", !isOpen);
});

siteNavigation.addEventListener("click", event => {
    if (!event.target.closest("a")) return;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "Menu";
    siteNavigation.classList.remove("is-open");
});

const backToTopButton = document.getElementById("back-to-top");
const readingProgressFill = document.getElementById("reading-progress-fill");
const quoteElement = document.getElementById("movie-quote");
const quoteButton = document.getElementById("next-quote");
const originalMovieQuotes = [
    "A story can turn a quiet room into a thousand places.",
    "The screen goes dark; the feeling stays lit.",
    "Somewhere, someone made a film for the exact mood you couldn't name.",
    "A subtitle is a small bridge between two enormous worlds.",
    "Cinema lets strangers borrow each other's memories.",
    "One evening, one film, a different version of you.",
    "The best journeys sometimes need no luggage.",
    "A close-up can say what a lifetime could not.",
    "Every language has its own rhythm for wonder.",
    "A good ending knows when to leave the door open.",
    "The world is wider than any one shelf of stories.",
    "A film is a feeling with a beginning and an end.",
    "Some stories arrive like rain after a long summer.",
    "A stranger's story can feel strangely like home.",
    "The right film finds you at the right volume.",
    "A frame is a window that learned to dream.",
    "There are many ways to be brave; cinema keeps count.",
    "Tonight's plan: follow a story somewhere unexpected.",
    "The quietest scene can make the loudest echo.",
    "A small screen can hold a very large sky.",
    "Stories cross borders more easily than maps do.",
    "Some films leave a chair pulled out in your mind.",
    "Wonder often begins with: what if?",
    "A comedy can be a lantern on a difficult day.",
    "A mystery gives curiosity somewhere to walk.",
    "The camera notices what hurry walks past.",
    "A film can lend you courage for two hours.",
    "Every culture keeps a different kind of magic on film.",
    "Let the story choose the pace of the evening.",
    "A good movie night has room for surprise.",
    "Sometimes a new favorite arrives speaking another language.",
    "The credits roll; the conversation begins.",
    "A story doesn't need your passport to move you.",
    "Some moments are too big for ordinary daylight.",
    "Cinema is a map drawn with faces and music.",
    "Let curiosity pick tonight's destination.",
    "A quiet film can make the whole world pause.",
    "Every ending leaves a little weather behind.",
    "Choose a mood. Meet a world.",
    "A story can make distance feel like an invitation.",
    "The best plot twist is finding a perspective you needed.",
    "A film can make time feel hand-made.",
    "No two people leave the same screening carrying the same thing.",
    "Somewhere between silence and music, a film speaks.",
    "The world gets larger when we listen to more stories.",
    "Let tonight be guided by feeling, not habit.",
    "A favorite film is a place you can revisit without moving.",
    "Every frame is a choice about what matters.",
    "Stories help us practice seeing each other.",
    "A beautiful scene can outlast a busy week.",
    "Take the road marked 'I haven't seen that before.'",
    "Some films make a new language feel familiar.",
    "The heart has its own genre filter.",
    "Let a different country set the scene tonight.",
    "A movie can hold a question without rushing an answer.",
    "A shared laugh can travel across any subtitle.",
    "There is a whole world in the films we haven't met yet.",
    "A story is a door that opens inward and outward.",
    "A little suspense makes the sofa feel like an expedition.",
    "A tender scene can be a kind of shelter.",
    "The next story might change the shape of your evening.",
    "Sometimes wonder wears ordinary clothes.",
    "A film gives imagination somewhere to land.",
    "Let the credits be the start of your next thought.",
    "A scene remembered is a scene still happening.",
    "Good stories make room for complicated feelings.",
    "A film can introduce you to a place through its people.",
    "Tonight, follow the feeling that has no name yet.",
    "A quiet room and a brave story are enough.",
    "Every camera has a point of view; every viewer adds another.",
    "A little wonder is a perfectly good evening plan.",
    "Some stories make the unfamiliar feel close.",
    "The right movie can make a long day loosen its grip.",
    "Let the next frame surprise you.",
    "A film doesn't end when the screen does.",
    "There are more ways to tell a story than stars in the sky.",
    "A new perspective is a souvenir that fits in your pocket.",
    "Sometimes the best recommendation is a feeling.",
    "The world speaks in many genres.",
    "A story can make stillness feel like movement.",
    "One honest performance can rearrange a room.",
    "The pause after a film is part of the film.",
    "Somewhere between laugh and tear is a whole kind of truth.",
    "A film can be both an escape and a return.",
    "Each culture dreams in its own colors.",
    "The smaller the detail, the bigger the world it can reveal.",
    "Let tonight's movie be a gentle change of scenery.",
    "Curiosity is the best seat in the house.",
    "A good story remembers that people are never just one thing.",
    "Every language has a way to say 'stay a little longer.'",
    "A film can make an ordinary street feel mythic.",
    "A story shared is a distance shortened.",
    "Let the mood lead; let the movie surprise.",
    "The screen is a meeting place for people who may never meet.",
    "A film can leave you with better questions.",
    "Some stories feel like finding a light on in a faraway house.",
    "There is no wrong mood for a story to meet.",
    "The right scene can give silence a soundtrack.",
    "Tonight's destination is one click and one feeling away.",
    "A movie is a tiny universe with a door for you.",
    "Stories are how places introduce themselves.",
    "A small act of kindness can anchor an entire film.",
    "The best scenes don't ask to be hurried.",
    "Every viewer brings a different sky to the cinema.",
    "A film can hold joy and ache in the same frame.",
    "Somewhere beyond familiar favorites, a story is waiting.",
    "The world is full of stories wearing different subtitles.",
    "A new favorite begins as a stranger.",
    "A film can make the distant feel touchable.",
    "Let the evening unfold one scene at a time.",
    "An unexpected story is a good reason to stay in.",
    "The camera follows; the heart decides where to go.",
    "A quiet story can travel a very long way.",
    "Every ending is an invitation to notice what remains.",
    "Cinema is a little time borrowed from somewhere else.",
    "The best discovery is the one you didn't search for.",
    "A story can be a mirror, a window, or a way through.",
    "Follow the feeling; find the film.",
    "A movie night can begin with one small question: how do I feel?",
    "The world keeps telling stories; we keep finding ourselves in them.",
    "A faraway story can sit right beside you.",
    "Every new voice makes the chorus of cinema richer.",
    "The most memorable journey might last 110 minutes.",
    "Let a film borrow your attention and return a new idea.",
    "A story can soften a hard day without pretending it wasn't hard.",
    "The best scene may be the one you carry home.",
    "Some films make the room feel warmer without changing the thermostat.",
    "A different language can reveal a familiar feeling.",
    "A little tension makes the lights feel cinematic.",
    "A story is a heartbeat arranged into scenes.",
    "The next film doesn't have to be like the last one.",
    "Let wonder take the remote for a while.",
    "A true laugh can make strangers feel like a team.",
    "A thoughtful film leaves space for your own ending.",
    "Every culture brings its own light to the screen.",
    "Some stories don't explain; they accompany.",
    "Find the film that fits the weather inside you.",
    "A frame can carry more than its borders suggest.",
    "The quiet after a great film is a kind of applause.",
    "A story can travel without losing its accent.",
    "Tonight, let the familiar world wait outside the frame.",
    "A new perspective is always worth the subtitles.",
    "The right film can make staying in feel like going far.",
    "A great scene is a memory still being made.",
    "Some stories shine brightest when shared.",
    "A film can ask you to feel before you understand.",
    "Choose a feeling; discover a place.",
    "Every screen is a small invitation to pay attention.",
    "The best stories know that people are bigger than labels.",
    "An evening can change direction at the opening shot.",
    "The world's cinema is too wide for one algorithm to define.",
    "A movie can turn 'somewhere else' into 'I remember.'",
    "A story can be a soft landing or a thrilling launch.",
    "Stay for the feeling after the final image.",
    "The next great story might arrive from a country you can't point to on a map.",
    "A film is a conversation across time, place, and mood.",
    "Let tonight's story be a little outside your usual orbit.",
    "A screen can make room for more than one truth.",
    "The best recommendations know how you're feeling, not just what you watched.",
    "Cinema turns looking into seeing."
];
const movieQuotes = [...originalMovieQuotes];
let currentQuote = 0;
let lastQuote = -1;
quoteElement.textContent = movieQuotes[currentQuote];

quoteButton.addEventListener("click", () => {
    let nextQuote = currentQuote;
    while (movieQuotes.length > 1 && nextQuote === lastQuote) {
        nextQuote = Math.floor(Math.random() * movieQuotes.length);
    }
    lastQuote = currentQuote;
    currentQuote = nextQuote;
    quoteElement.textContent = movieQuotes[currentQuote];
});

function setTheme(theme) {
    const isLight = theme === "light";
    document.body.classList.toggle("light-theme", isLight);
    themeToggle.setAttribute("aria-pressed", String(isLight));
    themeToggle.textContent = isLight ? "Dark theme" : "Light theme";
    renderCinemaParticles();
}

try {
    setTheme(localStorage.getItem(THEME_KEY) === "light" ? "light" : "dark");
} catch {
    setTheme("dark");
}

themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("light-theme") ? "dark" : "light";
    setTheme(nextTheme);
    try {
        localStorage.setItem(THEME_KEY, nextTheme);
    } catch {
        showToast("Theme will reset when you close this page.");
    }
});

function updateBackToTopVisibility() {
    backToTopButton.hidden = window.scrollY < 480;
}

let progressUpdateQueued = false;
function updateScrollProgress() {
    if (progressUpdateQueued) return;
    progressUpdateQueued = true;
    window.requestAnimationFrame(() => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
        readingProgressFill.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
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
updateBackToTopVisibility();
updateScrollProgress();
renderCinemaParticles();

const siteLoader = document.getElementById("site-loader");
if (siteLoader) {
    const loaderDuration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 250 : 900;
    window.setTimeout(() => {
        siteLoader.classList.add("is-hidden");
        window.setTimeout(() => siteLoader.remove(), 450);
    }, loaderDuration);
}

backToTopButton.addEventListener("click", () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
});
