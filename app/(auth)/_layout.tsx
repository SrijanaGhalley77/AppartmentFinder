import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LoginPage from "./loginScreen";

const Stack = createNativeStackNavigator();

export default function StackLayout() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="./loginScreen">
        <Stack.Screen name="LoginPage" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
