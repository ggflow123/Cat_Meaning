import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

type props = { title: string };

const styles = StyleSheet.create({
  container: {
    borderWidth: 10,
    borderRadius: 20,
    borderColor: "red",
    backgroundColor: "orange",
    color: "white",
    padding: 4,
    margin: 20,
  },
});

const Button: React.FC<props> = ({ title }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
export default Button;
