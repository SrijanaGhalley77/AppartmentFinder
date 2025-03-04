import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DrawerBtn } from "@/components/ui/drawerOpnBtn";

const RentRoute = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <DrawerBtn />
        <Text>Rent Page</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default RentRoute;
