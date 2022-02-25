import React, { createContext, FC, useState } from "react";

type UserData = {
  name: string;
};

type AuthContextData = {
  userData: UserData | null;
  loading: boolean;
  signIn: (username: string, password: string) => Promise<boolean>;
  signOut: () => void;
};

// sleep function to simulate reaching a server, for testing purposes
const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// shady typescript error silencing
export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: FC = ({ children }) => {
  // Whether an authentification is current happening
  const [loading, setLoading] = useState<boolean>(false);

  // The user's data. User is logged in iff this is null.
  const [userData, setUserData] = useState<UserData | null>(null);

  // signs the user in
  // returns true iff the sign in was successful.
  // for testing, use the password ""
  const signIn = async (
    username: string,
    password: string
  ): Promise<boolean> => {
    setLoading(true);
    // sleep to simulate reaching server
    await sleep(500);
    setLoading(false);

    if (password === "") {
      setUserData({ name: "Alan" });
      return true;
    } else {
      return false;
    }
  };

  // signs the user out
  const signOut = () => {
    setUserData(null);
  };

  return (
    // This component will be used to encapsulate the whole App,
    // so all components will have access to the Context
    <AuthContext.Provider value={{ userData, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
