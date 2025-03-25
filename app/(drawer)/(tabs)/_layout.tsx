import { Tabs } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';
import { TabBar } from '@/components/TabBar'

 const TabLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarShowLabel: true,
        headerShown: false,
      }}
      >
      <Tabs.Screen
        name="index"
        options={{
        title: 'Home',
        }}
      />
        <Tabs.Screen
          name="notification"
          options={{
            title: 'Notification',
          }}
        />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: 'User',
        }}
      />

      
    </Tabs>
  );
}
 export default TabLayout