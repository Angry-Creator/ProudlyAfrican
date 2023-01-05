import { View, StyleSheet, Platform, StatusBar, TouchableOpacity, ScrollView, Text, Alert } from "react-native";
import FormTextInput from "../Components/LoginForm/FormTextInput";
import FormPasswordInput from "../Components/LoginForm/FormPasswordInput";
import AppButton from "../Components/buttons/AppButton";
import { useState } from "react";
import AppColors from "../Config/AppColors";

export default function LoginScreen({ navigation }) {
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <View style={styles.container}>
            {/* Welcome Back Text */}
            <Text style={styles.createAccountText}>Welcome User</Text>
            <View style={styles.contentContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* Form */}
                    <View style={{ marginTop: 100 }}>
                        <FormTextInput iconName="envelope" placeholderText="Email Address" textColor="black" customStyle={{ paddingHorizontal: 15 }} />
                        <FormPasswordInput placeholderText="Password" textColor="black" customStyle={{ paddingHorizontal: 15 }} />
                        <View style={styles.others}>
                            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onPress={() => setRememberMe(!rememberMe)}>
                                {(rememberMe) && <View style={styles.checkBox}></View>}
                                <Text style={styles.rememberMeText}>Remember Me</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => alert("Forgetten Password!")}>
                                <Text style={styles.forgottenPasswordText}>Forget Password?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.subContentContainer}>
                        {/* Login Button */}
                        <AppButton text="Login" onPressAction={() => Alert.alert("Login Successfully", "User has successfully logged in!", [{
                            text: "Ok", style: "default", onPress: () => navigation.navigate("HomeScreen1", { "previousScreen": "LoginScreen" })
                        }])} />

                        {/* OR text */}
                        <Text style={styles.orText}>OR</Text>

                        {/* Sign Up Button */}
                        <AppButton text="Sign Up" mode="light" onPressAction={() => navigation.navigate("SignUpScreen", { "previousScreen": "LoginScreen" })} />
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.backgroundColor,
        paddingTop: (Platform.OS === "android") ? StatusBar.currentHeight : 0,
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    createAccountText: {
        width: 150,
        textAlign: "center",
        color: AppColors.light,
        paddingTop: 25,
        paddingBottom: 10,
        lineHeight: 30,
        fontSize: 32,
    },
    contentContainer: {
        flex: 1,
        backgroundColor: AppColors.light,
        borderRadius: 30,
        justifyContent: "flex-end",
        paddingBottom: 40,
        paddingTop: 30,
        overflow: "hidden",
    },
    subContentContainer: {
        marginTop: 50,
        paddingHorizontal: 45,
    },
    others: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 5,
        paddingHorizontal: 15,
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
    forgottenPasswordText: {
        fontSize: 12,
        lineHeight: 20,
        color: AppColors.link,
    },
    orText: {
        textAlign: "center",
        fontSize: 22,
        color: AppColors.secondary,
        marginVertical: 25,
    }
})
