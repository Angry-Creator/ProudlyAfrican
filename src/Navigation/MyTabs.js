import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import AppColors from '../Config/AppColors';
import HomeTab from './HomeTab';
import GroupsScreen from '../Screen/GroupsScreen';
import ProfileScreen from '../Screen/ProfileScreen';
import FriendsScreen from '../Screen/FriendsScreen';
import ChatsScreen from '../Screen/ChatsScreen';
import { GroupsContext } from '../Components/others/GroupsContext';
import { useState } from 'react';

//Screen Names
const homeScreen = "Home";
const chatsScreen = "Chat";
const groupsScreen = "Groups";
const friendsScreen = "Friends";
const profileScreen = "Profile";

const Tab = createBottomTabNavigator();
export default function MyTabs() {
  const [groupsJoined, setGroupsJoined] = useState({});
  return (
    <GroupsContext.Provider value={{ groupsJoined, setGroupsJoined }}>
      <Tab.Navigator initialRouteName='Home' screenOptions={({ route }) => ({
        tabBarIcon: (({ focused, color, size }) => {
          let iconName;
          let rn = route.name;
          if (rn == homeScreen) {
            iconName = focused ? "home" : "home-outline";
          }
          else if (rn == chatsScreen) {
            iconName = focused ? "chat" : "chat-outline";
          }
          else if (rn == groupsScreen) {
            iconName = focused ? "account-group" : "account-group-outline";
          }
          else if (rn == friendsScreen) {
            iconName = focused ? "people" : "people-outline";
          }
          else if (rn == profileScreen) {
            iconName = focused ? "user-cog" : "user-edit";
          }
          if (rn == profileScreen) {
            return <FontAwesome5 name={iconName} color={color} size={size} />
          }
          else if (rn == friendsScreen) {
            return <MaterialIcons name={iconName} color={color} size={size} />
          }
          else {
            return <MaterialCommunityIcons name={iconName} color={color} size={size} />
          }
        }),
        tabBarActiveTintColor: AppColors.primary,
        tabBarInactiveTintColor: "grey",
        tabBarLabelStyle: {
          paddingBottom: 5, fontSize: 10,
          backgroundColor: AppColors.transparent
        },
        tabBarStyle: {
          padding: 5,
          height: 50,
          backgroundColor: AppColors.light,
        }
      })}>
        <Tab.Screen name={homeScreen} component={HomeTab} options={{ headerShown: false }} />
        <Tab.Screen name={groupsScreen} component={GroupsScreen} options={{ headerShown: false }} />
        <Tab.Screen name={chatsScreen} component={ChatsScreen} options={{ headerShown: false }} />
        <Tab.Screen name={friendsScreen} component={FriendsScreen} options={{ headerShown: false }} />
        <Tab.Screen name={profileScreen} component={ProfileScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </GroupsContext.Provider>

  );
}