import * as S from "./users.styles";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

type UserProps = {
  users: User[];
  loading: boolean;
  toggleVisibleEmail: (userId: number) => void;
  maskEmailAddress: (emailAddress: string) => string;
  visibleEmails: Record<number, boolean>;
};

/**
 * The Users view displays a list of users with their name and email address.
 * The email address is initially hidden and can be toggled to be shown or hidden.
 * @param {UserProps} props - The component props.
 * @returns {JSX.Element} The JSX element representing the Users component.
 */
const Users = ({
  users,
  loading,
  toggleVisibleEmail,
  maskEmailAddress,
  visibleEmails,
}: UserProps) => {
  if (loading && !users) {
    return <p>Loading...</p>;
  }

  if (!loading && users) {
    return (
      <S.Wrapper>
        <S.CardContainer>
          {users?.map((user) => (
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
