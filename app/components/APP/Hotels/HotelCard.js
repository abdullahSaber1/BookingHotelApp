import {Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";
import FastImage from "react-native-fast-image";
import AntDesign from "react-native-vector-icons/AntDesign";
import axios from "axios";
import {useNavigation} from "@react-navigation/native";

import {COLORS, FONTS} from "../../../constants";
import {moderateScale, rh, rw} from "../../../config/scale";
import {apiKey, imageUrl, placeUrl} from "../../../config/constants";

export function HotelCard({item}) {
  const navigation = useNavigation();
  const photoReference = item?.photos[0]?.photo_reference;
  const [placeDetails, setPlaceDetails] = React.useState({});

  React.useEffect(() => {
    async function fetchPlaceDetailsWithImages() {
      const detailsResponse = await axios.get(
        `${placeUrl}?key=${apiKey}&place_id=${item?.place_id}`,
      );
      const data = await detailsResponse?.data?.result;
      setPlaceDetails(data);
    }
    fetchPlaceDetailsWithImages();
  }, []);

  return (
    <Pressable
      style={({pressed}) =>
        pressed ? [styles.cardContainer, styles.pressed] : styles.cardContainer
      }
      onPress={() =>
        navigation.navigate("HotelDetails", {
          placeDetails: {
            imageUrl: `${imageUrl}?maxwidth=400&photoreference=${photoReference}&key=${apiKey}`,
            place: placeDetails,
            rating: item?.rating,
            numberOfReviews: placeDetails?.user_ratings_total,
            formattedAddress: placeDetails?.formatted_address,
          },
        })
      }>
      <FastImage
        source={{
          uri: `${imageUrl}?maxwidth=400&photoreference=${photoReference}&key=${apiKey}`,
        }}
        style={styles.imageBackgroundContainer}>
        <View style={styles.content}>
          <View style={styles.ratingContainer}>
            <AntDesign name="star" size={24} color={COLORS.AppYellow} />
            <Text style={styles.ratingNumber}>{item?.rating}</Text>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.name}>{item?.name}</Text>
            <Text style={styles.subName}>
              {placeDetails?.formatted_address}
            </Text>
          </View>
        </View>
      </FastImage>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "rgba(62, 62, 62, 0.3)",
    flex: 1,
  },
  cardContainer: {
    width: rw(260),
    height: rh(424),
    marginHorizontal: rw(10),
    overflow: "hidden",
    borderRadius: rw(25),
  },
  imageBackgroundContainer: {
    width: "100%",
    height: "100%",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: rw(74),
    height: rh(36),
    backgroundColor: "rgba(62, 62, 62, 0.6)",
    borderRadius: moderateScale(20),
    margin: rh(20),
    paddingHorizontal: rw(10),
    position: "absolute",
    right: 0,
  },
  ratingNumber: {
    ...FONTS.h4,
    color: COLORS.white,
    fontWeight: "700",
    paddingHorizontal: rw(10),
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    width: "100%",
    bottom: rh(20),
  },
  name: {
    ...FONTS.h3,
    color: COLORS.white,
  },
  subName: {
    ...FONTS.xsmall,
    color: COLORS.AppGray,
    width: "80%",
  },
  pressed: {
    opacity: 0.75,
  },
});
