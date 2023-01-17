import { createContext, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MessageCard from "../Components/cards/MessageCard";
import ChatInputBox from "../Components/cardsParts/ChatInputBox";
import Header from "../Components/screen/Header";
import AppColors from "../Config/AppColors";
import { MessagesContext } from "../Components/others/MessageContext";


export default function ChatScreen({ route }) {
    const [message, setMessage] = useState(route.params.message);
    const personsName = route.params.name;

    const DisplayMessages = ({ item }) => {
        return (
            <MessageCard who={item.who} message={item.message} time={item.time} />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <MessagesContext.Provider value={{message, setMessage}}>
                <Header headerText={personsName} />
                <View style={styles.chatContainer}>
                    <FlatList data={message} renderItem={DisplayMessages} horizontal={false} />
                    <ChatInputBox />
                </View>
            </MessagesContext.Provider>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.backgroundColor,
    },
    chatContainer: {
        backgroundColor: AppColors.light,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        paddingHorizontal: 5,
        flex: 1,
    },
})