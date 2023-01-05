import { StyleSheet, Text, View, StatusBar, Platform, ScrollView } from "react-native";
import AppColors from "../Config/AppColors";

export default function HomeScreen3({ navigation, route }) {
    const previousScreen = route.params.previousScreen;
    const activity = route.params.activity;
    const [objectKey, objectValue] = Object.entries(route.params.data.posts);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <Text style={styles.text}>{activity}</Text>
                <View style={styles.activityCardContainer}>
                    <Text style={styles.textTitle}>Name of the Poster: {objectKey[0]}</Text>
                    <Text style={styles.textPost}>Post: {objectKey[1]}</Text>
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
        width: "100%",
        justifyContent: "space-around",
        marginVertical: 10,
        padding: 20,
    },
    textTitle: {
        fontSize: 20,
        color: AppColors.light,
        
    },
    textPost: {
        fontSize: 20,
        color: AppColors.primary,
        
    }
})