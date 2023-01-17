import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import AppColors from "../../Config/AppColors";

export default function ChatCard({ profileImage, fullName, onChatAction }) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={profileImage} style={styles.image} />
            </View>
            <Text style={styles.chatName} numberOfLines={1}>{fullName}</Text>
            <TouchableOpacity style={styles.chat} onPress={onChatAction}>
                <Text style={styles.chatText}>Chat</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        flexDirection: "row",
        width: "100%",
        height: 80,
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: AppColors.primary,
        marginVertical: 10,
        borderRadius: 5,
    },
    imageContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        overflow: "hidden",
        borderColor: AppColors.backgroundColor,
        marginRight: 10,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    chatName: {
        fontSize: 14,
        fontWeight: "300",
        color: AppColors.light,
        maxWidth: 175,
    },
    chat: {
        position: "absolute",
        right: 10,
        justifyContent: "center",
        alignItems: "flex-end",
        marginHorizontal: 5,
    },
    chatText: {
        fontSize: 20,
        fontWeight: "300",
        color: AppColors.light,
        backgroundColor: AppColors.backgroundColor,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    }
})