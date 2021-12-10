import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./app.routes";
import StackRoutes from "./stack.routes";

export default function Routes() {
  return (
    <NavigationContainer>
      {/* <AppRoutes /> */}
      <StackRoutes />
    </NavigationContainer>
  );
}
