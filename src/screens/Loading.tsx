import React, { FC } from "react";
import { Text, View, StyleSheet } from "react-native";
import { MainLayout } from "@components/layouts";
import { ScreenType } from "@types";

const style = StyleSheet.create({});

const LoadingScreen: ScreenType<"Loading"> = ({}) => {
  return (
    <MainLayout title={"Loading..."}>
      <Text>...Loading...</Text>
    </MainLayout>
  );
};

export default LoadingScreen;
