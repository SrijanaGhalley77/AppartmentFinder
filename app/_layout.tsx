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
import {
  ActivityIndicator,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import merge from "deepmerge";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AuthContextProvider } from "@/context/Auth";
import { Provider } from "react-redux";
import { store } from "@/redux/reduxwithts/store";
import { Ionicons } from "@expo/vector-icons";
import UpdateProfilePage from "@/app/(drawer)/(tabs)/user-profile/updateProfile";

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
  const router = useRouter();
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

  return (
    <Provider store={store}>
      <AuthContextProvider>
        <PaperProvider theme={paperTheme}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(drawer)" />
            <Stack.Screen
              name="(modal)/filter"
              options={{
                headerShown: true,
                presentation: "modal",
                headerTitle: "Filter",
                headerShadowVisible: false,
                headerStyle: {
                  backgroundColor: "#fff",
                },
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => {
                      router.back();
                    }}
                  >
                    <Ionicons
                      name="close-outline"
                      size={24}
                      color={"#262626"}
                    />
                  </TouchableOpacity>
                ),
              }}
            />
            <Stack.Screen name="UpdateProfilePage" />
          </Stack>
        </PaperProvider>
      </AuthContextProvider>
    </Provider>
  );
}
function useMaterial3Theme(): { theme: any } {
  throw new Error("Function not implemented.");
}
