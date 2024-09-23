import { clearUser, setUser } from "@/store/slices/user-slice";
import { AppDispatch } from "@/store";
import Users from "@/views/users/users";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Footer from "@/views/footer/footer";
import Header from "@/views/header/header";
import axios from "axios";

const Index = () => {
  const { status, data: session } = useSession();
  const dispatch = useDispatch<AppDispatch>();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showEmailId, setShowEmailId] = useState<number | null>(null);

  useEffect(() => {
    /**
     * Fetches the list of users from the API with the showEmailId query parameter.
     * The showEmailId is used to conditionally show the email address for the user
     * with the matching ID.
     */
    const fetchUsers = async () => {
      setLoading(true);
      try {
        // Pass the showEmailId as a query parameter
        const { data } = await axios.get<User[]>(
          `/api/users?showEmailId=${showEmailId}&showEmail=${
            showEmailId !== null
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
  }, [session, status, dispatch, showEmailId]);

  if (status === "authenticated" && session?.user) {
    return (
      <>
        <Header />
        <Users
          users={users}
          loading={loading}
          showEmailId={showEmailId}
          setShowEmailId={setShowEmailId}
        />
        <Footer />
      </>
    );
  }

  return null;
};

export default Index;
