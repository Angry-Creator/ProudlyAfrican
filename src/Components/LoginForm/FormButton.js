import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

//Montserrat for font


export default function FormButton({ mode = "dark", text, onPressAction }) {

    return (
    <TouchableOpacity onPress={onPressAction}>
        <View style={[styles.buttonContainer, { backgroundColor: (mode != "dark") ? "rgba(255,255,255,0)" : "#C97104", borderColor: (mode != "dark") ? "#C97104" : "#F5F5F5", }]}>
            <Text style={[styles.text, { color: (mode != "dark") ? "#C97104" : "#F5F5F5", }]}>{text}</Text>
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