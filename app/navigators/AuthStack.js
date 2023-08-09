import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {MainAuth} from "../screens";

export default function AuthStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MainAuth" component={MainAuth} />
    </Stack.Navigator>
  );
}
