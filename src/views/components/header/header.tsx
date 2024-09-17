import * as S from "./header.styles";
import SignOutButton from "../buttons/sign-out-button/sign-out-button";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const Header = () => {
  const user = useSelector((state: RootState) => state.userData.user?.name);
  return (
    <S.HeaderContainer>
      <div>
        <a href="/">
          <S.Logo src="/zurich-logo-blue.svg" alt="Zurich Logo" />
        </a>
      </div>
      <nav>
        <S.NavList>
          <S.NavItem>
            <S.SignedInUserLabel>Hello, {user}</S.SignedInUserLabel>
          </S.NavItem>
          <S.NavItem>
            <SignOutButton />
          </S.NavItem>
        </S.NavList>
      </nav>
    </S.HeaderContainer>
  );
};

export default Header;
