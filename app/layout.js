import Logo from '@/app/_components/Logo';
import Navigation from './_components/Navigation';

import '@/app/_styles/globals.css';

import { Josefin_Sans } from 'next/font/google';
import Header from '@/app/_components/Header';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: {
    template: '%s The Wild Oasis',
    separator: '|',
    default: 'Welcome to the The Wild Oasis',
  },
  description: 'A luxury cabin rental service',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`bg-primary-950 antialiased text-primary-100 min-h-screen ${josefin.className} flex flex-col`}
      >
        <Header />
        <div className='flex-1 px-8 py-12'>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
