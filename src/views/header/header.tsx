import { RootState } from "@/store";
import { useSelector } from "react-redux";
import HeaderComponent from "../components/header-component/header-component";
import Link from "next/link";
import * as S from "./header.styles";
import SignOut from "../sign-out/sign-out";

const Header = () => {
  const user = useSelector((state: RootState) => state.userData.user?.name);
  return (
    <HeaderComponent>
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
    </HeaderComponent>
  );
};

export default Header;
