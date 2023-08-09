import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Home, HotelDetails} from "../screens";

export default function MainStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HotelDetails" component={HotelDetails} />
    </Stack.Navigator>
  );
}
