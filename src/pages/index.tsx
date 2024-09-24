import { useRouter } from "next/router";
import { useEffect } from "react";

/**
 * Redirects to /users as soon as the component is mounted.
 *
 * The component itself renders nothing, so it doesn't add any overhead to
 * the page. It's only purpose is to redirect to /users.
 */
const Index = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/users");
  }, [router]);

  return null;
};

export default Index;
