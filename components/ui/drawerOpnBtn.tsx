import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native';

export const DrawerBtn = () => {
    const navigation = useNavigation();

    const onToggle = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    }

  return (
    <View style={{ justifyContent: "flex-start", alignItems: "flex-start", margin: 0, padding: 0,}}>
      <Button title='Open Drawer' onPress={onToggle}/>
    </View>
  )
}

