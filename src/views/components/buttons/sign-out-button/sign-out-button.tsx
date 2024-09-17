import { AppDispatch } from "@/store";
import { signOutUser } from "@/utils/auth";
import { useDispatch } from "react-redux";
import * as S from "./sign-out-button.styles";
import { useRouter } from "next/router";

const SignOutButton = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleSignOut = async () => {
    await router.push("/auth/signin");
    signOutUser(dispatch);
  };

  return <S.SignOutButton onClick={handleSignOut}>Sign Out</S.SignOutButton>;
};

export default SignOutButton;
