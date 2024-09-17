import { AppDispatch } from "@/store";
import { clearUser } from "@/store/slices/user-slice";
import {
  signOut as nextAuthSignOut,
  signIn as nextAuthSignIn,
} from "next-auth/react";

/**
 * Signs out the user by clearing the user state in the store and calling NextAuth's
 * `signOut` method. If the sign out is successful, redirects to the sign in page.
 * If the sign out fails, logs the error to the console.
 * @param {AppDispatch} dispatch - The dispatch function from the store.
 */
export const signOutUser = async (dispatch: AppDispatch) => {
  try {
    await nextAuthSignOut({ redirect: true, callbackUrl: "/auth/signin" });
    dispatch(clearUser());
  } catch (error) {
    console.error("Sign out failed", error);
  }
};

/**
 * Signs in the user with Google and redirects to the home page upon success.
 */
export const signInUser = () => {
  // Sign in with Google and handle redirection
  nextAuthSignIn("google", { callbackUrl: "/" });
};
