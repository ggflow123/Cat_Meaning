// TODO

import React, { useEffect, useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { MainLayout } from "@components/layouts";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";

import { ScreenType } from "@types";
import { NavIcon, SignInButton } from "@components";
import { colors } from "@constants";
import { TextBubble } from "@components/log";

import { getUser } from "@util";
import { AuthContext } from "@config/AuthContext";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
  logContainer: {
    position: "absolute",
    left: 10,
    top: 10,
  },
  logoContainer: {
    position: "absolute",
    right: 120,
    top: 50,
    opacity: 0.5,
  },
  disclaimerContainer: {
    position: "absolute",
    left: 10,
    bottom: 10,
  },
  disclaimerText: {
    color: colors.black,
    fontSize: 14,
  },
  signinContainer: {
    position: "absolute",
    right: 10,
    bottom: 10,
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
});

const HomeScreen: ScreenType<"Home"> = ({ navigation }) => {
  const auth = useContext(AuthContext);
  const signedIn = auth.userData !== null;

  const navButtons = [
    <NavIcon
      key="1"
      iconName="cog"
      onPress={() => navigation.push("Settings")}
    />,
    <NavIcon
      key="2"
      iconName="camera"
      onPress={() => navigation.push("Camera")}
    />,
    <NavIcon
      key="3"
      iconName="mic"
      onPress={() => navigation.push("Microphone")}
    />,
  ];

  // const userNamePromise = getUser("fakeuuid");

  // useEffect(() => {
  //   userNamePromise.then((name) => {
  //     console.log("user name is " + name);
  //   });
  // }, []);

  const sampleLogs = [
    {
      text: "Meow",
    },
    {
      text: "Can I haz cheezeburger?",
    },
    {
      text: "I'm sleepy",
    },
  ];

  return (
    <MainLayout navButtons={navButtons} title="The Catalatorator*">
      <View style={styles.container}>
        <View style={styles.centralImageContainer}>
          <Image
            style={styles.centralImage}
            source={{
              uri: "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg",
            }}
          />
        </View>
        <View style={styles.logContainer}>
          <TouchableOpacity onPress={() => navigation.push("Log")}>
            {sampleLogs.map((log, i) => (
              <TextBubble origin="left" key={i}>
                {log.text}
              </TextBubble>
            ))}
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.logoContainer}></TouchableOpacity>
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
        <View style={styles.signinContainer}>
          <SignInButton
            onPress={() => {
              if (signedIn) {
                auth.signOut();
              } else {
                navigation.push("Login");
              }
            }}
            signedIn={signedIn}
          />
        </View>
      </View>
    </MainLayout>
  );
};
export default HomeScreen;
