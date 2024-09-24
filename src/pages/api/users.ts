import axios from "axios";
import { maskEmailAddress } from "@/utils/mask-email-address";

/**
 * Fetches a page of users from the external API.
 *
 * @param {number} page - The page number to fetch.
 * @returns {Promise<UserResponse>} - A promise that resolves with the data for the requested page of users.
 */
const fetchUsersByPage = async (page: number): Promise<UserResponse> => {
  const { data } = await axios.get<UserResponse>(
    `https://reqres.in/api/users?page=${page}`
  );
  return data;
};

/**
 * Fetches all users from the external API and filters them
 * to include only those whose first name starts with "G" or last name starts with "W".
 * Optionally masks email addresses if showEmail is not set to true.
 * Optionally shows email addresses if showEmailIds array includes the user ID.
 *
 * @param {number} page - The page number to fetch.
 * @param {User[]} allUsersData - The array to store the filtered users.
 * @param {boolean} showEmail - The flag to show the email addresses.
 * @param {number[]} showEmailIds - The array of user IDs to show the email.
 * @returns {Promise<User[]>} - The filtered users.
 */
export const fetchAllUsers = async (
  page: number,
  allUsersData: User[],
  showEmail: boolean,
  showEmailIds: number[]
): Promise<User[]> => {
  try {
    const response = await fetchUsersByPage(page);
    const totalPages = response.total_pages;

    const filteredUsers = response.data
      .filter(
        (user: User) =>
          user.first_name.startsWith("G") || user.last_name.startsWith("W")
      )
      .map((user: User) => ({
        ...user,
        email:
          showEmail && showEmailIds.includes(user.id) // Check if user ID is in the array
            ? user.email
            : maskEmailAddress(user.email), // Conditionally mask the email address
      }));

    allUsersData.push(...filteredUsers);

    if (page < totalPages) {
      return fetchAllUsers(page + 1, allUsersData, showEmail, showEmailIds);
    }
  } catch (error) {
    console.error("Error fetching users:", error);
  }

  return allUsersData;
};

/**
 * Handles the GET /api/users API route.
 *
 * Fetches all users from the external API and filters them
 * by first name starting with "G" or last name starting with "W".
 * Optionally masks email addresses if showEmail is not set to true.
 * Optionally shows email addresses if showEmailIds array includes the user ID.
 *
 * @param {Object} req - The request object.
 * @param {string} req.query.showEmailIds - The array of user IDs to show the email.
 * @param {boolean} req.query.showEmail - The flag to show the email addresses.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - The API handler promise.
 */
export default async function handler(req: any, res: any) {
  const { showEmailIds, showEmail } = req.query;
  try {
    const users = await fetchAllUsers(
      1,
      [],
      Boolean(showEmail),
      JSON.parse(showEmailIds || "[]")
    );
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
}
