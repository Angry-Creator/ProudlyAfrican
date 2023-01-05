import { View, StyleSheet, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons/";
import AppColors from "../../Config/AppColors";

export default function FormTextInput({ iconName, placeholderText, useIonicons = false, textColor = AppColors.light, customStyle }) {

    return (
        <View style={[styles.container, customStyle]}>
            {(useIonicons == false) && <FontAwesome name={iconName} color={AppColors.icon} size={20} />}
            {(useIonicons) && <Ionicons name={iconName} color={AppColors.icon} size={20} />}
            <TextInput style={[styles.textInputBox, { color: textColor }]} placeholder={placeholderText} placeholderTextColor={AppColors.secondary} />
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
        marginLeft: 10,
        fontSize: 16,
        flexGrow: 1,
        flexShrink: 1,
    }
})