import React from "react";
import { View, Text, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Home from "../screens/Movies/Home";
import Discover from "../screens/Movies/Discover";
import Stats from "../screens/Movies/Stats";
import Me from "../screens/Movies/Me";
import colors from "../lib/colors";
import { RFValue } from "react-native-responsive-fontsize";
import MoviesDetails from "../screens/Movies/MovieDetails";

const { Screen, Navigator } = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveBackgroundColor: colors.bg,
        tabBarActiveBackgroundColor: colors.bg,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          borderWidth: 0,
          height: RFValue(60),
          padding: 0,
          borderTopColor: colors.yellow,
        },
      }}
      tabBarOptions={{
        activeTintColor: colors.white,

        inactiveTintColor: colors.unselected,
        // labelPosition: "beside-icon",
        style: {
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
          height: 88,
          borderWidth: 0,
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="home-filled" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="compass" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Stats"
        component={Stats}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="pie-chart" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Me"
        component={Me}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="pie-chart-outlined"
              size={size}
              color={color}
            />
          ),
        }}
      />
      {/* <Screen name="MovieDetails" component={MoviesDetails} /> */}
    </Navigator>
  );
}
