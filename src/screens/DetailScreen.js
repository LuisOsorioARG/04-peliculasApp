import React from 'react'; 
import { View, Text } from "react-native";

export const DetailScreen = () => {

    console.log("Paso por el DetailScreen..."); 

return (
    <View>
        <Text>
            DetailScreen
        </Text>
        <Button
            title='ir al home'
            onPress={ () => navigation.navigate('HomeScreen')}
        />
    </View>
)
}