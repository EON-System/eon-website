"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";


export function Navbar() {

  const [open, setOpen] = useState(false);


  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">


        <Link
          href="/"
          className="text-xl font-semibold tracking-tight"
        >
          EON AI
        </Link>



        <nav className="hidden items-center gap-8 md:flex">

          {siteConfig.navigation.map((item) => (

            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-white/60 transition hover:text-white"
            >
              {item.name}
            </Link>

          ))}

        </nav>



        <div className="hidden md:block">

          <Button href="/contact">
            Contact
          </Button>

        </div>



        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          Menu
        </button>


      </div>


      {open && (

        <div className="border-t border-white/10 px-6 py-6 md:hidden">

          <nav className="flex flex-col gap-5">

            {siteConfig.navigation.map((item) => (

              <Link
                key={item.name}
                href={item.href}
                className="text-white/70"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>

            ))}

          </nav>

        </div>

      )}


    </header>
  );
}