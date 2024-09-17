import * as S from "./header.styles";
import SignOut from "../../sign-out/sign-out";
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
            <SignOut />
          </S.NavItem>
        </S.NavList>
      </nav>
    </S.HeaderContainer>
  );
};

export default Header;
