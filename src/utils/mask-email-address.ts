/**
 * Masks a user's email address by hiding all characters except the first one.
 * @param emailAddress - The email address to mask.
 * @returns The masked email address.
 */
const maskEmailAddress = (emailAddress: string): string => {
  if (!emailAddress || !emailAddress.includes("@")) {
    return "";
  }

  const [username, domain] = emailAddress.split("@");

  if (username && domain) {
    return `${username[0]}*****@${domain}`;
  }

  return "";
};
export default maskEmailAddress;
