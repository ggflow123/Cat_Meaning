// This component represents a single setting
// I'm thinking it can be either a NUMBER, BOOLEAN, or LIST
// For now, for simplicity's sake, all settings will be booleans.

import React, { FC } from "react";
import { Text, View, StyleSheet } from "react-native";
import SettingButton from "./SettingButton";

type props = {
  name: string;
  description: string;
  defaultValue: boolean;
  onChange: (newValue: boolean) => void;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  tag: {
    fontSize: 20,
    marginRight: 50,
    textAlign: "center",
  },
});

const Setting: FC<props> = ({ name, description, defaultValue, onChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.tag}>{name}</Text>
      <SettingButton defaultValue={defaultValue} onChange={onChange} />
    </View>
  );
};

export default Setting;
