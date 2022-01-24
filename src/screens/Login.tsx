// TODO

import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { SubmitButton, NavIcon } from "@components";

import { ScreenType } from "@types";
import { MainLayout } from "@components/layouts";
import { colors } from "@constants";
import { AuthContext } from "@config/AuthContext";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  passwordField: {
    padding: 2,
    backgroundColor: colors.white,
    borderColor: colors.black,
    borderWidth: 1,
  },
});

const LoginScreen: ScreenType<"Login"> = ({ navigation }) => {
  const [badSubmit, setBadSubmit] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  const auth = useContext(AuthContext);

  const signIn = async () => {
    const successful = await auth.signIn(password);
    if (successful) {
      navigation.push("Home");
    } else {
      setBadSubmit(true);
    }
  };

  const navButtons = [
    <NavIcon
      key="0"
      iconName="triangle-left"
      onPress={() => navigation.pop()}
    />,
  ];

  return (
    <MainLayout navButtons={navButtons} title="Log In">
      <View style={styles.container}>
        <Text>This is a sample login page</Text>
        <Text>Enter your password:</Text>
        <TextInput
          secureTextEntry
          editable
          textContentType="password"
          style={styles.passwordField}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={signIn}
        />
        <SubmitButton title="submit" onPress={signIn} />
        <Text>{auth.loading ? "...loading..." : " "}</Text>
      </View>
    </MainLayout>
  );
};

export default LoginScreen;
