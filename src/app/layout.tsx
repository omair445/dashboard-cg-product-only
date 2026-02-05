import type { Metadata } from 'next';
import { Host_Grotesk, Inter } from 'next/font/google';
import './globals.css';

const hostGrotesk = Host_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-host-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ClickGuard Dashboard',
  description: 'Click fraud prevention dashboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${hostGrotesk.variable} ${inter.variable}`}>
      <body className={`${hostGrotesk.className} min-h-screen bg-page-bg antialiased`}>{children}</body>
    </html>
  );
}
