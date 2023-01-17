import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import AppColors from "../../Config/AppColors";


export default function PostBox({ post_text, post_image }) {
    return (
        <TouchableOpacity style={styles.postContainer}>
            {(post_text != undefined) && <View style={styles.textContainer}>
                <Text style={styles.postedText}>{post_text}</Text>
            </View>}
            {(post_image != undefined) && <View style={styles.postImageContainer}>
                <Image source={post_image} style={styles.image} />
            </View>}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    postContainer: {
        paddingTop: 5,
        borderTopColor: AppColors.light,
        borderTopWidth: 1,
        marginTop: 15,
        overflow: "hidden",
    },
    postImageContainer: {
        height: 300,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    postedText: {
        fontSize: 14,
        fontWeight: "300",
        marginVertical: 2,
        paddingHorizontal: 5,
        paddingTop: 5,
    },
    textContainer: {
        backgroundColor: AppColors.light,
        marginHorizontal: 1,
        marginTop: 5,
        paddingBottom: 15,
    }
})