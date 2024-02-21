import React from 'react';
import { Text, View, FlatList } from "react-native";
import { MoviePoster } from '../components/moviePoster';


export const HorizontalSlider = ({ title, movies}) => {
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
        />
     </View>


    );
}