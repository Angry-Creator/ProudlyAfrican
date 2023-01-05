import { StyleSheet, Text, View, Image, Platform, StatusBar, ScrollView } from "react-native";
import AppButton from "../Components/buttons/AppButton";
import CountryCard from "../Components/cards/CountryCard";
import AppColors from "../Config/AppColors";

export default function HomeScreen1({ navigation }) {

    const data = {
        "Nigeria": {
            "country": "Nigeria",
            "housing": {
                "posts": {
                    "Chidera": "This House Looks Cool"
                },
            },
            "shopping": {
                "posts": {
                    "Ruth": "I love shopping"
                },
            },
            "entertainment": {
                "posts": {
                    "David": "The movie was awesome"
                },
            },
            "visitor": {
                "posts": {
                    "Daniel": "I love visiting houses, cause I broke!"
                },
            },
            "relocation": {
                "posts": {
                    "Homeless": "Just as the name sounds, that's how I feel"
                },
            },
            "services": {
                "posts": {
                    "Hustler": "I love hustling"
                },
            }
        },
        "Ghana": {
            "country": "Ghana",
            "housing": {
                "posts": {
                    "Ghana Guy": "This House Looks Cool"
                },
            },
            "shopping": {
                "posts": {
                    "Ghana Girl": "I love shopping"
                },
            },
            "entertainment": {
                "posts": {
                    "Ghana Boy": "The movie was awesome"
                },
            },
            "visitor": {
                "posts": {
                    "Ghana Lady": "I love visiting houses, cause I broke!"
                },
            },
            "relocation": {
                "posts": {
                    "Ghanaless": "Just as the name sounds, that's how I feel"
                },
            },
            "services": {
                "posts": {
                    "Ghana Hustler": "I love hustling"
                },
            }
        },
        "Togo": {
            "country": "Togo",
            "housing": {
                "posts": {
                    "Togo Guy": "This House Looks Cool"
                },
            },
            "shopping": {
                "posts": {
                    "Togo Girl": "I love shopping"
                },
            },
            "entertainment": {
                "posts": {
                    "Togo Boy": "The movie was awesome"
                },
            },
            "visitor": {
                "posts": {
                    "Togo Lady": "I love visiting houses, cause I broke!"
                },
            },
            "relocation": {
                "posts": {
                    "TogoLess": "Just as the name sounds, that's how I feel"
                },
            },
            "services": {
                "posts": {
                    "Togo Hustler": "I love hustling"
                },
            }
        },
        "Mali": {
            "country": "Mali",
            "housing": {
                "posts": {
                    "Mali Guy": "This House Looks Cool"
                },
            },
            "shopping": {
                "posts": {
                    "Mali Girl": "I love shopping"
                },
            },
            "entertainment": {
                "posts": {
                    "Mali Boy": "The movie was awesome"
                },
            },
            "visitor": {
                "posts": {
                    "Mali Lady": "I love visiting houses, cause I broke!"
                },
            },
            "relocation": {
                "posts": {
                    "Maliless": "Just as the name sounds, that's how I feel"
                },
            },
            "services": {
                "posts": {
                    "Mali Hustler": "I love hustling"
                },
            }
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ position: "relative", flex: 1, alignItems: "center", }}>
                {/* Profile Image */}
                <View style={styles.imageContainer}>
                    <Image source={require("../../assets/images/profile_image.jpg")} style={styles.image} resizeMode="contain" />
                </View>

                <Text style={styles.text}>Country of Interest</Text>

                <View style={styles.countryCardsContainer}>
                    <CountryCard text={"Nigeria"} onPressAction={() => navigation.navigate("HomeScreen2", {"previousScreen": "HomeScreen1", "data": data.Nigeria})} />
                    <CountryCard text={"Ghana"} onPressAction={() => navigation.navigate("HomeScreen2", {"previousScreen": "HomeScreen1", "data": data.Ghana})}/>
                </View>

                <View style={styles.countryCardsContainer}>
                    <CountryCard text={"Togo"} onPressAction={() => navigation.navigate("HomeScreen2", {"previousScreen": "HomeScreen1", "data": data.Togo})}/>
                    <CountryCard text={"Mali"} onPressAction={() => navigation.navigate("HomeScreen2", {"previousScreen": "HomeScreen1", "data": data.Mali})}/>
                </View>

                <View style={{ position: "absolute", bottom: 10, width: "100%", paddingHorizontal: 20, paddingVertical: 10, }}>
                    <AppButton text="Add More" mode="light" onPressAction={() => alert("Coming Soon!")} />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.backgroundColor,
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
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