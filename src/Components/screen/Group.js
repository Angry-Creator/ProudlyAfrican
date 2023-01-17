import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import AppColors from "../../Config/AppColors";
import { MaterialCommunityIcons } from "@expo/vector-icons/";

export default function Group({ groupName, numberOfMembers, newGroup = true, onEnterAction, onJoinAction }) {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <MaterialCommunityIcons name="account-group-outline" size={30} color={AppColors.light} />
            </View>
            <View style={styles.groupContainer}>
                <Text style={styles.groupName}>{groupName}</Text>
                <Text style={styles.groupNumberOfMembers}>{numberOfMembers} Members</Text>
            </View>
            <TouchableOpacity style={styles.join} onPress={(newGroup) ? onJoinAction : onEnterAction}>
                <Text style={styles.joinText}>{(newGroup) ? "JOIN" : "ENTER"}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
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
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "blue",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },
    groupContainer: {
        flexDirection: "column",
    },
    groupName: {
        fontSize: 18,
        fontWeight: "bold",
        color: AppColors.light
    },
    groupNumberOfMembers: {
        fontSize: 15,
        fontWeight: "300",
        color: AppColors.backgroundColor,
    },
    join: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "flex-end",
    },
    joinText: {
        fontSize: 20,
        fontWeight: "bold",
        color: AppColors.light,
        backgroundColor: AppColors.backgroundColor,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    }
})