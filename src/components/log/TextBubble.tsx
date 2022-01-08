import React, { FC } from "react";
import { Text, View, StyleSheet } from "react-native";
import { colors } from "@constants";

type props = {};

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    width: 100,
    height: 50,
    backgroundColor: colors.grey,
    borderRadius: 10,
    fontSize: 20,
  },
});

const TextBubble: FC<props> = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

export default TextBubble;
