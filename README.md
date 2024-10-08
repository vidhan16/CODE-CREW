<div><h1 align="center">Legal Ledger⚖️</h1> </div>


## Problem Statement 📝

The legal record management systems currently in use in India are facing significant challenges when it comes to security, transparency, and accessibility. These challenges are impacting the efficiency and reliability of the justice system. To overcome these issues, there is an urgent requirement for the development of a blockchain-based eVault system specifically designed for legal records.

This system should ensure that legal records are securely stored, efficiently managed, and transparently shared. Additionally, it should seamlessly integrate with existing legal databases and case management systems.

## Our Aim 🎯

Its main objective is to set new standards for data security and privacy, benefiting industries with sensitive information. The system's efficiency and cost-saving features are applicable to government agencies, healthcare institutions, financial services providers, promoting innovation in both public and private sectors. Blockchain technology ensures data integrity, transparency, cross-border collaboration, secure information exchange.

## Challenges we faced 😵:
One of the primary obstacles we encountered was figuring out how to store our files in the blockchain and deciding between IPFS and awarwe. 
<br>
Another challenge that caused us a lot of frustration was finding a way to make each file upload unique to a specific user. 
Even if the user logged out, they were still able to access other documents through the hash value. To ensure that only verified users could retrieve their own documents, we attempted to manipulate the metadata.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
