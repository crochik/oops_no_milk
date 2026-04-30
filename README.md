# oops_no_milk

A multi-household grocery list app with receipts, urgency tiers (`chill`,
`soon`, `out_of_milk`), and a soft spot for snark. Backend on
[bootstrapp.cloud](https://bootstrapp.cloud); web client is React + Vite.

## Layout

- `BOOTSTRAPP.md`, `schemas/`, `scripts/`, `api/` — backend blueprint and
  generated OpenAPI spec.
- `web/` — Vite + React + TypeScript SPA.
- `.github/workflows/deploy.yml` — builds `web/` and publishes to GitHub
  Pages on push to `main`.

## Run locally

```sh
cd web
cp .env.example .env   # or use the committed defaults
npm install
npm run dev
```

App is at http://localhost:5173/. Login goes through `idp.fci.cloud`
(Authorization Code + PKCE, scope `openid profile rest`).

## Production

Built site lives at https://crochik.github.io/oops_no_milk/.

For login to work in production, the IdP client `oops_no_milk` must
allowlist that URL as a redirect URI, and the bootstrapp backend must
allow CORS from `https://crochik.github.io`.
