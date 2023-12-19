import React from 'react'; 
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button } from "react-native";
import { MoviePoster } from '../components/moviePoster';

export const DetailScreen = () => {

    const navigation = useNavigation(); 


return (
    <View>
        <Text>
            DetailScreen
        </Text>

        <MoviePoster 
        
        
        />

        <Button
            title='ir al home'
            onPress={ () => navigation.navigate('HomeScreen')}
        />
        <Button
            title='ir al home'
            onPress={ () => navigation.navigate('HomeScreen')}
        />
    </View>
)
}