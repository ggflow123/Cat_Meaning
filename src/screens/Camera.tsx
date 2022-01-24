// TODO

import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { MainLayout } from "@components/layouts";
import { CameraObject } from "@components/camera";
import { ScreenType } from "@types";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavIcon } from "@components";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const CameraScreen: ScreenType<"Camera"> = ({ navigation }) => {
  const navButtons = [
    <NavIcon
      key="0"
      iconName="triangle-left"
      onPress={() => navigation.pop()}
    />,
  ];

  return (
    <MainLayout navButtons={navButtons} title="Camera">
      <View style={styles.container}>
        <Text>It works!</Text>
        {/* <Button title="Press me!" /> */}
        <CameraObject />
      </View>
    </MainLayout>
  );
};
export default CameraScreen;
