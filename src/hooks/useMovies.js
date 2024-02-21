import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB'; 

export const useMovies = () => {

    const [ isLoading, setIsLoading] = useState( true );

    const [ moviesState, setMoviesState ] =  useState({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: [],
    }); 

    const getMovies = async () => {

        const nowPlayingPromise = await movieDB.get('/now_playing');
        const popularPromise = await movieDB.get('/popular');
        const topRatedPromise = await movieDB.get('/top_rated');
        const upcomingPromise = await movieDB.get('/upcoming');

        const response = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise
        ])

        setMoviesState( {
            nowPlaying: response[0].data.results,
            popular: response[1].data.results,
            topRated: response[2].data.results,
            upcoming: response[3].data.results,
        } );

        setIsLoading(false); 
    }

    useEffect(() => {
        // now_playing
        getMovies(); 

    },[]); 

    return {
        ...moviesState,
        isLoading
    }


}




