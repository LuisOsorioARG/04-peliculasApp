import { useNavigation } from '@react-navigation/native';
import React from 'react'; 
import { View, Text, Button } from "react-native";

export const HomeScreen = () => {


    const navigation = useNavigation(); 

    console.log("Paso por el HomeScreen..."); 

/*
 onPress={ () => navigation.navigate('DetailScreen')}
*/

return (
    <View>
        <Text>
            HomeScreen
        </Text>

        <Button
            title='ir al detalle'
            onPress={ () => console.log("Paso por el HomeScreen2...")}
        />
                <Button
            title='ir al detalle'
            onPress={ () => console.log("Paso por el HomeScreen3...")}
        />


    </View>
)
}