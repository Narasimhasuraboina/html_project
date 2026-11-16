const CACHE_NAME = "cineverse-v3";
const ASSETS_TO_CACHE = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./manifest.json",
    "./icon.svg",
    "./data/movies.js",
    "./src/storage.js",
    "./src/recommendations.js",
    "./src/particles.js",
    "./src/constants/editorial.js",
    "./src/constants/quotes.js",
    "./src/ui/cards.js",
    "./src/ui/modal.js",
    "./src/ui/toast.js"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(ASSETS_TO_CACHE);
        }).then(() => self.skipWaiting())
    );
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", event => {
    // Only handle GET requests
    if (event.request.method !== "GET") return;

    // TMDB images or external resources: fetch first, cache fallback
    if (event.request.url.includes("image.tmdb.org")) {
        event.respondWith(
            fetch(event.request).catch(() => caches.match(event.request))
        );
        return;
    }

    // App shell: cache first with network fallback
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            if (cachedResponse) {
                // Fetch update in background (stale-while-revalidate)
                fetch(event.request).then(networkResponse => {
                    if (networkResponse && networkResponse.status === 200) {
                        caches.open(CACHE_NAME).then(cache => cache.put(event.request, networkResponse));
                    }
                }).catch(() => {});
                return cachedResponse;
            }
            return fetch(event.request);
        })
    );
});

