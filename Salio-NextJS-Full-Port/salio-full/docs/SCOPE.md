# Scope honesty

## Ported from Salio HTML prototype into Next.js
- Dashboard with live totals from client store
- Income, budget, expenses, transactions, categories
- Savings + contributions
- Insights by category
- Help form UI
- Admin: dashboard, users, categories, statements monitor, support, reports, system status, audit, settings, more
- Shared types, categorise helper, format, roles, bottom nav

## Not production backend
- No NestJS
- No Supabase RLS
- Statement PDF unlock not fully wired (placeholder + NFR-010 note)
- Auth is demo navigation; use template/Supabase for real sessions

## Integration path
Replace `useSalioStore` localStorage with RTK Query → NestJS API.
Keep statement password handling in the browser only.
