import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import AppColors from "../../Config/AppColors";


export default function CommentBox({  }) {
    return (
        <View style={styles.commentContainer}>
            <View style={styles.inputWrapper}>
                <TextInput placeholder="Say Something! " placeholderTextColor={AppColors.light} style={styles.commentInputBox} />
            </View>

            <TouchableOpacity style={styles.commentBtn}>
                <Text style={styles.commentBtnText}>Comment</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    commentContainer: {
        borderTopColor: AppColors.light,
        borderTopWidth: 1,
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
    commentInputBox: {
        flexGrow: 1,
        flexShrink: 1,
        paddingLeft: 5,
        fontSize: 12,
    },
    commentBtn: {
        width: 100,
        backgroundColor: AppColors.backgroundColor,
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    commentBtnText: {
        fontSize: 16,
        color: AppColors.light,
    }
})