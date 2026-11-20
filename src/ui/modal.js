import { formatRating, getWhyWatchReason, getMoodReason } from "../recommendations.js";
import { showToast } from "./toast.js";

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

export function openMovieModal(item, context = {}) {
    const movieModal = document.getElementById("movie-modal");
    const modalContent = document.getElementById("modal-content");
    if (!movieModal || !modalContent || !item) return;

    const {
        selectedMood = "cozy",
        moodLabels = {},
        runtimes = {},
        tvShows = [],
        isWatched = false,
        onToggleWatched = null
    } = context;

    const title = escapeHTML(item.title);
    const id = escapeHTML(item.id);
    const year = escapeHTML(item.year ?? "");
    const genre = escapeHTML(item.genre);
    const language = escapeHTML(item.language);
    const region = escapeHTML(item.region || "International");
    const runtime = escapeHTML(item.runtime || runtimes[item.id] || "Runtime not listed");
    const rating = Number.isFinite(Number(item.rating)) && Number(item.rating) > 0
        ? escapeHTML(formatRating(item.rating))
        : "";
    const ratingSource = escapeHTML(item.ratingSource || "");
    const description = escapeHTML(item.description || "");
    const poster = safeImageUrl(item.poster);
    const watchSearchUrl = `https://www.justwatch.com/in/search?q=${encodeURIComponent(`${item.title} ${item.year}`)}`;
    const trailerSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(`${item.title} ${item.year} official trailer`)}`;
    const whyWatchReason = escapeHTML(getWhyWatchReason(item));
    const isTv = Array.isArray(tvShows) && tvShows.some(show => show.id === item.id);
    const moodLabel = escapeHTML(moodLabels[selectedMood] || selectedMood);
    const moodReason = escapeHTML(getMoodReason(item, selectedMood));

    modalContent.innerHTML = `
        ${poster ? `<img class="modal-poster" src="${poster}" alt="Movie poster for ${title}" data-title="${title}">` : `<div class="modal-poster poster-unavailable" role="img" aria-label="Official poster not added for ${title}"><span>Poster not added yet</span><small>${title}</small></div>`}
        <div class="modal-details">
            <span class="section-kicker">${isTv ? "TV show details" : "Movie details"}</span>
            <h2 id="modal-title">${title}</h2>
            <div class="modal-meta">
                ${rating ? `<span class="card-rating">★ ${ratingSource ? `${ratingSource} ` : ""}${rating}</span>` : `<span class="card-rating rating-unavailable">Rating not listed</span>`}
                <span>${year}</span>
                <span>${genre}</span>
                <span>${language}</span>
                <span>${region}</span>
                <span>${runtime}</span>
            </div>
            ${whyWatchReason ? `<section class="why-watch" aria-labelledby="why-watch-title">
                <h3 id="why-watch-title">Why watch this?</h3>
                <p>${whyWatchReason}</p>
            </section>` : ""}
            ${Array.isArray(item.mood) && item.mood.includes(selectedMood) ? `<p class="why-watch-mood"><strong>Mood guide note for ${moodLabel}:</strong> ${moodReason}</p>` : ""}
            <h3 class="modal-story-label">Story snapshot</h3>
            <p class="modal-synopsis">${description}</p>

            <div class="modal-actions-row">
                <a class="modal-action-btn trailer-btn" href="${trailerSearchUrl}" target="_blank" rel="noopener noreferrer" aria-label="Search trailer for ${title} on YouTube">
                    ▶ Watch Trailer
                </a>
                <button class="modal-action-btn share-btn" id="modal-share-btn" type="button" data-share-id="${id}">
                    🔗 Share Film
                </button>
                <button class="modal-action-btn watched-btn ${isWatched ? "is-watched" : ""}" id="modal-watched-btn" type="button" data-modal-seen="${id}">
                    ${isWatched ? "✓ Marked as Watched" : "Seen this movie?"}
                </button>
            </div>

            <div class="where-to-watch">
                <span class="where-to-watch-label">Where to watch in India</span>
                <p>Streaming, rental, and purchase options can change. Check the current listings before you choose.</p>
                <a class="watch-options-link" href="${watchSearchUrl}" target="_blank" rel="noopener noreferrer" aria-label="Check where to watch ${title} in India on JustWatch">
                    Check JustWatch <span aria-hidden="true">&#8599;</span>
                </a>
            </div>
        </div>
    `;

    const shareBtn = modalContent.querySelector("#modal-share-btn");
    if (shareBtn) {
        shareBtn.addEventListener("click", () => {
            const url = new URL(window.location.href);
            url.searchParams.set("movie", item.id);
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(url.toString()).then(() => {
                    showToast(`Link for "${item.title}" copied to clipboard!`);
                }).catch(() => {
                    showToast(`Share URL: ${url.toString()}`);
                });
            } else {
                showToast(`Share URL: ${url.toString()}`);
            }
        });
    }

    const modalWatchedBtn = modalContent.querySelector("#modal-watched-btn");
    if (modalWatchedBtn && onToggleWatched) {
        modalWatchedBtn.addEventListener("click", () => {
            const nowWatched = onToggleWatched(item.id);
            modalWatchedBtn.classList.toggle("is-watched", nowWatched);
            modalWatchedBtn.textContent = nowWatched ? "✓ Marked as Watched" : "Seen this movie?";
        });
    }

    document.body.classList.add("modal-open");
    if (!movieModal.open && typeof movieModal.showModal === "function") {
        movieModal.showModal();
    }
}
