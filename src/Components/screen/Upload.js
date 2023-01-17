import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image } from "react-native";
import AppColors from "../../Config/AppColors";
import { FontAwesome } from "@expo/vector-icons/";


export default function Upload({ image }) {
    return (
        <View style={{alignItems: "center", marginTop: 10,}}>
            <View style={styles.postContainer}>
                <TouchableOpacity style={styles.imageContainer}>
                    <Image source={image} style={styles.image} />
                </TouchableOpacity>
                <View style={styles.inputWrapper}>
                    <TextInput placeholder="What's on your mind? " placeholderTextColor={AppColors.light} style={styles.postInputBox} />
                </View>
                <TouchableOpacity style={styles.uploadImage}>
                    <FontAwesome name="image" size={25} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.postBtn}>
                <Text style={styles.postBtnText}>Post</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: "100%",
    },
    postContainer: {
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    inputWrapper: {
        flexGrow: 1,
        flexShrink: 1,
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginVertical: 5,
        borderWidth: 1,
        marginRight: 10,
        borderRadius: 5,
    },
    postInputBox: {
        flexGrow: 1,
        flexShrink: 1,
        paddingLeft: 5,
        fontSize: 12,
    },
    uploadImage: {
        width: 50,
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderColor: AppColors.backgroundColor,
        borderWidth: 1,
    },
    postBtn: {
        width: 100,
        backgroundColor: AppColors.backgroundColor,
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    postBtnText: {
        fontSize: 16,
        color: AppColors.light,
    },
})