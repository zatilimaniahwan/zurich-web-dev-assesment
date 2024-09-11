import useFetchUsersData from "@/pages/api/hooks/use-fetch-users-data";
import * as S from "./users.styles";
import { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    /**
     * Fetches all users from the API and updates the component state.
     *
     * Sets loading to true initially, then attempts to fetch users.
     * If successful, sets users to the fetched users and sets loading to false.
     * If an error occurs, logs the error to the console and sets loading to false.
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
    fetchUsers();
  }, []);

  return (
    <S.TableWrapper>
      {loading ? (
        <S.LoadingMessage>Loading...</S.LoadingMessage>
      ) : (
        <S.Table>
          <S.TableHead>
            <S.TableRow>
              <S.TableHeaderCell>ID</S.TableHeaderCell>
              <S.TableHeaderCell>Avatar</S.TableHeaderCell>
              <S.TableHeaderCell>First Name</S.TableHeaderCell>
              <S.TableHeaderCell>Last Name</S.TableHeaderCell>
              <S.TableHeaderCell>Email</S.TableHeaderCell>
            </S.TableRow>
          </S.TableHead>
          <S.TableBody>
            {users.map((user) => (
              <tr key={user.id}>
                <S.TableCell>{user.id}</S.TableCell>
                <S.TableCell>
                  <img
                    src={user.avatar}
                    alt={`${user.first_name} avatar`}
                    width="50"
                  />
                </S.TableCell>
                <S.TableCell>{user.first_name}</S.TableCell>
                <S.TableCell>{user.last_name}</S.TableCell>
                <S.TableCell>{user.email}</S.TableCell>
              </tr>
            ))}
          </S.TableBody>
        </S.Table>
      )}
    </S.TableWrapper>
  );
};

export default UserList;
