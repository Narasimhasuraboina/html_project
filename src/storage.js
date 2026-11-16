export const WATCHLIST_KEY = "cineVerseWatchlist";
export const FAVORITES_KEY = "cineVerseFavorites";
export const VIEWED_KEY = "cineVerseViewed";
export const THEME_KEY = "cineVerseTheme";

export function loadSavedIds(storageKey) {
    try {
        const savedIds = JSON.parse(localStorage.getItem(storageKey) || "[]");
        return Array.isArray(savedIds) ? savedIds.map(Number).filter(Number.isFinite) : [];
    } catch {
        return [];
    }
}

export function saveIds(storageKey, ids) {
    try {
        localStorage.setItem(storageKey, JSON.stringify(ids));
        return true;
    } catch {
        return false;
    }
}

