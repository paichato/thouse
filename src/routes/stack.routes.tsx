import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MoviesDetails from "../screens/Movies/MovieDetails";
import AppRoutes from "./app.routes";

const { Screen, Navigator } = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Navigator screenOptions={{headerShown:false}} >
        <Screen name='MoviesHome' component={AppRoutes}/>
      <Screen name="MovieDetails" component={MoviesDetails} />
    </Navigator>
  );
}
