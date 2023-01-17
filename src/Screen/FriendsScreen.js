import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppColors from "../Config/AppColors";
import Header from "../Components/screen/Header";
import FriendCard from "../Components/cards/FriendCard";
import AppData from "../Config/Data";

export default function FriendsScreen({ navigation, route }) {

    const data = AppData.friends;
    const OtherUserProfileScreen = "OtherUserProfileScreen";

    const DisplayFriends = ({ item }) => {
        return (
            <FriendCard profileImage={item.profileImage} fullName={item.fullName} onCheckUserProfile={() => navigation.navigate(OtherUserProfileScreen, {
                "data": {
                    who: item.who,
                    fullName: item.fullName,
                    profileImage: item.profileImage,
                    country: item.country,
                    phoneNumber: item.phoneNumber
                }
            })} />
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header headerText="FRIENDS" />
            <View style={styles.friendsContainer}>
                <FlatList data={data} renderItem={DisplayFriends} showsVerticalScrollIndicator={false}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.backgroundColor,
    },
    friendsContainer: {
        flex: 1,
        backgroundColor: AppColors.light,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
})