import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theaimex.com"),

  title: {
    default: "AimEx Science Academy | Best NEET, JEE & MHT-CET Coaching in Nashik",
    template: "%s | AimEx Science Academy",
  },

  description:
    "AimEx Science Academy is one of Nashik's leading coaching institutes for NEET, JEE, MHT-CET, CBSE, ICSE, Maharashtra Board, and 11th & 12th Science with expert faculty, modern classrooms, and excellent results.",

  keywords: [
    "AimEx Science Academy",
    "AimEx",
    "NEET Coaching Nashik",
    "JEE Coaching Nashik",
    "MHT CET Coaching Nashik",
    "Best Coaching Classes Nashik",
    "Science Academy Nashik",
    "11th Science Coaching",
    "12th Science Coaching",
    "CBSE Coaching Nashik",
    "ICSE Coaching Nashik",
    "Board Exam Coaching",
    "Medical Entrance Coaching",
    "Engineering Entrance Coaching",
    "Competitive Exam Coaching",
  ],

  authors: [
    {
      name: "AimEx Science Academy",
      url: "https://theaimex.com",
    },
  ],

  creator: "AimEx Science Academy",

  publisher: "AimEx Science Academy",

  applicationName: "AimEx Science Academy",

  category: "Education",

  alternates: {
    canonical: "https://theaimex.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "AimEx Science Academy",
    description:
      "Expert coaching for NEET, JEE, MHT-CET, CBSE, ICSE and Maharashtra Board in Nashik.",

    url: "https://theaimex.com",

    siteName: "AimEx Science Academy",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AimEx Science Academy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AimEx Science Academy",
    description:
      "Expert coaching for NEET, JEE, MHT-CET and Board Exams.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        {children}
      </body>

      <GoogleAnalytics gaId="G-JX5Q6Y3ETW" />
    </html>
  );
}