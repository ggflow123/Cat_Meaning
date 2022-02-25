// TODO

import { NavIcon, SubmitButton } from "@components";
import { MainLayout } from "@components/layouts";
import { AuthContext } from "@config/AuthContext";
import { colors } from "@constants";
import { ScreenType } from "@types";
import { createAccount } from "@util/api";
import React, { FC, useContext, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  line: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    margin: 10,
  },
  textInput: {
    padding: 2,
    backgroundColor: colors.white,
    borderColor: colors.black,
    borderWidth: 1,
    marginLeft: 10,
  },
  errorText: {
    color: colors.textError,
  },
});

type textInputType = {
  isPassword?: boolean;
  textContentType: "password" | "username" | "givenName" | "familyName";
  defaultValue: string;
  onChangeFunction: (text: string) => void;
};
const TextInputComponent: FC<textInputType> = ({
  isPassword,
  textContentType,
  defaultValue,
  onChangeFunction,
}) => {
  return (
    <TextInput
      editable
      style={styles.textInput}
      secureTextEntry={isPassword}
      textContentType={textContentType}
      onChangeText={onChangeFunction}
      defaultValue={defaultValue}
    />
  );
};

const LoginScreen: ScreenType<"AccountCreation"> = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isBadUsername, setIsBadUsername] = useState(false);
  const [isBadPassword, setIsBadPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const auth = useContext(AuthContext);

  const onSubmit = async () => {
    let userDataIsGood = true;
    if (username === "") {
      setIsBadUsername(true);
      userDataIsGood = false;
    } else {
      setIsBadUsername(false);
    }
    if (password === "") {
      setIsBadPassword(true);
      userDataIsGood = false;
    } else {
      setIsBadPassword(false);
    }
    if (!userDataIsGood) {
      return;
    }

    const successfulCreation = await createAccount(
      username,
      password,
      firstName,
      lastName
    );
    if (!successfulCreation) {
      setErrorMessage("Unknown Error. Please insert another quarter.");
      return;
    }
    const successfulSignIn = auth.signIn("", "");
    if (!successfulSignIn) {
      setErrorMessage("Signing in failed :(.");
      return;
    }
    navigation.push("Home");
  };

  const navButtons = [
    <NavIcon
      key="0"
      iconName="triangle-left"
      onPress={() => navigation.pop()}
    />,
  ];

  return (
    <MainLayout navButtons={navButtons} title="Account Creation">
      <View style={styles.container}>
        <Text>Create Account</Text>
        <View style={styles.line}>
          <Text>First Name:</Text>
          <TextInputComponent
            textContentType="givenName"
            defaultValue={firstName}
            onChangeFunction={setFirstName}
          />
        </View>
        <View style={styles.line}>
          <Text>Last Name:</Text>
          <TextInputComponent
            textContentType="familyName"
            defaultValue={lastName}
            onChangeFunction={setLastName}
          />
        </View>
        <View style={styles.line}>
          <Text>Username:</Text>
          <TextInputComponent
            textContentType="username"
            defaultValue={username}
            onChangeFunction={setUsername}
          />
        </View>
        {isBadUsername && (
          <View style={styles.line}>
            <Text style={styles.errorText}>
              Error, the username that you entered is empty. That's not good.
            </Text>
          </View>
        )}
        <View style={styles.line}>
          <Text>Password:</Text>
          <TextInputComponent
            isPassword
            textContentType="password"
            defaultValue={password}
            onChangeFunction={setPassword}
          />
        </View>
        {isBadPassword && (
          <View style={styles.line}>
            <Text style={styles.errorText}>
              Error, the password that you entered was wonky. Please use
              another.
            </Text>
          </View>
        )}
        <SubmitButton title={"Create Account"} onPress={onSubmit} />
        {errorMessage && (
          <View style={styles.line}>
            <Text style={styles.errorText}>{errorMessage}</Text>
          </View>
        )}
      </View>
    </MainLayout>
  );
};

export default LoginScreen;
