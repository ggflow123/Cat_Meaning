// TODO

import React from "react";
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

const SettingsScreen: ScreenType<"Settings"> = ({ navigation }) => {
  const navButtons = [
    <NavIcon iconName="triangle-left" onPress={() => navigation.pop()} />,
    <NavIcon iconName="camera" onPress={() => navigation.push("Camera")} />,
    <NavIcon iconName="mic" onPress={() => navigation.push("Camera")} />,
  ];

  return (
    <MainLayout navButtons={navButtons} title="Settings">
      <View style={styles.container}>
        <Text>Settings!</Text>
      </View>
    </MainLayout>
  );
};
export default SettingsScreen;
