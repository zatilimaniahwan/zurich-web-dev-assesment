import { Dispatch, SetStateAction } from "react";
/**
 * Masks a user's email address by hiding all characters except the first one.
 * @param emailAddress - The email address to mask.
 * @returns The masked email address.
 */
export const maskEmailAddress = (emailAddress: string): string => {
  if (!emailAddress || !emailAddress.includes("@")) {
    return "";
  }

  const [username, domain] = emailAddress.split("@");

  if (username && domain) {
    return `${username[0]}*****@${domain}`;
  }

  return "";
};

/**
 * Toggles the visibility of a user's email address based on their ID.
 * @param userId - The ID of the user whose email address should be toggled.
 * @param setVisibleEmails - The state setter function to update visibility.
 */
export const toggleVisibleEmail = (
  userId: number,
  setVisibleEmails: Dispatch<SetStateAction<Record<number, boolean>>>
) => {
  setVisibleEmails((previousVisibleEmails) => ({
    ...previousVisibleEmails,
    [userId]: !previousVisibleEmails[userId],
  }));
};
