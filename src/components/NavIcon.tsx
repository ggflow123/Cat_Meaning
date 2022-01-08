import React, { FC } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import { Entypo } from "@expo/vector-icons";

// Because typescript, you should manually add an icon to this list if you want to
// use it with the navicon prop. You can find a list of all icons at
// https://icons.expo.fyi/
// Filter for Entypo icons.
type iconNames =
  | "triangle-left"
  | "triangle-right"
  | "camera"
  | "mic"
  | "cog"
  | "cake";
type props = {
  iconName: iconNames;
  onPress: () => void;
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

const NavIcon: FC<props> = ({ iconName, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Entypo name={iconName} size={24} color="black" />
    </TouchableOpacity>
  );
};

export default NavIcon;
