import assert from "node:assert/strict";
import test from "node:test";
import { normalizeSavedIds } from "../src/storage.js";

test("normalizeSavedIds keeps valid numeric IDs, including zero, and removes duplicates", () => {
    assert.deepEqual(normalizeSavedIds([0, "12", 12, 7]), [0, 12, 7]);
});

test("normalizeSavedIds ignores invalid, unsafe, and negative values", () => {
    assert.deepEqual(
        normalizeSavedIds([null, true, {}, "", "  ", -1, 1.5, "not-an-id", Number.MAX_SAFE_INTEGER + 1]),
        []
    );
});

test("normalizeSavedIds safely handles non-array storage values", () => {
    assert.deepEqual(normalizeSavedIds(null), []);
    assert.deepEqual(normalizeSavedIds({ ids: [1, 2] }), []);
});
