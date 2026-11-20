export const WATCHLIST_KEY = "cineVerseWatchlist";
export const FAVORITES_KEY = "cineVerseFavorites";
export const VIEWED_KEY = "cineVerseViewed";
export const THEME_KEY = "cineVerseTheme";

export function normalizeSavedIds(savedIds) {
    if (!Array.isArray(savedIds)) return [];

    const uniqueIds = new Set();
    for (const value of savedIds) {
        if (typeof value !== "number" && typeof value !== "string") continue;
        if (typeof value === "string" && value.trim() === "") continue;

        const id = Number(value);
        if (Number.isSafeInteger(id) && id >= 0) uniqueIds.add(id);
    }

    return [...uniqueIds];
}

export function loadSavedIds(storageKey) {
    try {
        const savedIds = JSON.parse(localStorage.getItem(storageKey) || "[]");
        return normalizeSavedIds(savedIds);
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

