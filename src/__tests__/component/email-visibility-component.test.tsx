import { render, screen, fireEvent } from "@testing-library/react";
import React, { useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const maskEmailAddress = (emailAddress: string): string => {
  if (emailAddress) {
    const [username, domain] = emailAddress.split("@");
    if (username != null) return `${username[0]}*****@${domain}`;
  }
  return "";
};

const EmailVisibilityComponent: React.FC<{
  user: { id: number; email: string };
}> = ({ user }) => {
  const [visibleEmails, setVisibleEmails] = useState<Record<number, boolean>>(
    {}
  );

  const toggleVisibleEmail = (userId: number) => {
    setVisibleEmails((previousVisibleEmails) => ({
      ...previousVisibleEmails,
      [userId]: !previousVisibleEmails[userId],
    }));
  };

  return (
    <div>
      <span>
        {visibleEmails[user.id] ? user.email : maskEmailAddress(user.email)}
      </span>
      <FontAwesomeIcon
        icon={visibleEmails[user.id] ? faEyeSlash : faEye}
        onClick={() => toggleVisibleEmail(user.id)}
        data-testid="icon"
      />
    </div>
  );
};

// Define your test
describe("EmailVisibilityComponent", () => {
  const user = { id: 1, email: "user@example.com" };

  it("should render masked email initially and toggle to full email", () => {
    render(<EmailVisibilityComponent user={user} />);

    // Check initial state (masked email and eye icon)
    expect(screen.getByText("u*****@example.com")).toBeInTheDocument();

    // Click to reveal email
    fireEvent.click(screen.getByTestId("icon"));

    // Check updated state (full email and eye-slash icon)
    expect(screen.getByText("user@example.com")).toBeInTheDocument();

    // Click to hide email again
    fireEvent.click(screen.getByTestId("icon"));

    // Check back to masked email
    expect(screen.getByText("u*****@example.com")).toBeInTheDocument();
  });
});
