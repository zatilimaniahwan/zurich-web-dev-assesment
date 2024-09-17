import SignInWithGoogle from "@/views/components/buttons/sign-in-button/sign-in-with-google";
import { useSession } from "next-auth/react";

const Login = () => {
  const { status } = useSession();
  // Return null while loading to prevent premature rendering
  if (status === "loading") {
    return null;
  }
  return <SignInWithGoogle />;
};

export default Login;
