// TODO

import React, { FC } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import MainLayout from "../components/layouts/MainLayout";

import { Button, CameraObject } from "../components";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const LoadingScreen: FC = () => {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text>It works!</Text>
        <Button title="Press me!" />
        <CameraObject />
      </View>
    </MainLayout>
  );
};
export default LoadingScreen;
