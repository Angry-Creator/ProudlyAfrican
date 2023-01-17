import { StyleSheet, View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppButton from "../Components/buttons/AppButton";
import AppColors from "../Config/AppColors";

export default function UserScreen({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require("../../assets/images/landing1.png")} style={styles.image} resizeMode="cover" />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.text}>A remarkable text that tries to motivate and as well triger the user to proceed to the login or sign up </Text>
                <View style={{ width: "80%", marginTop: 50, }}>
                    <AppButton text="Login" onPressAction={() => navigation.navigate("LoginScreen")} />
                </View>
                <View style={{ width: "80%", marginTop: 50, }}>
                    <AppButton text="Sign Up" mode="light" onPressAction={() => navigation.navigate("SignUpScreen")} />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.backgroundColor,
        justifyContent: "flex-end",
    },
    imageContainer: {
        flex: 0.5,
        overflow: "hidden",
        alignItems: "center"
    },
    image: {
        width: "100%",
        height: "100%",
    },
    contentContainer: {
        flex: 0.5,
        paddingHorizontal: 10,
        alignItems: "center",
    },
    text: {
        fontWeight: "400",
        fontSize: 16,
        color: AppColors.light,
        marginTop: 10,
    }
});
