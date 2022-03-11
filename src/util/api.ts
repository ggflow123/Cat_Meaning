// sleep function to simulate reaching a server, for testing purposes
const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// takes in a Url and returns a File object that can be used in fetch requests
const getDataUriFromUrl = (url: string): Promise<string> => {
  return new Promise((resolve) => {
    const request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.responseType = "blob";
    request.onload = function () {
      var reader = new FileReader();
      reader.readAsDataURL(request.response);
      reader.onload = (e) => {
        resolve(e.target?.result);
      };
    };
    request.send();
  });
};

// just a debugging thing
export const sendDebug = async (): Promise<boolean> => {
  try {
    const response = await fetch(
      "https://caster-app-heroku.herokuapp.com/user/debug"
    );
    console.log({ response });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

// TODO
// on success, returns user data (uuid, username, etc.)
// on failure, returns null
export const doSignIn = async (
  username: string,
  password: string
): Promise<{ uuid: string; username: string } | null> => {
  try {
    await sleep(500); // sleep to simulate reaching server
    if (password === "bad") {
      return null;
    }
    return { uuid: "1", username: username };
  } catch (error) {
    console.error(error);
    return null;
  }
};

// returns user object on successful creation
// returns null on unsuccessful creation
export const createAccount = async (
  firstName: string,
  lastName: string,
  username: string,
  password: string
): Promise<{} | null> => {
  try {
    // return { uuid: "fake_uuid" };

    const bodyData = JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      userProperty: {
        name: username,
        userType: "ADMIN",
      },
      userSecrete: {
        password: password,
      },
      userSettingProperty: {},
    });

    const response = await fetch(
      "https://caster-app-heroku.herokuapp.com/createUser",
      {
        method: "POST",
        body: bodyData,
      }
    );

    const content = await response.json();

    if (content === null) {
      return null;
    }
    const result = content.uuid;
    if (result === null) {
      const errorMessage = content?.mediaError?.mediaErrorMessage;
      alert(errorMessage || "Error with account creation");
      return null;
    }
    return { result: result };
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const modifyAccount = async (updatedUserData: {
  firstName?: string;
  lastName?: string;
  username?: string;
  password?: string;
}): Promise<boolean> => {
  try {
    // to be implemented later
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

// NOT YET IMPLEMENTED
// type userReturnData = {
//   uuid: string,
//   username: string,
//   firstName: string,
//   lastName: string,
// };
// export const getUser = async (username: string, encryptedPassword: string): Promise<userReturnData | null> {
//   try {
//     const response = await fetch("https://")
//   }
// }

// export const getUserName = async (uuid: string): Promise<string | void> => {
//   try {
//     const response = await fetch(
//       "https://caster-app-heroku.herokuapp.com/getUser?uuid=" +
//         encodeURIComponent(uuid)
//     );
//     const json = await response.json();
//     return json.firstName;
//   } catch (error) {
//     console.error(error);
//   } finally {
//   }
// };

// type UserData = {
//   firstName?: string,
//   lastName?: string,
//   username: string,
//   encryptedPassword: string,
// }

// export const createUser = async (data: UserData): Promise<boolean?> => {
//   try {
//     const defaultData = {
//       uuid: Math.floor(Math.random() * 10000),
//       firstName: "firstnameplaceholder",
//       lastName: "lastnameplaceholder",
//       username: "usernameplaceholder",
//       encryptedPassword: "passwordplaceholder",
//     }

//     const response = await fetch(
//       "https://caster-app-heroku.herokuapp.com/createUser",
//       {
//         body: {
//           JSON.stringify({...defaultData, ...data})
//         }
//       }
//     )
//   }
// }

// // returns a prmose whose value is whether or not the sign in was successful
// export const signIn (username: string, password: string): Promise<boolean> => {
//   try {
//     const url = new URL("https://caster-app-heroku.herokuapp.com/getUser?uuid")
//     url
//     const response = await fetch(
//       url
//     )
//   }
// }

// // deletes the current user only. returns a prmose whose value is whether or not the deletion was successful
// export const deleteCurrentUser = async (uuid: string): Promise<boolean> => {
//   try {
//     const url = new URL("https://caster-app-heroku.herokuapp.com/purgeUser")
//     url.searchParams.append("uuid", uuid);
//     const response = await fetch(url.toString());
//     const json = await response.json();
//     // TODO: do something to the response ...
//     // and use that to determine whether to return true or false
//     return true
//   }
//   catch (error) {
//     console.error(error)
//     return false
//   }
// }

// // changes the current user's names
// // endpoint yet to be implemented as well.
// export const changeName (uuid: string, firstName: string, secondName: string): Promise<boolean> => {
//   try {
//     const
//   }
// }

// const getFile = async (url: string) => {
//   return "";
// };

// const getFile = async (url: string) => {
//   const dataUri = await getDataUriFromUrl(url);
//   return dataUri;
// };

const getFile = async (url: string) => {
  const response = await fetch(url, { method: "GET" });
  const data = await response.blob();
  const metadata = {
    type: "image/jpeg",
  };
  const file = new File([data], "cat.jpg", metadata);
  return file;
};

// const getFile = async (url: string) => {
//   const path = require("../assets/images/catpics/snowy.jpg");
//   const response = await fetch(path);
//   const blob = await response.blob();
//   const file = new File([blob], "snowy.jpg", { type: "image/jpeg" });
//   return file;
// };

// const getFile = async (url: string) => {
//   const path = catpic;
//   const response = await fetch(path);
//   const blob = await response.blob();
//   const file = new File([blob], "snowy.jpg", { type: "image/jpeg" });
//   return file;
// };

// returns a string on success
// returns null on failure
// NOTE: The api requires (it seems) an input of type formData
export const submitMedia = async (
  uuid: string,
  imageFile?: string
): Promise<string | null> => {
  try {
    const bodyData = new FormData();
    bodyData.append("userId", "1");
    bodyData.append("logId", "1");
    bodyData.append(
      "file",
      await getFile(
        "https://upload.wikimedia.org/wikipedia/commons/a/a3/June_odd-eyed-cat.jpg"
      )
    );
    const response = await fetch(
      "https://caster-app-heroku.herokuapp.com/media/process",
      {
        method: "POST",
        body: bodyData,
      }
    );

    // const xhr = new XMLHttpRequest();
    // const content = await new Promise((resolve, reject) => {
    //   xhr.onreadystatechange = (e) => {
    //     if (xhr.readyState !== 4) {
    //       return;
    //     }
    //     resolve(xhr.responseText);
    //   };
    //   xhr.open("POST", "https://caster-app-heroku.herokuapp.com/media/process");
    //   xhr.send(bodyData);
    // });

    const content = await response.json();
    // console.log({ content });
    return "successfully navigated fetch function";

    if (content === null) {
      alert("ERROR! Content of thingy was null");
      return null;
    }
    const result = content.translationResult;
    if (result === null) {
      const errorMessage = content?.mediaError?.mediaErrorMessage;
      alert(errorMessage || "Unkown error message");
      return null;
    }
    return result.translationMessage;
  } catch (error) {
    console.error(error);
    return null;
  }
};
