export const formatKSh = (amount: number, decimals = false): string =>
  `KSh ${amount.toLocaleString("en-KE", {
    minimumFractionDigits: decimals ? 2 : 0,
    maximumFractionDigits: decimals ? 2 : 0,
  })}`;

export const calcProgress = (saved: number, target: number): number => {
  if (target <= 0) return 0;
  return Math.min(100, Math.round((saved / target) * 100));
};

export const formatNairobiDate = (date: string | Date): string => {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-KE", {
    timeZone: "Africa/Nairobi",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};
