// Category guesser – ported from Salio HTML prototype

export function guessCategory(details: string): string {
  const x = details.toLowerCase();
  if (/charge/.test(x)) return "Fees and charges";
  if (/airtime|bundle/.test(x)) return "Airtime/Data";
  if (/helb|school|universit|college|tuition/.test(x)) return "School fees";
  if (/\brent\b|landlord/.test(x)) return "Rent";
  if (
    /naivas|quickmart|carrefour|supermarket|restaurant|cafe|kfc|java|hotel|bakery|butchery|food|chips/.test(
      x,
    )
  )
    return "Food";
  if (/uber|bolt|matatu|sacco|petrol|fuel|\bbus\b/.test(x)) return "Transport";
  if (/shop|mall|store|jumia|kilimall|boutique/.test(x)) return "Shopping";
  return "";
}

export function extractCounterparty(details: string): string {
  if (details.includes(" - ")) {
    const t = details
      .split(" - ")
      .slice(1)
      .join(" - ")
      .trim()
      .replace(/^[\d*]{6,15}\s+/, "")
      .replace(/\s+Acc\.?\s.*$/i, "")
      .trim();
    if (t) return t;
  }
  const m = details.match(
    /(?:to|from)\s+([A-Za-z][A-Za-z '.\-]{2,40}?)(?=\s+\d{6,}|\s+for\s|\s*$)/i,
  );
  return m ? m[1].trim() : details;
}
