import { StyleSheet, ScrollView, KeyboardAvoidingView } from "react-native";
import AppColors from "../../Config/AppColors";
import CommentBox from "../cardsParts/CommentBox";
import ReactionContainer from "../cardsParts/ReactionBox";
import PostBox from "../cardsParts/PostBox";
import PostBoxHeader from "../cardsParts/PostBoxHeader";


export default function PostCard({ poster_image, poster_name, time_of_post, post_text, post_image, onCheckUserProfile }) {
    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
            <KeyboardAvoidingView behavior="padding">
                {/* Top Container */}
                <PostBoxHeader poster_image={poster_image} poster_name={poster_name} time_of_post={time_of_post} onCheckUserProfile={onCheckUserProfile} />

                {/* Post  */}
                <PostBox post_text={post_text} post_image={post_image} />

                {/* Like, Comment and Share */}
                <ReactionContainer />
                <CommentBox />

            </KeyboardAvoidingView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        backgroundColor: AppColors.moreLight,
        marginVertical: 10,
        borderRadius: 5,
    }
})