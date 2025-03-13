
import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";



 const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="welcome" options={{headerShown: false}}/>
      <Stack.Screen name="loginScreen" options={{headerShown: false}}/>
      <Stack.Screen name="registerScreen" options={{headerShown: false}}/>
    </Stack>
  );
}

const styles = StyleSheet.create({});

export default StackLayout;