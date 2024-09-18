import { maskEmailAddress } from "@/utils/email-utils";

describe("maskEmailAddress", () => {
  it("should mask the email address correctly", () => {
    expect(maskEmailAddress("user@example.com")).toBe("u*****@example.com");
    expect(maskEmailAddress("john.doe@domain.com")).toBe("j*****@domain.com");
  });

  it("should handle emails without a domain", () => {
    expect(maskEmailAddress("user")).toBe("");
  });

  it("should handle empty email addresses", () => {
    expect(maskEmailAddress("")).toBe("");
  });

  it("should handle emails with no username", () => {
    expect(maskEmailAddress("@domain.com")).toBe("");
  });

  it("should handle email addresses with special characters", () => {
    expect(maskEmailAddress("user+test@example.com")).toBe(
      "u*****@example.com"
    );
    expect(maskEmailAddress("us.er@example.com")).toBe("u*****@example.com");
  });

  it("should handle null or undefined values", () => {
    expect(maskEmailAddress(null as unknown as string)).toBe("");
    expect(maskEmailAddress(undefined as unknown as string)).toBe("");
  });
});
