import { Link } from "@react-navigation/native";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";

const Category = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.cards}
        source={require("@/assets/images/bangkok.webp")}
      >
        <Text style={styles.h1}>Bangkok</Text>
        <Text style={styles.subHead}>
          View All
        </Text>
      </ImageBackground>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    margin: 0,
    gap: 0,
    marginHorizontal: 12,
  },
  cards: {
    width: "100%",
    height: "100%",
    margin: 0,
    padding: 10,
  },
  pic: {
    width: "100%",
    height: 250,
    padding: 0,
    margin: 0,
  },
  h1: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  subHead: {
    fontSize: 18,
    fontWeight: "400",
    color: "#fff",
  },
});
