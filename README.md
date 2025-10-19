# Borderless.Music

A social network for musical idealists.

## Stack
1. Server — [Nuxt on Vercel](https://vercel.com/docs/frameworks/full-stack/nuxt)
2. Storage — [On-Demand Postgres via Prisma](https://www.prisma.io/postgres)
3. Auth — [AT Proto Auth](https://github.com/atinux/nuxt-auth-utils)
4. Map — [Map Libre](https://maplibre.org/)

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://nuxt.com/docs/getting-started/deployment#presets) for more information.
