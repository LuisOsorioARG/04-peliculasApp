import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export const MoviePoster = ({ movie, height = 420 , width = 300  }) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    console.log("movie:",movie)

    return (
    <View style= {{

        //antes lo seteamos adentro, pero ahora lo recibimos x parametros
        //width: 300,
        //height: 420,
        
        width,
        height,
        marginHorizontal: 5,
        
        //backgroundColor: 'red'    
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        
        elevation: 23,
        borderRadius: 18

        
        }}>

            <Image 
                source = {{ uri }}
                style = { styles.image }
            />
    </View>
    )
}

const styles = StyleSheet.create({

    image: {
        // con flex: 1 se expande todo lo que puede en su contenedor
        flex: 1,
        borderRadius: 18

    },

  });