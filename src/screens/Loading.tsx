import React, { FC } from "react";
import { Text, View, StyleSheet } from "react-native";
import { MainLayout } from "@components/layouts";
import { ScreenType } from "@types";
import { LoadingIcon } from "@components";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  loadingText: {
    fontSize: 40,
  },
});

const LoadingScreen: ScreenType<"Loading"> = ({}) => {
  return (
    <MainLayout title={"Loading..."}>
      <View style={styles.container}>
        <LoadingIcon />
        <Text style={styles.loadingText}>...Loading...</Text>
      </View>
    </MainLayout>
  );
};

export default LoadingScreen;
