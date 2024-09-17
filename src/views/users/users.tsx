import useFetchUsersData from "@/pages/api/hooks/use-fetch-users-data";
import * as S from "./users.styles";
import { useEffect, useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

type UserProps = {
  users: User[];
  loading: boolean;
};
const Users = ({ users, loading }: UserProps) => {
  const [visibleEmails, setVisibleEmails] = useState<Record<number, boolean>>(
    {}
  );

  /**
   * Toggles the visibility of a user's email address based on their ID.
   * @param userId - The ID of the user whose email address should be toggled.
   */
  const toggleVisibleEmail = (userId: number) => {
    setVisibleEmails((previousVisibleEmails) => ({
      ...previousVisibleEmails,
      [userId]: !previousVisibleEmails[userId],
    }));
  };

  /**
   * Masks a user's email address by hiding all characters except the first, and the domain.
   * @example maskEmailAddress("user@example.com") => "u*****@example.com"
   * @param {string} emailAddress - The email address to mask.
   * @returns {string} The masked email address.
   */
  const maskEmailAddress = (emailAddress: string): string => {
    const [username, domain] = emailAddress.split("@");
    return `${username[0]}*****@${domain}`;
  };

  if (loading && !users) {
    return <p>Loading...</p>;
  }

  if (!loading && users) {
    return (
      <S.Wrapper>
        <S.CardContainer>
          {users.map((user) => (
            <S.Card key={user.id}>
              <S.Avatar
                src={user.avatar}
                alt={`${user.first_name} ${user.last_name}`}
              />
              <S.UserName>
                {user.first_name} {user.last_name}
              </S.UserName>
              <S.UserEmail>
                {visibleEmails[user.id]
                  ? user.email
                  : maskEmailAddress(user.email)}
                {visibleEmails[user.id] ? (
                  <S.Icon
                    icon={faEyeSlash}
                    onClick={() => toggleVisibleEmail(user.id)}
                  />
                ) : (
                  <S.Icon
                    icon={faEye}
                    onClick={() => toggleVisibleEmail(user.id)}
                  />
                )}
              </S.UserEmail>
            </S.Card>
          ))}
        </S.CardContainer>
      </S.Wrapper>
    );
  }
};

export default Users;
