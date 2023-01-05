import { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import AppColors from "../../Config/AppColors";

export default function FormPasswordInput({ placeholderText, textColor = AppColors.light, customStyle }) {
    const [icon, setIcon] = useState("eye");

    return (
        <View style={[styles.container, customStyle]}>
            <FontAwesome name={"lock"} color={AppColors.icon} size={23} />
            <TextInput style={[styles.textInputBox, { color: textColor }]} placeholder={placeholderText} placeholderTextColor={AppColors.secondary} secureTextEntry={icon == "eye" ? true : false} />
            <FontAwesome name={icon} color={AppColors.icon} size={23} onPress={() => setIcon((icon === "eye") ? "eye-slash" : "eye")} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 2,
        borderBottomColor: AppColors.secondary,
        paddingHorizontal: 5,
        marginTop: 30,
    },
    textInputBox: {
        marginLeft: 15,
        fontSize: 16,
        flexGrow: 1,
        flexShrink: 1,
    }
})