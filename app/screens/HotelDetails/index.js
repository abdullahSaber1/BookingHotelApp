import {StyleSheet, Text, View} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import FastImage from "react-native-fast-image";
import AntDesign from "react-native-vector-icons/AntDesign";

import {CustomButton, RootScreen} from "../../components";
import {COLORS, FONTS, SIZES} from "../../constants";
import {moderateScale, rh, rw} from "../../config/scale";

export function HotelDetails({route, navigation}) {
  const hotelDetails = route?.params?.placeDetails;
  console.log("HotelDetails =>", hotelDetails);

  // Render Header Back
  function headerTitleBack() {
    return (
      <View style={styles.container}>
        <Ionicons
          name="arrow-back-sharp"
          size={moderateScale(30)}
          color={COLORS.textBlackColor}
          ionicons
          onPress={() => navigation.goBack()}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Description</Text>
        </View>
      </View>
    );
  }

  // Render Small Hotel Card

  function renderHotelCard() {
    return (
      <View style={styles.cardContainer}>
        <FastImage
          source={{uri: hotelDetails?.imageUrl}}
          style={styles.cardImage}
        />
        <View style={styles.content}>
          <Text style={styles.cardName}>{hotelDetails?.place?.name}</Text>
          <Text style={styles.address}>{hotelDetails?.formattedAddress}</Text>
          <View style={styles.ratingContainer}>
            <AntDesign name="star" size={24} color={COLORS.AppYellow} />
            <Text style={styles.ratingNumber}>{hotelDetails?.rating}</Text>
            <Text style={styles.numberOfReviews}>
              {`(${hotelDetails?.numberOfReviews} Reviews)`}
            </Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <RootScreen style={styles.rootScreen}>
      {headerTitleBack()}
      {renderHotelCard()}
      <Text style={styles.overview}>
        Tropicasa De Hotel is high rated hotels with 1000+ reviews and we are
        always maintaning the quality for better rating and high attitude
        service for you.
      </Text>
      <Text style={styles.overview}>
        Tropicasa De Hotel is high rated hotels with 1000+ reviews and we are
        always maintaning the quality for better rating and high attitude
        service for you.
      </Text>
      <Text style={styles.overview}>
        You will be welcomed amongst olive trees, citron trees and magnolias, in
        gardens that hide exotic plants and in a wonderful outdoor pool with
        deck chairs.
      </Text>
      <View style={styles.bookButtonContainer}>
        <CustomButton title="Book" onPress={() => {}} />
      </View>
    </RootScreen>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    paddingHorizontal: rw(22),
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: rh(SIZES.base * 2),
  },
  titleContainer: {
    marginLeft: rw(5),
  },
  title: {
    ...FONTS.large,
    color: COLORS.textBlackColor,
  },
  cardContainer: {
    backgroundColor: COLORS.white,
    width: rw(324),
    borderRadius: moderateScale(10),
    padding: rw(10),
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    width: "80%",
    marginLeft: rw(20),
  },
  cardImage: {
    width: rw(95),
    height: rh(95),
    borderRadius: moderateScale(10),
  },
  cardName: {
    ...FONTS.h3,
    fontWeight: "700",
    marginVertical: rh(10),
    color: COLORS.textBlackColor,
    width: "80%",
  },
  address: {
    ...FONTS.xsmall,
    color: COLORS.AppGray,
    width: "80%",
  },
  numberOfReviews: {
    ...FONTS.small,
    color: COLORS.AppGray,
    fontWeight: "400",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: rh(5),
  },
  ratingNumber: {
    ...FONTS.h4,
    color: COLORS.textBlackColor,
    fontWeight: "700",
    paddingHorizontal: rw(10),
  },
  overview: {
    ...FONTS.small,
    color: COLORS.textSubColor,
    marginVertical: rw(20),
  },
  bookButtonContainer: {
    position: "absolute",
    bottom: rh(50),
    alignSelf: "center",
    width: "60%",
  },
});
