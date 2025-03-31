import { View, Text } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper';
import { useAuth } from "@/context/Auth";


const AvatarIcon = () => {
      const { profilePicture } = useAuth();

  return (
    <View style={{padding: 4}}>
        <Avatar.Image size={40} source={
            profilePicture
              ? { uri: profilePicture } // Ensure correct format
              : require("@/assets/images/user.webp") // Default image
          } />
    </View>
  )
}

export default AvatarIcon