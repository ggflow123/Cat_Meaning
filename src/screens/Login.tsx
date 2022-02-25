// TODO

import { NavIcon, SubmitButton } from "@components";
import { MainLayout } from "@components/layouts";
import { AuthContext } from "@config/AuthContext";
import { colors } from "@constants";
import { ScreenType } from "@types";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textField: {
    padding: 2,
    backgroundColor: colors.white,
    borderColor: colors.black,
    borderWidth: 1,
  },
});

const LoginScreen: ScreenType<"Login"> = ({ navigation }) => {
  const [isBadSubmit, setIsBadSubmit] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const auth = useContext(AuthContext);

  const signIn = async () => {
    const successful = await auth.signIn(username, password);
    if (successful) {
      navigation.push("Home");
    } else {
      setIsBadSubmit(true);
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
        <Text>Login</Text>
        <Text>Enter your username:</Text>
        <TextInput
          editable
          textContentType="username"
          style={styles.textField}
          onChangeText={(text) => setUsername(text)}
          onSubmitEditing={signIn}
        />
        <Text>Enter your password:</Text>
        <TextInput
          secureTextEntry
          editable
          textContentType="password"
          style={styles.textField}
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
