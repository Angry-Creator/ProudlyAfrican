import { createContext, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppColors from "../Config/AppColors";
import Header from "../Components/screen/Header";
import ChatCard from "../Components/cards/ChatCard";
import AppData from "../Config/Data";

export const UserContext = createContext(null);

export default function ChatsScreen({ navigation }) {

    const [data, setData] = useState(AppData.chats);
    const Chat = ({ item }) => {
        return (
            <UserContext.Provider value={{ data, setData }}>
                <ChatCard fullName={item.fullName} profileImage={item.profileImage} onChatAction={() => navigation.navigate("ChatScreen", { "message": item.message, "name" : item.fullName })} />
            </UserContext.Provider>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header headerText="CHATS" />
            <View style={styles.chatsContainer}>
                <FlatList data={data} renderItem={Chat} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.backgroundColor,
    },
    chatsContainer: {
        flex: 1,
        backgroundColor: AppColors.light,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
})