import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

type props = {};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.header,
    height: 40,
  },
});

const NavBar: FC<props> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default NavBar;
