import { OptionalUserData, UserData } from "@types";
import { doSignIn } from "@util/api";
import { retrieveUserData, storeUserData } from "@util/storage";
import React, { createContext, FC, useEffect, useState } from "react";

type AuthContextData = {
  userData: OptionalUserData;
  loading: boolean;
  signIn: (username: string, password: string) => Promise<boolean>;
  signOut: () => void;
};

// (shady typescript error silencing)
export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: FC = ({ children }) => {
  // Whether an authentification is current happening
  const [loading, setLoading] = useState<boolean>(false);

  // The user's data. User is logged in iff this is null.
  const [userData, setUserData] = useState<UserData | null>(null);

  // signs in with the user's stored data.
  // TODO -- consolidate this and the signIn() function I already have
  useEffect(() => {
    retrieveUserData(setUserData).catch(console.error);
  }, []);

  // signs the user in
  // returns true iff the sign in was successful.
  // for testing, use the password ""
  const signIn = async (
    username: string,
    password: string
  ): Promise<boolean> => {
    setLoading(true);
    const result = await doSignIn(username, password);
    if (result) {
      const newUserData = { name: "King Elan IV", username: username };
      storeUserData(newUserData);
      setUserData(newUserData);
      return true;
    } else {
      setLoading(false);
      return false;
    }
  };

  // signs the user out
  const signOut = () => {
    setUserData(null);
    storeUserData(null);
  };

  return (
    // This component will be used to encapsulate the whole App,
    // so all components will have access to the Context
    <AuthContext.Provider value={{ userData, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
