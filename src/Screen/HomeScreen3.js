import { useContext } from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Group from "../Components/screen/Group";
import Header from "../Components/screen/Header";
import AppColors from "../Config/AppColors";
import { GroupsContext } from "../Components/others/GroupsContext";
import AppData from "../Config/Data";

export default function HomeScreen3({ navigation, route }) {
    const data = route.params.data;
    const dataKeys = Object.keys(data);
    const activity = route.params.activity;
    const groups = [];
    for (let i = 0; i < dataKeys.length; i++) {
        groups.push({ groupName: dataKeys[i].toUpperCase(), totalMembers: data[dataKeys[i]].length, data: data[dataKeys[i]] });
    }

    const { groupsJoined, setGroupsJoined } = useContext(GroupsContext);
    const groupData = AppData.groups;
    const joinGroup = (nameOfTheGroup) => {
        loop1:
        for (let country in groupData) {
            loop2:
            for (let section in groupData[country]) {
                loop3:
                for (let groupInSection in (groupData[country])[section]) {
                    if ((nameOfTheGroup).toLowerCase() == groupInSection) {
                        let newGroup = {};
                        newGroup[nameOfTheGroup.toLowerCase()] = ((groupData[country])[section])[nameOfTheGroup.toLowerCase()];
                        setGroupsJoined(() => {
                            return { ...groupsJoined, ...newGroup }
                        });
                        break loop1;
                    }
                }
            }
        }
    }

    const GroupsList = ({ item }) => {
        return (
            <Group groupName={item.groupName} numberOfMembers={item.totalMembers} onJoinAction={() => {
                joinGroup(item.groupName);
                navigation.navigate("GroupScreen", { "data": item })
            }
            } />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header headerText={activity} onBackAction={() => navigation.goBack()} />
            {(groups.length > 0) && <FlatList horizontal={false} contentContainerStyle={{ flex: 1, marginHorizontal: 15 }} data={groups} renderItem={GroupsList} />}
            {(groups.length <= 0) && <View style={styles.noGroupContainer}>
                <Text style={styles.noGroupText}>No Group Available Yet!</Text>
            </View>}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.backgroundColor,
    },
    noGroupContainer: {
        flex: 1,
        justifyContent: "center",
    },
    noGroupText: {
        fontSize: 20,
        color: AppColors.light,
        textAlign: "center",
    }
})