import { OptionalUserData } from "@types";
import * as SecureStore from "expo-secure-store";

export const storeValue = async (key: string, value: string) => {
  await SecureStore.setItemAsync(key, value);
};

export const retrieveStoredValue = async (
  key: string
): Promise<string | null> => {
  let result = await SecureStore.getItemAsync(key);
  return result;
};

// for dealing with user data.
// retrieves user data
// should be called once, by AuthContext, when user data needs to be retrieved.
// This returns true iff the retrieval was successful. (If it returns false, user data should be scrubbed.)
export const retrieveUserData = async (
  setUserData: (userData: OptionalUserData) => void
): Promise<boolean> => {
  const isLoggedIn =
    (await retrieveStoredValue("userdata__isloggedin")) === "true";
  if (!isLoggedIn) {
    setUserData(null);
    alert("Successfully retrieved null user data");
    return true;
  }
  const username = await retrieveStoredValue("userdata__username");
  const name = await retrieveStoredValue("userdata__name");
  if (!username || !name) {
    alert(
      "ERROR when retrieving your user data. You have been logged out. Please log in again."
    );
    return false;
  }
  setUserData({ username, name });
  alert("Successfully retrieved non-null user data.");
  return true;
};

// takes user data, and stores it in the phone.
// should be called whenever user data is updated, and by AuthContext.
// This returns true iff the storage was successful.
export const storeUserData = async (
  userData: OptionalUserData
): Promise<boolean> => {
  if (userData) {
    await storeValue("userdata__isloggedin", "true");
    await storeValue("userdata__username", userData.username);
    await storeValue("userdata__name", userData.name);
    alert("Successfully stored non-null user data.");
  } else {
    await storeValue("userdata__isloggedin", "false");
    alert("Successfully stored null user data.");
  }
  return true;
};
