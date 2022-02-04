import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "@constants";
import { StatusBar } from "expo-status-bar";

type props = {};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.header,
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomWidth: 5,
    borderBottomColor: colors.blue,
  },
});

const NavBar: FC<props> = ({ children }) => {
  return (
    <>
      <View style={styles.container}>{children}</View>
      {/* <StatusBar style="darks" /> */}
    </>
  );
};

export default NavBar;
