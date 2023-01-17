import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import UserScreen from "../Screen/UserScreen";
import LoginScreen from "../Screen/LoginScreen";
import SignUpScreen from "../Screen/SignUpScreen";
import MyTabs from "./MyTabs";
import OtherUserProfileScreen from "../Screen/OtherUserProfileScreen";
import ChatScreen from "../Screen/ChatScreen";
import GroupScreen from "../Screen/GroupScreen";


const Stack = createNativeStackNavigator();
export default function Navigator() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='UserScreen'>
                    <Stack.Screen name="UserScreen" component={UserScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Tabs" component={MyTabs} options={{ headerShown: false }} />
                    <Stack.Screen name="OtherUserProfileScreen" component={OtherUserProfileScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="GroupScreen" component={GroupScreen} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}