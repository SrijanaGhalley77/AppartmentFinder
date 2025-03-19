import { View, Pressable, StyleProp, ViewStyle, TextStyle } from "react-native";
import { Searchbar } from "react-native-paper";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

// Type definition for props
interface SearchBarProps {
  style?: StyleProp<ViewStyle>;
  className?: string;
  searchbarStyle?: StyleProp<ViewStyle & TextStyle>; // ✅ Fix here
  iconColor?: string;
  label?: string;
  filterIconSize?: number;
  filterIconStyle?: string;
}

const SearchBar = ({
  style,
  className,
  searchbarStyle,
  iconColor,
  label,
  filterIconSize,
  filterIconStyle,
}: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View
      style={style}
      className={`w-[380px] h-[70px] p-4 flex-row gap-[8px] justify-center items-center self-center rounded-xl bg-[#fafafa] ${className}`}
    >
      <Searchbar
        placeholder={label ?? "Search here"}
        onChangeText={setSearchQuery}
        value={searchQuery}
        mode="bar"
        style={[
          {
            width: 300,
            height: 50,
            backgroundColor: "#eeeeee",
            borderRadius: 6,
            alignItems: "center",
          },
          searchbarStyle as ViewStyle, 
        ]}
        inputStyle={{
          color: "#262626",
        }}
        iconColor={iconColor ?? "#262626"}
      />
      <Pressable
        className={`w-[45px] h-[45px] bg-[#eeeeee] rounded-full items-center justify-center ${filterIconStyle}`}
      >
        <Ionicons name="options" size={filterIconSize ?? 26} color="#262626" />
      </Pressable>
    </View>
  );
};

export default SearchBar;
