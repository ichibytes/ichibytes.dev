import type { Metadata } from 'next';
import NavBar from '@components/NavBar';
import TrackingCode from '@components/TrackingCode';
import Footer from '../components/Footer';
import '@/styles/style.scss';

export const metadata: Metadata = {
  title: 'Ichibytes.dev',
  description: "Ezequiel's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
      <TrackingCode />
    </html>
  );
}
