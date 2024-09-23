import { signInUser } from "@/utils/auth";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../components/button/button";

/**
 * A view that renders a button that allows users to sign in with Google.
 *
 * When the button is clicked, it calls the {@link signInUser} function, which signs
 * the user in using NextAuth's Google OAuth provider.
 *
 * @returns A JSX element that renders a button with a Google icon and the text
 * "Sign in with Google".
 */
const SignInUser = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Button
        onClick={signInUser}
        className="flex items-center bg-blue-500 hover:bg-blue-600 focus:outline-none text-white px-4 py-2 rounded-md"
      >
        <FontAwesomeIcon icon={faGoogle} className="mr-2" />
        Sign in with Google
      </Button>
    </div>
  );
};

export default SignInUser;
