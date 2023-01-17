import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import AppColors from "../../Config/AppColors";


export default function FriendCard({ profileImage, fullName, onCheckUserProfile }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onCheckUserProfile}>
            <View style={styles.imageContainer}>
                <Image source={profileImage} style={styles.image} />
            </View>
            <Text style={styles.friendName}>{fullName}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 80,
        padding: 10,
        backgroundColor: AppColors.link,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        marginVertical: 10,
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
    friendName: {
        fontSize: 20,
        color: AppColors.light,
        fontWeight: "300",
    }
})