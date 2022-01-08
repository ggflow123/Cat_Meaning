import React, { FC, useRef, useState, useEffect } from "react";
import { Text, View, StyleSheet, Animated } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

type props = {};

const styles = StyleSheet.create({
  icon: {},
});

const LoadingIcon: FC<props> = () => {
  // animation variable keeps track of the opacity
  const minOpacity = 0.1;
  const maxOpacity = 1.0;
  const fadeAnimation = useRef(new Animated.Value(minOpacity)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnimation, {
          useNativeDriver: true,
          delay: 500,
          toValue: maxOpacity,
          duration: 1000,
        }),
        Animated.timing(fadeAnimation, {
          useNativeDriver: true,
          delay: 500,
          toValue: minOpacity,
          duration: 1000,
        }),
      ])
    ).start();
  }, []);

  return (
    <Animated.View style={[styles.icon, { opacity: fadeAnimation }]}>
      <FontAwesome5 name="cat" size={60} color="black" />
    </Animated.View>
  );
};

export default LoadingIcon;
