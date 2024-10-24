// Defining the API key
const apiKey = '4974cd2772b87232f556a86773b17a5c';
const baseUrl = 'https://api.themoviedb.org/3';

// Get the movie ID from the URL query parameters
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

// Check if the movie ID exists and fetch details, credits, and videos
if (movieId) {
    fetchMovieDetails(movieId);
    fetchMovieCredits(movieId);
    fetchMovieVideos(movieId);
} else {
    document.getElementById('movie-details').innerHTML = 'Movie ID not found.';
}

// Function to fetch movie details by ID
async function fetchMovieDetails(id) {
    const apiUrl = `${baseUrl}/movie/${id}?api_key=${apiKey}&language=en-US`;

    try {
        const response = await fetch(apiUrl);
        const movie = await response.json();
        displayMovieDetails(movie);
    } catch (error) {
        console.error('Error fetching movie details:', error);
    }
}

// Function to fetch and display movie credits (cast)
async function fetchMovieCredits(id) {
    const creditsUrl = `${baseUrl}/movie/${id}/credits?api_key=${apiKey}`;

    try {
        const response = await fetch(creditsUrl);
        const credits = await response.json();
        displayMovieCredits(credits.cast);
    } catch (error) {
        console.error('Error fetching movie credits:', error);
    }
}

// Function to fetch and display movie videos (like trailers)
async function fetchMovieVideos(id) {
    const videosUrl = `${baseUrl}/movie/${id}/videos?api_key=${apiKey}`;

    try {
        const response = await fetch(videosUrl);
        const videos = await response.json();
        displayMovieVideos(videos.results);
    } catch (error) {
        console.error('Error fetching movie videos:', error);
    }
}

// Function to display movie details on the page
function displayMovieDetails(movie) {
    const movieDetailsContainer = document.getElementById('movie-details');
    movieDetailsContainer.innerHTML = `
        <h2>${movie.title}</h2>
        <p>${movie.overview}</p>
        <p>Release Date: ${movie.release_date}</p>
        <p>Rating: ${movie.vote_average}</p>
        <img src="https://image.tmdb.org/t/p/w400${movie.poster_path}" alt="${movie.title}">
    `;
}

// Function to display the cast on the page
function displayMovieCredits(cast) {
    const movieDetailsContainer = document.getElementById('movie-details');

    // Create a list of the top 5 cast members
    const castList = cast.slice(0, 5).map(member => `<li>${member.name} as ${member.character}</li>`).join('');
    
    // Append the cast information to the existing movie details
    movieDetailsContainer.innerHTML += `
        <h3>Cast</h3>
        <ul>${castList}</ul>
    `;
}

// Function to display movie videos on the page
function displayMovieVideos(videos) {
    const movieDetailsContainer = document.getElementById('movie-details');

    // Find the first video that is a trailer and from YouTube
    const trailer = videos.find(video => video.type === 'Trailer' && video.site === 'YouTube');

    // If a trailer is found, embed it using an iframe
    if (trailer) {
        movieDetailsContainer.innerHTML += `
            <h3>Trailer</h3>
            <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/${trailer.key}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        `;
    }
}

// Back button functionality
document.getElementById('back-button').addEventListener('click', () => {
    window.history.back();
});
