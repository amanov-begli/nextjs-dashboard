import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import localFont from "next/font/local";

// Define the variable font
const geistSans = localFont({
  src: "../public/fonts/Geist.woff2",
  variable: "--font-sans", // CSS variable for usage
  weight: "100 900", // Variable font supports a range of weights
  style: "normal",
});

const geistMono = localFont({
  src: "../public/fonts/GeistMono.woff2",
  variable: "--font-mono", // CSS variable for usage
  weight: "100 900", // Variable font supports a range of weights
  style: "normal",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className={"antialiased"}>{children}</body>
    </html>
  );
}
