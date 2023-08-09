/* eslint-disable no-param-reassign */
import React, {useState} from "react";
import {Pressable, Text, TextInput, View} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {COLORS} from "../../../constants";
import {styles} from "./styles";

export function CustomInput({
  textConfig,
  style,
  invalid,
  label,
  showPasswordLabel,
  inputStyle,
  value,
  styleConatiner,
  error,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const inputContainerStyle = [styles.inputContainer, style];

  if (invalid) {
    inputContainerStyle.push(styles.invalidInput);
  }

  if (showPasswordLabel) {
    textConfig = {...textConfig, secureTextEntry: !showPassword};
  }

  function right() {
    return (
      <Pressable
        onPress={() => setShowPassword(!showPassword)}
        style={styles.right}>
        <Ionicons
          name={showPassword ? "eye-off" : "eye"}
          size={22}
          color={COLORS.AppGray}
        />
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      {label && (
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{label}</Text>
        </View>
      )}
      <View style={[styles.inputContainer, styleConatiner]}>
        <TextInput
          style={[
            styles.textInput,
            inputStyle,
            // eslint-disable-next-line react-native/no-inline-styles
            {
              textTransform: "none",
            },
          ]}
          value={value}
          {...textConfig}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {showPasswordLabel && right()}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}
