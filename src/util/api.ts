export const getUser = async (uuid: string): Promise<string | void> => {
  try {
    const response = await fetch(
      // "https://caster-app-heroku.herokuapp.com/user/debug"
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
