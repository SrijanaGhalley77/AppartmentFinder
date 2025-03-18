import { View, Text, TextInput, GestureResponderEvent } from "react-native";
import { useState } from "react";
import { Checkbox, Divider } from "react-native-paper";
import { Link, router, useRouter } from "expo-router";
import CustomButton from "@/components/ui/customButton";
// import auth from "@react-native-firebase/auth";
// import { FirebaseError } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "@react-native-firebase/auth";

 const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  // const onLogin = async () => {
  //   setIsLoading(true);
  //   try {
  //     await auth().signInWithEmailAndPassword(userName, password);
  //     // router.navigate("/(drawer)/(tabs)");
  //   } catch (e: any) {
  //     const err = e as FirebaseError;
  //     alert("Sign in failed: " + err.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
   // };
   const auth = getAuth();
   const handleLogIn = async () => {
     try {
      
       const userCredential = await signInWithEmailAndPassword(
         auth,
         email,
         password,
       );
       alert("Signed In successfully" + userCredential.user);
       router.push("/(drawer)/(tabs)")
     } catch (error) {
      alert("Sign In failed:" + error)
     }

   }

  return (
    <View className="flex flex-col w-full h-full justify-center items-center bg-[#fff] px-5 gap-8">
      <View className="w-full flex flex-col gap-8 justify-center items-center">
        <Text className="text-3xl font-bold">Welcome Back</Text>
        <Text className="text-gray-600 font-medium text-center">
          Welcome Back, Please Enter your details below
        </Text>
      </View>

      <View className="w-full flex flex-col gap-4">
        <TextInput
          className="w-full h-12 px-3 text-gray-800 border-b border-gray-400"
          value={userName}
          onChangeText={(userName) => setUserName(userName)}
          placeholder="User Name/ Email"
          placeholderTextColor="#8c8c8c"
          keyboardType="email-address"
          cursorColor="#525252"
        />

        <TextInput
          className="w-full h-12 px-3 text-gray-800 border-b border-gray-400"
          value={password}
          onChangeText={(password) => setpassword(password)}
          placeholder="Password"
          placeholderTextColor="#8c8c8c"
          secureTextEntry={true}
          cursorColor="#525252"
        />
      </View>

      <View className="w-full flex flex-row items-center justify-between pr-6">
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
          style={{ padding: 0, margin: 0 }}
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
}
export default LoginPage;