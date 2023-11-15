
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailScreen } from '../screens/DetailScreen';
import { HomeScreen } from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export function Navigation() {


  console.log("Paso por el Navigation..."); 

  return (

      <Stack.Navigator
      
      screenOptions={{
        headerShown: false,
        cardStyle:{
          backgroundColor: 'yellow'
        }
      }}

      >
        <Stack.Screen name="HomeScreen" component={ HomeScreen } />
        <Stack.Screen name="DetailScreen" component={ DetailScreen } />
      </Stack.Navigator>

  );
}
