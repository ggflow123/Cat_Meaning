import { colors } from "@constants";
import React, { FC, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type props = {
  defaultValue: boolean;
  onChange: (oldValue: boolean) => void;
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});

const SettingButton: FC<props> = ({ defaultValue, onChange }) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: value ? colors.green : colors.red },
      ]}
      onPress={() => {
        const newValue = !value;
        setValue(newValue);
        onChange(newValue);
      }}
    >
      <Text>{value ? "TRUE" : "FALSE"}</Text>
    </TouchableOpacity>
  );
};

export default SettingButton;
