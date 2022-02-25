import { colors } from "@constants";
import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type props = {
  onPress: () => void;
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 16,
    backgroundColor: colors.blue,
  },
  text: {
    color: colors.white,
    textAlign: "center",
  },
});

const CreateAccountButton: FC<props> = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateAccountButton;
