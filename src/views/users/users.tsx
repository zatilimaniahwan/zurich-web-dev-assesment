import UserCard from "../components/user-card/user-card";

type UserProps = {
  users: User[];
  loading: boolean;
  showEmailId: number | null; // Track which user's email is visible
  setShowEmailId: React.Dispatch<React.SetStateAction<number | null>>; // Setter for the visible user ID
};

/**
 * The Users view displays a list of users with their name and email address.
 * The email address can be toggled to be shown or hidden.
 * @param {UserProps} props - The component props.
 * @returns {JSX.Element} The JSX element representing the Users component.
 */
const Users = ({ users, loading, showEmailId, setShowEmailId }: UserProps) => {
  if (loading && !users) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full flex flex-col justify-center px-4 mt-16 box-border">
      <div className="flex flex-wrap gap-5 my-5">
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            isEmailVisible={showEmailId === user.id}
            setShowEmailId={setShowEmailId}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
