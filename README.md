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


### Optimizing Fonts

## There are two ways of optimizing fonts

1. Is to use `next/font/google`
2. Is to use `next/font/local`

 - When using `next/font/local` we have to host/list fonts within `layout.tsx` file, other way, application does not "see" the font files inside of folder.

 - For the `next/font/google` tutorials advices to create a `fonts.ts` file withing `ui` folder and paste there `imports` and **fonts**. Like this:

 ```TypeScript
 import { Inter, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({ subsets: ['latin'], weight: ['400', '700'] });

 ```
Afterwards it could be used on `<body>` element with back ticks, after importing the `fonts.ts` to the `layout.tsx`:

```HTML 
<body className={ `${lusitana.className} 'antialiased'`} >{children}</body>
```

**IMPORTANT**

When hosting web fonts from a folder (`fonts`), then it is important to use the ***fontName***`.variable` on the `<HTML>` element in the `layout.tsx` and not the  ***fontName***`.className`. Because in this way, the application thinks, that the variables are not defined, even if they are in the `tailwind.config.ts` Example below:

```TypeScript
  return (
    /**This is the CORRECT one */
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
    </html>
  );

    return (
    /**This is the WRONG one */
    <html lang="en" className={`${geistSans.className} ${geistMono.className}`}>
    </html>
  );

```
With the **correct** implementation, we are now able to use `tailwind css` utility variables/classes (`--font-sans`).

## Images

 - `Next.js` hast an <Image/> component, which is automatically optimizes static images we have in our application to prevent [Cumulative Layout Shift](https://vercel.com/blog/how-core-web-vitals-affect-seo).

 - Images should have 4 ***Required*** Props: `src`, `width`, `height` and `alt`.


## Routes

 - Folders structure is a representation of the routes in `Next.js`. For example `app --> dashboard` will lead to the following URL: `https://dashboard` and so on. This is how you can create different pages in Next.js: create a new route segment using a folder, and add a `page.tsx` file inside it.
 - Each folder could have a shared layout with its all sub URLs by creating `layout.tsx` file in it.


## Icons in this Project

 - This Project uses [Heroicons](https://heroicons.com/).


## Conditional class name applying

 - `clsx` library allows us apply `css` classes depending on conditions.


 ## Waterfall requests vs Parallel requests

  - Using JavaScript we are able to control how and when our requests are proceed:

    1. Waterfall
    ```JavaScript
      const revenue = await fetchRevenue()
      const latestInvoices = await fetchLatestInvoices()
      const cardData = await fetchCardData()
    ```
    2. Parallel
    ```JavaScript
        const data = await Promise.all([
      invoiceCountPromise,
      customerCountPromise,
      invoiceStatusPromise,
    ]);
    ```
Both of Methods have their own advantages and disadvantages.

## Importing and creating variables

 - What I've found out today that we can import several `functions` from a single file in a **single** `import` statement. For example:

```JavaScript
import {
  fetchRevenue,
  fetchLatestInvoices,
  fetchCardData,
} from '@/app/lib/data';
```

and not
```JavaScript
import { fetchRevenue } from '@/app/lib/data';
import { fetchLatestInvoices } from '@/app/lib/data';
import { fetchCardData } from '@/app/lib/data';
```
 - Same story with `variables/constants`:

