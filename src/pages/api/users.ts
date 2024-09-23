import axios from "axios";
import { maskEmailAddress } from "@/utils/mask-email-address";

/**
 * Fetches a page of users from the external API.
 * @param page - The page number to fetch.
 * @returns A promise that resolves with the fetched page of users.
 */
const fetchUsersByPage = async (page: number): Promise<UserResponse> => {
  const { data } = await axios.get<UserResponse>(
    `https://reqres.in/api/users?page=${page}`
  );
  return data;
};

/**
 * Fetches all users from the external API recursively.
 * @param page - The current page to fetch.
 * @param allUsersData - An array to accumulate the users fetched so far.
 * @param showEmail - A boolean to determine if the email should be shown.
 * @param showEmailId - The user ID for which to show the unmasked email.
 * @returns A promise that resolves with an array of all users.
 */
export const fetchAllUsers = async (
  page: number,
  allUsersData: User[],
  showEmail: boolean,
  showEmailId: number | null
): Promise<User[]> => {
  try {
    // Fetch the current page of users
    const response = await fetchUsersByPage(page);
    const totalPages = response.total_pages;

    // Filter and accumulate users from the current page
    const filteredUsers = response.data
      .filter(
        (user: User) =>
          user.first_name.startsWith("G") || user.last_name.startsWith("W")
      )
      .map((user: User) => ({
        ...user,
        email:
          showEmail && user.id === showEmailId
            ? user.email
            : maskEmailAddress(user.email), // Conditionally mask the email address
      }));

    allUsersData.push(...filteredUsers);

    // If there are more pages, recursively fetch the next page
    if (page < totalPages) {
      return fetchAllUsers(page + 1, allUsersData, showEmail, showEmailId);
    }
  } catch (error) {
    console.error("Error fetching users:", error);
  }

  return allUsersData;
};

// API route handler
export default async function handler(req: any, res: any) {
  const { showEmailId, showEmail } = req.query; // Read the showEmail and showEmailId from the query parameters
  try {
    const users = await fetchAllUsers(
      1,
      [],
      Boolean(showEmail),
      Number(showEmailId)
    );
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
}
