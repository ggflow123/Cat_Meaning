import React, { FC } from "react";
import { SafeAreaView, View } from "react-native";
import TitleBar from "../TitleBar";
import NavBar from "../NavBar";

type props = {
  title?: string;
  navButtons?: JSX.Element;
};

const MainLayout: FC<props> = ({ title, navButtons, children }) => {
  return (
    <SafeAreaView>
      <TitleBar title={"Hello"} />
      <View>{children}</View>
      <NavBar />
    </SafeAreaView>
  );
};

export default MainLayout;
