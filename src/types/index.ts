import { FC } from "react";

import { StackScreenProps } from "@react-navigation/stack";

// I honestly have no idea how types work, please please don't give errors...

// this type is the parameters given to each screen directly from React Navigation,
// besides the default `navigation` and `route` props.
export type RootStackParamList = {
  Camera: undefined;
  Home: undefined;
  Loading: undefined;
  Log: undefined;
  Microphone: undefined;
  Settings: undefined;
  Login: undefined;
  AccountCreation: undefined;
};

export type ScreenType<
  RouteName extends keyof RootStackParamList = keyof RootStackParamList
> = FC<StackScreenProps<RootStackParamList, RouteName>>;