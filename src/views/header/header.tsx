import { RootState } from "@/store";
import { useSelector } from "react-redux";
import HeaderComponent from "../components/header-component/header-component";
import Link from "next/link";
import * as S from "./header.styles";
import SignOut from "../sign-out/sign-out";

/**
 * A functional component that renders the header of the application.
 * It displays the Zurich Insurance logo and a navigation bar with a link to sign out.
 * If a user is signed in, it displays a welcome message with the user's name.
 */
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
