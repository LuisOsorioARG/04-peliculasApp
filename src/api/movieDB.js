import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '56ada494816b2f6056b022371b908504',
        language: 'es-ES'
    }
});

export default movieDB;