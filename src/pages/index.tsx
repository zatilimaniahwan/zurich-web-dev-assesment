import { clearUser, setUser } from "@/store/slices/user-slice";
import { AppDispatch } from "@/store";
import Users from "@/views/users/users";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Footer from "@/views/footer/footer";
import UseFetchUsersData from "./api/hooks/use-fetch-users-data";
import Header from "@/views/header/header";
import { maskEmailAddress, toggleVisibleEmail } from "@/utils/email-utils";

const Index = () => {
  const { status, data: session } = useSession();
  const dispatch = useDispatch<AppDispatch>();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [visibleEmails, setVisibleEmails] = useState<Record<number, boolean>>(
    {}
  );

  /**
   * Toggles the visibility of a user's email address based on their ID.
   * @param userId - The ID of the user whose email address should be toggled.
   */
  /* const toggleVisibleEmail = (userId: number) => {
    setVisibleEmails((previousVisibleEmails) => ({
      ...previousVisibleEmails,
      [userId]: !previousVisibleEmails[userId],
    }));
  }; */

  /**
   * Fetches all the users from the API.
   * Sets the users state and the loading state.
   * If there is an error, logs the error to the console.
   * Finally, sets the loading state to false.
   */
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const users = await UseFetchUsersData();
      setUsers(users);
      setLoading(false);
    } catch (error) {
      console.error("Error loading users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      // Set the user in Redux store
      dispatch(setUser(session.user as GoogleUserProfile));
      if (users.length === 0) fetchUsers();
      // Redirect to users page if authenticated
    } else if (status === "unauthenticated") {
      // Clear user in Redux store if not authenticated
      dispatch(clearUser());
    }
  }, [session, status, dispatch, users]);

  if (status === "authenticated" && session?.user) {
    return (
      <>
        <Header />
        <Users
          users={users}
          loading={loading}
          toggleVisibleEmail={(userId: number) =>
            toggleVisibleEmail(userId, setVisibleEmails)
          }
          maskEmailAddress={maskEmailAddress}
          visibleEmails={visibleEmails}
          setVisibleEmails={setVisibleEmails}
        />
        <Footer />
      </>
    );
  }
};

export default Index;
