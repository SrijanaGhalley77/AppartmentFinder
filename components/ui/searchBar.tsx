import { View, Text, Pressable } from 'react-native'
import { Searchbar } from 'react-native-paper';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';


const SearchBar = () => {
    const [searchQuery, setSearchQuery ] = useState('');
  return (
    <View
      style={{
        width: 380,
        height: 70,
        flexDirection: "row",
        gap: 8,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 20,
        backgroundColor: "#fafafa",
        position: 'absolute',
        top: 116,
      }}
    >
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        mode="bar"
        style={{ width: 320, height: 50 }}
      />
      <Pressable
        style={{
          width: 40,
          height: 40,
          backgroundColor: "#FAFAFA",
          borderRadius: 100,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons name="options" size={24} color="#000" />
      </Pressable>
    </View>
  );
}

export default SearchBar