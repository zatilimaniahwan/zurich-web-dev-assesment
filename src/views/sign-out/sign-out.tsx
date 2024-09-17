import { AppDispatch } from "@/store";
import { signOutUser } from "@/utils/auth";
import { useDispatch } from "react-redux";
import * as S from "./sign-out.styles";
import { useRouter } from "next/router";

/**
 * Renders a Sign Out button that redirects to the sign-in page and logs out the user
 * using the `signOutUser` function.
 *
 * @returns A button element with a "Sign Out" label.
 */
const SignOut = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleSignOut = async () => {
    await router.push("/auth/signin");
    signOutUser(dispatch);
  };

  return <S.SignOutButton onClick={handleSignOut}>Sign Out</S.SignOutButton>;
};

export default SignOut;
