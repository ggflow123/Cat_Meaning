import { StackScreenProps } from "@react-navigation/stack";
import { FC } from "react";

// I honestly have no idea how types work, please please don't give errors...

// this type is the parameters given to each screen directly from React Navigation,
// besides the default `navigation` and `route` props.
export type RootStackParamList = {
  AccountCreation: undefined;
  AccountModification: undefined;
  Camera: undefined;
  Home: undefined;
  Loading: undefined;
  Log: undefined;
  Login: undefined;
  Microphone: undefined;
  PictureReview: undefined;
  Settings: undefined;
};

export type ScreenType<
  RouteName extends keyof RootStackParamList = keyof RootStackParamList
> = FC<StackScreenProps<RootStackParamList, RouteName>>;

export type UserData = {
  name: string;
  username: string;
};

export type OptionalUserData = UserData | null;
