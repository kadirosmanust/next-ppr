import type { Metadata } from 'next';

import './globals.css';
import { GeistMono } from 'geist/font/mono';

export const metadata: Metadata = {
  title: 'Next-PPR Design',
  description: 'This is a demo of Next.js using Partial Prerendering.',
  openGraph: {
    title: 'Next-PPR Design',
    description: 'This is a demo of Next.js using Partial Prerendering.',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistMono.variable}>{children}</body>
    </html>
  );
}
