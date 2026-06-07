import Footer from '@/components/footer';
import Header from '@/components/header';
import type { Metadata } from 'next';
import { Inter, Caveat } from 'next/font/google';
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
  title: 'Sayidina Ahmadal Qososyi',
  description:
    'He brings over 2 years of hands-on experience as a software engineer, with a strong focus on building scalable React applications and optimizing front-end performance. He consistently contributes to Agile development cycles, delivering responsive, high-quality features with measurable impact. He is highly regarded for producing clean, maintainable code and ensuring reliability through well-structured front-end test suites.',
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
        <Header />
        <div className="w-full flex justify-center">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
