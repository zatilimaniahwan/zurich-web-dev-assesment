import { clearUser, setUser } from "@/store/slices/user-slice";
import { AppDispatch } from "@/store";
import Header from "@/views/components/header/header";
import Users from "@/views/users/users";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Footer from "@/views/components/footer/footer";
import useFetchUsersData from "./api/hooks/use-fetch-users-data";

const Index = () => {
  const { status, data: session } = useSession();
  const dispatch = useDispatch<AppDispatch>();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  /**
   * Fetches all the users from the API.
   * Sets the users state and the loading state.
   * If there is an error, logs the error to the console.
   * Finally, sets the loading state to false.
   */
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const users = await useFetchUsersData();
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
      dispatch(setUser(session.user));
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
        <Users users={users} loading={loading} />
        <Footer />
      </>
    );
  }
};

export default Index;
