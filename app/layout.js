import { Instrument_Sans } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Preloader from '@/components/PreLoader';

const instrument = Instrument_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Shreyansh Kr - Web Developer & Freelancer',
  description: 'Portfolio by Shreyansh Kumar',
}

const RootLayout = ({ children }) => (
  
  <html lang='en'>
    <head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </head>
    <body className={instrument.className}>
    <main className="app">
    <Preloader>
        <Nav />
        <div className="contentMobile lg:content">
          {/* Wrap your content with the Preloader component */}
         {children}
          <Analytics />
          <SpeedInsights />
        </div>
        <Footer />
        </Preloader>
      </main>
    </body>
  </html>
);

export default RootLayout;