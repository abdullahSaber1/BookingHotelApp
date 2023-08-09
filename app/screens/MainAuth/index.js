import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {Login, Register, RootScreen, TabGroup} from "../../components";
import {ICONS} from "../../constants";
import {rh, rw} from "../../config/scale";
import {ACTIVE_TAB_TYPE} from "../../components/APP/TabGroup/TabButton";

export function MainAuth() {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const {MainLogo} = ICONS;
  const tabGroup = [
    {
      key: "Log in",
      sense: <Login />,
    },
    {
      key: "Sign Up",
      sense: <Register />,
    },
  ];
  return (
    <RootScreen>
      <View style={styles.logoContainer}>
        <MainLogo />
      </View>
      <View style={styles.tabGroupContainer}>
        <TabGroup
          tabs={tabGroup}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          activeType={ACTIVE_TAB_TYPE?.ACTIVE_LINE}
        />
        <View style={styles.screenContainer}>
          {tabGroup[selectedTab].sense}
        </View>
      </View>
    </RootScreen>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    marginVertical: rh(20),
    alignItems: "center",
    justifyContent: "center",
  },
  screenContainer: {
    paddingHorizontal: rw(25),
  },
});
