import { ImageBackground, StyleSheet, View, Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { DrawerBtn } from "@/components/ui/drawerOpnBtn";
import SearchBar from "@/components/ui/searchBar";
import AvatarIcon from "@/components/ui/avatar";
import Category from "@/components/ui/categoryCard.old1";
import Recent from "@/components/ui/recentCard";

export default function homePage() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ImageBackground
          source={require("@/assets/images/bg.avif")}
          style={styles.imgBg}
        >
          <View
            style={{
              height: 50,
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
                fontSize: 32,
                lineHeight: 42,
                color: "#ffffff",
                fontWeight: "900",
                textOverflow: "wrap",
              }}
            >
              Property Hub for all your needs
            </Text>
            <SearchBar />
          </View>
        </ImageBackground>
        <View style={styles.cardContainer}>
          <View>
            <Text style={styles.header}>Categories</Text>
            <Category />
          </View>
          <View>
            <Text style={styles.header}>Recently added</Text>
            <Recent />
          </View>
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
  cardContainer: {
    gap: 8,
    // flexDirection: "column",
    paddingTop: 54,
  },
  header: {
    paddingLeft: 12,
    fontSize: 20,
    fontWeight: "600",
  },
  imgBg: {
    height: 200,
  },
});
