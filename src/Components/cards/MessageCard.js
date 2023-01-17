import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import AppColors from "../../Config/AppColors";

export default function MessageCard({ who, message, time }) {
    return (
        <>
            {(message != undefined && time != undefined) && <View style={{ alignItems: "baseline" }}>
                <TouchableOpacity style={[styles.messageContainer, { backgroundColor: (who == "user") ? AppColors.primary : AppColors.link, alignSelf: (who != "user") ? "flex-start": "flex-end" }]}>
                    <Text style={styles.messageText}>{message}</Text>
                    <Text style={styles.messageTime}>{time}</Text>
                </TouchableOpacity>
            </View>}
        </>
    )
}

const styles = StyleSheet.create({
    messageContainer: {
        maxWidth: "70%",
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 10,
    },
    messageText: {
        fontSize: 16,
        fontWeight: "300",
    },
    messageTime: {
        fontSize: 10,
        color: AppColors.icon,
        textAlign: "right",
        marginTop: 5,
    }
});