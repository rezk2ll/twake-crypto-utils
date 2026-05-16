/**
 * Validate that a password meets minimum complexity rules:
 *
 * - at least 8 characters
 * - at least one digit
 * - at least one lowercase letter
 * - at least one uppercase letter
 *
 * Returns `true` on a valid password, `false` otherwise.
 */
export const validatePasswordComplexity = (password: string): boolean =>
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
