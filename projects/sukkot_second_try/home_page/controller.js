//API key and base URL
const apiKey = '4974cd2772b87232f556a86773b17a5c';
const baseUrl = 'https://api.themoviedb.org/3';

//fetch & display genres
async function fetchGenres() {
    const url = `${baseUrl}/genre/movie/list?api_key=${apiKey}&language=en-US`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        //top 10 genres
        data.genres.slice(0, 10).forEach((genre, index) => {
            createCategorySection(genre, index);
            fetchMoviesByGenre(genre.id, `category-${index + 1}`);
        });
    } catch (error) {
        console.error("Error searching for genre. Error:", error);
    }
}

// Creating a category section
function createCategorySection(genre, index) {
    const mainElement = document.querySelector('main');
    const categorySection = document.createElement('section');
    categorySection.classList.add('category');
    categorySection.id = `category-${index + 1}`;
    
    // Genre title
    const title = document.createElement('h2');
    title.textContent = genre.name;
    categorySection.appendChild(title);

    // My carousel for each genre
    const carousel = document.createElement('div');
    carousel.classList.add('carousel');
    categorySection.appendChild(carousel);

    // carousel arrows
    const leftButton = createCarouselButton('◀', 'left', carousel);
    const rightButton = createCarouselButton('▶', 'right', carousel);
    categorySection.appendChild(leftButton);
    categorySection.appendChild(rightButton);

    mainElement.appendChild(categorySection);
}

// Creating navigation buttons for the carousel
function createCarouselButton(text, direction, carousel) {
    const button = document.createElement('button');
    button.classList.add('carousel-btn', `${direction}-btn`);
    button.textContent = text;
    button.addEventListener('click', () => scrollCarousel(carousel, direction));
    return button;
}

// Function to fetch popular movies for a specific genre
async function fetchMoviesByGenre(genreId, categoryId) {
    const url = `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=${genreId}&sort_by=popularity.desc&language=en-US&page=1`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMovies(data.results.slice(0, 20), categoryId);
    } catch (error) {
        console.error("Error searching movie:", error);
    }
}

// Display movies in a category carousel
function displayMovies(movies, categoryId) {
    const categoryElement = document.getElementById(categoryId).querySelector('.carousel');
    // Clear old content
    categoryElement.innerHTML = ''; 

    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');
        movieItem.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <p>${movie.title}</p>
        `;
        //to read the selected movie
        movieItem.addEventListener('click', () => movieSelected(movie.id));
        categoryElement.appendChild(movieItem);
    });
}

//Scrolling carousel
function scrollCarousel(carousel, direction) {
    //the distance that the content is moving
    const scrollAmount = 300;
    //moving according to direction
    carousel.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        //moving nice and slowly
        behavior: 'smooth'
    });
}

//Redirecting to the movie page
function movieSelected(movieId) {
    window.location.href = '../movie/movie.html?id=' + movieId;
}

//about the search tool

//Puting the search results in a carousel
function displaySearchResults(movies) {
    const mainElement = document.querySelector('main');
    // Clears main content to only display search results
    mainElement.innerHTML = ''; 

    const searchResultsSection = document.createElement('section');
    searchResultsSection.id = 'search-results';
    searchResultsSection.innerHTML = '<h2>Search Results</h2>';

    //if no matched results
    if (movies.length === 0) {
        searchResultsSection.innerHTML += '<p>No results found</p>';
        mainElement.appendChild(searchResultsSection);
        return;
    }

    // Carousel container for search results
    const carousel = document.createElement('div');
    carousel.classList.add('carousel');

    // Creating HTML for each movie in the carousel
    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');
        movieItem.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <p>${movie.title}</p>
        `;
        movieItem.addEventListener('click', () => movieSelected(movie.id));
        carousel.appendChild(movieItem);
    });

    // Adds carousel to the search results container
    searchResultsSection.appendChild(carousel);

    // arrow buttons for the carousel
    const leftButton = createCarouselButton('◀', 'left', carousel);
    const rightButton = createCarouselButton('▶', 'right', carousel);

    // navigation buttons to the arrows
    searchResultsSection.appendChild(leftButton);
    searchResultsSection.appendChild(rightButton);

    // Adding "Home" button
    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.classList.add('home-button');
    homeButton.addEventListener('click', () => {
        mainElement.innerHTML = ''; // Clears search results and "Home" button
        fetchGenres(); // Reloads genre sections
    });

    searchResultsSection.appendChild(homeButton);
    mainElement.appendChild(searchResultsSection);
}

// Search function to find movies and clear the main page if results are found
async function performSearch() {
    const query = document.querySelector('.search-bar input').value.trim();
    if (!query) {
        alert('Please enter a movie title or ID to search!');
        return;
    }

    // If input number, reads an ID
    if (!isNaN(query)) {
        movieSelected(query);
        return;
    }

    // Otherwise, performs search by title
    const url = `${baseUrl}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}&language=en-US&page=1`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.results.length > 0) {
            displaySearchResults(data.results); // Displays search results and "Home" button
        } else {
            alert("No results found");
        }
    } catch (error) {
        console.error("Error searching for movie. Error:", error);
    }
}

// Event listeners for the search bar
document.querySelector('.search-icon').addEventListener('click', performSearch);
document.querySelector('.search-bar input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') performSearch();
});

// Initializes the genre and movie display
fetchGenres();

// Opens/closes the filter accordion
document.getElementById('filter-button').addEventListener('click', () => {
    const filterOptions = document.getElementById('filter-options');
    filterOptions.classList.toggle('active'); // Toggles active class for sliding effect
});

//click events for each filter option
document.querySelectorAll('.filter-option').forEach(button => {
    button.addEventListener('click', (event) => {
        const filterType = event.target.getAttribute('data-filter');
        applyFilter(filterType);
        // We remove the line to hide the filter options so users can choose another filter without reopening it
    });
});


// Function to fetch movies based on selected filter
// ???????????????????
async function applyFilter(filterType) {
    let url;

    if (filterType === 'week') {
        url = `${baseUrl}/trending/movie/week?api_key=${apiKey}`;
    } else if (filterType === 'month') {
        url = `${baseUrl}/trending/movie/day?api_key=${apiKey}`;
    } else if (filterType === 'all') {
        url = `${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    }

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayFilteredMovies(data.results);
    } catch (error) {
        console.error("Erro ao buscar filmes populares:", error);
    }
}

// Redirect to the About page when About button is clicked
document.getElementById('about-button').addEventListener('click', () => {
    window.location.href = '../about/about.html';
});

// Function to display filtered movies
// ??????????????
function displayFilteredMovies(movies) {
    const mainElement = document.querySelector('main');
    mainElement.innerHTML = ''; // Clears main content

    const filterSection = document.createElement('section');
    filterSection.classList.add('filtered-movies');
    filterSection.style.display = 'grid';
    filterSection.style.gridTemplateColumns = 'repeat(auto-fill, minmax(150px, 1fr))';
    filterSection.style.gap = '20px';
    filterSection.style.padding = '20px';

    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');
        movieItem.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <p>${movie.title}</p>
        `;
        movieItem.addEventListener('click', () => movieSelected(movie.id));
        filterSection.appendChild(movieItem);
   

    });

    mainElement.appendChild(filterSection);

    // "Home" button when in filter view
    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.classList.add('home-button');
    homeButton.style.display = 'block'; // Shows the button in filter view
    homeButton.addEventListener('click', () => {
        mainElement.innerHTML = ''; // Clears the screen to return to the original state
        fetchGenres(); // Reloads genres when returning to the home
    });

    mainElement.appendChild(homeButton);
}
