// load and display favorite movies
function loadFavorites() {
    // container for favorite movies
    const favoritesContainer = document.getElementById('favorites-container'); 
    // geting favorites from local storage or set an empty array if none exist
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []; 

    // limpando conteúdo anterior
    favoritesContainer.innerHTML = ''; 

    //  message if no favorites found
    if (favorites.length === 0) {
        favoritesContainer.innerHTML = '<p>No favorite movies found.</p>';
        return;
    }

    // Reverse the order of favorites
    favorites.reverse().forEach(async (movieId) => {
        const movie = await fetchMovieDetails(movieId); // Fetch details for each favorite movie
        const movieItem = document.createElement('div'); // Create a container for each movie
        movieItem.classList.add('favorite-item'); // Add styling class

        // show poster and title
        movieItem.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
            <p>${movie.title}</p>
        `;

        // Add click event to redirect to the movie details page
        movieItem.addEventListener('click', () => {
            window.location.href = `../movie/movie.html?id=${movie.id}`; // Redirect to the "Movie" page with movie ID as URL parameter
        });

        favoritesContainer.appendChild(movieItem); // Append each favorite movie item to the container
    });
}

// fetching movie details by movie ID
async function fetchMovieDetails(movieId) {
    const apiKey = '4974cd2772b87232f556a86773b17a5c'; // The API key for accessing the movie database
    const baseUrl = 'https://api.themoviedb.org/3'; // Base URL for the movie API
    const url = `${baseUrl}/movie/${movieId}?api_key=${apiKey}&language=en-US`; // Construct the API endpoint for fetching movie details

    try {
        const response = await fetch(url); // Send a request to fetch movie details
        return await response.json(); // Parse and return the movie details as JSON
    } catch (error) {
        console.error('Error fetching movie details:', error); // Log any errors that occur during the fetch
    }
}

// edirecting to the home page
document.getElementById('home-button').addEventListener('click', () => {
    window.location.href = '../home_page/home.html'; // Adjust the path as needed to navigate to the home page
});

// Load favorites when the page is loaded
document.addEventListener('DOMContentLoaded', loadFavorites); // Initialize loading of favorites when DOM content is fully loaded
