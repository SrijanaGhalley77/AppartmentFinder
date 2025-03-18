import "../gesture-handler";
import "../global.css";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import {
  MD3LightTheme as DefaultTheme,
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
  adaptNavigationTheme,
} from "react-native-paper";
import { Colors } from "@/constants/Colors";
import { ActivityIndicator, useColorScheme, View } from "react-native";
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import merge from "deepmerge";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect, useState } from "react";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

// import { SessionProvider } from "@/context";
import { Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AuthContextProvider } from "@/context/Auth";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const CustomDarkTheme = { ...MD3DarkTheme, colors: Colors.dark };
const CustomLightTheme = { ...MD3LightTheme, colors: Colors.light };

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDefaultTheme = merge(LightTheme, CustomLightTheme);
const CombinedDarkTheme = merge(DarkTheme, CustomDarkTheme);

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const paperTheme =
    colorScheme === "dark" ? CombinedDarkTheme : CombinedDefaultTheme;

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  // // For authentication
  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState<FirebaseAuthTypes.User | null>();
  // const router = useRouter();
  // const segments = useSegments();

  // const onAuthStateChanged = (User: FirebaseAuthTypes.User | null) => {
  //   console.log("onAuthStateChanged", User);
  //   setUser(User);
  //   // if (initializing) setInitializing(false);
  // };
  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber;
  // }, []);

  // if (initializing)
  //   return (
  //     <View className="items-center justify-center flex-1">
  //       <ActivityIndicator size={"large"} />
  //     </View>
  //   );

  // useEffect(() => {
  //   if (initializing) return;
  //   const inAuthGroup = segments[0] === "(auth)";
  //   if (user && inAuthGroup) {
  //     router.replace('/(drawer)/(tabs)')
  //   } else if (!user && inAuthGroup) {
  //     router.replace('/')
  //   }
  // }, [user, initializing])
  return (
    <AuthContextProvider>
      <PaperProvider theme={paperTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(drawer)" />
        </Stack>
      </PaperProvider>
    </AuthContextProvider>

    // <SessionProvider>
    //   {/*
    //     GestureHandlerRootView is required for:
    //     - Drawer navigation gestures
    //     - Swipe gestures
    //     - Other gesture-based interactions
    //     Must wrap the entire app to function properly
    //   */}
    //   <GestureHandlerRootView style={{ flex: 1 }}>
    //     {/*
    //       Slot renders child routes dynamically
    //       This includes both (app) and (auth) group routes
    //     */}
    //     <Slot />
    //   </GestureHandlerRootView>
    // </SessionProvider>
  );
}
// function useMaterial3Theme(): { theme: any } {
//   throw new Error("Function not implemented.");
// }
