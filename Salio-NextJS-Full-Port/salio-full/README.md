# Salio – Next.js port of the HTML prototype

This package ports the **Salio (1).html** prototype into the team’s **Next.js App Router** structure.

## Important (read this)

| Claim | Reality |
|--------|---------|
| Full UI flows from the HTML prototype | Ported as React pages under `(app)` and `(admin)` |
| Working local demo with mock/local state | Yes – client mock store pattern |
| Production NestJS + Supabase + RLS | **Not included** – next integration phase |
| Statement password stays on device | Parser helpers included; wire to Web Crypto/PDF.js like the HTML |

The HTML prototype is a single-file SPA with `localStorage`. This package splits it into maintainable Next.js modules matching the Team Task Guide folders.

## Run inside your existing template

1. Merge `next-app/src/**` into your repo’s `next-app/src/`.
2. Copy `public/salio-logo.jpg`.
3. Ensure `@/` path alias points at `src/`.
4. `cd next-app && npm install && npm run dev`

## Routes

### User
- `/login`, `/signup`
- `/dashboard` – home
- `/income`, `/budget`, `/categories`, `/expenses`
- `/transactions`, `/statements`
- `/insights`, `/savings`
- `/help`, `/settings`

### Admin
- `/admin/dashboard`
- `/admin/users`, `/admin/categories`, `/admin/statements`
- `/admin/support`, `/admin/reports`, `/admin/system-status`
- `/admin/audit`, `/admin/settings`, `/admin/more`

## Architecture

```
types/          shared shapes (aligned with HTML data model)
lib/            format, roles, categories, statement parse helpers
constants/      ROUTES, APP_NAV, ADMIN_NAV
hooks/          useSalioStore (client state – replace with RTK/API later)
app/(app)/      user screens
app/(admin)/    admin screens
```

## Next phase (backend)

Replace `useSalioStore` mock persistence with:
- NestJS REST/GraphQL
- Supabase Auth + Postgres + RLS
- Keep statement password decryption **only in the browser** (NFR-010)
