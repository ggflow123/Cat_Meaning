import { Camera } from "expo-camera";
import React, { FC, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

const CameraObject: FC = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      console.log(`status: ${status}`);
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return (
      <View>
        <Text>First Render</Text>
      </View>
    );
  } else if (hasPermission === false) {
    return (
      <View>
        <Text>Nope...</Text>
      </View>
    );
  } else {
    return (
      <View style={{ width: 400, height: 400, overflow: "hidden" }}>
        <Camera style={styles.camera} />
      </View>
    );
  }
};

export default CameraObject;
