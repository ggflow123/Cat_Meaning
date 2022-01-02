import React, { FC } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import { Button, CameraObject } from "../../components";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const App: FC = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>It works!</Text>
        <Button title="Press me!" />
        <CameraObject />
      </View>
    </SafeAreaView>
  );
};
export default App;
