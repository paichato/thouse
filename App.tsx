import {
  useFonts,
  Nunito_700Bold,
  Nunito_400Regular,
} from "@expo-google-fonts/nunito";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Routes from "./src/routes";
import Home from "./src/screens/Movies/Home";

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_700Bold,
    Nunito_400Regular,
  });

  if (fontsLoaded) {
    return <Routes />;
  } else {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
