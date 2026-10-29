# Movies Dataset — 2,500+ Records | CrawlFeeds

A free, structured movies dataset combining data from three sources — TMDB, Letterboxd, and Rotten Tomatoes — covering 2,647 records across English, German, French, Spanish, Japanese, Italian, Korean, and more.

**[⬇ Download TMDB CSV](./movies_dataset_1000_records_sample.csv)** · **[⬇ Download Letterboxd CSV](./movies_dataset_letterboxd_com_sample.csv)** · **[⬇ Download Rotten Tomatoes CSV](./movies_dataset_sample_rotten_tomatoes.csv)**

**More movie & TV datasets → [crawlfeeds.com/movies-tv-datasets](https://crawlfeeds.com/movies-tv-datasets)**
**Full category catalog → [crawlfeeds.com/data-categories/TV-shows-and-movies-datasets](https://crawlfeeds.com/data-categories/TV-shows-and-movies-datasets)**

---

## Dataset Overview

| Property | Value |
|---|---|
| Total records | 2,647 |
| TMDB records | 1,112 |
| Letterboxd records | 511 |
| Rotten Tomatoes records | 1,024 |
| Format | CSV |
| License | CC BY 4.0 |
| Last updated | July 2026 |

---

## File 1 — TMDB (1,112 records)

**File:** `movies_dataset_tmdb_1000.csv`
**Year range:** 1895 – 2014

### Fields

| Field | Type | Description | Example |
|---|---|---|---|
| `uniq_id` | string | Unique record hash | `6a065db67d35596a` |
| `scraped_at` | datetime | Data collection timestamp | `2026-07-24 04:42:27` |
| `content_type` | string | Always `Movie` | `Movie` |
| `tmdb_id` | integer | TMDB unique movie ID | `12` |
| `tmdb_url` | string | TMDB movie page URL | `https://www.themoviedb.org/movie/12-finding-nemo` |
| `imdb_id` | string | IMDb identifier | `tt0266543` |
| `title` | string | Movie title in English | `Finding Nemo` |
| `original_title` | string | Title in original language | `기생충` |
| `release_date` | date | Full release date | `2003-05-30` |
| `release_year` | integer | Year of release | `2003` |
| `original_language` | string | Original language | `English` |
| `production_countries` | string | Country of production | `United States` |
| `genres` | string | Comma-separated genres | `Animation, Family, Adventure` |
| `runtime` | integer | Runtime in minutes | `100` |
| `vote_average` | float | TMDB average rating (0–10) | `7.8` |
| `vote_count` | integer | Number of TMDB votes | `20703` |
| `popularity` | float | TMDB popularity score | `17.64` |
| `budget` | string | Production budget | `$94,000,000.00` |
| `revenue` | string | Box office revenue | `$940,335,536.00` |
| `certification` | string | Content rating | `PG` |
| `overview` | string | Plot summary text | `Nemo, an adventurous young clownfish...` |
| `director` | string | Director name(s) | `Andrew Stanton` |
| `screenplay` | string | Screenplay writer(s) | `Andrew Stanton, Bob Peterson` |
| `cast` | string | Full cast with roles | `Albert Brooks as Marlin (voice)...` |
| `keywords` | string | Comma-separated keywords | `parent child relationship, fish, sydney...` |
| `poster_url` | string | TMDB poster image URL | `https://image.tmdb.org/t/p/w500/...` |

### Language Distribution

| Language | Records |
|---|---|
| English | 809 |
| German | 106 |
| French | 71 |
| Spanish | 21 |
| Japanese | 16 |
| Italian | 15 |
| Danish | 9 |
| Polish | 8 |
| Russian | 8 |
| Korean | 7 |
| Other | 42 |

### Sample Record

```csv
uniq_id,scraped_at,content_type,tmdb_id,tmdb_url,imdb_id,title,original_title,release_date,original_language,production_countries,genres,runtime,vote_average,vote_count,popularity,budget,revenue,keywords,release_year,certification,overview,director,screenplay,cast,poster_url
6a065db67d35596a,2026-07-24 04:42:27,Movie,12,https://www.themoviedb.org/movie/12-finding-nemo,,Finding Nemo,Finding Nemo,2003-05-30,English,United States,"Animation, Family, Adventure",100,7.8,20703,17.6401,"$94,000,000.00","$940,335,536.00","parent child relationship, fish, sydney, australia",2003,TP,"Nemo, an adventurous young clownfish, is unexpectedly taken from his Great Barrier Reef home...",Andrew Stanton,"Andrew Stanton, Bob Peterson, David Reynolds","Albert Brooks as Marlin (voice), Ellen DeGeneres as Dory (voice)",https://image.tmdb.org/t/p/w500/5lc6nQc0VhWFYFbNv016xze8Jvy.jpg
```

---

## File 2 — Letterboxd (511 records)

**File:** `movies_dataset_letterboxd_500.csv`
**Year range:** 1895 – 2009

### Fields

| Field | Type | Description | Example |
|---|---|---|---|
| `letterboxd_url` | string | Letterboxd film page URL | `https://letterboxd.com/film/parasite-2019/` |
| `movie_title` | string | Movie title | `Parasite` |
| `release_year` | integer | Year of release | `2019` |
| `director_names` | string | Director name(s) | `Bong Joon-ho` |
| `average_rating` | float | Letterboxd average rating (0–5) | `4.4` |
| `ratings_count` | float | Number of Letterboxd ratings | `987432` |
| `tmdb_id` | integer | TMDB ID for cross-referencing | `496243` |
| `imdb_link` | string | IMDb page URL | `https://www.imdb.com/title/tt6751668/` |

### Rating Range

- Minimum: 2.54 / 5
- Maximum: 4.30 / 5
- Ratings count range: 1 – 398,363

### Sample Record

```csv
letterboxd_url,movie_title,release_year,director_names,average_rating,ratings_count,tmdb_id,imdb_link
https://letterboxd.com/film/the-new-comers/,The New Comers,1973,Lloyd Kaufman,,2.0,959567,https://www.imdb.com/title/tt0144463/
```

---

## File 3 — Rotten Tomatoes (1,024 records)

**File:** `movies_dataset_rotten_tomatoes_1000.csv`
**Year range:** 1908 – 2025

### Fields

| Field | Type | Description | Example |
|---|---|---|---|
| `rt_url` | string | Rotten Tomatoes movie page URL | `https://www.rottentomatoes.com/m/parasite_2019` |
| `title` | string | Movie title | `Parasite` |
| `release_year` | integer | Year of release | `2019` |
| `release_date_theaters` | date | Theatrical release date | `2019-10-11` |
| `release_date_streaming` | date | Streaming release date | `2020-01-28` |
| `director` | string | Director name(s) | `Bong Joon-ho` |
| `audience_score` | float | Audience score percentage (0–100) | `90` |
| `audience_average_rating` | float | Audience average star rating | `4.3` |
| `audience_ratings_count` | integer | Number of audience ratings | `50000` |
| `verified_audience_score` | float | Verified audience score % | `95` |
| `verified_count` | integer | Number of verified ratings | `12000` |
| `critic_score` | float | Tomatometer critic score % (0–100) | `99` |
| `critic_reviews_count` | integer | Number of critic reviews counted | `428` |

### Score Ranges

- Critic score: 0 – 100%
- Audience score: 0 – 100%

### Sample Record

```csv
rt_url,title,release_year,release_date_theaters,release_date_streaming,director,audience_score,audience_average_rating,audience_ratings_count,verified_audience_score,verified_count,critic_score,critic_reviews_count
https://www.rottentomatoes.com/m/minis_first_time,Mini's First Time,2006,2006-07-14,2006-10-24,Nick Guthe,47.0,3.2,350,,0,50.0,24
```

---

## Cross-Referencing Sources

TMDB IDs are present in both the TMDB and Letterboxd files — use `tmdb_id` to join them. Rotten Tomatoes records can be matched to TMDB via `title` + `release_year`.

```python
import pandas as pd

tmdb = pd.read_csv('movies_dataset_tmdb_1000.csv')
lb = pd.read_csv('movies_dataset_letterboxd_500.csv')
rt = pd.read_csv('movies_dataset_rotten_tomatoes_1000.csv')

# Join TMDB + Letterboxd on tmdb_id
merged = tmdb.merge(lb, on='tmdb_id', how='inner', suffixes=('_tmdb', '_lb'))
print(f"Matched records: {len(merged)}")

# Join RT on title + year
rt_joined = tmdb.merge(rt, left_on=['title','release_year'], right_on=['title','release_year'], how='inner')
print(f"TMDB + RT matched: {len(rt_joined)}")

# Compare critic score vs TMDB rating
print(rt_joined[['title','vote_average','critic_score','audience_score']].head(10))
```

---

## Quick Start

```python
import pandas as pd

# Load all three
tmdb = pd.read_csv('movies_dataset_tmdb_1000.csv')
lb   = pd.read_csv('movies_dataset_letterboxd_500.csv')
rt   = pd.read_csv('movies_dataset_rotten_tomatoes_1000.csv')

# TMDB — top rated by vote average
print(tmdb.nlargest(10, 'vote_average')[['title','release_year','vote_average','vote_count','genres']])

# TMDB — language distribution
print(tmdb['original_language'].value_counts())

# Letterboxd — most rated films
print(lb.nlargest(10, 'ratings_count')[['movie_title','release_year','average_rating','ratings_count']])

# RT — biggest critic vs audience gap
rt['gap'] = rt['critic_score'] - rt['audience_score']
print(rt.nlargest(10, 'gap')[['title','release_year','critic_score','audience_score','gap']])
```

---

## Use Cases

- **Multi-source rating comparison** — compare TMDB community ratings, Letterboxd cinephile ratings, and Rotten Tomatoes critic vs audience scores for the same film
- **Critic vs audience divergence analysis** — Rotten Tomatoes `critic_score` vs `audience_score` gap analysis
- **Recommendation engines** — genre, rating, language, and country features from TMDB combined with community signal from Letterboxd
- **NLP and text analysis** — `overview`, `keywords`, and `cast` fields from TMDB for embedding, classification, and summarization tasks
- **Box office analysis** — `budget` and `revenue` fields from TMDB for ROI and commercial performance research
- **Multilingual film research** — 10+ languages in TMDB records for cross-cultural analysis
- **ML model training** — genre classification, rating prediction, content scoring

---

## More Movie & TV Datasets

This is a free sample. For larger datasets and full coverage:

- **Browse all movie & TV datasets** → [crawlfeeds.com/movies-tv-datasets](https://crawlfeeds.com/movies-tv-datasets)
- **Full category catalog** → [crawlfeeds.com/data-categories/TV-shows-and-movies-datasets](https://crawlfeeds.com/data-categories/TV-shows-and-movies-datasets)

---

## License

Released under **Creative Commons Attribution 4.0 (CC BY 4.0)**.

Free to use for any purpose including commercial, with attribution.

Data sourced from [TMDB](https://www.themoviedb.org/), [Letterboxd](https://letterboxd.com/), and [Rotten Tomatoes](https://www.rottentomatoes.com/). This product uses the TMDB API but is not endorsed or certified by TMDB.

---

## Citation

```
CrawlFeeds (2026). Movies Dataset — 2,647 Records [Data set].
Retrieved from https://github.com/crawlfeeds/movies-dataset
crawlfeeds.com/movies-tv-datasets
```

---

## About CrawlFeeds

[CrawlFeeds](https://crawlfeeds.com) provides structured web data and ready-to-use datasets across e-commerce, entertainment, reviews, travel, and more. 500+ datasets available for instant download.

⭐ **Star this repo** if you find it useful.
