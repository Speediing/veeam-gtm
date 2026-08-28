# Veeam x SpaceXAI

Password-protected GTM leave-behind for Veeam.

## Stack

- Next.js 15.5
- Geist
- vgpu
- `src/` application layout

## Run locally

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The default password is
`land2expand`. Override it with `SITE_PASSWORD`.

The Veeam mark in `public/brand/veeam-wordmark.svg` comes from Veeam's official
brand asset at `https://www.veeam.com/content/dam/veeam/brand/veeam_logo_26.svg`.

## Deploy

Use the `jasonwiker` Vercel team and project name `veeam-grokbot`. Set
`SITE_PASSWORD=land2expand`.
