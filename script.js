// Local sample data keeps the project simple and independent of a movie API.
const movies = [
    {
        id: 1,
        title: "Dune: Part Two",
        year: 2024,
        rating: 8.5,
        genre: "Sci-Fi",
        description: "Paul Atreides unites with Chani and the Fremen on a journey of revenge and destiny.",
        poster: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 2,
        title: "The Batman",
        year: 2022,
        rating: 7.8,
        genre: "Thriller",
        description: "A young Batman follows a trail of clues through Gotham's shadows.",
        poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 3,
        title: "Everything Everywhere All at Once",
        year: 2022,
        rating: 7.8,
        genre: "Adventure",
        description: "An unexpected journey through the multiverse brings one family together.",
        poster: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 4,
        title: "Oppenheimer",
        year: 2023,
        rating: 8.3,
        genre: "Drama",
        description: "The story of the scientist whose work changed the course of history.",
        poster: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 5,
        title: "Spider-Man: Across the Spider-Verse",
        year: 2023,
        rating: 8.6,
        genre: "Animation",
        description: "Miles Morales swings across the multiverse and meets a new team of Spider-People.",
        poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 6,
        title: "Arrival",
        year: 2016,
        rating: 7.9,
        genre: "Sci-Fi",
        description: "A linguist tries to understand the visitors who have arrived on Earth.",
        poster: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 7,
        title: "The Grand Budapest Hotel",
        year: 2014,
        rating: 8.1,
        genre: "Comedy",
        description: "A hotel concierge and his lobby boy become caught up in a lively caper.",
        poster: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 8,
        title: "Whiplash",
        year: 2014,
        rating: 8.5,
        genre: "Drama",
        description: "A determined young drummer pushes himself under a demanding instructor.",
        poster: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 9,
        title: "Mad Max: Fury Road",
        year: 2015,
        rating: 8.1,
        genre: "Action",
        description: "A high-speed escape across a vast desert becomes a fight for freedom.",
        poster: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 10,
        title: "Knives Out",
        year: 2019,
        rating: 7.9,
        genre: "Mystery",
        description: "A detective investigates a family's tangled stories after a famous writer dies.",
        poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 11,
        title: "A Quiet Place",
        year: 2018,
        rating: 7.5,
        genre: "Horror",
        description: "A family must stay silent to survive in a world where sound brings danger.",
        poster: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 12,
        title: "La La Land",
        year: 2016,
        rating: 8.0,
        genre: "Romance",
        description: "A musician and an aspiring actor pursue their dreams in Los Angeles.",
        poster: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 13,
        title: "The Prestige",
        year: 2006,
        rating: 8.5,
        genre: "Thriller",
        description: "Two rival magicians push their craft and their rivalry to extremes.",
        poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=700&q=85"
    }
];

const tvShows = [
    {
        id: 101,
        title: "Stranger Things",
        year: 2016,
        rating: 8.7,
        genre: "Sci-Fi",
        description: "Friends in a small town uncover a mystery from another world.",
        poster: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 102,
        title: "The Last of Us",
        year: 2023,
        rating: 8.7,
        genre: "Drama",
        description: "Two survivors travel across a changed America and form an unlikely bond.",
        poster: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 103,
        title: "The Bear",
        year: 2022,
        rating: 8.5,
        genre: "Comedy",
        description: "A talented chef returns home to help run his family's sandwich shop.",
        poster: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 104,
        title: "Wednesday",
        year: 2022,
        rating: 8.0,
        genre: "Mystery",
        description: "Wednesday Addams investigates strange events at her new school.",
        poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 105,
        title: "Our Planet",
        year: 2019,
        rating: 9.3,
        genre: "Documentary",
        description: "A journey through the beauty and fragility of the natural world.",
        poster: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=700&q=85"
    }
];

const runtimes = {
    0: "169 min",
    1: "166 min",
    2: "176 min",
    3: "139 min",
    4: "180 min",
    5: "140 min",
    6: "116 min",
    7: "99 min",
    8: "106 min",
    9: "120 min",
    10: "130 min",
    11: "90 min",
    12: "128 min",
    13: "130 min",
    101: "Approx. 50 min per episode",
    102: "Approx. 50 min per episode",
    103: "Approx. 30 min per episode",
    104: "Approx. 45 min per episode",
    105: "Approx. 50 min per episode"
};

const featuredTitle = {
    id: 0,
    title: "Interstellar",
    year: 2014,
    rating: 8.7,
    genre: "Sci-Fi",
    description: "A team of explorers travels beyond our galaxy in search of a future for humanity.",
    poster: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=700&q=85"
};

const allTitles = [featuredTitle, ...movies, ...tvShows];
const WATCHLIST_KEY = "cineVerseWatchlist";
const FAVORITES_KEY = "cineVerseFavorites";

function loadSavedIds(storageKey) {
    try {
        const savedIds = JSON.parse(localStorage.getItem(storageKey) || "[]");
        return Array.isArray(savedIds) ? savedIds.map(Number).filter(Number.isFinite) : [];
    } catch (error) {
        return [];
    }
}

let watchlistIds = loadSavedIds(WATCHLIST_KEY);
let favoriteIds = loadSavedIds(FAVORITES_KEY);

