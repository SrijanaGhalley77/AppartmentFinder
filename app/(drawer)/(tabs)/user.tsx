import { View, Text } from "react-native";
import UserProfile from "@/components/userProfile";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

function UserPage() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <UserProfile />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default UserPage;
