// TODO

import React, { FC } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { MainLayout } from "@components/layouts";
import { ScreenType } from "@types";
import { NavIcon } from "@components";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const LogScreen: ScreenType<"Log"> = ({ navigation }) => {
  const navButtons = [
    <NavIcon iconName="triangle-left" onPress={() => navigation.pop()} />,
    <NavIcon iconName="camera" onPress={() => navigation.push("Camera")} />,
    <NavIcon iconName="mic" onPress={() => navigation.push("Microphone")} />,
  ];

  return (
    <MainLayout navButtons={navButtons} title="Log">
      <View style={styles.container}>
        <Text>Some sort of text</Text>
        <Text>Some more text</Text>
        <Text>Even more text</Text>
      </View>
    </MainLayout>
  );
};
export default LogScreen;