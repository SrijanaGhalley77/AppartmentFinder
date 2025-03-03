import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text, Image, Button } from "react-native";
// import { Button } from "react-native-paper";

export function CustomDrawerContent(props: any) {
  const router = useRouter();
  const { top, bottom } = useSafeAreaInsets();

  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={{ backgroundColor: "#dde3fe", height: 'lvh' }}
    >
      <View
        style={{
          width: "100%",
          // height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/images/user.webp")}
          style={{
            width: 150,
            height: 150,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 100,
          }}
        />
        <Text>User Name</Text>
      </View>

      <View>
        <DrawerItemList {...props} />
        <DrawerItem label={"Logout"} onPress={() => router.replace("/")} />
      </View>

      <View
        style={{
          paddingBottom: 10 + bottom,
          borderTopColor: "#dde3fe",
          paddingHorizontal: 20,
          paddingVertical: 5,
        }}
        // className="border-t border-[#dde3fe] px-20 py-5"
      >
        {/* <Button mode="contained" buttonColor="#5363df" textColor="#fff">
          Contact Us
        </Button> */}
        <Button title="Contact Us" onPress={() => {null}} />
      </View>
    </DrawerContentScrollView>
  );
}
