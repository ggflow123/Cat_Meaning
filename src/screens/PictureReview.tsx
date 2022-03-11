// TODO

import { NavIcon, SubmitButton } from "@components";
import { MainLayout } from "@components/layouts";
import { ScreenType } from "@types";
import { submitMedia } from "@util/api";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 400,
    height: 400,
  },
});

const PictureReviewScreen: ScreenType<"PictureReview"> = ({ navigation }) => {
  const [translationMessage, setTranslationMessage] = useState<string | null>(
    null
  );
  const [loading, setLoading] = useState(false);

  const navButtons = [
    <NavIcon
      key="0"
      iconName="triangle-left"
      onPress={() => navigation.pop()}
    />,
  ];

  const submitPicture = async () => {
    if (loading) {
      return;
    }

    setTranslationMessage("loading...");
    setLoading(true);
    // TODO

    const result = await submitMedia(
      "1",
      "https://i.pinimg.com/originals/7e/0a/50/7e0a507de8cf8b46e0f2665f1058ef37.jpg"
    );
    if (result) {
      setTranslationMessage(result);
    } else {
      setTranslationMessage("ERROR with translating");
    }
    setLoading(false);
  };

  return (
    <MainLayout navButtons={navButtons} title="Camera">
      <View style={styles.container}>
        <View>
          <Text>Review your picture:</Text>
        </View>
        <View>
          <Image
            style={styles.image}
            source={require("@assets/images/catpics/royal.jpg")}
          />
        </View>
        {translationMessage && (
          <View>
            <Text>{translationMessage}</Text>
          </View>
        )}
        <View style={styles.buttonsContainer}>
          <SubmitButton title="Submit Picture" onPress={submitPicture} />
          <SubmitButton
            title="Retake Picture"
            onPress={() => navigation.push("Camera")}
          />
          <SubmitButton
            title="Cancel"
            onPress={() => navigation.push("Home")}
          />
        </View>
      </View>
    </MainLayout>
  );
};
export default PictureReviewScreen;
