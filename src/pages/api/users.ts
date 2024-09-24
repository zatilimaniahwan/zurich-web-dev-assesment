import axios from "axios";
import { maskEmailAddress } from "@/utils/mask-email-address";

// Fetch a page of users from the external API
const fetchUsersByPage = async (page: number): Promise<UserResponse> => {
  const { data } = await axios.get<UserResponse>(
    `https://reqres.in/api/users?page=${page}`
  );
  return data;
};

// Fetch all users from the external API recursively
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

// API route handler
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
