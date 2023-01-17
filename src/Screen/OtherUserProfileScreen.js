import { useLayoutEffect } from "react";
import Profile from "../Components/screen/Profile";


export default function OtherUserProfileScreen({ navigation, route }) {
    const userProfile = route.params.data;
    const who = userProfile.who;
    const fullName = userProfile.fullName;
    const profileImage = userProfile.profileImage;
    const country = userProfile.country;
    const phoneNumber = userProfile.phoneNumber;
    const profileScreen = "Profile";
    const onSignOutAction = () => navigation.navigate("UserScreen");

    useLayoutEffect(() => {
        if (who == "user") {
            navigation.navigate(profileScreen);
        }
    }, []);

    return (
        <Profile who={who} profile_image={profileImage} fullName={fullName} country={country} phoneNumber={phoneNumber} onBackAction={() => navigation.goBack()} onSignOutAction={onSignOutAction} />
    )
}