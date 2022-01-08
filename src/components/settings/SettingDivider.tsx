import { colors } from "@constants";
import React, { FC } from "react";
import { Text, View, StyleSheet } from "react-native";

type props = {};

const styles = StyleSheet.create({
  divider: {
    backgroundColor: colors.red,
    width: "90%",
    height: 2,
    marginTop: 15,
    marginBottom: 15,
  },
});

const SettingDivider: FC<props> = ({}) => {
  return <View style={styles.divider} />;
};

export default SettingDivider;
