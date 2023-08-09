import {StyleSheet, Text, View} from "react-native";
import React from "react";
import FastImage from "react-native-fast-image";

import {CustomButton, RootScreen} from "../../components";
import {COLORS, FONTS, IMAGES} from "../../constants";
import {rh, rw} from "../../config/scale";

export function Onboarding({navigation}) {
  function onNextPress() {
    navigation.replace("AuthStack");
  }
  return (
    <RootScreen>
      <View style={styles.imageContainer}>
        <FastImage source={IMAGES.hotelOnBoradingImg1} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Travel with no worry</Text>
        <Text style={styles.subTitle}>
          You can now experience the next level travel experience for hotel
          bookings.
        </Text>
      </View>
      <View style={styles.nextButtonContainer}>
        <CustomButton title="Next" onPress={onNextPress} />
      </View>
    </RootScreen>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: rw(326),
    height: rh(402),
    borderTopRightRadius: rw(20),
    borderBottomRightRadius: rw(20),
    overflow: "hidden",
    left: -2,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    paddingHorizontal: rw(20),
    paddingVertical: rh(30),
    width: rw(324),
  },
  title: {
    ...FONTS.h1,
    fontWeight: "700",
    lineHeight: 33,
    marginVertical: rh(10),
    color: COLORS.textBlackColor,
  },
  subTitle: {
    ...FONTS.h4,
    fontWeight: "400",
    lineHeight: 24,
    color: COLORS.textSubColor,
  },
  nextButtonContainer: {
    position: "absolute",
    bottom: rh(50),
    alignSelf: "center",
    width: "50%",
  },
});
