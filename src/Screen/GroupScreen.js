import { StyleSheet, View, KeyboardAvoidingView, FlatList } from "react-native";
import AppColors from "../Config/AppColors";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../Components/screen/Header";
import PostCard from "../Components/cards/PostCard";
import Upload from "../Components/screen/Upload";

export default function GroupScreen({ navigation, route }) {
    const allData = route.params.data;
    const data = (route.params.data)["data"];
    const dataKeys = Object.keys(data);
    const mainUserProfile = data.find(prop => prop.who == "user");

    const feeds = [];
    for (let i = 0; i < dataKeys.length; i++) {
        feeds.push({ groupName: dataKeys[i].toUpperCase(), totalMembers: data[dataKeys[i]].length, data: data[dataKeys[i]] });
    }

    const FeedsList = ({ item }) => {
        return (
            <PostCard poster_name={item.fullName} poster_image={item.profileImage} time_of_post={"12:00pm"} post_text={item.post_text} post_image={item.post_image} onCheckUserProfile={() => navigation.navigate("OtherUserProfileScreen", {
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
            <Header headerText={allData.groupName} otherMenu={true} />
            <View style={styles.groupContainer}>
                <KeyboardAvoidingView>
                    <FlatList ListHeaderComponent={<Upload image={mainUserProfile.profileImage} />} data={data} renderItem={FeedsList} showsVerticalScrollIndicator={false} />
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.backgroundColor,
    },
    groupContainer: {
        backgroundColor: AppColors.light,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        paddingHorizontal: 5,
        flex: 1,
        overflow: "hidden",
    },
})