import {  View } from "react-native";



export const MoviePoster = ( { movie } ) => {

    return (
        <View>
            <Image
            
            source={{ uri: movie.poster }}
            
            />


        </View>
    )
}