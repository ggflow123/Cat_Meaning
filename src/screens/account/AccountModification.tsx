// TODO

import { MainTextInput, NavIcon, SubmitButton } from "@components";
import { MainLayout } from "@components/layouts";
import { AuthContext } from "@config/AuthContext";
import { colors } from "@constants";
import { ScreenType } from "@types";
import { modifyAccount } from "@util/api";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

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

const AccountModificationScreen: ScreenType<"AccountModification"> = ({
  navigation,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const auth = useContext(AuthContext);

  const onSubmit = async () => {
    let userDataIsGood = true;
    // error checking...
    if (!userDataIsGood) {
      return;
    }

    const accountData: any = {};
    if (username !== "") {
      accountData.username = username;
    }
    if (password !== "") {
      accountData.password = password;
    }
    if (firstName !== "") {
      accountData.firstName = firstName;
    }
    if (lastName !== "") {
      accountData.lastName = lastName;
    }

    const successfulModification = await modifyAccount(accountData);
    if (!successfulModification) {
      setErrorMessage("Unknown Error. Please insert another quarter.");
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
        <Text>Modify Account</Text>
        <Text>
          Enter in any data that you want to modify (blank lines are ignored)
        </Text>
        <View style={styles.line}>
          <Text>First Name:</Text>
          <MainTextInput
            textContentType="givenName"
            defaultValue={firstName}
            onChangeFunction={setFirstName}
          />
        </View>
        <View style={styles.line}>
          <Text>Last Name:</Text>
          <MainTextInput
            textContentType="familyName"
            defaultValue={lastName}
            onChangeFunction={setLastName}
          />
        </View>
        <View style={styles.line}>
          <Text>Username:</Text>
          <MainTextInput
            textContentType="username"
            defaultValue={username}
            onChangeFunction={setUsername}
          />
        </View>
        <View style={styles.line}>
          <Text>Password:</Text>
          <MainTextInput
            isPassword
            textContentType="password"
            defaultValue={password}
            onChangeFunction={setPassword}
          />
        </View>
        <SubmitButton title={"Save"} onPress={onSubmit} />
        {!!errorMessage && (
          <View style={styles.line}>
            <Text style={styles.errorText}>{errorMessage}</Text>
          </View>
        )}
      </View>
    </MainLayout>
  );
};

export default AccountModificationScreen;
