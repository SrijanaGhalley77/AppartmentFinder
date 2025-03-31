import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { DrawerBtn } from "@/components/ui/drawerOpnBtn";
import SearchBar from "@/components/ui/searchBar";
import AvatarIcon from "@/components/ui/avatar";
import Category from "@/components/ui/categoryCard.old1";
import Recent from "@/components/ui/recentCard";

export default function homePage() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Background Image with Header */}
          <ImageBackground
            source={require("@/assets/images/bg.avif")}
            style={styles.imgBg}
          >
            <View style={styles.headerContainer}>
              <DrawerBtn />
              <AvatarIcon />
            </View>

            {/* Title & SearchBar */}
            <View style={styles.searchContainer}>
              <Text style={styles.titleText}>
                Property Hub for all your needs
              </Text>
              <SearchBar style={styles.searchBar} />
            </View>
          </ImageBackground>

          {/* Scrollable Content */}
          <View style={styles.cardContainer}>
            <View>
              <Text style={styles.header}>Categories</Text>
              <Category />
            </View>
            <View className="p-3">
              <Text style={styles.header}>Recently added</Text>
              <Recent />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    paddingBottom: 50, // Prevents bottom content cutoff
  },
  imgBg: {
    height: 200,
  },
  headerContainer: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  searchContainer: {
    position: "relative",
    paddingHorizontal: 20,
  },
  titleText: {
    paddingTop: 30,
    fontSize: 32,
    lineHeight: 42,
    color: "#ffffff",
    fontWeight: "900",
  },
  searchBar: {
    position: "absolute",
    top: 116,
    alignSelf: "center",
  },
  cardContainer: {
    gap: 8,
    paddingTop: 54,
  },
  header: {
    paddingLeft: 12,
    fontSize: 20,
    fontWeight: "600",
  },
});
