import React from 'react';
import { Text, View, FlatList } from "react-native";
import { MoviePoster } from '../components/moviePoster';


export const HorizontalSlider = ({ title, movies, loadNextPage }) => {

    const onScroll = ( event ) => {

        //console.log("estoy por el onScroll"); 

        const { contentOffSet, layoutMeasurement, contentSize } = event.nativeEvent; 

        //console.log("event.nativeEvent:",event.nativeEvent); 
        //console.log("event.nativeEvent.layoutMeasurement:",event.nativeEvent.layoutMeasurement); 

        //console.log( { contentOffSet, layoutMeasurement, contentSize }); 

        const isEndReached = ( event.nativeEvent.contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width; 
                                                                   
        //si llegamos al final no hacemos nada y nos vamos
        if ( !isEndReached ) return; 

        //en este punto llegamos al final
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