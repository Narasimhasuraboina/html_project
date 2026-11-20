import { formatRating, getMoodReason } from "../recommendations.js";

let movieCardParticleObserver;

function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}

function safeImageUrl(value) {
    try {
        const url = new URL(String(value ?? ""), window.location.href);
        return ["http:", "https:"].includes(url.protocol) ? escapeHTML(url.href) : "";
    } catch {
        return "";
    }
}

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
    const id = escapeHTML(item.id);
    const title = escapeHTML(item.title);
    const genre = escapeHTML(item.genre);
    const language = escapeHTML(item.language);
    const region = escapeHTML(item.region || "");
    const runtime = escapeHTML(item.runtime || "");
    const description = escapeHTML(item.description || "");
    const year = escapeHTML(item.year ?? "");
    const rating = Number.isFinite(Number(item.rating)) && Number(item.rating) > 0
        ? formatRating(item.rating)
        : "";
    const ratingSource = escapeHTML(item.ratingSource || "");
    const poster = safeImageUrl(item.poster);
    const moodReason = escapeHTML(getMoodReason(item, selectedMood));

    return `
        <article class="movie-card ${isViewed ? "is-viewed" : ""}">
            <button class="movie-open" type="button" data-item-id="${id}" aria-label="View details for ${title}">
            ${poster ? `<img class="movie-poster" src="${poster}" alt="Movie poster for ${title}" data-title="${title}" loading="lazy">` : `<span class="movie-poster poster-unavailable" role="img" aria-label="Movie poster unavailable for ${title}"><span>Poster unavailable</span><small>${title}</small></span>`}
            </button>
            <div class="movie-card-content">
                <div class="movie-card-topline">
                    <span class="movie-genre">${genre}</span>
                    ${rating ? `<span class="card-rating" aria-label="Rating ${escapeHTML(rating)} out of 10${ratingSource ? ` from ${ratingSource}` : ""}">★ ${ratingSource ? `${ratingSource} ` : ""}${escapeHTML(rating)}</span>` : ""}
                </div>
                <h3><button class="movie-title-open" type="button" data-item-id="${id}">${title}</button></h3>
                <span class="movie-language">${language} <span aria-hidden="true">·</span> ${region}${runtime ? ` <span aria-hidden="true">·</span> ${runtime}` : ""}</span>
                <p class="movie-card-description">${description}</p>
                ${showMoodReason ? `<p class="mood-match-reason">${moodReason}</p>` : ""}
                <span class="movie-year">${year}</span>
            </div>
            <button class="favorite-button ${isFavorite ? "is-favorite" : ""}" type="button" data-item-id="${id}" aria-pressed="${isFavorite}" aria-label="${isFavorite ? "Remove" : "Add"} ${title} ${isFavorite ? "from" : "to"} favorites">♥</button>
            <div class="card-action-bar">
                <button class="watchlist-button" type="button" data-item-id="${id}" aria-pressed="${isInWatchlist}">${isInWatchlist ? "Remove from Watchlist" : "+ Add to Watchlist"}</button>
                <button class="seen-button ${isViewed ? "is-seen" : ""}" type="button" data-seen-id="${id}" aria-pressed="${isViewed}" title="${isViewed ? "Mark as unread / unwatched" : "Mark as seen / watched"}">${isViewed ? "✓ Watched" : "Seen?"}</button>
            </div>
        </article>
    `;
}

export function renderFeatureCard(item, reason) {
    const title = escapeHTML(item.title);
    const genre = escapeHTML(item.genre);
    const year = escapeHTML(item.year ?? "");
    const language = escapeHTML(item.language);
    const runtime = escapeHTML(item.runtime || "");
    const poster = safeImageUrl(item.poster);
    const rating = Number(item.rating) > 0 ? escapeHTML(formatRating(item.rating)) : "";
    const safeReason = escapeHTML(reason);
    const id = escapeHTML(item.id);

    return `
        <div class="feature-card">
            <div class="feature-card-poster">
                ${poster
                    ? `<img class="movie-poster" src="${poster}" alt="Movie poster for ${title}" data-title="${title}" loading="lazy">`
                    : `<span class="movie-poster poster-unavailable" role="img" aria-label="Movie poster unavailable for ${title}"><span>Poster unavailable</span><small>${title}</small></span>`}
            </div>
            <div class="feature-card-copy">
                <span class="section-kicker">${genre}</span>
                <h3>${title}</h3>
                <p class="feature-card-meta">${year} · ${language}${runtime ? ` · ${runtime}` : ""}${rating ? ` · ★ ${rating}` : ""}</p>
                <p>${safeReason}</p>
                <button class="feature-link" type="button" data-item-id="${id}">View details</button>
            </div>
        </div>
    `;
}
