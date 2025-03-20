import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useState } from "react";
import { Checkbox, Divider } from "react-native-paper";
import { Link, router } from "expo-router";
import CustomButton from "@/components/ui/customButton";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { MaterialIcons } from "@expo/vector-icons";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore();

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userType, setUserType] = useState(""); // NEW FIELD
  const [profilePicture, setProfilePicture] = useState(""); // NEW FIELD
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [checked, setChecked] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const handleSignUp = async () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email || !emailRegex.test(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    if (!password || password.length < 6) {
      Alert.alert(
        "Weak Password",
        "Password must be at least 6 characters long.",
      );
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match. Please re-enter.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      // Update Firebase Auth profile
      await updateProfile(user, {
        displayName: userName,
        photoURL: profilePicture || "@/assets/images/user.webp", // Fallback image
      });

      // Store userType and profilePicture in Firestore
      await setDoc(doc(db, "users", user.uid), {
        userType: userType || "User", // Default role if not selected
        profilePicture:
          profilePicture || "https://example.com/default-avatar.png",
      });

      Alert.alert(
        "Sign-Up Successful!",
        `Welcome, ${userName}. Please log in.`,
      );
      router.navigate("/(auth)/loginScreen");
    } catch (error: any ) {
      Alert.alert("Sign-Up Failed!", error.message);
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
          value={userName}
          onChangeText={setUserName}
          placeholder="User Name"
          placeholderTextColor="#8c8c8c"
          cursorColor="#525252"
        />
        <TextInput
          className="w-full h-12 px-3 text-gray-800 border-b border-gray-400"
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor="#8c8c8c"
          keyboardType="email-address"
          cursorColor="#525252"
        />

        {/* NEW: User Type Input */}
        <TextInput
          className="w-full h-12 px-3 text-gray-800 border-b border-gray-400"
          value={userType}
          onChangeText={setUserType}
          placeholder="User Type (Admin, User, etc.)"
          placeholderTextColor="#8c8c8c"
          cursorColor="#525252"
        />

        {/* NEW: Profile Picture Input */}
        <TextInput
          className="w-full h-12 px-3 text-gray-800 border-b border-gray-400"
          value={profilePicture}
          onChangeText={setProfilePicture}
          placeholder="Profile Picture URL"
          placeholderTextColor="#8c8c8c"
          cursorColor="#525252"
        />

        <View className="w-full flex flex-row items-center border-b border-gray-400 pr-4">
          <TextInput
            className="flex-1 h-12 px-3 text-gray-800"
            value={password}
            onChangeText={setPassword}
            placeholder="Create Password"
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

        <View className="w-full flex flex-row items-center border-b border-gray-400 pr-4">
          <TextInput
            className="flex-1 h-12 px-3 text-gray-800"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirm Password"
            placeholderTextColor="#8c8c8c"
            secureTextEntry={!isConfirmPasswordVisible}
            cursorColor="#525252"
          />
          <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
            <MaterialIcons
              name={isConfirmPasswordVisible ? "visibility" : "visibility-off"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View className="w-full flex flex-row items-center justify-between m-0 p-0">
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
          style={{ padding: 0, marginVertical: -15, marginHorizontal: -20 }}
        />
      </View>

      <CustomButton
        title="Sign Up"
        onPress={handleSignUp}
        className="m-0 shadow-none"
      />
      <Divider className="w-full h-1 bg-[#262626] my-4" />

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
  );
};

export default RegisterPage;
