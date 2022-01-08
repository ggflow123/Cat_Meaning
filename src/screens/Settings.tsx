// TODO

import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { MainLayout } from "@components/layouts";
import { ScreenType } from "@types";
import { NavIcon } from "@components";
import { SettingRow } from "@components/settings";
import SettingDivider from "@components/settings/SettingDivider";
import { ScrollView } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "center",
  },
  scrollContainer: {
    padding: 50,
    alignItems: "center",
  },
});

const SettingsScreen: ScreenType<"Settings"> = ({ navigation }) => {
  const navButtons = [
    <NavIcon iconName="triangle-left" onPress={() => navigation.pop()} />,
    <NavIcon iconName="camera" onPress={() => navigation.push("Camera")} />,
    <NavIcon iconName="mic" onPress={() => navigation.push("Camera")} />,
  ];

  return (
    <MainLayout navButtons={navButtons} title="Settings">
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <SettingRow
            name="Use Data"
            description="Should the app use your phone's data to send pictures and receive cat meanings?"
            defaultValue={true}
            onChange={(newValue) => null}
          />
          <SettingDivider />
          <SettingRow
            name="Sound"
            description="Should the app use sound?"
            defaultValue={true}
            onChange={(newValue) => null}
          />
          <SettingDivider />
          <SettingRow
            name="Sound"
            description="Should the app use sound?"
            defaultValue={true}
            onChange={(newValue) => null}
          />{" "}
          <SettingDivider />
          <SettingRow
            name="Sound"
            description="Should the app use sound?"
            defaultValue={true}
            onChange={(newValue) => null}
          />{" "}
          <SettingDivider />
          <SettingRow
            name="Sound"
            description="Should the app use sound?"
            defaultValue={true}
            onChange={(newValue) => null}
          />{" "}
          <SettingDivider />
          <SettingRow
            name="Sound"
            description="Should the app use sound?"
            defaultValue={true}
            onChange={(newValue) => null}
          />{" "}
          <SettingDivider />
          <SettingRow
            name="Sound"
            description="Should the app use sound?"
            defaultValue={true}
            onChange={(newValue) => null}
          />{" "}
          <SettingDivider />
          <SettingRow
            name="Sound"
            description="Should the app use sound?"
            defaultValue={true}
            onChange={(newValue) => null}
          />{" "}
          <SettingDivider />
          <SettingRow
            name="Sound"
            description="Should the app use sound?"
            defaultValue={true}
            onChange={(newValue) => null}
          />{" "}
          <SettingDivider />
          <SettingRow
            name="Sound"
            description="Should the app use sound?"
            defaultValue={true}
            onChange={(newValue) => null}
          />{" "}
          <SettingDivider />
          <SettingRow
            name="Sound"
            description="Should the app use sound?"
            defaultValue={true}
            onChange={(newValue) => null}
          />{" "}
          <SettingDivider />
          <SettingRow
            name="Sound"
            description="Should the app use sound?"
            defaultValue={true}
            onChange={(newValue) => null}
          />{" "}
          <SettingDivider />
          <SettingRow
            name="Sound"
            description="Should the app use sound?"
            defaultValue={true}
            onChange={(newValue) => null}
          />{" "}
          <SettingDivider />
          <SettingRow
            name="Sound"
            description="Should the app use sound?"
            defaultValue={true}
            onChange={(newValue) => null}
          />
        </ScrollView>
      </View>
    </MainLayout>
  );
};
export default SettingsScreen;
