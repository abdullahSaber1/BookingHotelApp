import {Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

import {CustomInput} from "../../../UI/CustomInput";
import {COLORS, FONTS} from "../../../../constants";
import {CustomButton} from "../../../UI/CustomButton";
import {rh, rw} from "../../../../config/scale";
import {AccountLoginSchema} from "../../../../config/validationSchema";
import {signIn} from "../../../../api/AuthFirebase";

export function Login() {
  const navigation = useNavigation();

  const [loading, setIsLoading] = React.useState(false);

  const {
    register,
    setValue,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(AccountLoginSchema),
  });

  const onSubmit = async data => {
    setIsLoading(true);
    try {
      // const fcmToken = await getFCMToken();
      // dispatch(loginUser({...data, fcm_token: fcmToken}));
      const response = await signIn(data);
      if (response) {
        navigation.replace("MainStack");
      }
    } catch (err) {
      console.log("err", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{paddingVertical: rh(50)}}
      showsVerticalScrollIndicator={false}>
      <CustomInput
        textConfig={{
          ref: register("email"),
          onChangeText: text => setValue("email", text, true),
          placeholder: "Username or E-mail",
          placeholderTextColor: COLORS.AppGray,
          autoCapitalize: "none",
          autoCorrect: false,
          name: "email",
        }}
        label="Username or E-mail"
        error={errors?.email?.message}
      />
      <CustomInput
        textConfig={{
          ref: register("password"),
          onChangeText: text => setValue("password", text, true),
          placeholder: "Password",
          placeholderTextColor: COLORS.AppGray,
          secureTextEntry: true,
          autoCapitalize: "none",
          autoCorrect: false,
        }}
        label="Password"
        showPasswordLabel
        error={errors?.password?.message}
      />
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.forgetPassContainer, styles.pressed]
            : styles.forgetPassContainer
        }
        onPress={() => {}}>
        <Text style={styles.forgetPassword}>Forgot Password?</Text>
      </Pressable>
      <View style={styles.loginButtonContainer}>
        <CustomButton
          title="Log In"
          onPress={handleSubmit(onSubmit)}
          loading={loading}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  forgetPassContainer: {
    marginVertical: rw(20),
  },
  forgetPassword: {
    ...FONTS.middle,
    color: COLORS.AppGray,
    textAlign: "right",
  },
});
