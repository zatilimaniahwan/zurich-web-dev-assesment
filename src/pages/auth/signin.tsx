import SignInWithGoogle from "@/views/sign-in/sign-in";
import { useSession } from "next-auth/react";

const SignIn = () => {
  const { status } = useSession();
  // Return null while loading to prevent premature rendering
  if (status === "loading") {
    return null;
  }
  return <SignInWithGoogle />;
};

export default SignIn;
