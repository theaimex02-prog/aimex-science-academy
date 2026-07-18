import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AimEx Science Academy",
    template: "%s | AimEx Science Academy",
  },

  description:
    "AimEx Science Academy provides expert coaching for NEET, JEE, MHT-CET, CBSE, ICSE and Maharashtra Board with experienced faculty and outstanding results.",

  keywords: [
    "AimEx Science Academy",
    "NEET Coaching",
    "JEE Coaching",
    "MHT CET",
    "Science Academy Nashik",
    "11th Science",
    "12th Science",
    "CBSE Coaching",
    "ICSE Coaching",
    "Board Exam Coaching",
  ],

  authors: [
    {
      name: "AimEx Science Academy",
    },
  ],

  creator: "AimEx Science Academy",

  applicationName: "AimEx Science Academy",

  metadataBase: new URL("https://www.aimexscienceacademy.com"),

  openGraph: {
    title: "AimEx Science Academy",
    description:
      "Expert coaching for NEET, JEE, MHT-CET and Board Exams.",

    url: "https://www.aimexscienceacademy.com",

    siteName: "AimEx Science Academy",

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AimEx Science Academy",
    description:
      "Expert coaching for NEET, JEE, MHT-CET and Board Exams.",
  },

  robots: {
    index: true,
    follow: true,
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
