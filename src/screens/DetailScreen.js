import React from 'react'; 
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button,StyleSheet,Dimensions,Image, ScrollView,ActivityIndicator } from "react-native";
import { useMovie } from '../hooks/useMovie';

const screenHeigh = Dimensions.get('screen').height; 

export const DetailScreen = ( { route } ) => {

    const navigation = useNavigation(); 

    const movie = route.params;

    const { data, isLoading } = useMovie(movie.id); 

    console.log("Data from useMovie:",data.production_companies[0].name);

  

    // en movie tenemos todos estos campos
    /*
    {"adult": false, "backdrop_path": "/hIUs8RzKlrzgbWxn2EpWmiTFqCc.jpg", "genre_ids": [878, 53], "id": 870404, "original_language": "en", "original_title": "Meteor", "overview": "Después de que un meteorito choca contra la Tierra, un ranchero solitario y una niña perdida huyen de mercenarios viciosos.", "popularity": 471.63, "poster_path": "/p9kTkPa4wMA7uStnvglAcBmEOUq.jpg", "release_date": "2021-09-01", "title": "Meteoro", "video": false, "vote_average": 5.452, "vote_count": 83}
    */
    //console.log("movies:",movie);

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    if ( isLoading ) {
      return (
          <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center'}}>
              <ActivityIndicator color='red' size={100} />
          </View>
      );
  }


return (
  
    <ScrollView>

   
    <View style={styles.imagenContainer}>
      <View style={styles.imagenContainer}>
            <Image 
                source = {{ uri }}
                style = { styles.imagePoster }
            />
        </View>
      </View>

        <View style={styles.margenContainer} >

          <Text style={styles.subTitle}>
            { movie.original_title }
          </Text>            

          <Text style={styles.title}>
            { movie.title }
          </Text>

          <Text style={styles.subTitle}>
            { movie.id }
          </Text>

          <Text style={styles.title}>
            { data.production_companies[0].name }
          </Text>

        </View>

        <Button
            title='ir al home'
            onPress={ () => navigation.navigate('HomeScreen')}
        />
        <Button
            title='ir al home'
            onPress={ () => navigation.navigate('HomeScreen')}
        />
    </ScrollView>
)
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'red',
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
    
    imagenBorder: {
      borderBottomEndRadius: 2,
      borderBottomStartRadius: 2
    },

    imagenContainer: {
      width: '100%',
      height: screenHeigh * 0.7,
      paddingTop: 0,
    },

    margenContainer: {
      marginHorizontal: 20,
      marginTop: 10
    },


    imagePoster: {
      // con flex: 1 se expande todo lo que puede en su contenedor
      flex: 1,
      borderRadius: 18
    },

    subTitle: {
      fontSize: 16,

    },

    title: {
      fontSize: 20,
      fontWeight: 'bold'
    }

});