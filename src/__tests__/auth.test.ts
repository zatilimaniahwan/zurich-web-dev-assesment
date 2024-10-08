import { signOutUser } from "@/utils/auth";
import { clearUser } from "@/store/slices/user-slice";
import { signOut as nextAuthSignOut } from "next-auth/react";

// Mocking dependencies
jest.mock("next-auth/react", () => ({
  signOut: jest.fn(),
}));

jest.mock("../store/slices/user-slice", () => ({
  clearUser: jest.fn(),
}));

describe("signOutUser", () => {
  let dispatch: jest.Mock;

  beforeEach(() => {
    dispatch = jest.fn();

    // Mock window.location.assign and pathname
    Object.defineProperty(window, "location", {
      writable: true,
      value: { assign: jest.fn(), pathname: "" },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should redirect to sign-in page, clear user, and call signOut", async () => {
    window.location.pathname = "/auth/signin";

    await signOutUser(dispatch);

    expect(dispatch).toHaveBeenCalledWith(clearUser());
    expect(nextAuthSignOut).toHaveBeenCalledWith({
      redirect: true,
      callbackUrl: "/auth/signin",
    });
  });

  it("should log an error if sign out fails", async () => {
    const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();

    (nextAuthSignOut as jest.Mock).mockRejectedValueOnce(
      new Error("Sign out failed")
    );

    window.location.pathname = "/auth/signin";

    await signOutUser(dispatch);

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Sign out failed",
      new Error("Sign out failed")
    );

    consoleErrorSpy.mockRestore();
  });
});
