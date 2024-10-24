// Define your API key and base URL
const apiKey = '4974cd2772b87232f556a86773b17a5c';
const baseUrl = 'https://api.themoviedb.org/3';

// Function to display the list of favorite movies
async function displayFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoritesContainer = document.getElementById('favorites-container');
    favoritesContainer.innerHTML = '';

    // Check if there are no favorite movies
    if (favorites.length === 0) {
        favoritesContainer.innerHTML = '<p>No favorite movies found.</p>';
        return;
    }

    // Loop through each favorite movie ID and fetch its details
    for (let id of favorites) {
        const movie = await fetchMovieDetails(id);
        if (movie) {
            displayMovieDetails(movie, favoritesContainer);
        }
    }
}

// Function to fetch movie details by ID
async function fetchMovieDetails(id) {
    const apiUrl = `${baseUrl}/movie/${id}?api_key=${apiKey}&language=en-US`;
    try {
        const response = await fetch(apiUrl);
        const movie = await response.json();
        return movie;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        return null;
    }
}

// Function to display a single movie's details in the container
function displayMovieDetails(movie, container) {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');

    movieElement.innerHTML = `
        <h2>${movie.title}</h2>
        <p>Rating: ${movie.vote_average}</p>
        <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
        <button class="remove-favorite" data-id="${movie.id}">Remove from Favorites</button>
    `;

    movieElement.querySelector('.remove-favorite').addEventListener('click', (e) => {
        const movieId = e.target.getAttribute('data-id');
        removeFavorite(movieId);
    });

    container.appendChild(movieElement);
}

// Function to remove a movie from favorites
function removeFavorite(movieId) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const updatedFavorites = favorites.filter(id => id !== movieId);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    displayFavorites(); // Refresh the list of favorite movies
}

// Add event listener to the "Home" button to go back to the main page
document.getElementById('home-button').addEventListener('click', () => {
    window.location.href = 'index.html';
});

// Call the function to display favorites when the page loads
displayFavorites();
