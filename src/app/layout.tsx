import { Outfit } from 'next/font/google';
import './globals.css';

import { SidebarProvider } from '@/context/SidebarContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { Metadata } from 'next';

const outfit = Outfit({
  subsets: ["latin"],
} );

export const metadata: Metadata = {
  title:
    "SilverHawk – Advanced Application Performance Monitoring",
  description: "Monitor, optimize, and scale your applications with SilverHawk. Gain real-time insights into system performance, track metrics, detect anomalies, and ensure smooth application operations with our robust APM solution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} dark:bg-gray-900`}>
        <ThemeProvider>
          <SidebarProvider>{children}</SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
