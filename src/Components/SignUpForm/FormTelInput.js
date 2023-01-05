import { StyleSheet, TextInput, View } from "react-native";
import CountryPicker from "react-native-country-picker-modal";
import { useState } from "react";
import AppColors from "../../Config/AppColors";


export default function FormTelInput({ placeholderText }) {
    const [countryCode, setCountryCode] = useState("NG");
    return (
        <View style={styles.container}>
            <View style={{ marginHorizontal: 2 }}>
                <CountryPicker withFlag={true} countryCode={countryCode} onSelect={(value) => setCountryCode(value.cca2)} />
            </View>
            <TextInput placeholder={placeholderText} placeholderTextColor={AppColors.ink} style={{ fontSize: 14, flexGrow: 1, flexShrink: 1, }} />
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