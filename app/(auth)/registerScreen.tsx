import { View, Text, TextInput, GestureResponderEvent } from "react-native";
import { useState } from "react";
import { Button, Checkbox, Divider } from "react-native-paper";
import { Link, router } from "expo-router";
import CustomButton from "@/components/ui/customButton";
import {
  createUserWithEmailAndPassword,
  getAuth
} from "@react-native-firebase/auth";
import { FirebaseError } from "firebase/app";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  // const onSignup = async () => {
  //   setIsLoading(true);
  //   try {
  //     await auth().createUserWithEmailAndPassword(email, password);
  //     alert("Registred Successfully, check your email and Please Login again")
  //     // router.navigate("/(auth)/loginScreen");
  //   } catch (e: any) {
  //     const err = e as FirebaseError;
  //     alert("Registration failed: " + err.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  const auth = getAuth();

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword( auth, email, password);
      router.replace("/(auth)/loginScreen");
    } catch (error) {
      alert('Registration error'+ error)
    }
  };

  return (
    <View className="flex flex-col w-full h-full justify-center items-center bg-[#fff] px-5 gap-6">
      <View className="w-full flex flex-col gap-4 justify-center items-center">
        <Text className="text-3xl font-bold">Start your journey with Us</Text>
        <Text className="text-gray-600 font-medium text-center">
          Please provide additional information for registration
        </Text>
      </View>

      <View className="w-full flex flex-col gap-4">
        <TextInput
          className="w-full h-12 px-3 text-gray-800 border-b border-gray-400"
          value={email}
          onChangeText={(email) => setEmail(email)}
          placeholder="Email"
          placeholderTextColor="#8c8c8c"
          keyboardType="email-address"
          cursorColor="#525252"
        />

        <TextInput
          className="w-full h-12 px-3 text-gray-800 border-b border-gray-400"
          value={password}
          onChangeText={(password) => setpassword(password)}
          placeholder="Create Password"
          placeholderTextColor="#8c8c8c"
          secureTextEntry={true}
          cursorColor="#525252"
        />

        <TextInput
          className="w-full h-12 px-3 text-gray-800 border-b border-gray-400"
          value={password}
          onChangeText={(password) => setpassword(password)}
          placeholder="Confirm Password"
          placeholderTextColor="#8c8c8c"
          secureTextEntry={true}
          cursorColor="#525252"
        />
      </View>

      <View className="w-full flex flex-row items-center justify-between">
        <Checkbox.Item
          label="Agree to Terms and condition"
          status={checked ? "checked" : "unchecked"}
          mode="android"
          accessibilityLabel="Agree to Terms and condition"
          position="leading"
          onPress={() => setChecked(!checked)}
          rippleColor="#00000000"
          uncheckedColor="#666666"
          color="#2196F3"
          labelStyle={{ fontWeight: "400", fontSize: 14, color: "gray-700" }}
          style={{ padding: 0, margin: 0 }}
        />
      </View>

      <CustomButton
        title="Sign Up"
        onPress={handleSignUp}
        className="m-0 shadow-none"
      />

      <Divider className="w-full h-1 bg-[#262626] my-4" />

      <View>
        <Text className="text-gray-400">
          Have an account?{" "}
          <Link
            href="/(auth)/loginScreen"
            className="text-blue-600 font-semibold"
          >
            Login
          </Link>
        </Text>
      </View>
    </View>
  );
};

export default RegisterPage;
