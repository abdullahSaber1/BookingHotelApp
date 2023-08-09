import auth from "@react-native-firebase/auth";
import {Alert} from "react-native";

async function signIn({email, password}) {
  console.log({email, password});
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    console.log(response?.user);
    return response.user;
  } catch (error) {
    console.error(error.message);
    Alert.alert(
      "The password is invalid or the user does not have a password.",
    );
  }
  return null;
}

async function signUp({email, password, username}) {
  try {
    const response = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    // Update user profile with username
    response.user.displayName = username;

    console.log(response?.user);

    return response.user;
  } catch (error) {
    console.error(error.message);
    Alert.alert("User Already Token");
  }
  return null;
}

export {signIn, signUp};
