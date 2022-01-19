import React, { FC } from "react";
import { Text, View, StyleSheet } from "react-native";
import { colors } from "@constants";

type props = {
  origin?: "left" | "right" | "none";
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
  },
  text: {
    color: colors.black,
    backgroundColor: colors.grey,
    borderRadius: 10,
    fontSize: 16,
    padding: 7,
    margin: 5,
  },
  left: {
    borderBottomLeftRadius: 0,
  },
  right: {
    borderBottomRightRadius: 0,
  },
});

const TextBubble: FC<props> = ({ origin = "none", children }) => {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.text,
          origin === "left" && styles.left,
          origin === "right" && styles.right,
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

export default TextBubble;
