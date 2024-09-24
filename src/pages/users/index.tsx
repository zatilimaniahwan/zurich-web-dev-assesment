import { clearUser, setUser } from "@/store/slices/user-slice";
import { AppDispatch } from "@/store";
import Users from "@/views/users/users";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Footer from "@/views/footer/footer";
import Header from "@/views/header/header";
import axios from "axios";

/**
 * The Users page displays a list of users with their name and email address.
 * The email address can be toggled to be shown or hidden.
 *
 * The page is protected by NextAuth, and only users who are authenticated
 * will be able to access the page. The user's profile information is stored
 * in Redux state.
 *
 * The page fetches the list of users from the `/api/users` API route when the
 * user is authenticated. The API route takes a `showEmailIds` query parameter,
 * which is an array of user IDs whose email addresses should be shown.
 *
 * The page displays a loading indicator while the list of users is being fetched.
 *
 * The page also displays a footer component.
 *
 * @returns {JSX.Element} The JSX element representing the Users page.
 */
const Index = () => {
  const { status, data: session } = useSession();
  const dispatch = useDispatch<AppDispatch>();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showEmailIds, setShowEmailIds] = useState<number[]>([]); // Changed to array

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        // Pass the showEmailIds as a query parameter
        const { data } = await axios.get<User[]>(
          `/api/users?showEmailIds=${JSON.stringify(showEmailIds)}&showEmail=${
            showEmailIds.length > 0
          }`
        );
        setUsers(data);
      } catch (error) {
        console.error("Error loading users:", error);
      } finally {
        setLoading(false);
      }
    };

    if (status === "authenticated" && session?.user) {
      dispatch(setUser(session.user as GoogleUserProfile));
      fetchUsers();
    } else if (status === "unauthenticated") {
      dispatch(clearUser());
    }
  }, [session, status, dispatch, showEmailIds]);

  if (status === "authenticated" && session?.user) {
    return (
      <>
        <Header />
        <Users
          users={users}
          loading={loading}
          showEmailIds={showEmailIds}
          setShowEmailIds={setShowEmailIds}
        />
        <Footer />
      </>
    );
  }

  return null;
};

export default Index;
