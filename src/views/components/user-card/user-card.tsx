import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

// Use memo to prevent unnecessary re-renders
const UserCard = memo(
  ({
    user,
    isEmailVisible,
    setShowEmailIds,
  }: {
    user: User;
    isEmailVisible: boolean;
    setShowEmailIds: React.Dispatch<React.SetStateAction<number[]>>;
  }) => {
    return (
      <div
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
          {user.email}
          <FontAwesomeIcon
            icon={isEmailVisible ? faEyeSlash : faEye}
            className="ml-2 mt-2 cursor-pointer"
            onClick={() =>
              setShowEmailIds(
                (prev) =>
                  isEmailVisible
                    ? prev.filter((id) => id !== user.id) // Remove ID from array if already visible
                    : [...prev, user.id] // Add ID to array to show email
              )
            }
          />
        </p>
      </div>
    );
  }
);

UserCard.displayName = "UserCard";

export default UserCard;
