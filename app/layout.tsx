import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import Header from './components/header';
import Footer from './components/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Bryanna DeJesus | Portfolio',
  description:
    'Bryanna DeJesus is a full stack developer with 3 years of experience',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} bg-gray-50 text-gray-950 pt-28 sm:pt-36`}
      >
        <div className='bg-[#97aef8] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
        <div className='bg-[#d8d9f8] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] '></div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
