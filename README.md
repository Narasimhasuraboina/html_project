# CineVerse

CineVerse is a static movie-discovery experience built with **HTML, CSS, and vanilla JavaScript**. It helps people find a film by mood, explore a catalog, and keep a personal watchlist without creating an account.

## Run locally

The app does not need a build step or runtime framework.

1. Open this folder in VS Code.
2. Start a local static server. For example, from this folder in PowerShell:

   ```powershell
   py -m http.server 8000
   ```

3. Open [http://localhost:8000](http://localhost:8000).

You can also use the VS Code Live Server extension. Use a local HTTP server rather than opening `index.html` directly so the service worker and offline support can work.

## Features

- Mood-based movie recommendations and a surprise pick.
- Movie-night refinement by language and runtime.
- Search across titles, genres, languages, regions, and descriptions.
- Filters for movies, TV series, genre, language, and release era.
- Paginated catalog rendering.
- Film of the Day and Double Feature suggestions.
- Movie details with synopsis, recommendation reasoning, trailer search, and India streaming lookup.
- Watchlist, favorites, and watched tracking.
- JSON watchlist export and clear-watchlist action.
- Shareable movie and filter URLs.
- Dark and light themes.
- Responsive layouts, keyboard focus styles, and reduced-motion support.
- Service-worker app-shell caching and best-effort poster caching for offline revisits.

## Project structure

- `index.html` — page structure and accessible controls.
- `style.css` — layout, themes, responsive rules, and motion.
- `script.js` — application state, filtering, rendering, and event handling.
- `data/movies.js` — movie and TV catalog data.
- `src/recommendations.js` — recommendation scoring and filtering helpers.
- `src/storage.js` — safe local-storage helpers.
- `src/ui/` — movie cards, details modal, and toast notifications.
- `src/constants/` — mood editorial text and original quotes.
- `src/particles.js` — decorative canvas effects.
- `sw.js` — offline cache behavior.
- `tests/` — Node.js tests for catalog, recommendation, and storage logic.

## Checks

Install the development-only lint dependency once:

```powershell
npm install
```

Run the automated checks:

```powershell
npm test
npm run lint
git diff --check
```

The site itself has no framework or runtime package dependencies.

## Data, privacy, and limitations

- Watchlist, favorites, watched state, and theme preference stay in this browser's `localStorage`.
- There is no account system, server database, or cloud synchronization.
- Movie poster images are loaded from TMDB image hosting when a network connection is available. Previously cached posters may remain available offline.
- Trailer and streaming buttons open YouTube search and JustWatch search pages. Availability can change, so confirm listings on those services.
- The catalog is bundled with the project; it is not a live movie database feed.

## Browser support

Use a current version of Chrome, Edge, Firefox, or Safari. Service workers require a secure context (HTTPS or localhost). Some offline behavior depends on what the browser has already cached.
