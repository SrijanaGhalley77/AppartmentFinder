import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import {
  getAuth,
  updateProfile,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import { getFirestore, doc, updateDoc, getDoc } from "firebase/firestore";
import CustomButton from "@/components/ui/customButton";

const db = getFirestore();
const auth = getAuth();

const UpdateProfilePage = () => {
  const user = auth.currentUser;
  const [userName, setUserName] = useState(user?.displayName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setUserType(userDoc.data().userType || "");
          setProfilePicture(userDoc.data().profilePicture || "");
        }
      }
    };
    fetchUserData();
  }, [user]);

  const handleUpdate = async () => {
    if (!user) return;

    try {
      if (userName !== user.displayName || profilePicture) {
        await updateProfile(user, {
          displayName: userName,
          photoURL: profilePicture,
        });
      }

      if (email !== user.email) {
        await updateEmail(user, email);
      }

      if (password) {
        await updatePassword(user, password);
      }

      await updateDoc(doc(db, "users", user.uid), {
        userType,
        profilePicture,
      });

      Alert.alert(
        "Profile Updated",
        "Your profile has been successfully updated.",
      );
    } catch (error: any) {
      Alert.alert("Update Failed", error.message);
    }
  };

  return (
    <View className="flex-1 justify-center items-center px-5">
      <Text className="text-2xl font-bold mb-4">Update Profile</Text>
      <TextInput
        className="w-full h-12 px-3 border-b border-gray-400"
        value={userName}
        onChangeText={setUserName}
        placeholder="Username"
      />
      <TextInput
        className="w-full h-12 px-3 border-b border-gray-400"
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        className="w-full h-12 px-3 border-b border-gray-400"
        value={userType}
        onChangeText={setUserType}
        placeholder="User Type"
      />
      <TextInput
        className="w-full h-12 px-3 border-b border-gray-400"
        value={profilePicture}
        onChangeText={setProfilePicture}
        placeholder="Profile Picture URL"
      />
      <TextInput
        className="w-full h-12 px-3 border-b border-gray-400"
        value={password}
        onChangeText={setPassword}
        placeholder="New Password (optional)"
        secureTextEntry
      />
      <CustomButton title="Update Profile" onPress={handleUpdate} />
    </View>
  );
};

export default UpdateProfilePage;
