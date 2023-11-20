import React, { useEffect } from 'react'; 
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button, ActivityIndicator } from "react-native";
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/moviePoster';
import { useSafeAreaFrame, useSafeAreaInsets } from 'react-native-safe-area-context';


export const HomeScreen = () => {

    const { top } = useSafeAreaInsets(); 

    const { peliculasEnCine, isLoading } = useMovies();

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
    <View style={ {marginTop: top + 20 }}>

        <MoviePoster/>

        <Text>
            HomeScreen
        </Text>

        <Button
            title='ir al detalle'
            onPress={ () => console.log("Paso por el HomeScreen2...")}
        />
                <Button
            title='ir al detalle'
            onPress={ () => navigation.navigate('DetailScreen')}
        />


    </View>
)
}