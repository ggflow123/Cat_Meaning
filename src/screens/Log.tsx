// TODO

import React, { FC } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { MainLayout } from "@components/layouts";
import { ScreenType } from "@types";
import { NavIcon } from "@components";
import { TextBubble } from "@components/log";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
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
        <TextBubble origin="left">Some Text</TextBubble>
        <TextBubble origin="left">Some More Text</TextBubble>
        <TextBubble origin="left">This Page Yet to be Flushed Out</TextBubble>
      </View>
    </MainLayout>
  );
};
export default LogScreen;
