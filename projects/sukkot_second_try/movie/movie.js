//API key and base URL
const apiKey = '4974cd2772b87232f556a86773b17a5c';
const baseUrl = 'https://api.themoviedb.org/3';

// to get the movie ID from the URL
function getMovieIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    // Extracts 'id' parameter from URL
    return urlParams.get('id'); 
}

// Function to fetch and display movie details
async function fetchMovieDetails(movieId) {
    const url = `${baseUrl}/movie/${movieId}?api_key=${apiKey}&language=en-US`;
    try {
        const response = await fetch(url);
        const movie = await response.json();
        displayMovieDetails(movie); // Calls function to display details
        fetchMovieTrailer(movieId); // Calls function to fetch trailer
        toggleFavoriteStatus(movie.id); // Checks if movie is already in favorites
    } catch (error) {
        console.error('Error searching for movie details. Error:', error);
    }
}

// fetch e displa trailer do filme
async function fetchMovieTrailer(movieId) {
    const url = `${baseUrl}/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        // Iframe to find the official YouTube trailer
        //????????????????
        const trailer = data.results.find(video => video.type === "Trailer" && video.site === "YouTube");

        if (trailer) {
            const trailerContainer = document.createElement('div');
            trailerContainer.classList.add('trailer-container');
            trailerContainer.innerHTML = `
                <iframe width="100%" height="280" 
                        src="https://www.youtube.com/embed/${trailer.key}" 
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
            `;
            document.querySelector('.movie-info').appendChild(trailerContainer); 
        }
    } catch (error) {
        console.error('Error fetching movie trailer:', error);
    }
}

//displaing movie details
function displayMovieDetails(movie) {
    const movieDetailsContainer = document.getElementById('movie-details');
    movieDetailsContainer.innerHTML += `
        <div class="movie-info">
            <h2>${movie.title}</h2>
            <div class="poster-container">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                <button id="favorite-button">Add to Favorites</button>
            </div>
            <p class="synopsis"><strong>Overview:</strong> ${movie.overview}</p>
        </div>
        <div class="additional-info">
            <p><strong>Rating:</strong> ${movie.vote_average}</p>
            <p><strong>Runtime:</strong> ${movie.runtime} mins</p>
        </div>
        <div class="cast-info">
            <h3>Cast</h3>
            <div class="cast-carousel-container">
                <button class="carousel-btn left-btn">◀</button>
                <div class="cast-carousel" id="cast-carousel"></div>
                <button class="carousel-btn right-btn">▶</button>
            </div>
        </div>
    `;

    document.getElementById('favorite-button').addEventListener('click', () => {
        // add or remove favorites
        toggleFavorite(movie.id); 
    });

    // click events for the arrow buttons
    document.querySelector('.left-btn').addEventListener('click', () => scrollCarousel('left'));
    document.querySelector('.right-btn').addEventListener('click', () => scrollCarousel('right'));

    fetchMovieCast(movie.id); // Fetches movie cast
}

// Function to add/remove movie from favorites
function toggleFavorite(movieId) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (favorites.includes(movieId)) {
        const index = favorites.indexOf(movieId);
        // Removes from favorites if exists
        if (index > -1) favorites.splice(index, 1); 
        localStorage.setItem('favorites', JSON.stringify(favorites));
    } else {
        // Adds to favorites if not exists
        favorites.push(movieId); 
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    toggleFavoriteStatus(movieId); // Updates favorite button status
}

// Function to update the favorite button status
function toggleFavoriteStatus(movieId) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoriteButton = document.getElementById('favorite-button');

    if (favorites.includes(movieId)) {
        favoriteButton.textContent = 'Remove from Favorites';
        favoriteButton.style.backgroundColor = '#FF6B6B';
    } else {
        favoriteButton.textContent = 'Add to Favorites';
        favoriteButton.style.backgroundColor = '#f88f79';
    }
}

// Function to fetch and display movie cast
async function fetchMovieCast(movieId) {
    const url = `${baseUrl}/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMovieCast(data.cast); // Calls function to display cast in carousel
    } catch (error) {
        console.error('Error fetching movie cast:', error);
    }
}

// Function to display cast in a carousel
function displayMovieCast(cast) {
    const castCarousel = document.getElementById('cast-carousel');
    castCarousel.innerHTML = ''; // Clears previous content

    cast.slice(0, 50).forEach(actor => {
        const actorImage = actor.profile_path
            ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
            : './unknown_artist.png';

        const castItem = document.createElement('div');
        castItem.classList.add('cast-item');
        castItem.innerHTML = `
            <img src="${actorImage}" alt="${actor.name}" onerror="this.onerror=null; this.src='./unknown_artist.png';">
            <p>${actor.name}</p>
            <p><em>${actor.character}</em></p>
        `;
        castCarousel.appendChild(castItem);
    });
}

// Function to scroll the cast carousel
function scrollCarousel(direction) {
    const carousel = document.getElementById('cast-carousel');
    const scrollAmount = 150;
    carousel.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
    });
}

// Initializes the page by loading movie details if movie ID is found
const movieId = getMovieIdFromUrl();
if (movieId) {
    fetchMovieDetails(movieId);
} else {
    alert("Movie ID not found.");
}

// Event listener for Home button to redirect to the homepage
document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.getElementById('new-home-button');
    if (homeButton) {
        homeButton.addEventListener('click', () => {
            window.location.href = '../home_page/home.html'; // Relative path to access home page
        });
    }
});
