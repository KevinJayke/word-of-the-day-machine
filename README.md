This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Setting up the Environment Variables

To use the DicoLink API in your project, you will need an API key from the DicoLink API. If you haven't already, you can get an API key by following the instructions on the DicoLink API documentation: https://api.dicolink.com/api/inscription

Once you have your API key, you need to configure the `.env` file at the root of your project. In a `.env` file you created, add the following:

```
REACT_APP_API_KEY=<your-cool-api-key>
REACT_APP_BASE_URL=https://api.dicolink.com/v1/mots
```

Make sure to replace `<your-cool-api-key>` with your actual API key.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
