import { View, Platform, StyleSheet } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabBarProps} from '@react-navigation/bottom-tabs'
import { registerSensor } from 'react-native-reanimated/lib/typescript/core';
import TabBarBtn from './TabBarBtn';

export function TabBar({ state, descriptors, navigation } : BottomTabBarProps) {
  // const { colors } = useTheme();
  // const { buildHref } = useLinkBuilder();

  

  return (
    <View style={ styles.tabbar }>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabBarBtn 
          key={route.name}
          onPress={onPress}
          onLongPress={onLongPress}
          isFocused= {isFocused}
          routeName= {route.name}
          color = {isFocused ? '#6737ab7' : '#222'}
          label= {label}
          />
          // <PlatformPressable
          // key={route.name}
          //   href={buildHref(route.name, route.params)}
          //   accessibilityState={isFocused ? { selected: true } : {}}
          //   accessibilityLabel={options.tabBarAccessibilityLabel}
          //   testID={options.tabBarButtonTestID}
          //   onPress={onPress}
          //   onLongPress={onLongPress}
          //   style={styles.tabbarItem}
          // >
          //   {icon[route.name]({
          //     color: isFocused ? colors.primary : colors.text
          //   })}
          //   <Text style={{ color: isFocused ? colors.primary : colors.text }}>
          //     {label}
          //   </Text>
          // </PlatformPressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    position: 'absolute',
    bottom: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 35,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
  // tabbarItem: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   gap: 5,
  // }
})
