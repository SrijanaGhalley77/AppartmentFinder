import {
  View,
  Text,
  StyleSheet,
  TextInput,
  GestureResponderEvent,
} from "react-native";
import { useState } from "react";
import { Button, Checkbox, Divider } from "react-native-paper";
import { Link, router, useRouter } from "expo-router";

export default function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setpassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  const onLogin = () => {
    router.navigate("/(drawer)/(tabs)")
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome Back</Text>
        <Text>Welcome Back, Please Enter your details below</Text>
      </View>
      <View style={styles.formInputContainer}>
        <TextInput
          style={styles.inputContainer}
          value={userName}
          onChangeText={(userName) => setUserName(userName)}
          placeholder="User Name"
          placeholderTextColor="#8c8c8c"
          keyboardType="email-address"
          cursorColor={"#525252"}
        ></TextInput>
        <TextInput
          style={styles.inputContainer}
          value={password}
          onChangeText={(password) => setpassword(password)}
          placeholder="Password"
          placeholderTextColor="#8c8c8c"
          secureTextEntry={true}
          cursorColor={"#525252"}
        ></TextInput>
      </View>
      <View style={styles.checkboxContainer}>
        <Checkbox.Item
          label="Remember Me"
          status={checked ? "checked" : "unchecked"}
          mode="android"
          accessibilityLabel="Remember me"
          position="leading"
          onPress={() => setChecked(!checked)}
          style={[styles.checkbox, checked && styles.checkedStyle]}
          rippleColor="#00000000" // Transparent ripple effect
          uncheckedColor="#666666"
          color="#2196F3"
        />
        <Link href="/forgotScreen">Forgot Password?</Link>
      </View>
      <View style={{ width: "100%" }}>
        <Button
          mode="contained"
          onPress={onLogin}
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
          Don't have an account? <Link href="/registerScreen">Register</Link>
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
