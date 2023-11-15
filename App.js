import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {

  console.log("paso x aqqui"); 


  /*
 <NavigationContainer>
       <Navigation />
    </NavigationContainer>
  */

  return (
    <View style={styles.container}>
      <Text>Hola Mundo Boludín 2...</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});