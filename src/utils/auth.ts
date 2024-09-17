import { AppDispatch } from "@/store";
import { clearUser } from "@/store/slices/user-slice";
import {
  signOut as nextAuthSignOut,
  signIn as nextAuthSignIn,
} from "next-auth/react";

/**
 * Signs out the user by clearing the Redux state and calling NextAuth's sign out
 * method.
 *
 * @param {AppDispatch} dispatch - The Redux dispatch function.
 */

/**
 * Signs out the user by clearing the Redux state and calling NextAuth's sign out
 * method, then redirects to the home page.
 *
 * @param {AppDispatch} dispatch - The Redux dispatch function.
 * @param {string} redirectUrl - The URL to redirect to after sign-out.
 */
export const signOutUser = async (dispatch: AppDispatch) => {
  try {
    dispatch(clearUser());

    await nextAuthSignOut({ redirect: false });

    // Redirect to the specified URL after sign-out
    window.location.href = "/auth/signin";
  } catch (error) {
    console.error("Sign out failed", error);
  }
};

export const signInUser = () => {
  // Sign in with Google and handle redirection
  nextAuthSignIn("google", { callbackUrl: "/" });
};
