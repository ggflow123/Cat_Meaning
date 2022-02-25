import { LoadingIcon } from "@components";
import { MainLayout } from "@components/layouts";
import { ScreenType } from "@types";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

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
