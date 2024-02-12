import React, { useEffect } from 'react'; 
import { useNavigation } from '@react-navigation/native';
import { Text, View, Button, ActivityIndicator, StyleSheet, Pressable, Dimensions } from "react-native";
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/moviePoster';
import { useSafeAreaFrame, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Carousel } from 'react-native-snap-carousel';

//con esto sacamos la dimensión de la pantalla
const windowWidth = Dimensions.get('window').width;   

export const HomeScreen = () => {

    const { width: windowWidth } = Dimensions.get('window');

    const { top } = useSafeAreaInsets(); 

    const { peliculasEnCine, isLoading } = useMovies();

    const navigation = useNavigation(); 

    console.log("dimensión de la pantalla:",windowWidth); 

    console.log("peliculasEnCine:",peliculasEnCine); 

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

    
    <View style={{ marginTop: top + 20 }}>

        

        {/* Carosel Principal */}
     
        <View>

                <MoviePoster movie={peliculasEnCine[14]} />

            </View>
     
                {/* Carosel Principal */}
                 {/*
                <View style={{ height: 440 }}>
                    <Carousel 
                        data={ peliculasEnCine }
                        renderItem={ ({ item }) => <MoviePoster movie={ item } /> }
                        sliderWidth={ windowWidth }
                        itemWidth={ 300 }
                        inactiveSlideOpacity={0.9}
                    />
                </View>

            */}

        

        <Button
            title='ir al detalle 2'
            onPress={ () => navigation.navigate('DetailScreen')}
        />

    </View>


)
}
