import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation'; 
import { StyleSheet, View, Text } from 'react-native';

export default function App() {

  console.log("paso x aqqui"); 


  /*
 <NavigationContainer>
            <View style={styles.container}>
        <Text>Hola Mundo Boludín 3...</Text>
      </View>
    </NavigationContainer>
  */

  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});