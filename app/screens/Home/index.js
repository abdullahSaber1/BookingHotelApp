import {StyleSheet, Text, View} from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import axios from "axios";

import {HotelList, RootScreen, TabGroup} from "../../components";
import {rh, rw} from "../../config/scale";
import {COLORS, FONTS} from "../../constants";
import {calcTime} from "../../utils/CalcTime";

import {calculationRegion} from "../../utils/CurrentLocation";
import {ACTIVE_TAB_TYPE} from "../../components/APP/TabGroup/TabButton";
import {apiKey, placesUrl} from "../../config/constants";

export function Home() {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [latitude, setLatitude] = React.useState(null);
  const [longitude, setLongitude] = React.useState(null);
  const [hotels, setHotels] = React.useState([]);

  React.useEffect(() => {
    calculationRegion(setLatitude, setLongitude);
  }, []);

  React.useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get(placesUrl, {
          params: {
            location: `${latitude},${longitude}`,
            radius: 2000, // Radius in meters
            type: "lodging",
            key: apiKey,
            keyword: "hotel",
          },
        });
        setHotels(response.data.results);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };

    fetchHotels();
  }, [longitude]);

  const tabGroup = [
    {
      key: "Recommend",
      sense: <HotelList hotels={hotels} />,
    },
    {
      key: "Popular",
      sense: <HotelList hotels={hotels} />,
    },
    {
      key: "Trending",
      sense: <HotelList hotels={hotels} />,
    },
  ];

  return (
    <RootScreen style={styles.rootScreen}>
      <View style={styles.awardedContainer}>
        <Feather name="award" size={rw(24)} color={COLORS.AppGray} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{calcTime()} ,</Text>
        <Text style={styles.title}>Bodaat !</Text>
      </View>
      <View style={styles.tabGroupContainer}>
        <TabGroup
          tabs={tabGroup}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          activeType={ACTIVE_TAB_TYPE?.ACTIVE_POINT}
        />
        <View style={styles.screenContainer}>
          {tabGroup[selectedTab].sense}
        </View>
      </View>
      <HotelList latitude={latitude} longitude={longitude} />
    </RootScreen>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    paddingHorizontal: rw(16),
    backgroundColor: COLORS.white,
  },
  awardedContainer: {
    alignSelf: "flex-end",
    paddingVertical: rh(10),
  },
  textContainer: {
    marginVertical: rh(20),
  },
  title: {
    ...FONTS.largeTitle,
    color: COLORS.textBlackColor,
    fontWeight: "700",
  },
  screenContainer: {
    paddingVertical: rw(30),
  },
});
