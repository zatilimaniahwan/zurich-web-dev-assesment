import { Dispatch, SetStateAction } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type UserProps = {
  users: User[];
  loading: boolean;
  toggleVisibleEmail: (
    userId: number,
    setVisibleEmails: Dispatch<SetStateAction<Record<number, boolean>>>
  ) => void;
  maskEmailAddress: (emailAddress: string) => string;
  visibleEmails: Record<number, boolean>;
  setVisibleEmails: Dispatch<SetStateAction<Record<number, boolean>>>;
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
  setVisibleEmails,
}: UserProps) => {
  if (loading && !users) {
    return <p>Loading...</p>;
  }

  if (!loading && users) {
    return (
      <div className="w-full flex flex-col justify-center px-4 mt-16 box-border">
        <div className="flex flex-wrap gap-5 my-5">
          {users?.map((user) => {
            return (
              <div
                key={user.id}
                className="bg-white border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center text-center
                w-full sm:w-[calc(50%-20px)] md:w-[calc(33.333%-20px)]"
              >
                <img
                  src={user.avatar}
                  alt={`${user.first_name} ${user.last_name}`}
                  className="rounded-full w-20 h-20"
                />
                <h3 className="mt-2 text-lg">
                  {user.first_name} {user.last_name}
                </h3>
                <p className="mt-1 text-gray-600 w-full flex items-center justify-center">
                  {visibleEmails[user.id]
                    ? user.email
                    : maskEmailAddress(user.email)}
                  <FontAwesomeIcon
                    icon={visibleEmails[user.id] ? faEyeSlash : faEye}
                    className="ml-2 mt-2 cursor-pointer"
                    onClick={() =>
                      toggleVisibleEmail(user.id, setVisibleEmails)
                    }
                  />
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
};

export default Users;
