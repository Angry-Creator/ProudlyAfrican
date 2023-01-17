import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen1 from "../Screen/HomeScreen1";
import HomeScreen2 from "../Screen/HomeScreen2";
import HomeScreen3 from "../Screen/HomeScreen3";

const Stack = createNativeStackNavigator();
export default function Navigator() {
    return (
        <Stack.Navigator initialRouteName='HomeScreen1'>
            <Stack.Screen name="HomeScreen1" component={HomeScreen1} options={{ headerShown: false }} />
            <Stack.Screen name="HomeScreen2" component={HomeScreen2} options={{ headerShown: false }} />
            <Stack.Screen name="HomeScreen3" component={HomeScreen3} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}