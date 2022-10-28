import HomeScreen from "./pages/HomeScreen";
import ProfileScreen from "./pages/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name="Home" component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons
                  name="md-home"
                  size={24}
                  color={tabInfo.focused ? "#47B5FF" : "#8e8e93"}
                />
              );
            },
          }}
        />
        <BottomTab.Screen name="Profile" component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons
                  name="person-circle-outline"
                  size={24}
                  color={tabInfo.focused ? "#47B5FF" : "#8e8e93"}
                />
              );
            },
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
