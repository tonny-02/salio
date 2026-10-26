export type UserRole = "user" | "admin";

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role?: UserRole;
  emailVerified?: boolean;
};

export const isAdmin = (user: AuthUser | null | undefined): boolean =>
  user?.role === "admin";

export const isEmailVerified = (user: AuthUser | null | undefined): boolean =>
  user?.emailVerified !== false;
