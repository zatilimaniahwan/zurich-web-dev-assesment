import axios from "axios";

/**
 * Fetches a page of users from the API.
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
 * Fetches all the users from the API.
 * @returns A promise that resolves with an array of all users.
 */
const useFetchUsersData = async (): Promise<User[]> => {
  const allUsersData: User[] = [];
  try {
    // set the initial page as 1
    const initialResponse = await fetchUsersByPage(1);
    const totalPages = initialResponse.total_pages;
    // traverse all pages to get all users
    for (let page = 1; page <= totalPages; page++) {
      const response = await fetchUsersByPage(page);
      // push the filtered response
      allUsersData.push(
        ...response.data.filter(
          (user: User) =>
            user.first_name.startsWith("G") || user.last_name.startsWith("W")
        )
      );
    }
  } catch (error) {
    console.error("Error fetching users:", error);
  }
  return allUsersData;
};

export default useFetchUsersData;
