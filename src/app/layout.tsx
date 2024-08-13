import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Prueba Técnica',
  description: 'E-comerce Prueba Técnica',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
