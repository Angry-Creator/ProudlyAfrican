import { useContext } from "react";
import { StyleSheet, ScrollView, View, FlatList } from "react-native";
import Group from "../Components/screen/Group";
import AppColors from "../Config/AppColors";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../Components/screen/Header";
import EmptyToAdd from "../Components/screen/EmptyToAdd";
import { GroupsContext } from "../Components/others/GroupsContext";

export default function GroupsScreen({ navigation }) {
    const { groupsJoined, setGroupsJoined } = useContext(GroupsContext);

    const groupsKeys = Object.keys(groupsJoined);
    const groups = [];
    for (let i = 0; i < groupsKeys.length; i++) {
        groups.push({ groupName: groupsKeys[i].toUpperCase(), totalMembers: groupsJoined[groupsKeys[i]].length, "data": groupsJoined[groupsKeys[i]] });
    }

    const GroupsList = ({ item }) => {
        console.log(item);
        return (
            <Group groupName={item.groupName} numberOfMembers={item.totalMembers} newGroup={false} onEnterAction={() => {
                navigation.navigate("GroupScreen", { "data": item })
            }
            } />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header onBackAction={() => navigation.goBack()} />
            <View style={styles.groupContainer}>
                {/* Empty Group List */}
                {(Object.keys(groupsJoined).length <= 0) &&
                    <ScrollView>
                        <EmptyToAdd onAddGroupAction={() => navigation.navigate("HomeScreen1")} />
                    </ScrollView>
                }

                {(Object.keys(groupsJoined).length > 0) &&
                    <FlatList horizontal={false} contentContainerStyle={{ flex: 1, marginHorizontal: 15 }} data={groups} renderItem={GroupsList} />}

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
        flex: 1,
        backgroundColor: AppColors.light,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
})