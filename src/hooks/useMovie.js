import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB'; 

export const useMovie = (movieID) => {

    const [ isLoading, setIsLoading] = useState( true );

    const [ moviState, setmoviState ] =  useState([]); 

    const getMovie = async (movieID) => {

        try {

     
        console.log("numero de pelicula que nos llega:",movieID);

        const url = `/${movieID}`;

        console.log("getMovie - url que armanos:",url);

        const dataMovie = await movieDB.get(url);
        console.log("Respuesta de dataMovie:",dataMovie);

        console.log("getMovie - promesa que armanos:",dataMovie);

        //const response = await Promise.all([ dataMovie ]); 

        //console.log(response[0].data.results);

        setmoviState( {
            data: dataMovie.data,
        } );

        }  catch (error) {
            console.error("Error al obtener la película:", error);
        }

        setIsLoading(false); 
    }

    useEffect(() => {
        // now_playing
        getMovie(movieID); 

    },[movieID]); 

    return {
        ...moviState,
        isLoading
    }


}
