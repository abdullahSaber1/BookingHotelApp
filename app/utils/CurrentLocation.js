import Geolocation from "@react-native-community/geolocation";
import {Alert, PermissionsAndroid} from "react-native";

export const calculationRegion = (setLatitude, setLongitude) => {
  // Request permission for location access
  Geolocation.requestAuthorization();
  Geolocation.getCurrentPosition(({coords}) => {
    console.log(coords);
    setLatitude(coords?.latitude);
    setLongitude(coords?.longitude);
  });

  // Get current location
};

export const requestLocationPermission = async (setLatitude, setLongitude) => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,

      {
        title: "Hotel Booking",
        message:
          "Hotel uses location service for Get Your Location " +
          "and only while you are using the application",
      },
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      // console.log("You can use the location");

      // Get current location
      Geolocation.getCurrentPosition(
        position => {
          const {latitude, longitude} = position.coords;
          console.log(latitude, longitude);
          setLatitude(latitude);
          setLongitude(longitude);
        },
        error => {
          console.error("Error getting location:", error);
          // requestLocationPermission();
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    } else {
      console.log("location permission denied");
      // requestLocationPermission();
      Alert.alert("Location permission denied , Please try again");
    }
  } catch (err) {
    // console.warn(err);
    requestLocationPermission();
  }
};
