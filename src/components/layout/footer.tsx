"use client";

import Link from "next/link";

const products = [
  {
    name: "SoulMirror AI",
    href: "/products/soulmirror",
  },
  {
    name: "FutureSelf AI",
    href: "/products/futureself",
  },
];


const company = [
  {
    name: "Vision",
    href: "#vision",
  },
  {
    name: "Mission",
    href: "#mission",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];


const socials = [
  {
    name: "X",
    href: "#",
  },
  {
    name: "Instagram",
    href: "#",
  },
  {
    name: "LinkedIn",
    href: "#",
  },
];


export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-16">

      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">


        {/* Brand */}

        <div>

          <Link
            href="/"
            className="text-xl font-semibold tracking-[0.35em]"
          >
            EON AI
          </Link>


          <p className="mt-6 max-w-xs leading-7 text-white/50">
            Building AI companions for human evolution.
          </p>

        </div>



        {/* Products */}

        <div>

          <h3 className="text-sm uppercase tracking-[0.3em] text-[#D6B25E]">
            Products
          </h3>


          <div className="mt-6 space-y-4">

            {products.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-white/50 transition hover:text-white"
              >
                {item.name}
              </Link>
            ))}

          </div>

        </div>



        {/* Company */}

        <div>

          <h3 className="text-sm uppercase tracking-[0.3em] text-[#D6B25E]">
            Company
          </h3>


          <div className="mt-6 space-y-4">

            {company.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-white/50 transition hover:text-white"
              >
                {item.name}
              </Link>
            ))}

          </div>

        </div>



        {/* Social */}

        <div>

          <h3 className="text-sm uppercase tracking-[0.3em] text-[#D6B25E]">
            Follow
          </h3>


          <div className="mt-6 space-y-4">

            {socials.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-white/50 transition hover:text-white"
              >
                {item.name}
              </a>
            ))}

          </div>

        </div>


      </div>



      <div className="mx-auto mt-16 max-w-7xl border-t border-white/10 pt-8 text-sm text-white/40">

        © {new Date().getFullYear()} EON AI. All rights reserved.

      </div>


    </footer>
  );
}