import "@/app/ui/global.css";
import localFont from 'next/font/local'


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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
