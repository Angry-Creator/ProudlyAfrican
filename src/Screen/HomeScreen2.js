import { Platform, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import ActivityCard from "../Components/cards/ActivityCard";
import AppColors from "../Config/AppColors";

export default function HomeScreen2({ navigation, route }) {
    const previousScreen = route.params.previousScreen;
    const data = route.params.data;
    const objectKeys = Object.keys(data);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <Text style={styles.text}>{data.country}</Text>
                <View style={styles.activityCardContainer}>
                    <ActivityCard text={objectKeys[1].toUpperCase()} onPressAction={() => navigation.navigate("HomeScreen3", { "previousScreen": "HomeScreen2", "data": data[objectKeys[1]], "activity" : objectKeys[1].toUpperCase() })} />
                    <ActivityCard text={objectKeys[2].toUpperCase()} onPressAction={() => navigation.navigate("HomeScreen3", { "previousScreen": "HomeScreen2", "data": data[objectKeys[2]], "activity" : objectKeys[2].toUpperCase() })}/>
                </View>
                <View style={styles.activityCardContainer}>
                    <ActivityCard text={objectKeys[3].toUpperCase()} onPressAction={() => navigation.navigate("HomeScreen3", { "previousScreen": "HomeScreen2", "data": data[objectKeys[3]], "activity" : objectKeys[3].toUpperCase() })}/>
                    <ActivityCard text={objectKeys[4].toUpperCase()} onPressAction={() => navigation.navigate("HomeScreen3", { "previousScreen": "HomeScreen2", "data": data[objectKeys[4]], "activity" : objectKeys[4].toUpperCase() })}/>
                </View>
                <View style={styles.activityCardContainer}>
                    <ActivityCard text={objectKeys[5].toUpperCase()} onPressAction={() => navigation.navigate("HomeScreen3", { "previousScreen": "HomeScreen2", "data": data[objectKeys[5]], "activity" : objectKeys[5].toUpperCase() })}/>
                    <ActivityCard text={objectKeys[6].toUpperCase()} onPressAction={() => navigation.navigate("HomeScreen3", { "previousScreen": "HomeScreen2", "data": data[objectKeys[6]], "activity" : objectKeys[6].toUpperCase() })}/>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
        backgroundColor: AppColors.backgroundColor,
    },
    text: {
        color: AppColors.light,
        fontSize: 25,
        textAlign: "center",
        paddingVertical: 20,
    },
    activityCardContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        marginVertical: 10,
    }
})