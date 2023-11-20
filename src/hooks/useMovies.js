import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB'; 

export const useMovies = () => {

    const [ isLoading, setIsLoading] = useState( true );

    const [ peliculasEnCine, setPeliculasEnCine ] =  useState([]); 

    const getMovies = async () => {
        const resp = await movieDB.get('/now_playing');
        const peliculas = resp.data.results;
        setPeliculasEnCine( peliculas );

        //si ya lei des-activo isLoading
        setIsLoading(false); 
    }

    useEffect(() => {
        // now_playing
        getMovies(); 
    },[]); 

    return {
        peliculasEnCine,
        isLoading
    }


}




