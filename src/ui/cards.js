import { formatRating, getMoodReason } from "../recommendations.js";

let movieCardParticleObserver;

export function revealMovieCardsAsParticles(container) {
    if (!container) return;
    const cards = [...container.querySelectorAll(".movie-card")];
    const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || typeof window === "undefined" || !("IntersectionObserver" in window)) return;

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

export function createMovieCard(item, options = {}) {
    const {
        isFavorite = false,
        isInWatchlist = false,
        isViewed = false,
        showMoodReason = true,
        selectedMood = "cozy"
    } = options;
    const moodReason = getMoodReason(item, selectedMood);

    return `
        <article class="movie-card ${isViewed ? "is-viewed" : ""}">
            <button class="movie-open" type="button" data-item-id="${item.id}" aria-label="View details for ${item.title}">
            ${item.poster ? `<img class="movie-poster" src="${item.poster}" alt="Movie poster for ${item.title}" data-title="${item.title}" loading="lazy">` : `<span class="movie-poster poster-unavailable" role="img" aria-label="Movie poster unavailable for ${item.title}"><span>Poster unavailable</span><small>${item.title}</small></span>`}
            </button>
            <div class="movie-card-content">
                <div class="movie-card-topline">
                    <span class="movie-genre">${item.genre}</span>
                    ${Number.isFinite(Number(item.rating)) && Number(item.rating) > 0 ? `<span class="card-rating" aria-label="Rating ${formatRating(item.rating)} out of 10${item.ratingSource ? ` from ${item.ratingSource}` : ""}">★ ${item.ratingSource ? `${item.ratingSource} ` : ""}${formatRating(item.rating)}</span>` : ""}
                </div>
                <h3><button class="movie-title-open" type="button" data-item-id="${item.id}">${item.title}</button></h3>
                <span class="movie-language">${item.language} <span aria-hidden="true">·</span> ${item.region || ""}${item.runtime ? ` <span aria-hidden="true">·</span> ${item.runtime}` : ""}</span>
                <p class="movie-card-description">${item.description}</p>
                ${showMoodReason ? `<p class="mood-match-reason">${moodReason}</p>` : ""}
                <span class="movie-year">${item.year}</span>
            </div>
            <button class="favorite-button ${isFavorite ? "is-favorite" : ""}" type="button" data-item-id="${item.id}" aria-pressed="${isFavorite}" aria-label="${isFavorite ? "Remove" : "Add"} ${item.title} ${isFavorite ? "from" : "to"} favorites">♥</button>
            <div class="card-action-bar">
                <button class="watchlist-button" type="button" data-item-id="${item.id}" aria-pressed="${isInWatchlist}">${isInWatchlist ? "Remove from Watchlist" : "+ Add to Watchlist"}</button>
                <button class="seen-button ${isViewed ? "is-seen" : ""}" type="button" data-seen-id="${item.id}" aria-pressed="${isViewed}" title="${isViewed ? "Mark as unread / unwatched" : "Mark as seen / watched"}">${isViewed ? "✓ Watched" : "Seen?"}</button>
            </div>
        </article>
    `;
}

export function renderFeatureCard(item, reason) {
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

