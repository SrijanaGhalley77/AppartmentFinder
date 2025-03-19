import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import { useGetDataQuery } from "@/services/GetApiCall";

const ExploreCard = () => {
  const { data, error, isLoading } = useGetDataQuery("");

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-100">
        <ActivityIndicator size="large" color="#2563eb" />
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center bg-red-100 p-4">
        <Text className="text-red-500 text-lg font-semibold">
          Error fetching data!
        </Text>
      </View>
    );
  }

  if (!data || !data.locations || data.locations.length === 0) {
    return (
      <View className="flex-1 justify-center items-center bg-yellow-100 p-4">
        <Text className="text-yellow-600 text-lg font-semibold">
          No data available.
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 px-[28px]">
      <Text className="text-xl font-bold mb-4">Explore</Text>
      <FlatList
        data={data.locations}
        horizontal
        // columnWrapperStyle={{ gap: 12, paddingHorizontal: 14, paddingTop: 8 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="w-[128px] h-[50px] flex-row items-center bg-white mb-2 rounded-[6px] shadow-sm border border-gray-200">
            <ImageBackground
              source={{
                uri:
                  item.apartments[0]?.images[0]?.url ||
                  "https://via.placeholder.com/100",
              }}
              resizeMode="cover"
              className="w-full h-full p-0 m-0"
            >
              <Text className="text-lg font-bold text-[#ffffff]">
                {item.name}
              </Text>
            </ImageBackground>
          </View>
        )}
      />
    </View>
  );
};

export default ExploreCard;
