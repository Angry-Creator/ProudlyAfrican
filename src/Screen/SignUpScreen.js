import { View, StyleSheet, Platform, StatusBar, TouchableOpacity, Image, ScrollView, Text, Alert } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons/";
import FormTextInput from "../Components/SignUpForm/FormTextInput";
import FormTelInput from "../Components/SignUpForm/FormTelInput";
import FormPasswordInput from "../Components/SignUpForm/FormPasswordInput";
import { useState } from "react";
import AppButton from "../Components/buttons/AppButton";
import AppColors from "../Config/AppColors";

export default function SignUpScreen({ navigation, route }) {
    const previousRoute = route.params.previousScreen;
    const [rememberMe, setRememberMe] = useState(true);

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flex: 1, paddingVertical: 0}}>
                <View style={{ flex: 0.32, position: "relative", overflow: "hidden" }}>
                    <View style={styles.topRectangle}>
                        <TouchableOpacity style={styles.backNavigator} onPress={() => navigation.navigate(previousRoute)}>
                            <Ionicons name="arrow-back" size={30} color={AppColors.light} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cameraContainer}>
                            <Feather name="camera" size={30} color={AppColors.light} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 0.68, paddingHorizontal: 15 }}>
                    <Text style={styles.signUpText}>Sign up</Text>
                    {/* Form */}
                    <View style={{ width: "100%", marginVertical: 5, }}>
                        <FormTextInput placeholderText="Full Name" />
                        <FormTextInput placeholderText="Email" />
                        <FormTelInput placeholderText="Phone Number" />
                        <FormPasswordInput placeholderText="Password" />
                        <FormPasswordInput placeholderText="Confirm Password" />
                        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onPress={() => setRememberMe(!rememberMe)}>
                            {(rememberMe) && <View style={styles.checkBox}></View>}
                            <Text style={styles.rememberMeText}>Remember Me</Text>
                        </TouchableOpacity>
                        <View style={{ paddingHorizontal: 40, marginVertical: 10, }}>
                            <AppButton text="Create Account" mode="light" onPressAction={() => Alert.alert("Sign Up Successfully", "User has successfully signed up!", [{
                            text: "Ok", style: "default", onPress: () => navigation.navigate("HomeScreen1", {"previousScreen": "Sign Up Screen"})
                        }])} />
                        </View>
                        <View style={styles.iconContainer}>
                            <TouchableOpacity style={{ borderRadius: 15, overflow: "hidden" }}>
                                <Image source={require("../../assets/images/google.png")} resizeMode="contain" style={styles.icon} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ borderRadius: 15, overflow: "hidden" }}>
                                <Image source={require("../../assets/images/facebook.png")} resizeMode="contain" style={styles.icon} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ borderRadius: 15, overflow: "hidden" }}>
                                <Image source={require("../../assets/images/apple.png")} resizeMode="contain" style={[styles.icon, { width: 30, height: 30 }]} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.light,
        paddingTop: (Platform.OS === "android") ? StatusBar.currentHeight : 0,
    },
    topRectangle: {
        width: "100%",
        height: "100%",
        backgroundColor: AppColors.header,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
    },
    backNavigator: {
        position: "absolute",
        top: 17,
        left: 22,
        justifyContent: "center",
        alignItems: "center",
        width: 30,
        height: 30,
    },
    cameraContainer: {
        marginVertical: 50,
        width: 130,
        height: 130,
        borderRadius: 65,
        borderWidth: 1,
        borderColor: AppColors.light,
        justifyContent: "center",
        alignItems: "center",
    },
    signUpText: {
        fontSize: 20,
        marginVertical: 10,
    },
    checkBox: {
        transform: [{ rotate: "-45deg" }],
        height: 6,
        width: 10,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        marginHorizontal: 5,
        marginBottom: 5,
    },
    rememberMeText: {
        fontSize: 11,
        color: AppColors.moreLight,
    },
    iconContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    icon: {
        height: 25,
        width: 25,
        marginHorizontal: 25,
    }
})