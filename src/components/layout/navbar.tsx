"use client";

import Link from "next/link";


export function Navbar() {

  return (

    <header className="
      fixed
      top-6
      left-0
      right-0
      z-50
    ">


      <nav className="
        mx-auto
        flex
        max-w-6xl
        items-center
        justify-between
        rounded-3xl
        border
        border-white/[0.08]
        bg-black/40
        px-8
        py-4
        backdrop-blur-2xl
        shadow-[0_20px_80px_rgba(0,0,0,0.45)]
      ">


        {/* Logo */}

        <Link

          href="/"

          className="
            flex
            items-center
            gap-2
          "

        >

          <span className="
            text-xl
            font-semibold
            tracking-[-0.05em]
            text-[#F4F1EA]
          ">

            EON

          </span>


          <span className="
            text-xl
            font-light
            tracking-[-0.05em]
            text-white/40
          ">

            AI

          </span>


        </Link>



        {/* Menu */}

        <div className="
          hidden
          items-center
          gap-10
          md:flex
        ">


          <Link
            href="/products"
            className="
              text-sm
              text-white/60
              transition
              hover:text-white
            "
          >
            Products
          </Link>


          <Link
            href="/research"
            className="
              text-sm
              text-white/60
              transition
              hover:text-white
            "
          >
            Research
          </Link>


          <Link
            href="/about"
            className="
              text-sm
              text-white/60
              transition
              hover:text-white
            "
          >
            About
          </Link>


        </div>



        {/* Button */}

        <Link

          href="/contact"

          className="
            group
            rounded-2xl
            border
            border-[#D6B25E]/30
            bg-white/[0.03]
            px-6
            py-3
            text-sm
            text-[#F4F1EA]
            backdrop-blur-xl
            transition
            duration-300
            hover:border-[#D6B25E]/70
            hover:bg-[#D6B25E]/10
            hover:shadow-[0_0_35px_rgba(214,178,94,0.15)]
            cursor-pointer
          "

        >

          Contact


        </Link>


      </nav>


    </header>

  );

}