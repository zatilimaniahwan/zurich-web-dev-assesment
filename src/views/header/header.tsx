import { RootState } from "@/store";
import { useSelector } from "react-redux";
import HeaderComponent from "../components/header-component/header-component";
import Link from "next/link";
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
          <img
            src="/zurich-logo-blue.svg"
            alt="Zurich Logo"
            className="h-auto max-w-[100px] w-full mx-auto"
          />
        </Link>
      </div>
      <nav>
        <ul className="flex gap-4 list-none p-0 m-0">
          <li>
            <p className="mt-2">Welcome, {user}</p>
          </li>
          <li>
            <SignOut />
          </li>
        </ul>
      </nav>
    </HeaderComponent>
  );
};

export default Header;
