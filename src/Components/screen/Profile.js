import { StyleSheet, View, ScrollView, TouchableOpacity, Image, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons/";
import { SafeAreaView } from "react-native-safe-area-context";
import AppColors from "../../Config/AppColors";


export default function Profile({ who, profile_image, fullName, country, phoneNumber, onBackAction, onSignOutAction, onChatFriendAction, onRemoveFriendAction, onAddFriendAction }) {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flex: 1 }}>
                {/* Header Profile */}
                <View style={{ flex: 0.32, position: "relative", overflow: "hidden" }}>
                    <View style={styles.topRectangle}>
                        <TouchableOpacity style={styles.backNavigator} onPress={onBackAction}>
                            <Ionicons name="arrow-back" size={30} color={AppColors.light} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cameraContainer}>
                            <Image source={profile_image} style={{ width: "100%", height: "100%" }} />
                        </TouchableOpacity>
                        <View style={styles.friendOuterContainer}>
                            {(who != "user") && <TouchableOpacity style={styles.friendInnerContainer} onPress={onChatFriendAction}>
                                <Text style={styles.chatFriendText} >Chat</Text>
                            </TouchableOpacity>}
                            {(who == "stranger") && <TouchableOpacity style={styles.friendInnerContainer} onPress={onAddFriendAction}>
                                <Text style={styles.addFriendText}>Add Friend</Text>
                            </TouchableOpacity>}
                            {(who == "friend") && <TouchableOpacity style={styles.friendInnerContainer} onPress={onRemoveFriendAction}>
                                <Text style={styles.removeFriendText}>Remove Friend</Text>
                            </TouchableOpacity>}
                        </View>

                    </View>
                </View>

                {/* Personal Information & Sign out */}
                <View style={{ flex: 0.65, position: "relative", overflow: "hidden", paddingHorizontal: 10 }}>
                    <Text style={styles.headerText}>PERSONAL INFORMATION</Text>
                    <Text style={styles.subText}>Full Name: <Text style={styles.dataText}>{fullName}</Text></Text>
                    <Text style={styles.subText}>Country: <Text style={styles.dataText}>{country}</Text> </Text>
                    <Text style={styles.subText}>Phone Number: <Text style={styles.dataText}>{phoneNumber}</Text>  </Text>
                </View>

                {(who == "user") && <TouchableOpacity style={styles.logoutBtn} onPress={onSignOutAction}>
                    <View style={styles.logoutBox}>
                        <Text style={styles.logoutText}>SIGN OUT</Text>
                        <Ionicons name="exit-outline" size={25} />
                    </View>
                </TouchableOpacity>}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.light,
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
        marginTop: 20,
        width: 130,
        height: 130,
        borderRadius: 65,
        borderWidth: 1,
        borderColor: AppColors.light,
        justifyContent: "center",
        alignItems: "center",
        overflow: 'hidden',
    },
    friendOuterContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 15,
    },
    friendInnerContainer: {
        width: 120,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 5,
        backgroundColor: AppColors.light,
        marginHorizontal: 5,
    },
    chatFriendText: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold",
        color: AppColors.primary,
    },
    addFriendText: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold",
        color: AppColors.primary,
    },
    removeFriendText: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold",
        color: AppColors.danger,
    },
    headerText: {
        fontSize: 20,
        color: AppColors.primary,
        fontWeight: "bold",
        borderColor: AppColors.primary,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderRadius: 5,
        backgroundColor: AppColors.light,
        marginTop: 20,
        textAlign: "center"
    },
    subText: {
        fontSize: 16,
        color: AppColors.backgroundColor,
        fontWeight: "300",
        borderColor: AppColors.primary,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderRadius: 5,
        backgroundColor: AppColors.light,
        marginVertical: 10,
    },
    dataText: {
        fontWeight: "500",
    },
    logoutBox: {
        flexDirection: "row",
        justifyContent: "center",
        color: AppColors.backgroundColor,
        borderColor: AppColors.primary,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderRadius: 5,
        backgroundColor: AppColors.light,
        marginVertical: 10,
    },
    logoutBtn: {
        position: "absolute",
        bottom: 10,
        paddingHorizontal: 10,
        width: "100%",
    },
    logoutText: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
        marginRight: 10,
    }
})