# Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

## Useful Infos

### Steps for enabling **Geist font** as a main font:

1. Downloading files from Vercel/Google site
2. Placing fonts to the `/public/fonts/...`
3. Adding these lines to the `tailwind.config.ts`
```TypeScript
      fontFamily: {
        sans: 'var(--font-sans)',
        mono: 'var(--font-mono)',
      },
```
4. Adding font references to the root `layout.tsx` file:

```TypeScript
`import localFont from 'next/font/local'`

// Define the variable font
const geistSans = localFont({
  src: '../public/fonts/Geist.woff2', // Single variable font file
  variable: '--font-sans', // CSS variable for usage
  weight: '100 900', // Variable font supports a range of weights
  style: 'normal',
});

const geistMono = localFont({
  src: '../public/fonts/GeistMono.woff2', // Assuming you also have a mono variable font
  variable: '--font-mono',
  weight: '100 900', 
  style: 'normal',
});

return (
  <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
  </html>
  );
```

### Pick your TypeScript engine

Ctrl + P --> Select TypeScript Version.
