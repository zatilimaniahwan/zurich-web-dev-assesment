import { AppDispatch } from "@/store";
import { signOutUser } from "@/utils/auth";
import { useDispatch } from "react-redux";
import * as S from "./sign-out-button.styles";

const SignOutButton = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSignOut = async () => {
    await signOutUser(dispatch);
  };

  return <S.SignOutButton onClick={handleSignOut}>Sign Out</S.SignOutButton>;
};

export default SignOutButton;
