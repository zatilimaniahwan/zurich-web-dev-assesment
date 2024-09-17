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
 *
 * @returns {Promise<void>} A promise that resolves when the sign out is complete.
 */
export const signOutUser = async (dispatch: AppDispatch) => {
  try {
    dispatch(clearUser());

    await nextAuthSignOut({ redirect: false });
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
