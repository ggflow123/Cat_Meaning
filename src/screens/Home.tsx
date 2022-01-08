// TODO

import React, { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { MainLayout } from "@components/layouts";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";

import { ScreenType } from "@types";
import { NavIcon } from "@components";
import { colors } from "@constants";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
  disclaimerContainer: {
    position: "absolute",
    right: 10,
    bottom: 10,
  },
  disclaimerText: {
    color: colors.black,
    fontSize: 14,
  },
  centralImageContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  centralImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  logoContainer: {
    position: "absolute",
    right: 120,
    top: 50,
    opacity: 0.5,
  },
  logContainer: {
    position: "absolute",
    left: 10,
    top: 10,
  },
});

const LoadingScreen: ScreenType<"Home"> = ({ navigation }) => {
  const navButtons = [
    <NavIcon iconName="cog" onPress={() => navigation.push("Settings")} />,
    <NavIcon iconName="camera" onPress={() => navigation.push("Camera")} />,
    <NavIcon iconName="mic" onPress={() => navigation.push("Microphone")} />,
  ];

  return (
    <MainLayout navButtons={navButtons} title="The Catalatorator*">
      <View style={styles.container}>
        <TouchableOpacity style={styles.logoContainer}></TouchableOpacity>
        <View style={styles.centralImageContainer}>
          <Image
            style={styles.centralImage}
            source={{
              uri: "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg",
            }}
          />
        </View>
        <View style={styles.logoContainer}>
          <TouchableOpacity
            onPress={() => {
              WebBrowser.openBrowserAsync(
                "https://github.com/ggflow123/Cat_Meaning"
              );
            }}
          >
            <FontAwesome5 name="cat" size={60} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.disclaimerContainer}>
          <Text style={styles.disclaimerText}>*Official name TBD</Text>
        </View>
        <View style={styles.logContainer}>
          <Text>LOG GOES HERE</Text>
          <Text>Log entry</Text>
          <Text>Another entry</Text>
        </View>
      </View>
    </MainLayout>
  );
};
export default LoadingScreen;
