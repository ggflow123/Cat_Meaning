// TODO

import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Button, CameraObject } from "@components";
import { MainLayout } from "@components/layouts";
import { ScreenType } from "@types";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavIcon } from "@components";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const CameraScreen: ScreenType<"Camera"> = ({ navigation }) => {
  const navButtons = [
    <NavIcon iconName="triangle-left" onPress={() => navigation.pop()} />,
  ];

  return (
    <MainLayout navButtons={navButtons} title="Camera">
      <View style={styles.container}>
        <Text>It works!</Text>
        <Button title="Press me!" />
        <CameraObject />
        <View>
          <Text>Go Back by clicking the below button :)</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="doubleleft" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </MainLayout>
  );
};
export default CameraScreen;
