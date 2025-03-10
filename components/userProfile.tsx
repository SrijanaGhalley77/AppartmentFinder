import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React from "react";

function UserProfile() {
  return (
    <View>
      <Image
        source={require("../assets/images/user.webp")}
        style={styles.image}
      />
      <Text>User Name</Text>
    </View>
  );
}

export default UserProfile;

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 150,
    height: 150,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
});
