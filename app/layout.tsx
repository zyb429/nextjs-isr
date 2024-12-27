import type { Metadata } from 'next';
import { Nunito, Josefin_Sans } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { getCanonicalUrl } from '@/utils';

const inter = Nunito({ subsets: ['latin'] });
const cuteFont = Josefin_Sans({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Easy Sell',
  description:
    'Discover the power of simplicity with Easy Sell – the ultimate solution for effortless selling products. Unlock convenience and boost your sales.',
  alternates: {
    canonical: getCanonicalUrl(),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header font={cuteFont.className} />
        <hr className="h-0.5 bg-zinc-400 border-0"></hr>
        <div className="bg-stone-200 py-12">{children}</div>
        <Footer font={cuteFont.className} />
      </body>
    </html>
  );
}
