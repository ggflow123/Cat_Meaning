export const getUser = async (uuid: string): Promise<string | void> => {
  try {
    const response = await fetch(
      "https://caster-app-heroku.herokuapp.com/getUser?uuid=" +
        encodeURIComponent(uuid)
    );
    const json = await response.json();
    return json.firstName;
  } catch (error) {
    console.error(error);
  } finally {
    // pass
  }
};

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
