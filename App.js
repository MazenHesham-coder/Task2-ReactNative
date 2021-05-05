import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native"; // to import the main root for navogation, we use it one
import RootNavigator from "./navigation/Index";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
