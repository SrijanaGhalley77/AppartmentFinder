import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import SearchBar from "@/components/ui/searchBar";
import CustomButton from "@/components/ui/customButton";
import { AntDesign } from "@expo/vector-icons"; // 👈 Import icon
import { router } from "expo-router";
import ExploreCard from "@/components/searchExplore";

const backBtn = () => {
  router.replace("/(drawer)/(tabs)")
}
function SearchPage() {
  return (
    <SafeAreaView className="bg-[#fff] flex-1">
      <View className="flex flex-row justify-center gap-[16px] items-center	px-6">
        <TouchableOpacity onPress={backBtn}>
          <AntDesign name="left" size={20} color="#262626" style={{ margin: 0, fontWeight: "bold"}} />
        </TouchableOpacity>
        <SearchBar
          searchbarStyle={{
            width: 250,
            borderWidth: 1,
            borderColor: "#D4D4D4",
          }}
          className="justify-end w-[300px] bg-transparent p-0 m-0"
          filterIconSize={20}
          filterIconStyle="border-[1px] border-[#D4D4D4]"
        />
      </View>
      <ExploreCard />
    </SafeAreaView>
  );
}

export default SearchPage;
