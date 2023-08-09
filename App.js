import {StyleSheet, View} from "react-native";
import React from "react";
import SplashScreen from "react-native-splash-screen";
import RootStack from "./app/navigators/RootStack";

export default function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={styles.rootScreen}>
      <RootStack />
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
