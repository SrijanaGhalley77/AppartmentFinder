import { View, Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SafeAreaView } from 'react-native'
import { DrawerBtn } from '@/components/ui/drawerOpnBtn'


const BuyRoute = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <DrawerBtn />
      <Text>HEllo world</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default BuyRoute