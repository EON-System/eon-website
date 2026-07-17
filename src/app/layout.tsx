import type { Metadata } from "next";

import "./globals.css";

import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";


export const metadata: Metadata = {
  title: "EON AI",
  description:
    "EON AI is a personal intelligence company building AI companions for human evolution.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body className="bg-[#050505] text-[#F4F1EA] antialiased">

        <Navbar />

        <main>
          {children}
        </main>

        <Footer />

      </body>

    </html>
  );
}