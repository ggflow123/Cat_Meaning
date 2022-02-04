import React, { FC } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TitleBar, NavBar } from "@components";
import { colors } from "@constants";

type layoutprops = {
  title?: string;
  navButtons?: Array<JSX.Element>;
};

const fullHeight = Platform.OS === "web" ? "100vh" : "100%";

const styles = StyleSheet.create({
  mainView: {
    height: fullHeight,
    backgroundColor: colors.black,
  },
  innerView: { backgroundColor: colors.background, flex: 1 },
});

const MainLayout: FC<layoutprops> = ({ title, navButtons, children }) => {
  return (
    <SafeAreaView style={styles.mainView}>
      <TitleBar title={title} />
      <View style={styles.innerView}>{children}</View>
      <NavBar>{navButtons}</NavBar>
    </SafeAreaView>
  );
};

export default MainLayout;
