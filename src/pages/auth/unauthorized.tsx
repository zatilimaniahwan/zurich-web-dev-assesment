import UnauthorizedMessage from "@/views/unauthorized-message/unauthorized-message";
import { useRouter } from "next/router";

/**
 * Displays an unauthorized access message and a button to redirect the user to
 * the sign-in page.
 *
 * @returns A JSX element representing the unauthorized access message.
 */
const Unauthorized = () => {
  const router = useRouter();
  const handleRedirect = () => {
    router.push("/auth/signin"); // Redirect to the sign-in page
  };
  return <UnauthorizedMessage handleRedirect={handleRedirect} />;
};

export default Unauthorized;
