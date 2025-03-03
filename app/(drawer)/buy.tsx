import { View, Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SafeAreaView } from 'react-native'

const BuyRoute = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
      <Text>HEllo world</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default BuyRoute