import { StyleSheet, View, TouchableOpacity } from "react-native";
import AppColors from "../../Config/AppColors";
import { Fontisto } from "@expo/vector-icons/";


export default function ReactionContainer({ }) {
    return (
        <View style={styles.reactionContainer}>
            <TouchableOpacity style={styles.like}>
                <Fontisto name="like" size={20} color={AppColors.light} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.dislike}>
                <Fontisto name="dislike" size={20} color={AppColors.light} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.comments}>
                <Fontisto name="comments" size={20} color={AppColors.light} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    reactionContainer: {
        flexDirection: "row",
        paddingVertical: 10,
    },
    like: {
        flexGrow: 1,
        flexShrink: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    dislike: {
        flexGrow: 1,
        flexShrink: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    comments: {
        flexGrow: 1,
        flexShrink: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})