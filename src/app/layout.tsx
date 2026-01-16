import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";

import "../styles/globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Audrey Oji — UI/UX & Product Designer",
    template: "%s | Audrey Oji",
  },
  applicationName: "Audrey Oji Portfolio",
  description:
    "Audrey Oji is a UI/UX and Product Designer crafting intuitive digital experiences, scalable design systems, and user-centered products for startups and brands.",

  keywords: [
    "Audrey Oji",
    "UI/UX Designer",
    "Product Designer",
    "UX Designer Portfolio",
    "UI Designer",
    "Digital Product Design",
    "Design Systems",
    "User Experience Design",
    "User Interface Design",
    "Creative Designer",
  ],

  authors: [{ name: "Audrey Oji", url: "https://audreyoji.com" }],
  creator: "Audrey Oji",
  publisher: "Audrey Oji",

  openGraph: {
    title: "Audrey Oji — UI/UX & Product Designer",
    description:
      "Explore the portfolio of Audrey Oji, a UI/UX and Product Designer focused on creating meaningful, user-centered digital experiences.",
    url: "https://audreyoji.com",
    siteName: "Audrey Oji Portfolio",
    images: [
      {
        url: "https://emilist.netlify.app/images/home.png",
        width: 1200,
        height: 630,
        alt: "Audrey Oji UI/UX Design Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Audrey Oji — UI/UX & Product Designer",
    description:
      "UI/UX and Product Designer crafting intuitive digital products, clean interfaces, and impactful user experiences.",
    images: ["https://emilist.netlify.app/images/home.png"],
    creator: "@audreyoji", // optional – remove if not available
  },

  alternates: {
    canonical: "https://audreyoji.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Design Portfolio",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
