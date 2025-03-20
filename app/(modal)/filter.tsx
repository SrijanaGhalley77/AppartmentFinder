import { View, Text } from "react-native";
import React from "react";
import CustomButton from "@/components/ui/customButton";

const FilterPage = () => {
  return (
    <View>
      <View>
        <Text className="font-bold text-[16px] leading-[24px]">Sort by</Text>
        <View className="flex flex-row gap-[12px]">
          <CustomButton
            title="Recomendations"
            bgVariant="outline"
            textVariant="primary"
            className="w-[100px] p-4"
          />
          <CustomButton title="Newest" className="w-[50px]" />
          <CustomButton title="Lowest price" className="w-[50px]" />
        </View>
      </View>
      <View>
        <Text>Bedroom</Text>
        <View className="flex flex-row gap-[12px]">
          <CustomButton title="1" className="w-[90px]" />
          <CustomButton title="2" className="w-[90px]" />
          <CustomButton title="3" className="w-[90px]" />
        </View>
      </View>
    </View>
  );
};

export default FilterPage;
