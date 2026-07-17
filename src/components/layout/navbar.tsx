"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  {
    name: "Products",
    href: "#products",
  },
  {
    name: "Technology",
    href: "#technology",
  },
  {
    name: "Vision",
    href: "#vision",
  },
  {
    name: "Mission",
    href: "#mission",
  },
];


export function Navbar() {
  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className="fixed left-0 top-0 z-50 w-full px-6 py-6"
    >

      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/40 px-6 py-4 backdrop-blur-xl">


        {/* Logo */}

        <Link
          href="/"
          className="text-lg font-semibold tracking-[0.35em]"
        >
          EON AI
        </Link>



        {/* Desktop */}

        <div className="hidden items-center gap-8 md:flex">

          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-white/50 transition hover:text-white"
            >
              {link.name}
            </Link>
          ))}

        </div>



        {/* CTA */}

        <Link
          href="#contact"
          className="rounded-full bg-[#D6B25E] px-5 py-2.5 text-sm text-black transition hover:scale-105"
        >
          Early Access
        </Link>


      </nav>

    </motion.header>
  );
}