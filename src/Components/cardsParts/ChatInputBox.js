import { useContext, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import AppColors from "../../Config/AppColors";
import { MessagesContext } from "../others/MessageContext";

export default function ChatInputBox({ }) {
    const { message, setMessage } = useContext(MessagesContext);
    const [text, setText] = useState("");
    const SendMessage = () => {
        const who = "user";
        const date = new Date();
        const time = `${date.getHours()}:${date.getMinutes()}`;
        setMessage(() => {
            return [...message, {
                "who": who,
                "message": text,
                "time": time
            }]
        });
        setText("");
    }

    return (
        <View style={styles.chatInputBoxContainer}>
            <View style={styles.inputWrapper}>
                <TextInput placeholder="Say Something! " placeholderTextColor={AppColors.light} style={styles.chatInputBoxInputBox} onChangeText={(inputText) => setText(inputText)} value={text}/>
            </View>

            <TouchableOpacity style={styles.chatInputBoxBtn} onPress={SendMessage}>
                <Text style={styles.chatInputBoxBtnText}>SEND</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    chatInputBoxContainer: {
        borderTopColor: AppColors.light,
        borderTopWidth: 1,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    inputWrapper: {
        flexGrow: 1,
        flexShrink: 1,
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginVertical: 5,
        borderWidth: 1,
        marginRight: 10,
        borderRadius: 5,
    },
    chatInputBoxInputBox: {
        flexGrow: 1,
        flexShrink: 1,
        paddingLeft: 5,
        fontSize: 12,
    },
    chatInputBoxBtn: {
        width: 100,
        backgroundColor: AppColors.backgroundColor,
        paddingVertical: 15,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    chatInputBoxBtnText: {
        fontSize: 16,
        color: AppColors.light,
    }
})