function createMovieCard(item) {
    const isFavorite = favoriteIds.includes(item.id);
    const isInWatchlist = watchlistIds.includes(item.id);

    return `
        <article class="movie-card">
            <button class="movie-open" type="button" data-item-id="${item.id}" aria-label="View details for ${item.title}">
            <img class="movie-poster" src="${item.poster}" alt="${item.title} poster" loading="lazy">
            <div class="movie-card-content">
                <div class="movie-card-topline">
                    <span class="movie-genre">${item.genre}</span>
                    <span class="card-rating" aria-label="Rating ${item.rating} out of 10">★ ${item.rating}</span>
                </div>
                <h3>${item.title}</h3>
                <p class="movie-card-description">${item.description}</p>
                <span class="movie-year">${item.year}</span>
            </div>
            </button>
            <button class="favorite-button ${isFavorite ? "is-favorite" : ""}" type="button" data-item-id="${item.id}" aria-pressed="${isFavorite}" aria-label="${isFavorite ? "Remove" : "Add"} ${item.title} ${isFavorite ? "from" : "to"} favorites">♥</button>
            <button class="watchlist-button" type="button" data-item-id="${item.id}" aria-pressed="${isInWatchlist}">${isInWatchlist ? "Remove from Watchlist" : "+ Add to Watchlist"}</button>
        </article>
    `;
}

function renderMovies(items, containerId) {
    const container = document.getElementById(containerId);
    if (items.length === 0) {
        container.innerHTML = '<p class="no-results">No movies found. Try another title or genre.</p>';
        return;
    }

    container.innerHTML = items.map(createMovieCard).join("");
}

const searchInput = document.getElementById("movie-search");
const genreButtons = document.querySelectorAll(".genre-button");
let selectedGenre = "All";

function filterTitles(items) {
    const searchText = searchInput.value.trim().toLowerCase();

    return items.filter(item => {
        const matchesTitle = item.title.toLowerCase().includes(searchText);
        const matchesGenre = selectedGenre === "All" || item.genre === selectedGenre;
        return matchesTitle && matchesGenre;
    });
}

function updateCatalogs() {
    renderMovies(filterTitles(movies.slice(0, 6)), "trending-movies");
    renderMovies(filterTitles(movies.slice(6)), "popular-movies");
    renderMovies(filterTitles(tvShows), "popular-shows");
    renderWatchlist();
    updateFeaturedWatchlistButton();
}

function renderWatchlist() {
    const watchlistGrid = document.getElementById("watchlist-grid");
    const savedTitles = watchlistIds
        .map(id => allTitles.find(title => title.id === id))
        .filter(Boolean);

    if (savedTitles.length === 0) {
        watchlistGrid.innerHTML = '<p class="empty-watchlist">Your watchlist is empty. Add a movie or show to save it here.</p>';
        return;
    }

    watchlistGrid.innerHTML = savedTitles.map(createMovieCard).join("");
}

function saveIds(storageKey, ids) {
    try {
        localStorage.setItem(storageKey, JSON.stringify(ids));
        return true;
    } catch (error) {
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

function updateFeaturedWatchlistButton() {
    const button = document.getElementById("featured-watchlist");
    const isSaved = watchlistIds.includes(featuredTitle.id);
    button.setAttribute("aria-pressed", isSaved);
    button.innerHTML = `<span aria-hidden="true">${isSaved ? "✓" : "+"}</span> ${isSaved ? "In Watchlist" : "Add to Watchlist"}`;
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

searchInput.addEventListener("input", updateCatalogs);

genreButtons.forEach(button => {
    button.addEventListener("click", () => {
        selectedGenre = button.dataset.genre;

        genreButtons.forEach(genreButton => {
            const isSelected = genreButton === button;
            genreButton.classList.toggle("active", isSelected);
            genreButton.setAttribute("aria-pressed", isSelected);
        });

        updateCatalogs();
    });
});

updateCatalogs();

const movieModal = document.getElementById("movie-modal");
const modalContent = document.getElementById("modal-content");
const closeModalButton = movieModal.querySelector(".modal-close");

function openMovieModal(itemId) {
    const item = allTitles.find(title => title.id === Number(itemId));

    if (!item) return;

    modalContent.innerHTML = `
        <img class="modal-poster" src="${item.poster}" alt="${item.title} poster">
        <div class="modal-details">
            <span class="section-kicker">${item.id > 100 ? "TV show details" : "Movie details"}</span>
            <h2 id="modal-title">${item.title}</h2>
            <div class="modal-meta">
                <span class="card-rating">★ ${item.rating}</span>
                <span>${item.year}</span>
                <span>${item.genre}</span>
                <span>${runtimes[item.id]}</span>
            </div>
            <p>${item.description}</p>
        </div>
    `;

    document.body.classList.add("modal-open");
    movieModal.showModal();
}

document.querySelectorAll(".movie-grid").forEach(grid => {
    grid.addEventListener("click", event => {
        const favoriteButton = event.target.closest(".favorite-button");
        const watchlistButton = event.target.closest(".watchlist-button");
        const openButton = event.target.closest(".movie-open");

        if (favoriteButton) {
            toggleFavorite(favoriteButton.dataset.itemId);
        } else if (watchlistButton) {
            toggleWatchlist(watchlistButton.dataset.itemId);
        } else if (openButton) {
            openMovieModal(openButton.dataset.itemId);
        }
    });
});

document.getElementById("featured-watchlist").addEventListener("click", event => {
    toggleWatchlist(event.currentTarget.dataset.itemId);
});

closeModalButton.addEventListener("click", () => movieModal.close());
movieModal.addEventListener("close", () => document.body.classList.remove("modal-open"));

movieModal.addEventListener("click", event => {
    if (event.target === movieModal) movieModal.close();
});
