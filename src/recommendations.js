import { specificWhyWatch, specificMoodReasons } from "./constants/editorial.js";

export const textOf = item => `${item.title || ""} ${item.description || ""}`.toLowerCase();
export const formatRating = rating => Number(rating).toFixed(1);

export function getRatingQualityScore(item) {
    const rating = Number(item.rating);
    if (!Number.isFinite(rating) || rating <= 0) return 0;
    return Math.min(1, Math.max(0, (rating - 7) / 2));
}

export function getRuntimeMinutes(item) {
    const runtimeMatch = String(item.runtime || "").match(/\d+/);
    return runtimeMatch ? Number(runtimeMatch[0]) : null;
}

export function matchesRuntime(item, runtimeChoice) {
    if (!runtimeChoice || runtimeChoice === "any") return true;
    const runtime = getRuntimeMinutes(item);
    if (runtime === null) return false;
    if (runtimeChoice === "short") return runtime < 100;
    if (runtimeChoice === "medium") return runtime >= 100 && runtime <= 150;
    return runtime > 150;
}

export function matchesEra(item, eraChoice) {
    if (!eraChoice || eraChoice === "all") return true;
    const year = Number(item.year);
    if (!Number.isFinite(year)) return false;
    if (eraChoice === "2020s") return year >= 2020;
    if (eraChoice === "2010s") return year >= 2010 && year <= 2019;
    if (eraChoice === "2000s") return year >= 2000 && year <= 2009;
    if (eraChoice === "90s") return year >= 1990 && year <= 1999;
    if (eraChoice === "classics") return year < 1990;
    return true;
}

export function getRecommendationScore(item, preferences = {}, context = {}) {
    const {
        mood,
        genre = "All",
        language = "All",
        runtime = "any",
        era = "all"
    } = preferences;
    const {
        viewedIds = [],
        watchlistIds = [],
        favoriteIds = []
    } = context;

    let score = 0;

    if (mood && item.mood && item.mood.includes(mood)) score += 5;
    if (genre !== "All" && item.genre === genre) score += 3;
    if (language !== "All" && item.language === language) score += 3;
    if (runtime !== "any" && matchesRuntime(item, runtime)) score += 2;
    if (era !== "all" && matchesEra(item, era)) score += 1.5;

    score += getRatingQualityScore(item);
    if (viewedIds.includes(item.id)) score -= 1;
    if (watchlistIds.includes(item.id)) score -= 0.5;
    if (favoriteIds.includes(item.id)) score -= 0.5;

    return score;
}

export function rankRecommendations(items, preferences = {}, context = {}) {
    return [...items].sort((a, b) =>
        getRecommendationScore(b, preferences, context) - getRecommendationScore(a, preferences, context) ||
        Number(String(b.poster || "").includes("image.tmdb.org")) - Number(String(a.poster || "").includes("image.tmdb.org")) ||
        Number(b.rating || 0) - Number(a.rating || 0) ||
        Number(b.year || 0) - Number(a.year || 0) ||
        (a.title || "").localeCompare(b.title || "")
    );
}

export function getWhyWatchReason(item) {
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

export function getMoodReason(item, mood) {
    const moodName = (mood || "").replace(/\b\w/g, letter => letter.toUpperCase());
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
    return `CineVerse's mood guide groups this ${item.genre ? item.genre.toLowerCase() : "story"} under ${moodName.toLowerCase()}.`;
}

export function getDateSeed(date = new Date()) {
    return Number(`${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}${String(date.getDate()).padStart(2, "0")}`);
}

export function getDoubleFeaturePair(candidates, offset = 0) {
    if (!candidates || candidates.length === 0) return [null, null];
    const first = candidates[offset % candidates.length];
    const partners = candidates
        .filter(item => item.id !== first.id)
        .map(item => ({
            item,
            score: (item.language === first.language ? 4 : 0) +
                (item.genre === first.genre ? 4 : 0) +
                (Math.floor(Number(item.year) / 10) === Math.floor(Number(first.year) / 10) ? 1 : 0)
        }))
        .sort((a, b) => b.score - a.score || Number(b.item.rating || 0) - Number(a.item.rating || 0) || (a.item.title || "").localeCompare(b.item.title || ""));
    return [first, partners[0] ? partners[0].item : null];
}

