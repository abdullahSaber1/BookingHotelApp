import {StyleSheet} from "react-native";
import {rh, rw} from "../../../config/scale";
import {COLORS, FONTS, SIZES} from "../../../constants";

export const styles = StyleSheet.create({
  container: {marginBottom: rh(25)},
  inputContainer: {
    width: "100%",
    position: "relative",
    height: rh(50),
    borderWidth: 1,
    borderColor: COLORS.white,
    borderRadius: rw(SIZES.base * 2.5),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SIZES.base,
    backgroundColor: COLORS.white,
  },

  textInput: {
    width: "86%",
    height: "100%",
    color: COLORS.textBlackColor,
    ...FONTS.middle,
    textAlign: "left",
    paddingHorizontal: rw(10),
  },
  invalidInput: {
    borderWidth: 2,
    borderColor: COLORS.error500,
    width: "100%",
  },
  labelContainer: {marginVertical: rh(10)},
  label: {
    ...FONTS.middle,
    marginBottom: 8,
    textAlign: "left",
    width: "86%",
    paddingHorizontal: SIZES.base,
    color: COLORS.textBlackColor,
  },
  invalidLabel: {
    color: COLORS.error500,
  },
  editableLabel: {
    color: COLORS.darkGray,
    // borderBottomColor: COLORS.darkGray,
  },

  right: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "14%",
  },
  error: {
    ...FONTS.middle,
    color: "red",
    marginLeft: rw(20),
    marginTop: rh(10),
    textAlign: "left",
  },
});
