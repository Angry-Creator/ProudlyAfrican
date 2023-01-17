import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons/";
import AppColors from "../../Config/AppColors";


export default function Header({ headerText = "Groups", otherMenu = false, backNavigating = false, onBackAction, onOtherMenu }) {
    return (
        <View style={styles.container}>
            <View style={styles.topRectangle}>
                {(backNavigating) && <TouchableOpacity style={styles.backNavigator} onPress={onBackAction}>
                    <Ionicons name="arrow-back" size={30} color={AppColors.light} />
                </TouchableOpacity>}
                <Text style={[styles.groupHeaderText, { marginRight: (backNavigating) ? 25 : 0, marginLeft: (otherMenu) ? 25 : 0 }]}>{headerText}</Text>
                {(otherMenu) && <TouchableOpacity style={styles.otherMenuNavigator} onPress={onOtherMenu}>
                    <Ionicons name="menu" size={30} color={AppColors.light} />
                </TouchableOpacity>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 65,
        position: "relative",
        overflow: "hidden",
        backgroundColor: "red",
    },
    topRectangle: {
        flexDirection: "row",
        width: "100%",
        height: "100%",
        backgroundColor: AppColors.backgroundColor,
        overflow: "hidden",
        alignItems: "center",
        paddingHorizontal: 15,
    },
    backNavigator: {
        justifyContent: "center",
        alignItems: "center",
        width: 30,
        height: 30,
    },
    otherMenuNavigator: {
        justifyContent: "center",
        alignItems: "center",
        width: 30,
        height: 30,
    },
    groupHeaderText: {
        fontSize: 25,
        color: AppColors.light,
        textAlign: "center",
        flexGrow: 1,
    }
})