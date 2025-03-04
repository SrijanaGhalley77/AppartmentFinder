import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DrawerBtn } from "@/components/ui/drawerOpnBtn";

const SellRoute = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <DrawerBtn />
        <Text>Buy Page</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default SellRoute;
