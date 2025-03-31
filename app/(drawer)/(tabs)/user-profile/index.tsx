import { View, Text, Image, SafeAreaView, TouchableOpacity, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { router, useNavigation } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { useAuth } from '@/context/Auth';
import { List } from "react-native-paper";

const UserProfile = () => {
    const { user, userType, profilePicture } = useAuth();
    const navigation = useNavigation();
    const handleBack = () => {
      router.replace("/(drawer)/(tabs)");
    };
  return (
    <SafeAreaProvider>
      <SafeAreaView className="px-4">
        <View className="flex-row justify-between items-center py-4">
          <TouchableOpacity
            className="w-12 h-12 rounded-tl-lg rounded-br-lg flex items-center justify-center"
            onPress={handleBack}
          >
            <AntDesign name="left" size={20} color="#262626" />
          </TouchableOpacity>
          <Text className="text-lg font-bold text-gray-800">Setting</Text>
          <TouchableOpacity>
            <AntDesign name="setting" size={30} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
              <View style={styles.imgContainer}>
                <Image
                  source={
                    profilePicture
                      ? { uri: profilePicture } // Ensure correct format
                      : require("@/assets/images/user.webp") // Default image
                  }
                  style={styles.image}
                />
                <Text style={styles.userName}>{user?.displayName || "No User Name"}</Text>
                <Text>{userType || "Undefined Type"}</Text>
              </View>
              <View style={{ gap: 16 }}>
                <List.Item
                  title="My Profile"
                  style={styles.listRow}
                  titleStyle={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#262626",
                  }}
                  left={(props) => (
                    <List.Icon
                      {...props}
                      icon="account"
                      style={styles.listIcon}
                      color="#D32F2F"
                    />
                  )}
                  right={(props) => (
                    // <Link href={"/update-profile"}>
                     <Pressable onPress={() => {
                      router.push("/user-profile/updateProfile");
                    }}>
                      <List.Icon {...props} icon="chevron-right" color="#D4D4D4" />
                    </Pressable> 
                    
                  )}
                />
                <List.Item
                  title="Favourites"
                  style={styles.listRow}
                  titleStyle={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#262626",
                  }}
                  left={(props) => (
                    <List.Icon
                      {...props}
                      icon="cards-heart-outline"
                      style={styles.listIcon}
                      color="#D32F2F"
                    />
                  )}
                  right={(props) => (
                    <List.Icon {...props} icon="chevron-right" color="#D4D4D4" />
                  )}
                />
                <List.Item
                  title="Transaction History"
                  style={styles.listRow}
                  titleStyle={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#262626",
                  }}
                  left={(props) => (
                    <List.Icon
                      {...props}
                      icon="receipt"
                      style={{
                        backgroundColor: "#F0FDF4",
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      color="#16A34A"
                    />
                  )}
                  right={(props) => (
                    <List.Icon {...props} icon="chevron-right" color="#D4D4D4" />
                  )}
                />
                <List.Item
                  title="Compare"
                  style={styles.listRow}
                  titleStyle={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#262626",
                  }}
                  left={(props) => (
                    <List.Icon
                      {...props}
                      icon="compare-horizontal"
                      style={{
                        backgroundColor: "#EFF6FF",
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      color="#1E40AF"
                    />
                  )}
                  right={(props) => (
                    <List.Icon {...props} icon="chevron-right" color="#D4D4D4" />
                  )}
                />
                <List.Item
                  title="FAQ"
                  style={styles.listRow}
                  titleStyle={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#262626",
                  }}
                  left={(props) => (
                    <List.Icon
                      {...props}
                      icon="comment-question-outline"
                      style={{
                        backgroundColor: "#FAFAFA",
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      color="#262626"
                    />
                  )}
                  right={(props) => (
                    <List.Icon {...props} icon="chevron-right" color="#D4D4D4" />
                  )}
                />
              </View>
            </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default UserProfile

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  imgContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  userName: {
    fontSize: 16,
    color: "#262626",
    fontWeight: "bold",
  },
  listRow: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: "space-between",
    alignItems: "center",
  },
  listIcon: {
    backgroundColor: "#FEF2F2",
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  listTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#262626",
  },
});