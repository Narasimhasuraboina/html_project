import { formatRating, getWhyWatchReason, getMoodReason } from "../recommendations.js";
import { showToast } from "./toast.js";

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

    const watchSearchUrl = `https://www.justwatch.com/in/search?q=${encodeURIComponent(`${item.title} ${item.year}`)}`;
    const trailerSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(`${item.title} ${item.year} official trailer`)}`;
    const whyWatchReason = getWhyWatchReason(item);
    const isTv = Array.isArray(tvShows) && tvShows.some(show => show.id === item.id);

    modalContent.innerHTML = `
        ${item.poster ? `<img class="modal-poster" src="${item.poster}" alt="Movie poster for ${item.title}" data-title="${item.title}">` : `<div class="modal-poster poster-unavailable" role="img" aria-label="Official poster not added for ${item.title}"><span>Poster not added yet</span><small>${item.title}</small></div>`}
        <div class="modal-details">
            <span class="section-kicker">${isTv ? "TV show details" : "Movie details"}</span>
            <h2 id="modal-title">${item.title}</h2>
            <div class="modal-meta">
                ${Number.isFinite(Number(item.rating)) && Number(item.rating) > 0 ? `<span class="card-rating">★ ${item.ratingSource ? `${item.ratingSource} ` : ""}${formatRating(item.rating)}</span>` : `<span class="card-rating rating-unavailable">Rating not listed</span>`}
                <span>${item.year}</span>
                <span>${item.genre}</span>
                <span>${item.language}</span>
                <span>${item.region || "International"}</span>
                <span>${item.runtime || runtimes[item.id] || "Runtime not listed"}</span>
            </div>
            ${whyWatchReason ? `<section class="why-watch" aria-labelledby="why-watch-title">
                <h3 id="why-watch-title">Why watch this?</h3>
                <p>${whyWatchReason}</p>
            </section>` : ""}
            ${item.mood && item.mood.includes(selectedMood) ? `<p class="why-watch-mood"><strong>Mood guide note for ${moodLabels[selectedMood] || selectedMood}:</strong> ${getMoodReason(item, selectedMood)}</p>` : ""}
            <h3 class="modal-story-label">Story snapshot</h3>
            <p class="modal-synopsis">${item.description}</p>

            <div class="modal-actions-row">
                <a class="modal-action-btn trailer-btn" href="${trailerSearchUrl}" target="_blank" rel="noopener noreferrer" aria-label="Search trailer for ${item.title} on YouTube">
                    ▶ Watch Trailer
                </a>
                <button class="modal-action-btn share-btn" id="modal-share-btn" type="button" data-share-id="${item.id}">
                    🔗 Share Film
                </button>
                <button class="modal-action-btn watched-btn ${isWatched ? "is-watched" : ""}" id="modal-watched-btn" type="button" data-modal-seen="${item.id}">
                    ${isWatched ? "✓ Marked as Watched" : "Seen this movie?"}
                </button>
            </div>

            <div class="where-to-watch">
                <span class="where-to-watch-label">Where to watch in India</span>
                <p>Streaming, rental, and purchase options can change. Check the current listings before you choose.</p>
                <a class="watch-options-link" href="${watchSearchUrl}" target="_blank" rel="noopener noreferrer" aria-label="Check where to watch ${item.title} in India on JustWatch">
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

