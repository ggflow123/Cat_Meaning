// deprecated, do not use!

import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type props = { title: string; onPress: () => void };

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderRadius: 20,
    borderColor: "red",
    backgroundColor: "yellow",
    padding: 4,
    margin: 10,
  },
});

const SubmitButton: React.FC<props> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
export default SubmitButton;
