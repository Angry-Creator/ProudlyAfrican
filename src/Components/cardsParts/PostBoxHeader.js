import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import AppColors from "../../Config/AppColors";

export default function PostBoxHeader({ poster_image, poster_name, time_of_post, onCheckUserProfile }) {
    return (
        <View style={styles.topContainer}>
            {/* Poster Profile Picture */}
            <TouchableOpacity style={styles.posterImageContainer} onPress={onCheckUserProfile}>
                <Image source={poster_image} style={styles.image} resizeMode="cover" />
            </TouchableOpacity>

            {/* Poster Profile Name */}
            <TouchableOpacity style={styles.posterDataStyle} onPress={onCheckUserProfile}>
                <Text style={styles.posterName} numberOfLines={1}>{poster_name}</Text>
                <Text style={styles.timeOfPost} numberOfLines={1}>{time_of_post}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    topContainer: {
        paddingHorizontal: 10,
        flexDirection: "row",
        width: "100%",
    },
    posterImageContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        overflow: 'hidden'
    },
    posterDataStyle: {
        flexDirection: "column",
        marginLeft: 10,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    posterName: {
        fontSize: 16,
        fontWeight: "bold",
        color: AppColors.backgroundColor,
    },
    timeOfPost: {
        fontSize: 12,
        fontWeight: "bold",
    },
})