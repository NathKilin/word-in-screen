// Define API key and base URL
const apiKey = '4974cd2772b87232f556a86773b17a5c';
const baseUrl = 'https://api.themoviedb.org/3';

// Fetch and display movies for different categories
async function fetchCategories() {
    const genresUrl = `${baseUrl}/genre/movie/list?api_key=${apiKey}&language=en-US`;

    try {
        const response = await fetch(genresUrl);
        const data = await response.json();
        console.log('Genres data:', data); // Log para verificar a resposta da API
        data.genres.slice(0, 3).forEach(genre => fetchMoviesByGenre(genre)); // Pega apenas 3 categorias
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
}

// Fetch movies for a specific genre and render them
async function fetchMoviesByGenre(genre) {
    const moviesUrl = `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=${genre.id}&language=en-US&page=1`;

    try {
        const response = await fetch(moviesUrl);
        const data = await response.json();
        console.log(`Movies for genre ${genre.name}:`, data.results); // Log para verificar os filmes retornados
        renderCategorySection(genre, data.results);
    } catch (error) {
        console.error(`Error fetching movies for genre ${genre.name}:`, error);
    }
}

// Render a category section with movies in a horizontal carousel
function renderCategorySection(genre, movies) {
    const categoriesList = document.getElementById('categories-list');

    const section = document.createElement('div');
    section.classList.add('category-section');

    const title = document.createElement('h2');
    title.classList.add('category-title');
    title.textContent = genre.name;

    const carousel = document.createElement('div');
    carousel.classList.add('category-carousel');

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('category-movie');
        movieElement.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>Rating: ${movie.vote_average}</p>
        `;
        movieElement.addEventListener('click', () => {
            window.location.href = `movie.html?id=${movie.id}`;
        });
        carousel.appendChild(movieElement);
    });

    addScrollButtons(carousel);

    section.appendChild(title);
    section.appendChild(carousel);
    categoriesList.appendChild(section);

    console.log(`Section for genre ${genre.name} added with ${movies.length} movies.`);
}

// Add scroll functionality to each carousel
function addScrollButtons(carousel) {
    const leftButton = document.createElement('button');
    leftButton.classList.add('scroll-button', 'left');
    leftButton.textContent = '◀';
    leftButton.addEventListener('click', () => {
        carousel.scrollBy({ left: -300, behavior: 'smooth' });
    });

    const rightButton = document.createElement('button');
    rightButton.classList.add('scroll-button', 'right');
    rightButton.textContent = '▶';
    rightButton.addEventListener('click', () => {
        carousel.scrollBy({ left: 300, behavior: 'smooth' });
    });

    carousel.parentNode.insertBefore(leftButton, carousel);
    carousel.parentNode.insertBefore(rightButton, carousel.nextSibling);
}

// Back button functionality
document.getElementById('back-button').addEventListener('click', () => {
    window.location.href = 'index.html';
});

// Fetch categories on page load
fetchCategories();
