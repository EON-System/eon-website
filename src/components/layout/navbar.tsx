"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navigation = [
  {
    title: "Products",
    href: "#products",
  },
  {
    title: "Technology",
    href: "#technology",
  },
  {
    title: "Mission",
    href: "#mission",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed left-0 top-0 z-50 w-full"
    >
      <div className="mx-auto mt-6 flex w-[92%] max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-2xl">

        <Link
          href="/"
          className="text-lg font-semibold tracking-[0.2em]"
        >
          EON AI
        </Link>

        <nav className="hidden gap-10 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm text-white/70 transition hover:text-white"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <Link
          href="/products/soulmirror"
          className="rounded-full bg-[#D6B25E] px-5 py-3 text-sm font-medium text-black transition hover:scale-105"
        >
          SoulMirror
        </Link>

      </div>
    </motion.header>
  );
}