const apiKey = '1bbaf12f'; // Replace with your OMDb API key
const searchInput = document.getElementById('searchInput');
const movieResults = document.getElementById('movieResults');

function searchMovies() {
    const searchTerm = searchInput.value;

    if (searchTerm.trim() !== '') {
        const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => displayMovies(data.Search))
            .catch(error => console.error('Error:', error));
    } else {
        // Clear the movie results if the search input is empty
        movieResults.innerHTML = '';
    }
}

function displayMovies(movies) {
    movieResults.innerHTML = '';

    if (movies) {
        movies.forEach(movie => {
            const movieCard = createMovieCard(movie);
            movieResults.appendChild(movieCard);
        });
    }
}

function createMovieCard(movie) {
    const movieCard = document.createElement('div');
    movieCard.className = 'movie-card';

    const title = document.createElement('h3');
    title.textContent = movie.Title;

    const poster = document.createElement('img');
    poster.src = movie.Poster === 'N/A' ? 'placeholder.png' : movie.Poster;
    poster.alt = `${movie.Title} Poster`;

    movieCard.appendChild(title);
    movieCard.appendChild(poster);

    return movieCard;
}
