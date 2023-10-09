This is the TRAVLRD starter template for using the Next.js pages directory with Supabase.

## Getting Started

Copy the `.env.example` file to `.env.local` and fill in the missing values.

A `zod` schema is being used for type-safe environment variables in `src/env.ts`. Always import the `env` object from there, when you need to use it in the code.
  If you change the environment variables, you will need to update the shema in `src/env.ts` as well, otherwise it won't be available on the `env` object.

For package management we use `pnpm`. It it is compatible with `npm`, you can install it: `npm install -g pnpm`.

For development:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
