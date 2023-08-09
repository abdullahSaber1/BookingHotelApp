import React from "react";
import {StyleSheet, View} from "react-native";

import TabButton from "./TabButton";
import {COLORS} from "../../../constants";

export function TabGroup({
  style,
  tabs,
  selectedTab,
  setSelectedTab,
  activeType,
}) {
  function onTabButtonPress(tabIndex) {
    setSelectedTab(tabIndex);
  }

  return (
    <View style={[styles.container, style]}>
      {tabs.length > 0
        ? tabs.map((tab, index) => (
            <TabButton
              key={`tab-button${index.toString()}`}
              tabTitle={tab?.key}
              active={selectedTab === index}
              activeType={activeType}
              onPress={() => onTabButtonPress(index)}
              style={[
                styles.buttonTab,
                {
                  width: `${100 / tabs.length}%`,
                },
              ]}
            />
          ))
        : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: COLORS.white,
  },
  buttonTab: {
    width: "33.3%",
  },
});
