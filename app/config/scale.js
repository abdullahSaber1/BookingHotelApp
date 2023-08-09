import {Dimensions, PixelRatio, Platform} from "react-native";
import {isTablet} from "react-native-device-info";

//dimensions of design

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const SC_WIDTH = Dimensions.get("window").width;
const SC_HEIGHT = Dimensions.get("window").height;

const verticalScale = size => {
  const calculations = (SC_HEIGHT / guidelineBaseHeight) * size;
  return PixelRatio.roundToNearestPixel(calculations);
};

const horizontalScale = size => {
  const calculations = (SC_WIDTH / guidelineBaseWidth) * size;
  return PixelRatio.roundToNearestPixel(calculations);
};

const calcFont = size => {
  if (isTablet()) {
    if (SC_HEIGHT > 1000) {
      size = size * 1.7;
    } else if (SC_HEIGHT <= 1000 && SC_HEIGHT > 800) {
      size = size * 1.3;
    }
  }
  const newSize = size;

  if (Platform.OS === "ios") {
    return PixelRatio.roundToNearestPixel(newSize);
  } else {
    return PixelRatio.roundToNearestPixel(newSize) - 2;
  }
};

const moderateScale = (size, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

const rw = horizontalScale;
const rh = verticalScale;
const rf = calcFont;

export {rw, rh, rf, moderateScale, SC_WIDTH, SC_HEIGHT};
