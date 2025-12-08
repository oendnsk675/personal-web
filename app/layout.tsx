import Footer from '@/components/footer';
import Header from '@/components/header';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sayidina Ahmadal Qososyi',
  description: "He brings over 2 years of hands-on experience as a software engineer, with a strong focus on building scalable React applications and optimizing front-end performance. He consistently contributes to Agile development cycles, delivering responsive, high-quality features with measurable impact. He is highly regarded for producing clean, maintainable code and ensuring reliability through well-structured front-end test suites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased block xl:flex xl:flex-col items-center overflow-x-hidden`}
      >
        <Header />
        <div className="w-full flex justify-center">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
