"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";


export function Navbar() {

  return (

    <motion.header

      initial={{

        opacity:0,

        y:-20,

      }}


      animate={{

        opacity:1,

        y:0,

      }}


      transition={{

        duration:1,

      }}


      className="
        fixed
        top-6
        left-0
        right-0
        z-50
      "

    >


      <nav

        className="
          mx-auto
          flex
          max-w-6xl
          items-center
          justify-between
          rounded-3xl
          border
          border-white/10
          bg-black/40
          px-6
          py-4
          backdrop-blur-2xl
          shadow-[0_10px_50px_rgba(0,0,0,0.4)]
        "

      >



        {/* Logo */}

        <Link

          href="/"

          className="
            text-lg
            font-semibold
            tracking-[0.25em]
            text-[#F4F1EA]
          "

        >

          EON AI

        </Link>



        {/* Navigation */}

        <div className="
          hidden
          items-center
          gap-8
          md:flex
        ">


          {siteConfig.navigation.map((item)=>(


            <Link

              key={item.href}

              href={item.href}

              className="
                text-sm
                text-white/50
                transition

                hover:text-[#F4F1EA]
              "

            >

              {item.name}

            </Link>


          ))}


        </div>



        {/* CTA */}

        <Link

          href="/contact"

          className="
            rounded-xl
            border
            border-[#D6B25E]/40
            bg-[#D6B25E]/5
            px-5
            py-2.5
            text-sm
            text-[#F4F1EA]
            transition

            hover:border-[#D6B25E]

            hover:bg-[#D6B25E]/10
          "

        >

          Contact

        </Link>


      </nav>


    </motion.header>

  );

}