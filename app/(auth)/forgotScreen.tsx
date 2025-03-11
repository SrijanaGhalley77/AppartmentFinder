import {
  View,
  Text,
  StyleSheet,
  TextInput,
  GestureResponderEvent,
} from "react-native";
import { useState } from "react";
import { Button, Checkbox, Divider } from "react-native-paper";
import { Link } from "expo-router";

export default function ForgotPage() {
  const [userName, setUserName] = useState("");
  const [password, setpassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Confirm your email</Text>
        <Text>Enter your account's email, and we'll send a password reset code.</Text>
      </View>
      <View style={styles.formInputContainer}>
        <TextInput
          style={styles.inputContainer}
          value={userName}
          onChangeText={(userName) => setUserName(userName)}
          placeholder="Enter your email"
          placeholderTextColor="#8c8c8c"
          keyboardType="email-address"
          cursorColor={"#525252"}
        ></TextInput>
        
      </View>
      <View style={{ width: "100%" }}>
        <Button
          mode="contained"
          onPress={() => console.log("Pressed")}
          style={styles.button}
          labelStyle={styles.buttonText}
        >
          Send Code
        </Button>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  formInputContainer: {
    width: "100%",
    flexDirection: "column",
  },
  logo: {
    height: 200,
    width: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    marginBottom: 40,
    fontWeight: "bold",
    color: "black",
  },
  inputContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: 50,
    color: "#262626",
    // backgroundColor: "#ECECEC",
    // borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: "#989898",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: "100%",
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 20,
    color: "#000",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#1E90FF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  checkboxContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  checkbox: {
    backgroundColor: "transparent",
    padding: 0,
    margin: 0,
  },
  checkedStyle: {
    backgroundColor: "transparent",
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  signUp: {
    color: "#000",
  },
  signUpLink: {
    color: "#1E90FF",
  },
  errorText: {
    color: "red",
    alignSelf: "flex-start",
    marginBottom: 10,
  },
});
