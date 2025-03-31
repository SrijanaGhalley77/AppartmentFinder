import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
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
    <View className="flex-1 px-[12px]">
      <Text className="text-xl font-bold mb-4">Explore</Text>
      <FlatList
        data={data.locations}
        numColumns={2}
        columnWrapperStyle={{ gap: 16 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              console.log("Explore card pressed")
          }}
          >
            <ImageBackground
              source={{
                uri:
                  item.apartments[0]?.images[0]?.url ||
                  "https://via.placeholder.com/100",
              }}
              resizeMode="cover"
              imageStyle={{borderRadius: 6}}
              className="w-[178px] h-[50px] "
            >
              <Text className="text-lg font-bold text-[#ffffff] self-center items-center">
                {item.name}
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ExploreCard;
