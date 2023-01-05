import { StyleSheet, TouchableOpacity, Text } from "react-native";
import AppColors from "../../Config/AppColors";


export default function ActivityCard({ text, onPressAction }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPressAction}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "45%",
        height: 125,
        padding: 5,
        backgroundColor: AppColors.primary,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: AppColors.light,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: AppColors.light,
        fontSize: 16,
    }
})