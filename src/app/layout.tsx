import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";

import { Navbar } from "@/components/layout/navbar";
import { Background } from "@/components/core/background";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "EON AI — Personal Intelligence Company",
  description:
    "EON AI creates personal AI companions that understand identity, memories and future possibilities.",
  keywords: [
    "Artificial Intelligence",
    "AI Companion",
    "Personal AI",
    "SoulMirror",
    "FutureSelf",
    "EON AI",
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${geistMono.variable} bg-[#050505] text-white antialiased`}
      >

        <Background />

        <Navbar />

        {children}

        <Footer />

      </body>
    </html>
  );
}