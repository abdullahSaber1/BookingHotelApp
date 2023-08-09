import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import {COLORS, FONTS} from "../../../constants";
import {rh} from "../../../config/scale";

export function CustomButton({
  onPress,
  style,
  textStyle,
  title,
  loading,
  containerStyle,
  disabled,
}) {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({pressed}) => [
        pressed && styles.pressed,
        styles.rootScreen,
        containerStyle,
      ]}>
      <View
        style={[styles.buttonContainer, disabled && styles.disabled, style]}>
        {loading ? (
          <ActivityIndicator size="small" color={COLORS.white} />
        ) : (
          <Text style={[styles.title, textStyle]}>{title}</Text>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    overflow: "hidden",
    // width: "100%",
  },
  buttonContainer: {
    borderRadius: 60,
    height: rh(57),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.AppGreenColor,
    // elevation: 3,
    // shadowColor: "#000000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
  },
  disabled: {backgroundColor: COLORS.shadowYellow},
  title: {
    ...FONTS.normal,
    color: COLORS.white,
    fontWeight: "700",
  },
  pressed: {
    opacity: 0.75,
  },
});
