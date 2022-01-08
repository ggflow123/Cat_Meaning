// TODO

import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MainLayout } from "@components/layouts";
import { TouchableOpacity } from "react-native-gesture-handler";

import { ScreenType } from "@types";
import { NavIcon } from "@components";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  practiceImage: {
    width: 50,
    height: 50,
  },
});

const LoadingScreen: ScreenType<"Home"> = ({ navigation }) => {
  const navButtons = [
    <NavIcon iconName="cog" onPress={() => navigation.push("Settings")} />,
    <NavIcon iconName="camera" onPress={() => navigation.push("Camera")} />,
    <NavIcon iconName="mic" onPress={() => navigation.push("Microphone")} />,
  ];

  return (
    <MainLayout navButtons={navButtons} title="The Catlatorator">
      <View style={styles.container}>
        <Text>Home Screen!</Text>
        <TouchableOpacity onPress={() => navigation.push("Camera")}>
          <Text>Press me</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push("Microphone")}>
          <Text>Go to microphone screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push("Loading")}>
          <Text>Go to loading screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push("Settings")}>
          <Text>Click to visit settings</Text>
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
};
export default LoadingScreen;
