import {rf} from "../config/scale";

const COLORS = {
  AppMainBackgroundColor: "#F5F5F5",
  white: "#FFFFFF",
  AppGreenColor: "#00A76E",
  textBlackColor: "#3E3E3E",
  textSubColor: "#3E3E3E",
  AppGray: "#A9A9A9",
  AppYellow: "#FD9942",
};

const SIZES = {
  // global sizes
  base: 10,
  font: 14,
  radius: 12,
  padding: 16,

  // font sizes
  largeTitle: rf(30),
  h1: rf(24),
  h2: rf(22),
  h3: rf(20),
  h4: rf(16),
  h5: rf(12),

  xsmall: rf(12),
  small: rf(14),
  middle: rf(16),
  normal: rf(18),
  larger: rf(24),
  xlarge: rf(30),
};

const FONTS = {
  largeTitle: {fontFamily: "NunitoSansSemiBold", fontSize: SIZES.largeTitle},
  h1: {
    fontFamily: "NunitoSansMedium",
    fontSize: SIZES.h1,
    textTransform: "capitalize",
  },
  h2: {
    fontFamily: "NunitoSansBold",
    fontSize: SIZES.h2,
    textTransform: "capitalize",
  },
  h3: {
    fontFamily: "NunitoSansBold",
    fontSize: SIZES.h3,
    textTransform: "capitalize",
  },
  h4: {
    fontFamily: "NunitoSansMedium",
    fontSize: SIZES.h4,
    textTransform: "capitalize",
  },
  h5: {
    fontFamily: "NunitoSansMedium",
    fontSize: SIZES.h5,
    textTransform: "capitalize",
  },
  large: {
    fontFamily: "NunitoSansRegular",
    fontSize: SIZES.larger,
    textTransform: "capitalize",
  },
  normal: {
    fontFamily: "NunitoSansRegular",
    fontSize: SIZES.normal,
    textTransform: "capitalize",
  },
  middle: {
    fontFamily: "NunitoSansRegular",
    fontSize: SIZES.middle,
    textTransform: "capitalize",
  },
  small: {
    fontFamily: "NunitoSansLight",
    fontSize: SIZES.small,
    textTransform: "capitalize",
  },
  xsmall: {
    fontFamily: "NunitoSansLight",
    fontSize: SIZES.xsmall,
    textTransform: "capitalize",
  },
};

export {COLORS, SIZES, FONTS};
