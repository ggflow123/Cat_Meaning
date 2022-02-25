// TODO

import { NavIcon } from "@components";
import { MainLayout } from "@components/layouts";
import { TextBubble } from "@components/log";
import { ScreenType } from "@types";
import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
});

const LogScreen: ScreenType<"Log"> = ({ navigation }) => {
  const navButtons = [
    <NavIcon
      key="0"
      iconName="triangle-left"
      onPress={() => navigation.pop()}
    />,
    <NavIcon
      key="1"
      iconName="camera"
      onPress={() => navigation.push("Camera")}
    />,
    <NavIcon
      key="2"
      iconName="mic"
      onPress={() => navigation.push("Microphone")}
    />,
  ];

  return (
    <MainLayout navButtons={navButtons} title="Log">
      <View style={styles.container}>
        <TextBubble origin="left">Some Text</TextBubble>
        <TextBubble origin="left">Some More Text</TextBubble>
        <TextBubble origin="left">This Page Yet to be Flushed Out</TextBubble>
      </View>
    </MainLayout>
  );
};
export default LogScreen;
