import { colors } from "@constants";
import React, { FC } from "react";
import { StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
  textInput: {
    padding: 2,
    backgroundColor: colors.white,
    borderColor: colors.black,
    borderWidth: 1,
    marginLeft: 10,
    width: 200,
  },
});

type props = {
  isPassword?: boolean;
  textContentType: "password" | "username" | "givenName" | "familyName";
  defaultValue: string;
  onChangeFunction: (text: string) => void;
};
const MainTextInput: FC<props> = ({
  isPassword,
  textContentType,
  defaultValue,
  onChangeFunction,
}) => {
  return (
    <TextInput
      editable
      style={styles.textInput}
      secureTextEntry={isPassword}
      textContentType={textContentType}
      onChangeText={onChangeFunction}
      defaultValue={defaultValue}
    />
  );
};

export default MainTextInput;
