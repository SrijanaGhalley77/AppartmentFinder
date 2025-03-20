import { View, Text, TextInput, GestureResponderEvent } from "react-native";
import { useState } from "react";
import CustomButton from "@/components/ui/customButton";
export default function ForgotPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View className="flex flex-col w-full h-full justify-center items-center bg-[#fff] px-5 gap-10">
      <View className="w-full flex flex-col gap-8 justify-center items-center">
        <Text className="text-4xl font-bold">Confirm your email</Text>
        <Text className="text-gray-600 font-medium text-center">
          Enter your account's email, and we'll send a password reset code.
        </Text>
      </View>

      <View className="w-full">
        <TextInput
          className="w-full h-12 px-3 text-gray-800 border-b border-gray-400"
          value={email}
          onChangeText={(email) => setEmail(email)}
          placeholder="Enter your email"
          placeholderTextColor="#8c8c8c"
          keyboardType="email-address"
          cursorColor="#525252"
        />
      </View>

      
        <CustomButton
          title="Send Code"
          onPress={() => console.log("Pressed")}
          className="w-full h-12"
        />
    </View>
  );
}
