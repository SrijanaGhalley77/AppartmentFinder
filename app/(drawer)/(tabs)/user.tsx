import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import UserProfile from "@/components/userProfile";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

function UserPage() {
  const navigation = useNavigation();

  const onPress = () => {
    // navigation.navigate("/")
    console.log("pressed Back btn");
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.backIcon} onPress={onPress}>
              <AntDesign name="left" size={20} color="#262626" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Setting</Text>
            <TouchableOpacity>
              <AntDesign name="setting" size={30} color="#000" />
            </TouchableOpacity>
          </View>
          <UserProfile />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default UserPage;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#262626",
    fontWeight: "bold",
  },
  backIcon: {
    // backgroundColor: "#242424",
    width: 45,
    height: 45,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
