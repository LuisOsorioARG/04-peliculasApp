import {  View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";


export const PosterCarousel = ( { height = 440, movies } ) => {

    return (
        <View style = {{ height }}>

            <ScrollView>
                horizontal
                showsHorizontalScrollIndicator={ false }

                {
                    movies.map( movie => <Text key={ movie.id}> { movie.title } </Text>)
                }

            </ScrollView>

        </View>
    )
}