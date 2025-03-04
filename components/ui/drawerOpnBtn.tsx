import { View, Text, Button, Pressable, Platform } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

export const DrawerBtn = () => {
  const navigation = useNavigation();
  
  const onToggle = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  }

  return (
    <Pressable
      onPress={onToggle}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}    //Expands the touch area by 10 pixels in all directions
    //   android_ripple={{ color: '#ccc' }}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1,
          padding: 4,
        }
      ]}
    >
      <Ionicons
        name= 'menu'
        size={34}
        color="#ffffff"
      />
    </Pressable>
  )
}