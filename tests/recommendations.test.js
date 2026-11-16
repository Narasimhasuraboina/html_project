import assert from "node:assert/strict";
import test from "node:test";
import {
    matchesRuntime,
    matchesEra,
    getRecommendationScore,
    rankRecommendations,
    getDateSeed,
    getDoubleFeaturePair,
    getMoodReason
} from "../src/recommendations.js";
import { movies } from "../data/movies.js";

test("matchesRuntime correctly categorizes runtimes", () => {
    const shortMovie = { runtime: "88 min" };
    const mediumMovie = { runtime: "125 min" };
    const longMovie = { runtime: "175 min" };

    assert.equal(matchesRuntime(shortMovie, "any"), true);
    assert.equal(matchesRuntime(shortMovie, "short"), true);
    assert.equal(matchesRuntime(shortMovie, "medium"), false);
    assert.equal(matchesRuntime(shortMovie, "long"), false);

    assert.equal(matchesRuntime(mediumMovie, "short"), false);
    assert.equal(matchesRuntime(mediumMovie, "medium"), true);
    assert.equal(matchesRuntime(mediumMovie, "long"), false);

    assert.equal(matchesRuntime(longMovie, "short"), false);
    assert.equal(matchesRuntime(longMovie, "medium"), false);
    assert.equal(matchesRuntime(longMovie, "long"), true);
});

test("matchesEra correctly filters release decades", () => {
    const classic = { year: 1972 };
    const nineties = { year: 1994 };
    const modern = { year: 2023 };

    assert.equal(matchesEra(classic, "classics"), true);
    assert.equal(matchesEra(classic, "2020s"), false);
    assert.equal(matchesEra(nineties, "90s"), true);
    assert.equal(matchesEra(nineties, "classics"), false);
    assert.equal(matchesEra(modern, "2020s"), true);
    assert.equal(matchesEra(modern, "all"), true);
});

test("getRecommendationScore rewards matches and penalizes viewed items", () => {
    const movie = {
        id: 9999,
        genre: "Drama",
        language: "Telugu",
        mood: ["thoughtful"],
        rating: 8.5,
        year: 2021,
        runtime: "135 min"
    };

    const baseScore = getRecommendationScore(movie, {
        mood: "thoughtful",
        genre: "Drama",
        language: "Telugu"
    }, { viewedIds: [] });

    const viewedScore = getRecommendationScore(movie, {
        mood: "thoughtful",
        genre: "Drama",
        language: "Telugu"
    }, { viewedIds: [9999] });

    assert.ok(baseScore > viewedScore, "Viewed movies should have a lower recommendation score");
});

test("rankRecommendations orders by score descending", () => {
    const a = { id: 1, title: "Alpha", mood: ["cozy"], rating: 7.0, year: 2020 };
    const b = { id: 2, title: "Beta", mood: ["thrilled"], rating: 7.0, year: 2020 };

    const ranked = rankRecommendations([a, b], { mood: "thrilled" });
    assert.equal(ranked[0].id, 2);
    assert.equal(ranked[1].id, 1);
});

test("getDateSeed formats date as numeric YYYYMMDD", () => {
    const testDate = new Date(2026, 6, 24); // July 24, 2026
    assert.equal(getDateSeed(testDate), 20260724);
});

test("getDoubleFeaturePair pairs two distinct items", () => {
    const [first, second] = getDoubleFeaturePair(movies, 0);
    assert.ok(first, "First title should exist");
    assert.ok(second, "Second title should exist");
    assert.notEqual(first.id, second.id, "Paired titles must be distinct");
});

test("getMoodReason returns descriptive explanations for moods", () => {
    const drama = { title: "Test Film", genre: "Drama", year: 2010, description: "A touching life journey" };
    const reason = getMoodReason(drama, "thoughtful");
    assert.ok(reason && reason.length > 10, "Should generate a meaningful mood reason");
});

