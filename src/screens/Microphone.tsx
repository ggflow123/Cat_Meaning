// TODO

import { NavIcon } from "@components";
import { MainLayout } from "@components/layouts";
import { ScreenType } from "@types";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const MicrophoneScreen: ScreenType<"Microphone"> = ({ navigation }) => {
  const navButtons = [
    <NavIcon
      key="0"
      iconName="triangle-left"
      onPress={() => navigation.pop()}
    />,
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
