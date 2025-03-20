import {
  View,
  Text,
  TextInput,
  GestureResponderEvent,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { Checkbox, Divider } from "react-native-paper";
import { Link, router } from "expo-router";
import CustomButton from "@/components/ui/customButton";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { MaterialIcons } from "@expo/vector-icons"; // 👈 Import icon

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [checked, setChecked] = useState(false);

  const handleLogIn = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email || !emailRegex.test(email)) {
      Alert.alert("Invalid email", "Please enter a valid email address.");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        Alert.alert("Login successful!", `Hello, ${user.email}`);
        router.navigate("/(drawer)/(tabs)");
      })
      .catch((error) => {
        Alert.alert("Login failed!", error.message);
      });
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View className="flex flex-col w-full h-full justify-center items-center bg-[#fff] px-6 gap-8">
      <View className="w-full flex flex-col gap-8 justify-center items-center">
        <Text className="text-3xl font-bold">Welcome Back</Text>
        <Text className="text-gray-600 font-medium text-center">
          Welcome Back, Please Enter your details below
        </Text>
      </View>

      <View className="w-full flex flex-col gap-4 px-1">
        <TextInput
          className="w-full h-12 px-3 text-gray-800 border-b border-gray-400"
          value={email}
          onChangeText={setEmail}
          placeholder="User Name/ Email"
          placeholderTextColor="#8c8c8c"
          keyboardType="email-address"
          cursorColor="#525252"
        />

        {/* Password Input with Toggle Visibility */}
        <View className="w-full flex flex-row items-center border-b border-gray-400 pr-4">
          <TextInput
            className="flex-1 h-12 px-3 text-gray-800"
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            placeholderTextColor="#8c8c8c"
            secureTextEntry={!isPasswordVisible}
            cursorColor="#525252"
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <MaterialIcons
              name={isPasswordVisible ? "visibility" : "visibility-off"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View className="w-full flex flex-row items-center justify-between pr-4">
        <Checkbox.Item
          label="Remember Me"
          status={checked ? "checked" : "unchecked"}
          mode="android"
          accessibilityLabel="Remember me"
          position="leading"
          onPress={() => setChecked(!checked)}
          rippleColor="#00000000"
          uncheckedColor="#666666"
          color="#2196F3"
          labelStyle={{ fontWeight: "500", fontSize: 14, color: "gray-700" }}
          style={{ padding: 0, marginVertical: -20, marginHorizontal: -18 }}
        />
        <Link
          href="/forgotScreen"
          className="text-gray-700 font-medium underline"
        >
          Forgot Password?
        </Link>
      </View>

      <CustomButton
        title="Login"
        onPress={handleLogIn}
        className="h-14 shadow-none"
      />

      <Divider className="w-full h-2 bg-[#262626] my-4" />

      <View>
        <Text className="text-gray-400">
          Don't have an account?{" "}
          <Link href="/registerScreen" className="text-blue-600 font-semibold">
            Register
          </Link>
        </Text>
      </View>
    </View>
  );
};

export default LoginPage;
