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

export default function RegisterPage() {
  const [userName, setUserName] = useState("");
  const [password, setpassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Start your journey with Us</Text>
        <Text>Please provide additional information for registration</Text>
      </View>
      <View style={styles.formInputContainer}>
        <TextInput
          style={styles.inputContainer}
          value={userName}
          onChangeText={(userName) => setUserName(userName)}
          placeholder="Email"
          placeholderTextColor="#8c8c8c"
          keyboardType="email-address"
          cursorColor={"#525252"}
        ></TextInput>
        <TextInput
          style={styles.inputContainer}
          value={password}
          onChangeText={(password) => setpassword(password)}
          placeholder="Create Password"
          placeholderTextColor="#8c8c8c"
          secureTextEntry={true}
          cursorColor={"#525252"}
        ></TextInput>
        <TextInput
          style={styles.inputContainer}
          value={password}
          onChangeText={(password) => setpassword(password)}
          placeholder="Confirm Password"
          placeholderTextColor="#8c8c8c"
          secureTextEntry={true}
          cursorColor={"#525252"}
        ></TextInput>
      </View>
      <View style={styles.checkboxContainer}>
        <Checkbox.Item
          label="Agree to Terms and condition"
          status={checked ? "checked" : "unchecked"}
          mode="android"
          accessibilityLabel="Agree to Terms and condition"
          position="leading"
          onPress={() => setChecked(!checked)}
          style={[styles.checkbox, checked && styles.checkedStyle]}
          rippleColor="#00000000" // Transparent ripple effect
          uncheckedColor="#666666"
          color="#2196F3"
        />
      </View>
      <View style={{ width: "100%" }}>
        <Button
          mode="contained"
          onPress={() => console.log("Pressed")}
          style={styles.button}
          labelStyle={styles.buttonText}
        >
          Login
        </Button>
      </View>
      <Divider
        style={{ height: 2, backgroundColor: "#000", marginVertical: 16 }}
      />
      <View>
        <Text>
          Have an account? <Link href="/">Login</Link>
        </Text>
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
