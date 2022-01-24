// TODO

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavIcon } from "@components";

import { ScreenType } from "@types";
import { MainLayout } from "@components/layouts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const LoginScreen: ScreenType<"AccountCreation"> = ({ navigation }) => {
  const navButtons = [
    <NavIcon
      key="0"
      iconName="triangle-left"
      onPress={() => navigation.pop()}
    />,
  ];

  return (
    <MainLayout navButtons={navButtons} title="Account Creation">
      <View style={styles.container}>
        <Text>This is the account creation page</Text>
      </View>
    </MainLayout>
  );
};

export default LoginScreen;
