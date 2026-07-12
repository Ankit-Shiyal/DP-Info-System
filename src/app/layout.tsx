import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import ChatWidget from "@/components/ChatWidget";
import Script from "next/script";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-pjs",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://acriotech.com'),
  title: "Acriotech | Enterprise Software Engineering",
  description: "We build enterprise software, AI systems, automation platforms and cloud infrastructure that help ambitious businesses scale with confidence.",
  keywords: ["Enterprise Software", "AI Systems", "Cloud Infrastructure", "Automation Platforms", "Acriotech"],
  authors: [{ name: "Acriotech Pvt. Ltd." }],
  creator: "Acriotech Pvt. Ltd.",
  publisher: "Acriotech Pvt. Ltd.",
  openGraph: {
    title: "Acriotech | Enterprise Software Engineering",
    description: "We build enterprise software, AI systems, automation platforms and cloud infrastructure that help ambitious businesses scale with confidence.",
    url: 'https://acriotech.com',
    siteName: 'Acriotech',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Acriotech | Enterprise Software Engineering",
    description: "We build enterprise software, AI systems, automation platforms and cloud infrastructure that help ambitious businesses scale with confidence.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'IN-GJ',
    'geo.placename': 'Bhavnagar',
    'geo.position': '21.7645;72.1519',
    'ICBM': '21.7645, 72.1519'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        {/* Default Google Consent Mode v2 setup */}
        <Script
          id="gtag-consent-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied',
                'wait_for_update': 500
              });
            `,
          }}
        />
        {/* Load Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NVERY94FZL"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NVERY94FZL');
            `,
          }}
        />
      </head>
      <body className={plusJakartaSans.className}>
        {children}
        <CookieBanner />
        <ChatWidget />
      </body>
    </html>
  );
}
