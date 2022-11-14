const axios = require('axios');

const movieId = process.argv[2];
const endpoint = `https://api.themoviedb.org/3/movie/${movieId}?api_key=90d12d90a2eb3d5a8aae378a3c6c3f0a`;

axios.get(endpoint)
    .then(({ data: movie }) => {
        console.log(movie);
    });