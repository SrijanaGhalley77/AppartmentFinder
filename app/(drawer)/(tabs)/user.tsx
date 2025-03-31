import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UserProfile from "./user-profile";
import UpdateProfilePage from "./user-profile";

function UserPage() {
  const stack = createStackNavigator();

  return (
    <stack.Navigator>
      <stack.Screen
        name="/user-profile"
        options={{ headerShown: false }}
        component={UserProfile}
      />
      <stack.Screen
        name="/user-profile/updateProfile"
        options={{ headerShown: true }}
        component={UpdateProfilePage}
      />
    </stack.Navigator>
  );
}

export default UserPage;
