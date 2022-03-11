// TODO

import { NavIcon, SubmitButton } from "@components";
import { CameraObject } from "@components/camera";
import { MainLayout } from "@components/layouts";
import { ScreenType } from "@types";
import React from "react";
import { StyleSheet, View } from "react-native";

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
        <CameraObject />
        <SubmitButton
          title="Take Picture"
          onPress={() => navigation.push("PictureReview")}
        />
      </View>
    </MainLayout>
  );
};
export default CameraScreen;
