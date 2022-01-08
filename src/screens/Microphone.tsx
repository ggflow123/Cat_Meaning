// TODO

import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavIcon } from "@components";
import { Button, CameraObject } from "@components";

import { ScreenType } from "@types";
import { MainLayout } from "@components/layouts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const MicrophoneScreen: ScreenType<"Microphone"> = ({ navigation }) => {
  const navButtons = [
    <NavIcon iconName="triangle-left" onPress={() => navigation.pop()} />,
  ];

  return (
    <MainLayout navButtons={navButtons} title="Microphone">
      <View style={styles.container}>
        <Text>This is the microphone page</Text>
      </View>
    </MainLayout>
  );
};
export default MicrophoneScreen;
