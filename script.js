// Local sample data keeps the project simple and independent of a movie API.
const movies = [
    {
        id: 1,
        title: "Dune: Part Two",
        year: 2024,
        rating: 8.5,
        genre: "Sci-Fi",
        description: "Paul Atreides unites with Chani and the Fremen on a journey of revenge and destiny.",
        poster: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 2,
        title: "The Batman",
        year: 2022,
        rating: 7.8,
        genre: "Crime",
        description: "A young Batman follows a trail of clues through Gotham's shadows.",
        poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 3,
        title: "Everything Everywhere All at Once",
        year: 2022,
        rating: 7.8,
        genre: "Adventure",
        description: "An unexpected journey through the multiverse brings one family together.",
        poster: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 4,
        title: "Oppenheimer",
        year: 2023,
        rating: 8.3,
        genre: "Drama",
        description: "The story of the scientist whose work changed the course of history.",
        poster: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 5,
        title: "Spider-Man: Across the Spider-Verse",
        year: 2023,
        rating: 8.6,
        genre: "Animation",
        description: "Miles Morales swings across the multiverse and meets a new team of Spider-People.",
        poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 6,
        title: "Arrival",
        year: 2016,
        rating: 7.9,
        genre: "Sci-Fi",
        description: "A linguist tries to understand the visitors who have arrived on Earth.",
        poster: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 7,
        title: "The Grand Budapest Hotel",
        year: 2014,
        rating: 8.1,
        genre: "Comedy",
        description: "A hotel concierge and his lobby boy become caught up in a lively caper.",
        poster: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 8,
        title: "Whiplash",
        year: 2014,
        rating: 8.5,
        genre: "Drama",
        description: "A determined young drummer pushes himself under a demanding instructor.",
        poster: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 9,
        title: "Mad Max: Fury Road",
        year: 2015,
        rating: 8.1,
        genre: "Action",
        description: "A high-speed escape across a vast desert becomes a fight for freedom.",
        poster: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 10,
        title: "Knives Out",
        year: 2019,
        rating: 7.9,
        genre: "Mystery",
        description: "A detective investigates a family's tangled stories after a famous writer dies.",
        poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=85"
    }
];

const tvShows = [
    {
        id: 101,
        title: "Stranger Things",
        year: 2016,
        rating: 8.7,
        genre: "Sci-Fi",
        description: "Friends in a small town uncover a mystery from another world.",
        poster: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 102,
        title: "The Last of Us",
        year: 2023,
        rating: 8.7,
        genre: "Drama",
        description: "Two survivors travel across a changed America and form an unlikely bond.",
        poster: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 103,
        title: "The Bear",
        year: 2022,
        rating: 8.5,
        genre: "Comedy",
        description: "A talented chef returns home to help run his family's sandwich shop.",
        poster: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 104,
        title: "Wednesday",
        year: 2022,
        rating: 8.0,
        genre: "Mystery",
        description: "Wednesday Addams investigates strange events at her new school.",
        poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=85"
    },
    {
        id: 105,
        title: "Our Planet",
        year: 2019,
        rating: 9.3,
        genre: "Documentary",
        description: "A journey through the beauty and fragility of the natural world.",
        poster: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=700&q=85"
    }
];

function createMovieCard(item) {
    return `
        <article class="movie-card">
            <img class="movie-poster" src="${item.poster}" alt="${item.title} poster" loading="lazy">
            <div class="movie-card-content">
                <div class="movie-card-topline">
                    <span class="movie-genre">${item.genre}</span>
                    <span class="card-rating" aria-label="Rating ${item.rating} out of 10">★ ${item.rating}</span>
                </div>
                <h3>${item.title}</h3>
                <p class="movie-card-description">${item.description}</p>
                <span class="movie-year">${item.year}</span>
            </div>
        </article>
    `;
}

function renderMovies(items, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = items.map(createMovieCard).join("");
}

renderMovies(movies.slice(0, 5), "trending-movies");
renderMovies(movies.slice(5, 10), "popular-movies");
renderMovies(tvShows, "popular-shows");
