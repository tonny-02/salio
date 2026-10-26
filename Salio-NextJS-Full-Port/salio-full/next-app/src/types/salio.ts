// Shared types – aligned with Salio HTML prototype data model

export type TxType = "in" | "out";

export type Transaction = {
  id: string;
  receipt?: string;
  date: string;
  details: string;
  counterparty: string;
  amount: number;
  type: TxType;
  category: string;
  needsReview?: boolean;
  excluded?: boolean; // duplicate confirmed excluded from totals
  source: "manual" | "statement";
};

export type IncomeEntry = {
  id: string;
  source: string;
  amount: number;
  date: string;
};

export type SavingsGoal = {
  id: string;
  name: string;
  saved: number;
  target: number;
  targetDate: string;
  monthlyTarget: number;
  status: "active" | "achieved" | "abandoned";
};

export type UserAccount = {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  status: "active" | "suspended";
  emailVerified: boolean;
  created: string;
  lastActive: string;
};

export type SupportTicket = {
  id: string;
  userId: string;
  subject: string;
  message: string;
  status: "open" | "in progress" | "resolved";
  created: string;
  replies: { from: "user" | "admin"; text: string; time: string }[];
};

export type AuditEntry = {
  id: string;
  admin: string;
  action: string;
  target: string;
  detail?: string;
  time: string;
};

export type StandardCategory = {
  id: string;
  name: string;
  retired: boolean;
};

export const STANDARD_CATEGORIES = [
  "Rent",
  "Food",
  "Transport",
  "School fees",
  "Shopping",
  "Pocket money",
  "Airtime/Data",
  "Fees and charges",
] as const;

export const CATEGORY_COLOURS: Record<string, string> = {
  Rent: "#B48C14",
  Food: "#EFAE2E",
  Transport: "#2FAE95",
  "School fees": "#4C7FD1",
  Shopping: "#8A6FD1",
  "Pocket money": "#177A3D",
  "Airtime/Data": "#EE8B69",
  "Fees and charges": "#8A8F7A",
  Income: "#177A3D",
  Other: "#6D7A70",
};

export const CATEGORY_ICONS: Record<string, string> = {
  Rent: "🏠",
  Food: "🍽️",
  Transport: "🚌",
  "School fees": "🎓",
  Shopping: "🛒",
  "Pocket money": "👛",
  "Airtime/Data": "📱",
  "Fees and charges": "🧾",
  Income: "⬇️",
  Other: "📦",
};
