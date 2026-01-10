import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";

// Premium Heading Font - Editorial Serif
const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

// Body Font - Clean Sans-Serif
const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devolia-resort.vercel.app"),
  title: {
    default: "Devolia Resort | Premium Wedding Destination",
    template: "%s | Devolia Resort",
  },
  description:
    "Where timeless elegance meets unforgettable celebrations. Discover Devolia Resort, Orai's most prestigious wedding destination.",
  icons: {
    icon: "/images/logo.jpg",
    shortcut: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
  keywords: [
    "wedding venue",
    "destination wedding",
    "luxury resort",
    "Orai",
    "India",
    "premium weddings",
    "Best resort in Orai",
    "Resort near Orai",
    "Resort in Orai",
    "Best wedding venue in Orai",
    "Best wedding venue in India",
    "Best wedding venue in Orai",
    "Best places in Orai",
    "Birthday venue",
    "Wedding venue",
    "Devolia Resort",
    "Devolia",
    "Devolia Resort Orai",
    "Devolia Resort in Orai",
    "Devolia Resort in Uttar Pradesh",
    "Resort near Kanpur",
    "Resort in Kanpur",
    "Resort in Uttar Pradesh",
  ],
  authors: [{ name: "Devolia Resort" }],
  openGraph: {
    title: "Devolia Resort | Premium Wedding Destination",
    description:
      "Where timeless elegance meets unforgettable celebrations.",
    type: "website",
    locale: "en_IN",
    siteName: "Devolia Resort",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Resort",
  "name": "Devolia Resort",
  "image": "https://devolia-resort.vercel.app/images/logo.jpg",
  "@id": "https://devolia-resort.vercel.app",
  "url": "https://devolia-resort.vercel.app",
  "telephone": "+91 80460 59184",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Devoliya Garden, Jalaun-Churkhi Bypass Road, Near Mayur Vihar",
    "addressLocality": "Orai",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "285001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 26.0148725,
    "longitude": 79.4415947
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "09:30",
    "closes": "21:00"
  },
  "sameAs": [
    "https://www.facebook.com/devolia_resort",
    "https://www.instagram.com/devolia_resort"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorantGaramond.variable} ${sourceSans.variable}`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
