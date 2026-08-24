# Advanced JavaScript Assignment

This repository preserves two browser-based JavaScript assignments created for learning purposes. It is kept as a personal reference for revisiting JavaScript fundamentals rather than as a production application or portfolio project.

## Topics covered

### Assignment 1

- Fetching and aggregating local JSON data
- Working with arrays, objects, sets, maps, and numeric summaries
- Querying the public GitHub repository search API
- Filtering Nobel Prize API results
- Fetching and validating airline statistics
- Updating the DOM with results returned by APIs

### Assignment 2

- Transforming movie data into actor and genre groupings
- Using classes and methods to model whether two chess queens can attack each other
- Reading form values and displaying calculated results

## Running locally

The exercises use `fetch`, so serve the repository through a local HTTP server instead of opening the HTML files directly from disk. From the repository root, one option is:

```powershell
python -m http.server 8000
```

Then open:

- <http://localhost:8000/Assignment1/>
- <http://localhost:8000/Assignment2/>

No installation or build step is required. A modern browser and an internet connection are needed for exercises that call public APIs. Public APIs can change, become unavailable, apply rate limits, or block browser requests; those external behaviors are outside this repository's control.

## Repository status

This is a historical learning repository. It has no backend, deployment configuration, user data, authentication credentials, or private API keys. The code remains intentionally small and framework-free so the original JavaScript concepts are easy to revisit.
