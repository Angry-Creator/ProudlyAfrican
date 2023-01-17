import Profile from "../Components/screen/Profile";


export default function ProfileScreen({ navigation }) {

    return (
        <Profile who="user" profile_image={require("../../assets/images/profile_image.jpg")} fullName={"Chidera David Nwankwo"} country={"Nigeria"} phoneNumber={"+234-907-060-842-3"} onBackAction={() => navigation.goBack()} onSignOutAction={() => navigation.navigate("UserScreen")} />
    )
}