import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppButton from "../Components/buttons/AppButton";
import CountryCard from "../Components/cards/CountryCard";
import AppColors from "../Config/AppColors";
import AppData from "../Config/Data";

export default function HomeScreen1({ navigation }) {
    const data = AppData.groups;
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ position: "relative", flex: 1, alignItems: "center", }}>
                {/* Profile Image */}
                <View style={styles.imageContainer}>
                    <Image source={require("../../assets/images/profile_image.jpg")} style={styles.image} resizeMode="contain" />
                </View>

                <Text style={styles.text}>Country of Interest</Text>

                <View style={styles.countryCardsContainer}>
                    <CountryCard text={"Nigeria"} onPressAction={() => navigation.navigate("HomeScreen2", { "data": data.Nigeria })} />
                    <CountryCard text={"Ghana"} onPressAction={() => navigation.navigate("HomeScreen2", { "data": data.Ghana })} />
                </View>

                <View style={styles.countryCardsContainer}>
                    <CountryCard text={"Togo"} onPressAction={() => navigation.navigate("HomeScreen2", { "data": data.Togo })} />
                    <CountryCard text={"Mali"} onPressAction={() => navigation.navigate("HomeScreen2", { "data": data.Mali })} />
                </View>

                <View style={{ position: "absolute", bottom: 10, width: "100%", paddingHorizontal: 20, paddingVertical: 10, }}>
                    <AppButton text="Add More" mode="light" onPressAction={() => alert("Coming Soon!")} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.backgroundColor,
    },
    imageContainer: {
        height: 150,
        width: 150,
        borderRadius: 75,
        marginTop: 10,
        borderWidth: 1,
        borderColor: AppColors.light,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    text: {
        color: AppColors.light,
        fontSize: 25,
        marginTop: 20,
    },
    countryCardsContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        marginTop: 15,
    }
})