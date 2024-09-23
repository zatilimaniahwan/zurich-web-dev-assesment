import { AppDispatch } from "@/store";
import { signOutUser } from "@/utils/auth";
import { useDispatch } from "react-redux";
import Button from "../components/button/button";

/**
 * Renders a Sign Out button that redirects to the sign-in page and logs out the user
 * using the `signOutUser` function.
 *
 * @returns A button element with a "Sign Out" label.
 */
const SignOut = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Button
      onClick={() => signOutUser(dispatch)}
      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 "
    >
      Sign Out
    </Button>
  );
};

export default SignOut;
