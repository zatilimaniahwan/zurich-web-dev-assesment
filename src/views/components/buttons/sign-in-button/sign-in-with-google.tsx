import { signInUser } from "@/utils/auth";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import * as S from "./sign-in-with-google.styles";

const SignInWithGoogle = () => {
  return (
    <S.Container>
      <S.GoogleButton onClick={signInUser}>
        <S.Icon icon={faGoogle} />
        Sign in with Google
      </S.GoogleButton>
    </S.Container>
  );
};

export default SignInWithGoogle;
