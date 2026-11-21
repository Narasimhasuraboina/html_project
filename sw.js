const CACHE_NAME = "cineverse-v12";
const ASSETS_TO_CACHE = [
    "./",
    "./index.html",
    "./style.css",
    "./premium-pass.css",
    "./space-background.css",
    "./assets/nebula-background.jpg",
    "./script.js",
    "./manifest.json",
    "./icon.svg",
    "./data/movies.js",
    "./src/storage.js",
    "./src/recommendations.js",
    "./src/particles.js",
    "./src/space.js",
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
                keys.filter(key => key.startsWith("cineverse-") && key !== CACHE_NAME).map(key => caches.delete(key))
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", event => {
    if (event.request.method !== "GET") return;

    // Poster images: refresh from the network, retain a cached copy for offline use.
    if (event.request.url.includes("image.tmdb.org")) {
        event.respondWith((async () => {
            try {
                const response = await fetch(event.request);
                if (response.ok || response.type === "opaque") {
                    const cache = await caches.open(CACHE_NAME);
                    await cache.put(event.request, response.clone());
                    return response;
                }

                const cachedResponse = await caches.match(event.request);
                return cachedResponse || response;
            } catch (error) {
                const cachedResponse = await caches.match(event.request);
                if (cachedResponse) return cachedResponse;
                throw error;
            }
        })());
        return;
    }

    // App shell: cache first with a background network refresh.
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            if (cachedResponse) {
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
