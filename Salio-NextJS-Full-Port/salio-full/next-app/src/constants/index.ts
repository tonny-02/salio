export const SITE = {
  name: "Salio",
  description: "Save smarter. Reach your goals.",
} as const;

export const ROUTES = {
  login: "/login",
  signup: "/signup",
  dashboard: "/dashboard",
  income: "/income",
  budget: "/budget",
  categories: "/categories",
  expenses: "/expenses",
  transactions: "/transactions",
  statements: "/statements",
  insights: "/insights",
  savings: "/savings",
  help: "/help",
  settings: "/settings",
  adminDashboard: "/admin/dashboard",
  adminUsers: "/admin/users",
  adminCategories: "/admin/categories",
  adminStatements: "/admin/statements",
  adminSupport: "/admin/support",
  adminReports: "/admin/reports",
  adminSystemStatus: "/admin/system-status",
  adminAudit: "/admin/audit",
  adminSettings: "/admin/settings",
  adminMore: "/admin/more",
} as const;

export const APP_NAV = [
  { label: "Home", href: ROUTES.dashboard },
  { label: "Transactions", href: ROUTES.transactions },
  { label: "Add", href: ROUTES.expenses },
  { label: "Savings", href: ROUTES.savings },
  { label: "Profile", href: ROUTES.settings },
] as const;

export const ADMIN_NAV = [
  { label: "Dashboard", href: ROUTES.adminDashboard },
  { label: "Users", href: ROUTES.adminUsers },
  { label: "Statements", href: ROUTES.adminStatements },
  { label: "Support", href: ROUTES.adminSupport },
  { label: "More", href: ROUTES.adminMore },
] as const;
