import type { Metadata } from "next";

import "./globals.css";

import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";

import { metadata } from "@/config/metadata";


export { metadata };


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