import React, { useEffect } from 'react'; 
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button, ActivityIndicator, StyleSheet, Pressable } from "react-native";
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/moviePoster';
import { useSafeAreaFrame, useSafeAreaInsets } from 'react-native-safe-area-context';


export const HomeScreen = () => {

    const { top } = useSafeAreaInsets(); 

    const { peliculasEnCine, isLoading } = useMovies();

    const navigation = useNavigation(); 

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
    <View style={styles.container}>

        <MoviePoster/>

        <Text>
            HomeScreen
        </Text>

        <Button
            title='ir al detalle'
            onPress={ () => navigation.navigate('DetailScreen')}
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