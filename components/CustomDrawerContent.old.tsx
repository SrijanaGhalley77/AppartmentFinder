import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { useRouter } from 'expo-router'
import { View, Text, Image, Button } from 'react-native'
// import { Button } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export default function CustomDrawerContent( props: any) {
    const router = useRouter();
    const {top, bottom } = useSafeAreaInsets();

    return (
    <View >        
        <DrawerContentScrollView 
        {...props} 
        scrollEnabled={false} 
        // contentContainerStyle= {{ backgroundColor: '#dde3fe', marginTop: top}}

        >
            {/* <View>
                <Image 
                source={require('@/assets/images/bg.avif')} 
                className='w-[150px] h-[150px] self-center rounded-full'
                >
                </Image>
                <Text >User Name</Text>
            </View> */}
            <View >
                <DrawerItemList {...props} />
                <DrawerItem label={'Logout'} onPress={() => router.replace('/')} />
            </View>
        </DrawerContentScrollView>
        {/* <View
        style={{
            paddingBottom: 10 + bottom,
        }}
        // className="border-t border-[#dde3fe] px-20 py-5"
        >
            <Button mode='contained' buttonColor='#5363df' textColor='#fff'>Contact Us</Button>
        </View> */}
    </View>
  )
}
