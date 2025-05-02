import { API_SETUP } from '../config/constant.js';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_SETUP.API_KEY}`
    }
};

const getGenres = () => {
    const URL = `${API_SETUP.URL}/genre/movie/list?language=${API_SETUP.LANG}`;
    return fetch(URL, options)
        .then(res => res.json())
        .then(data => {
            return data.genres.reduce((acc, genre) => {
                acc[genre.id] = genre.name;
                return acc;
            }, {});
        })
        .catch(err => console.error("Error fetching genres:", err));
};

export const getPopularMovies = async (page = 1) => {
    const URL = `${API_SETUP.URL}/movie/popular?language=${API_SETUP.LANG}&page=${page}`;
    const genres = await getGenres();
   
    return fetch(URL, options)
        .then(res => res.json())
        .then(res => {
            if (API_SETUP.ENVIRONMENT === "development") {
                console.log("Popular Movies: ", res);
            }
            const { results, ...pageInfo} = res;
            return {
                results: results.map(({backdrop_path, ...movie}) => ({
                    ...movie,
                    genres: movie.genre_ids.map(id => genres[id] || "Não definido"),
                    year: new Date(movie.release_date).getFullYear(),
                    poster_path: `${API_SETUP.IMAGE_URL}${movie.poster_path}`,
                })),
                ...pageInfo
            };
        })
        .catch(err => console.error(err));
}