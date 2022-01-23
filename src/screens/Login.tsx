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
    alignItems: "center",
    justifyContent: "center",
  },
});

const LoginScreen: ScreenType<"Login"> = ({ navigation }) => {
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
        <Text>This is the login page</Text>
      </View>
    </MainLayout>
  );
};

export default LoginScreen;