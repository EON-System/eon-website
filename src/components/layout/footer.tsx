"use client";

import Link from "next/link";
import { motion } from "framer-motion";


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
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        px-6
        py-24
      "
    >


      {/* Ambient gold light */}

      <div
        className="
          absolute
          left-1/2
          top-0
          h-[300px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-[#D6B25E]/10
          blur-[160px]
        "
      />



      <motion.div
        initial={{
          opacity:0,
          y:30,
        }}
        whileInView={{
          opacity:1,
          y:0,
        }}
        viewport={{
          once:true,
        }}
        transition={{
          duration:0.8,
        }}
        className="
          relative
          mx-auto
          max-w-7xl
        "
      >


        <div
          className="
            grid
            gap-16
            md:grid-cols-4
          "
        >



          {/* Brand */}

          <div>

            <Link
              href="/"
              className="
                text-2xl
                font-semibold
                tracking-[0.4em]
                text-[#F4F1EA]
              "
            >
              EON AI
            </Link>


            <p
              className="
                mt-8
                max-w-xs
                text-sm
                leading-8
                text-white/50
              "
            >
              Building AI companions for human evolution.
            </p>


            <p
              className="
                mt-6
                text-xs
                uppercase
                tracking-[0.35em]
                text-[#D6B25E]/70
              "
            >
              Intelligence Designed
            </p>


          </div>




          {/* Products */}

          <div>

            <h3
              className="
                text-xs
                uppercase
                tracking-[0.35em]
                text-[#D6B25E]
              "
            >
              Products
            </h3>


            <div className="mt-8 space-y-5">

              {products.map((item)=>(
                <Link
                  key={item.name}
                  href={item.href}
                  className="
                    block
                    text-white/50
                    transition
                    duration-300
                    hover:text-white
                  "
                >
                  {item.name}
                </Link>
              ))}

            </div>

          </div>




          {/* Company */}

          <div>

            <h3
              className="
                text-xs
                uppercase
                tracking-[0.35em]
                text-[#D6B25E]
              "
            >
              Company
            </h3>


            <div className="mt-8 space-y-5">

              {company.map((item)=>(
                <Link
                  key={item.name}
                  href={item.href}
                  className="
                    block
                    text-white/50
                    transition
                    duration-300
                    hover:text-white
                  "
                >
                  {item.name}
                </Link>
              ))}

            </div>

          </div>




          {/* Social */}

          <div>

            <h3
              className="
                text-xs
                uppercase
                tracking-[0.35em]
                text-[#D6B25E]
              "
            >
              Connect
            </h3>


            <div className="mt-8 space-y-5">

              {socials.map((item)=>(
                <a
                  key={item.name}
                  href={item.href}
                  className="
                    block
                    text-white/50
                    transition
                    duration-300
                    hover:text-white
                  "
                >
                  {item.name}
                </a>
              ))}

            </div>

          </div>


        </div>




        {/* Bottom */}

        <div
          className="
            mt-20
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            pt-8
            text-xs
            uppercase
            tracking-[0.25em]
            text-white/30
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          <span>
            © {new Date().getFullYear()} EON AI
          </span>


          <span>
            Building the future of personal intelligence
          </span>


        </div>


      </motion.div>


    </footer>
  );
}