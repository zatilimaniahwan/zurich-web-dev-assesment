import * as S from "./header.styles";
import SignOut from "../../sign-out/sign-out";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Link from "next/link";

const Header = () => {
  const user = useSelector((state: RootState) => state.userData.user?.name);
  return (
    <S.HeaderContainer>
      <div>
        <Link href="/">
          <S.Logo src="/zurich-logo-blue.svg" alt="Zurich Logo" />
        </Link>
      </div>
      <nav>
        <S.NavList>
          <S.NavItem>
            <S.SignedInUserLabel>Welcome, {user}</S.SignedInUserLabel>
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
