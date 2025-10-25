import { Outfit } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';
import { Providers } from './Providers';
import Script from 'next/script';

const outfit = Outfit( {
  subsets: [ "latin" ],
} );

export const metadata: Metadata = {
  title:
    "SilverHawk – Advanced Application Performance Monitoring",
  description: "Monitor, optimize, and scale your applications with SilverHawk. Gain real-time insights into system performance, track metrics, detect anomalies, and ensure smooth application operations with our robust APM solution.",
};

export default function RootLayout( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> ) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Silverhawk APM",
    "url": "https://silverhawk.com",
    "logo": "https://silverhawk.com/logo.png",
    "applicationCategory": "MonitoringApplication",
    "operatingSystem": "Web",
    "description": "Silverhawk APM is a powerful application performance monitoring tool designed for real-time observability and insights.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "url": "https://silverhawk.com/signup"
    }
  };

  return (
    <html lang="en">
      <meta name="google-site-verification" content="oc7rnAETzefNfuJvElF5mbVjLMw14drxvi_BFFgRyzU" />
      <Script id='jsonldschema'
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } }
      />
      <body className={ `${outfit.className} dark:bg-gray-900` }>
        <Providers>{ children }</Providers>
      </body>
    </html>
  );
}
