import { getPopularMovies } from "./assets/js/services/api-tmdb-movies.js";
let currentPage = 1;
let isLoading = true;

document.addEventListener('DOMContentLoaded', function () {
    renderMovies(1);
});

const renderMovies = (page) => {
    getPopularMovies(page).then(data => {
        const movies = data.results;
        const totalPages = data.total_pages;

        if (currentPage <= totalPages) {
            const moviesList = document.getElementById('movies');
            movies.forEach(movie => {
                const movieItem = document.createElement('li');
                movieItem.className = 'movie-item';
                const stars = Math.round(movie.vote_average / 2);
                movieItem.innerHTML = `
                <div class="movie-container">
                    <img src="${movie.poster_path}" alt="${movie.title}" class="movie-image">
                    <div class="movie-overview">${movie.overview || "Nenhum descrição"}</div>
                </div>
                <div class="movie-details">
                    <h3 class="movie-title">${movie.title}</h3>
                    <i class="movie-original-title">(${movie.original_title})</i>
                    <div class="movie-rating">
                        <span class="rating">${'⭐'.repeat(stars)}${'☆'.repeat(5 - stars)}</span>
                    </div>
                    <span class="movie-genre">${movie.genres[0]}</span>
                    <span class="movie-year">${movie.year}</span>
                    
                </div>
            `;
                moviesList.appendChild(movieItem);
            });
        }
        isLoading = false;
    }
    ).catch(error => {
        console.error("Error fetching movies:", error);
    });
};

const setLoading = () => {
    const loading = document.querySelector('.loading');
    if(isLoading) {
        loading.innerHTML = `<p>Carregando...</p>`;
    }
    else {
        loading.innerHTML = "";
    }
    
   
}

document.addEventListener('scroll', () => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 5 && !isLoading) {
        currentPage++;
        isLoading = true;
        setTimeout(() => renderMovies(currentPage), 1000);
        setLoading();
    }
}, {
    passive: true
});