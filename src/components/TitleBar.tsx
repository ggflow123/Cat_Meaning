import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

type props = { title: string };

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.header,
    height: 50,
  },
  text: {
    color: colors.white,
    fontSize: 30,
    textAlign: "center",
  },
});

const TitleBar: FC<props> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default TitleBar;