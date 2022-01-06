import React, { FC } from "react";
import { Text, View, StyleSheet } from "react-native";
import MainLayout from "../components/layouts/MainLayout";

type props = {};

const style = StyleSheet.create({});

const LoadingScreen: FC<props> = ({}) => {
  return (
    <MainLayout title={"Hello"}>
      <Text>...Loading...</Text>
    </MainLayout>
  );
};

export default LoadingScreen;
