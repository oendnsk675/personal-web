import Footer from '@/components/footer';
import Header from '@/components/header';
import type { Metadata } from 'next';
import { Inter, Caveat } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';

const font = Inter({
  variable: '--font-inter',
  display: 'swap',
  subsets: ['latin'],
});

const fontCaveat = Caveat({
  variable: '--font-caveat',
  display: 'swap',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sayidinaahmadalqososyi.com'),
  title: {
    default: 'Sayidina Ahmadal Qososyi',
    template: '%s | Sayidina Ahmadal Qososyi',
  },
  description:
    'Software engineer focused on scalable React applications, frontend performance, clean architecture, and reliable user experiences.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sayidina Ahmadal Qososyi',
    description:
      'Software engineer focused on scalable React applications, frontend performance, clean architecture, and reliable user experiences.',
    url: '/',
    siteName: 'Sayidina Ahmadal Qososyi',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sayidina Ahmadal Qososyi',
    description:
      'Software engineer focused on scalable React applications, frontend performance, clean architecture, and reliable user experiences.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${font.className} ${fontCaveat.variable}`}>
      <body
        className={`antialiased block xl:flex xl:flex-col items-center overflow-x-hidden`}
      >
        <NextTopLoader
          color="#134136"
          height={5}
          showSpinner={false}
          shadow={false}
        />
        <Header />
        <div className="w-full flex justify-center">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
