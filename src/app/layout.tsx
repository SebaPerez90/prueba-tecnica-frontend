import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'SwiftCart',
  description: 'Fake e-comerce - Prueba Técnica',
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
