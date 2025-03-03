import { StyleSheet } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
import { DrawerBtn } from '@/components/ui/drawerOpnBtn'

export default function homePage() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View className='flex-1 items-center justify-center bg-blue'>
          <DrawerBtn />
          <Text>HEllo world</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
