import { View, Text } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper';


const AvatarIcon = () => {
  return (
    <View style={{padding: 4}}>
        <Avatar.Image size={40} source={require('@/assets/images/user.webp')} />
    </View>
  )
}

export default AvatarIcon