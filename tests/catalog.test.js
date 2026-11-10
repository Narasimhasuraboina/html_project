import assert from "node:assert/strict";
import test from "node:test";
import { movies, tvShows } from "../data/movies.js";

test("the canonical movie catalog has 450 unique records", () => {
    assert.equal(movies.length, 450);
    assert.equal(new Set(movies.map(movie => movie.id)).size, movies.length);
});

test("every movie has the fields needed by the catalog UI", () => {
    for (const movie of movies) {
        assert.ok(movie.title);
        assert.ok(Number.isInteger(movie.year));
        assert.ok(movie.genre);
        assert.ok(movie.language);
        assert.ok(movie.region);
        assert.ok(movie.description);
        assert.ok(movie.id !== undefined);
    }
});

test("the supporting TV catalog has unique IDs", () => {
    assert.ok(tvShows.length > 0);
    assert.equal(new Set(tvShows.map(show => show.id)).size, tvShows.length);
});
