import React, { FC } from "react";
import { Text, View, StyleSheet } from "react-native";
import colors from "../../constants/colors";

type props = {};

const style = StyleSheet.create({
  text: {
    color: colors.black,
    width: 50,
    height: 50,
    backgroundColor: colors.grey,
  },
});

const TextBubble: FC<props> = ({ children }) => {
  return <Text style={style.text}>{children}</Text>;
};

export default TextBubble;
