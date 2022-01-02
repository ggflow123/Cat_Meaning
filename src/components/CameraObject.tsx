import React, { FC, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Camera } from "expo-camera";

const styles = StyleSheet.create({
  camera: {
    flex: 1,
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
      <View style={{ width: 400, height: 400 }}>
        <Camera style={styles.camera} />
      </View>
    );
  }
};

export default CameraObject;
