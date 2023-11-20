import React from 'react'; 
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button } from "react-native";

export const DetailScreen = () => {

    const navigation = useNavigation(); 


return (
    <View>
        <Text>
            DetailScreen
        </Text>
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