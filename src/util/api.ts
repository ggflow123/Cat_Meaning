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

export const createAccount = async (
  firstName: string,
  lastName: string,
  username: string,
  password: string
): Promise<boolean> => {
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
