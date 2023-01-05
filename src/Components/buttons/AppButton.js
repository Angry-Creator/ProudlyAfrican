import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import AppColors from "../../Config/AppColors";

export default function AppButton({ mode = "dark", text, onPressAction }) {
    return (
        <TouchableOpacity onPress={onPressAction}>
            <View style={[styles.buttonContainer, { backgroundColor: (mode != "dark") ? AppColors.transparent : AppColors.primary, borderColor: AppColors.primary }]}>
                <Text style={[styles.text, { color: (mode != "dark") ? AppColors.primary : AppColors.light, }]}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: "100%",
        height: 60,
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        lineHeight: 20,
    }
})