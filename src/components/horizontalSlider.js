import React, { useEffect } from 'react';
import { Text, View, FlatList } from "react-native";
import { MoviePoster } from '../components/moviePoster';
import { useRef } from 'react';


export const HorizontalSlider = ({ title, movies, loadNextPage }) => {


    //como vamos a depender del llamado a una API lo que hacemos es colocar
    //una variable que nos garantice no hacer nada mientas estamos cargando
    const isLoading = useRef(false); 


    //colocamos un useEffect para que demore un tiempo para que pueda
    //cargar todas las peliculas
    useEffect(() => {
        setTimeout(() => { isLoading.current = false; },200);
    },[ movies ]);

    const onScroll = ( event ) => {

        //si estoy cargando no muestro nada...
        if ( isLoading.current === true ) return; 

        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent; 


        const isEndReached = ( contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width; 
                                                                   
        //si no llegamos al final no hacemos nada y nos vamos porque ya mostramos...
        if ( !isEndReached ) return; 

        //en este punto llegamos al final y algo tenemos que hacer...
        //loadNexPage() es una función que me viene x parametro
        loadNextPage && loadNextPage(); 

    }; 

 

    return (

        <View style={{ height: 230, backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}> { title } </Text>
        <FlatList
            data = { movies }
            renderItem={ ({ item }) => 
                <MoviePoster movie={ item } width={ 140 } height={ 200 }/> 
                }
            keyExtractor={ (item) => item.id.toString() }
            horizontal={ true }
            showsHorizontalScrollIndicator = { false }
            onScroll={ (event) => onScroll(event)}
        />
     </View>


    );
}