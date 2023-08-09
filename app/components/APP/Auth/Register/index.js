import {yupResolver} from "@hookform/resolvers/yup";
import {useNavigation} from "@react-navigation/native";
import React from "react";
import {useForm} from "react-hook-form";
import {ScrollView, StyleSheet, View} from "react-native";

import {signUp} from "../../../../api/AuthFirebase";
import {rh} from "../../../../config/scale";
import {AccountRegisterSchema} from "../../../../config/validationSchema";
import {COLORS} from "../../../../constants";
import {CustomButton} from "../../../UI/CustomButton";
import {CustomInput} from "../../../UI/CustomInput";

export function Register() {
  const navigation = useNavigation();
  const [loading, setIsLoading] = React.useState(false);
  const {
    register,
    setValue,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(AccountRegisterSchema),
  });

  const onSubmit = async data => {
    setIsLoading(true);
    try {
      // const fcmToken = await getFCMToken();
      // dispatch(loginUser({...data, fcm_token: fcmToken}));

      const response = await signUp(data);
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
      contentContainerStyle={{paddingTop: rh(50)}}
      showsVerticalScrollIndicator={false}>
      <CustomInput
        textConfig={{
          ref: register("username"),
          onChangeText: text => setValue("username", text, true),
          placeholder: "Username",
          placeholderTextColor: COLORS.AppGray,
          autoCapitalize: "none",
          autoCorrect: false,
          name: "username",
        }}
        label="Username"
        error={errors?.username?.message}
      />
      <CustomInput
        textConfig={{
          ref: register("email"),
          onChangeText: text => setValue("email", text, true),
          placeholder: "email",
          placeholderTextColor: COLORS.AppGray,
          autoCapitalize: "none",
          autoCorrect: false,
          name: "email",
        }}
        label="email"
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

      <View style={styles.signUpButtonContainer}>
        <CustomButton
          title="Sign up"
          onPress={handleSubmit(onSubmit)}
          loading={loading}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  signUpButtonContainer: {
    marginVertical: rh(15),
  },
});
