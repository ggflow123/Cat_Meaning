// TODO

import { NavIcon } from "@components";
import { CameraObject } from "@components/camera";
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

const CameraScreen: ScreenType<"Camera"> = ({ navigation }) => {
  const navButtons = [
    <NavIcon
      key="0"
      iconName="triangle-left"
      onPress={() => navigation.pop()}
    />,
  ];

  return (
    <MainLayout navButtons={navButtons} title="Camera">
      <View style={styles.container}>
        <Text>It works!</Text>
        {/* <Button title="Press me!" /> */}
        <CameraObject />
      </View>
    </MainLayout>
  );
};
export default CameraScreen;
