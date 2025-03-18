import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { CustomDrawerContent } from "@/components/CustomDrawerContent";
import { StyleSheet } from "react-native";

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={CustomDrawerContent}
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: "Dashboard",
          }}
        />
        <Drawer.Screen
          name="buy"
          options={{
            drawerLabel: "Buy",
          }}
        />
        <Drawer.Screen
          name="rent"
          options={{
            drawerLabel: "Rent",
          }}
        />
        <Drawer.Screen
          name="sell"
          options={{
            drawerLabel: "Sell",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;
