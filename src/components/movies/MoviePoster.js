import {  View } from "react-native";



export const MoviePosterBorrar = ( { movie } ) => {

    return (
        <View>
            <Image
            
            source={{ uri: movie.poster }}
            
            />


        </View>
    )
}