import { signInUser } from "@/utils/auth";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import * as S from "./sign-in.styles";

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
    <S.Container>
      <S.GoogleButton onClick={signInUser}>
        <S.Icon icon={faGoogle} />
        Sign in with Google
      </S.GoogleButton>
    </S.Container>
  );
};

export default SignInUser;
