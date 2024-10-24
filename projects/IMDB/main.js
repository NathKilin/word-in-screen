// Defining my API key and base API URL
const apiKey = '4974cd2772b87232f556a86773b17a5c';
const baseUrl = 'https://api.themoviedb.org/3';

let currentStartIndex = 0;

async function fetchPopularMovies() {
    const apiUrl = `${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json(); 
        displayMovies(data.results);
        addScrollControls(data.results);
    } catch (error) {
        console.error('Error fetching popular movies:', error);
    }
}

function displayMovies(movies) {
    const moviesContainer = document.getElementById('movies-container');
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const moviesPerPage = 3;

    const moviesToShow = movies.slice(currentStartIndex, currentStartIndex + moviesPerPage);
    moviesContainer.innerHTML = '';

    moviesToShow.forEach(movie => {
        const isFavorite = favorites.includes(movie.id.toString());
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <h2>${movie.title}</h2>
            <p>Rating: ${movie.vote_average}</p>
            <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
            <button class="favorite-button ${isFavorite ? 'blue' : 'white'}" data-id="${movie.id}">
                👍
            </button>
        `;

        movieElement.querySelector('.favorite-button').addEventListener('click', (e) => {
            e.stopPropagation();
            const movieId = e.target.getAttribute('data-id');
            toggleFavorite(movieId, e.target);
        });

        movieElement.addEventListener('click', () => {
            window.location.href = `movie.html?id=${movie.id}`;
        });

        moviesContainer.appendChild(movieElement);
    });

    document.getElementById('scroll-left').style.display = currentStartIndex > 0 ? 'block' : 'none';
    document.getElementById('scroll-right').style.display = currentStartIndex + moviesPerPage < movies.length ? 'block' : 'none';
}

function toggleFavorite(movieId, buttonElement) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const movieIndex = favorites.indexOf(movieId);

    if (movieIndex === -1) {
        favorites.push(movieId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        buttonElement.classList.remove('white');
        buttonElement.classList.add('blue');
    } else {
        favorites.splice(movieIndex, 1);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        buttonElement.classList.remove('blue');
        buttonElement.classList.add('white');
    }
}

function scrollRight(movies) {
    const moviesPerPage = 3;
    if (currentStartIndex + moviesPerPage < movies.length) {
        currentStartIndex += 2;
        displayMovies(movies);
    }
}

function scrollLeft(movies) {
    if (currentStartIndex > 0) {
        currentStartIndex -= 2;
        displayMovies(movies);
    }
}

function addScrollControls(movies) {
    document.getElementById('scroll-left').addEventListener('click', () => scrollLeft(movies));
    document.getElementById('scroll-right').addEventListener('click', () => scrollRight(movies));
}

document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value;
    if (query) {
        searchMovies(query);
    } else {
        fetchPopularMovies();
    }
});

fetchPopularMovies();
