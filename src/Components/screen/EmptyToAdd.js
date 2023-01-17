import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons/";
import AppColors from "../../Config/AppColors";


export default function EmptyToAdd({ onAddGroupAction }) {

    return (
        <View style={styles.container}>
            <View style={styles.topRectangle}>
                <TouchableOpacity style={styles.addNavigator} onPress={onAddGroupAction}>
                    <AntDesign name="addusergroup" size={30} color={AppColors.primary} />
                </TouchableOpacity>
                <Text style={styles.emptyText}>No Group Added Yet!</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        position: "relative",
        overflow: "hidden",
    },
    topRectangle: {
        width: "100%",
        height: "100%",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
    },
    addNavigator: {
        position: "absolute",
        top: 5,
        right: 22,
        justifyContent: "center",
        alignItems: "center",
        width: 50,
        height: 50,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: AppColors.backgroundColor,
    },
    emptyText: {
        fontSize: 15,
        fontWeight: "300",
        color: AppColors.backgroundColor,
    }
})