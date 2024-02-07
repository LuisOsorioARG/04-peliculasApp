import React from 'react'; 
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button,StyleSheet } from "react-native";
import { MoviePoster } from '../components/moviePoster';

export const DetailScreen = () => {

    const navigation = useNavigation(); 


return (
    <View style={styles.container}>
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end', // Alinear en la parte inferior
      alignItems: 'center',
      flexDirection: 'column', // Dirección de columna
      marginBottom: 20, // Ajusta el espacio desde abajo (puedes cambiar el valor según tus necesidades)

      // Puedes ajustar otros estilos del contenedor según tus necesidades
    },
    button: {
      xbackgroundColor: 'green', // Color celeste
      backgroundColor:'#c0d23e',
      width: '90%', // Ocupar el 100% del ancho
      paddingVertical: 15, // Puedes ajustar el espacio vertical
      borderRadius: 5, // Bordes redondeados (opcional)
    },
    buttonText: {
      textAlign: 'center',
      color: 'black', // Color del texto
      fontWeight: 'light', // Puedes ajustar el peso de la fuente
    },
  });