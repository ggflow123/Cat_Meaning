import React, { FC, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  HomeScreen,
  SettingsScreen,
  LogScreen,
  CameraScreen,
  MicrophoneScreen,
  LoadingScreen,
  LoginScreen,
} from "@screens";
import { AuthProvider } from "./AuthContext";

import { RootStackParamList } from "@types";

const MainStack = createStackNavigator<RootStackParamList>();
const MainStackScreen = () => (
  <MainStack.Navigator initialRouteName="Home">
    <MainStack.Screen
      name="Camera"
      component={CameraScreen}
      options={{ headerShown: false }}
    />
    <MainStack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <MainStack.Screen
      name="Loading"
      component={LoadingScreen}
      options={{ headerShown: false }}
    />
    <MainStack.Screen
      name="Log"
      component={LogScreen}
      options={{ headerShown: false }}
    />
    <MainStack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <MainStack.Screen
      name="Microphone"
      component={MicrophoneScreen}
      options={{ headerShown: false }}
    />
    <MainStack.Screen
      name="Settings"
      component={SettingsScreen}
      options={{ headerShown: false }}
    />
  </MainStack.Navigator>
);

// I'm not using modals, but I'm keeping this code here in case we want to
// at some point. Simply change <MainStackScreen /> in the export
// statement to <ModalStackScreen />
//
// // wrapper screen context thing so that we can put modals
// // on top of existing screens without any hassle.
// const ModalStack = createStackNavigator();
// const ModalStackScreen = () => (
//   <ModalStack.Navigator
//     initialRouteName="MainApp"
//     screenOptions={{ presentation: "modal" }}
//   >
//     <ModalStack.Screen
//       name="MainApp"
//       component={MainStackScreen}
//       options={{ headerShown: false }}
//     />
//   </ModalStack.Navigator>
// );

const Navigation: FC = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <MainStackScreen />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default Navigation;
