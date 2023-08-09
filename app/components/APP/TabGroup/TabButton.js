import {Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";
import {COLORS, FONTS} from "../../../constants";
import {moderateScale, rh, rw} from "../../../config/scale";

export const ACTIVE_TAB_TYPE = {
  ACTIVE_LINE: "activeLine",
  ACTIVE_POINT: "activePoint",
};
export default function TabButton({
  tabTitle,
  style,
  active,

  onPress,
  activeType,
}) {
  return (
    <Pressable
      style={({pressed}) =>
        pressed
          ? [styles.container, styles.pressed, style]
          : [styles.container, style]
      }
      onPress={onPress}>
      <View
        style={[
          styles.content,
          {
            borderBottomColor:
              activeType === ACTIVE_TAB_TYPE?.ACTIVE_LINE && active
                ? COLORS.AppGreenColor
                : COLORS.white,
          },
        ]}>
        <Text
          style={[
            styles.title,
            {
              color: active ? COLORS.textBlackColor : COLORS.AppGray,
            },
          ]}>
          {tabTitle}
        </Text>
        {activeType === ACTIVE_TAB_TYPE?.ACTIVE_POINT && active && (
          <View style={styles.activePoint} />
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  content: {
    borderBottomWidth: 2,
    height: rh(55),
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    ...FONTS.h4,
    fontWeight: "700",
    color: "#A9A9A9",
  },
  pressed: {
    opacity: 0.75,
  },
  activePoint: {
    width: rw(7),
    height: rw(7),
    backgroundColor: COLORS.AppGreenColor,
    borderRadius: moderateScale(50),
    position: "absolute",
    bottom: 0,
  },
});
