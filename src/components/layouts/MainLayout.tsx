import React, { FC } from "react";
import { SafeAreaView, View } from "react-native";
import { TitleBar, NavBar } from "@components";

type layoutprops = {
  title?: string;
  navButtons?: Array<JSX.Element>;
};

const MainLayout: FC<layoutprops> = ({ title, navButtons, children }) => {
  return (
    <SafeAreaView>
      <TitleBar title={title} />
      <View>{children}</View>
      <NavBar>{navButtons}</NavBar>
    </SafeAreaView>
  );
};

export default MainLayout;
