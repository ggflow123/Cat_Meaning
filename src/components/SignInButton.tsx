import { colors } from "@constants";
import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type props = {
  onPress: () => void;
  signedIn: boolean;
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 16,
    margin: 5,
  },
  signedInContainer: {
    backgroundColor: colors.red,
  },
  signedOutContainer: {
    backgroundColor: colors.header,
  },
  text: {
    color: colors.white,
    textAlign: "center",
  },
});

const SignInButton: FC<props> = ({ onPress, signedIn }) => {
  if (signedIn) {
    return (
      <View style={[styles.container, styles.signedInContainer]}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.text}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={[styles.container, styles.signedOutContainer]}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.text}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default SignInButton;
