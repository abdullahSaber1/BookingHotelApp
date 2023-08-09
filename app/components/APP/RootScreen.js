import {Platform, StyleSheet, View} from "react-native";
import React from "react";
import {COLORS} from "../../constants";
import {rh} from "../../config/scale";

export function RootScreen({style, children}) {
  return <View style={[styles.rootScreen, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: COLORS.AppMainBackgroundColor,
    paddingTop: Platform.OS === "ios" ? rh(50) : rh(40),
  },
});
