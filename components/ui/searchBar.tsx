import { View, Pressable, ViewStyle, TextStyle } from "react-native";
import { Searchbar } from "react-native-paper";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

// Add type definition for props
interface SearchBarProps {
  style?: ViewStyle;
  className?: string; // className prop for NativeWind (Tailwind CSS classes)
  searchbarStyle?: TextStyle;
}

const SearchBar = ({ style, className, searchbarStyle }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View
      style={style}
      className={`w-[390px] h-[70px] p-10 flex-row gap-[8px] justify-center items-center self-center rounded-xl bg-[#fafafa] ${className}`}
    >
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        mode="bar"
        style={
          ([{
            width: 320,
            height: 50,
            backgroundColor: "#eeeeee",
            borderRadius: 6,
            alignItems: "center",
          }, searchbarStyle])
        }
      />
      <Pressable className="w-[45px] h-[45px] bg-[#eeeeee] rounded-full items-center justify-center">
        <Ionicons name="options" size={26} color="#000" />
      </Pressable>
    </View>
  );
};

export default SearchBar;
