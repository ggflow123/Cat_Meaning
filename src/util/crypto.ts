// import sha256 from 'crypto-js/sha256';

// /*
//  * This function takes a message and canonically encrypts it.
//  * This will be needed when users create a password.
//  * When a user creates a password, the password should be encrypted with other data
//  * such as the username and the time of creation used as salt. When a user signs in,
//  * the password should be encrypted before being sent to the server.
//  *    message := what to encrypt
//  *    salt := optional data encrypted along side, used to throw off rainbow tables
// */
// export const encrypt = (message: string, salt?: string): string => {
//   const hash = sha256(message + "|" + salt);
//   return hash.toString();
// }