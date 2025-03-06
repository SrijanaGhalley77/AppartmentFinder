import { ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import { DrawerBtn } from "@/components/ui/drawerOpnBtn";
import SearchBar from "@/components/ui/searchBar";
import AvatarIcon from "@/components/ui/avatar";
import Category from "@/components/ui/categoryCard.old1";
import Recent from "@/components/ui/recent";
export default function homePage() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ImageBackground
          source={require("@/assets/images/bg.avif")}
          style={styles.imgBg}
        >
          <View
            className="flex-1  items-center justify-center bg-blue"
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 8,
            }}
          >
            <DrawerBtn />
            <AvatarIcon />
          </View>

          <View>
            <Text
              style={{
                paddingTop: 30,
                paddingLeft: 20,
                fontSize: 40,
                lineHeight: 32,
                color: "#ffffff",
                fontWeight: "bold",
                textOverflow: "wrap",
                // backgroundColor: "#000000a0",
              }}
            >
              Property Hub for all your needs
            </Text>
            <SearchBar />
          </View>
        </ImageBackground>

        <View style={{ gap: 8, flexDirection: "column" }}>
          <Text style={styles.header}>Categories</Text>
          <Category />
        </View>
        <View style={{ gap: 8, flexDirection: "column" }}>
          <Text style={styles.header}>Recently added</Text>
          <Recent />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  header: {
    paddingTop: 34,
    paddingLeft: 12,
    fontSize: 28,
    fontWeight: "500",
    fontFamily: "",
  },
  imgBg: {
    height: 200,
  },
});
