import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import UserScreen from "../Screen/UserScreen";
import LoginScreen from "../Screen/LoginScreen";
import SignUpScreen from "../Screen/SignUpScreen";
import HomeScreen1 from "../Screen/HomeScreen1";
import HomeScreen2 from "../Screen/HomeScreen2";
import HomeScreen3 from "../Screen/HomeScreen3";


const Stack = createNativeStackNavigator();
export default function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='UserScreen'>
                <Stack.Screen name="UserScreen" component={UserScreen} options={{ headerShown: false }} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
                <Stack.Screen name="HomeScreen1" component={HomeScreen1} options={{ headerShown: false }} />
                <Stack.Screen name="HomeScreen2" component={HomeScreen2} options={{ headerShown: false }} />
                <Stack.Screen name="HomeScreen3" component={HomeScreen3} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}