import React, { useEffect } from 'react'; 
import Carousel from 'react-native-snap-carousel';

import { useNavigation } from '@react-navigation/native';


import { Text, View, Button, ActivityIndicator, StyleSheet, Pressable, Dimensions, FlatList } from "react-native";
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/moviePoster';
import { useSafeAreaFrame, useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { HorizontalSlider } from '../components/horizontalSlider';

//con esto sacamos la dimensión de la pantalla
const windowWidth = Dimensions.get('window').width;   

export const HomeScreen = () => {

    const { width: windowWidth } = Dimensions.get('window');

    const { top } = useSafeAreaInsets(); 

    console.log("Estoy por aqui "); 

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();

    const navigation = useNavigation(); 

    //esto es para agregar como un relojito de espera mientras estoy
    //cargando algo en el back-end...
    if ( isLoading ) {

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center'}}>
                <ActivityIndicator color='red' size={100} />
            </View>
        );
    }

return (

    <ScrollView>


    
    <View style={{ marginTop: top + 20 }}>

        


                {/* Carosel Principal */}
       
                <View style={{ height: 440 }}>
                    <Carousel 
                        
                        data={ nowPlaying }
                        renderItem={ ({ item }) => <MoviePoster movie={ item } /> }
                        sliderWidth={ windowWidth }
                        itemWidth={ 300 }
                        inactiveSlideOpacity={0.9}
                        
                    />
                </View>


                {/* lista de peliculas, pero usando el componente HorizontalSlider */}   
                 <HorizontalSlider 
                    title = "Populares"
                    movies={ popular }
                    loadNextPage= { () => console.log("Final Alcanzado") } />

                {/* lista de peliculas, pero usando el componente HorizontalSlider */}   
                <HorizontalSlider title = "top 10" movies={ topRated } />

                {/* lista de peliculas, pero usando el componente HorizontalSlider */}   
                <HorizontalSlider title = "Proximas" movies={ upcoming } />


        <Button
            title='ir al detalle 2'
            onPress={ () => navigation.navigate('DetailScreen')}
        />

    </View>

    </ScrollView>

)
}
