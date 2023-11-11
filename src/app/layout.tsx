import type { Metadata } from 'next';

import './globals.css';
import { GeistMono } from 'geist/font/mono';
import Header from '@/components/Header';

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
      <body className={GeistMono.variable}>
        <div className=" bg-black p-5 text-white ">
          <div className=" rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/30 ">
            <div className=" rounded-lg bg-black p-4 ">
              <Header />
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
