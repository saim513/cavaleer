import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import { LocaleProvider } from "@/components/providers/locale-provider";

import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cavaleer.com"),
  title: "Cavaleer | Leather Since 1978",
  description:
    "Discover premium leather collections, saddles, bridles, and custom equestrian accessories shaped by heritage craftsmanship since 1978.",
  openGraph: {
    title: "Cavaleer | Leather Since 1978",
    description:
      "Premium saddles, bridles, leather accessories, and custom equestrian goods crafted for performance, longevity, and heritage appeal.",
    url: "https://www.cavaleer.com",
    siteName: "Cavaleer",
    images: [
      {
        url: "/images/og-cavaleer.svg",
        width: 1200,
        height: 630,
        alt: "Cavaleer premium leather goods and equestrian accessories",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cavaleer | Leather Since 1978",
    description:
      "Luxury leather craftsmanship for equestrian professionals, enthusiasts, and premium retail partners.",
    images: ["/images/og-cavaleer.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${openSans.variable} font-sans antialiased`}>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
