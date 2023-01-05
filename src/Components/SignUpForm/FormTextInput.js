import { StyleSheet, TextInput, View } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import AppColors from "../../Config/AppColors";


export default function FormTextInput({ placeholderText }) {
    return (
        <View style={styles.container}>
            <TextInput placeholder={placeholderText} placeholderTextColor={AppColors.ink} style={{ fontSize: 14, flexGrow: 1, flexShrink: 1, }} />
            <EvilIcons name="close-o" size={22} color={AppColors.ink} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: AppColors.light,
        shadowOffset: { width: -10, height: 100 },
        shadowColor: AppColors.shadow,
        elevation: 20,
        overflow: "hidden",
        marginBottom: 10,
    }
})