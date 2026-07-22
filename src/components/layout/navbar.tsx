"use client";

import Link from "next/link";


const links = [
  {
    name: "Products",
    href: "#products",
  },
  {
    name: "Research",
    href: "#research",
  },
  {
    name: "About",
    href: "#about",
  },
];


export function Navbar() {

  return (

    <header className="
      fixed
      top-6
      left-0
      right-0
      z-50
      px-6
    ">


      <nav className="
        relative
        mx-auto
        flex
        max-w-6xl
        items-center
        justify-between
        overflow-hidden
        rounded-[28px]
        border
        border-white/[0.08]
        bg-[#080808]/70
        px-8
        py-4
        backdrop-blur-3xl
        shadow-[0_30px_100px_rgba(0,0,0,0.6)]
      ">


        {/* Glass reflection */}

        <div className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
        " />



        {/* Logo */}

        <Link

          href="#top"

          className="
            group
            flex
            items-center
            gap-2
          "

        >

          <span className="
            text-xl
            font-semibold
            tracking-[-0.06em]
            text-[#F4F1EA]
            transition-all
            duration-700
            group-hover:text-[#D6B25E]
            group-hover:drop-shadow-[0_0_15px_rgba(214,178,94,0.35)]
          ">

            EON

          </span>


          <span className="
            text-xl
            font-light
            tracking-[-0.06em]
            text-white/35
            transition-all
            duration-700
            group-hover:text-[#D6B25E]/70
          ">

            AI

          </span>


        </Link>





        {/* Navigation */}

        <div className="
          hidden
          items-center
          gap-12
          md:flex
        ">


          {links.map((link) => (

            <Link

              key={link.name}

              href={link.href}

              className="
                group
                relative
                text-sm
                text-white/55
                transition-all
                duration-500
                hover:text-[#D6B25E]
              "

            >

              {link.name}



              <span className="
                absolute
                -bottom-2
                left-0
                h-px
                w-0
                bg-[#D6B25E]
                shadow-[0_0_12px_rgba(214,178,94,0.8)]
                transition-all
                duration-700
                group-hover:w-full
              " />


            </Link>

          ))}


        </div>





        {/* Contact Button */}

        <Link

          href="#contact"

          className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-[#D6B25E]/25
            bg-white/[0.025]
            px-7
            py-3
            text-sm
            font-medium
            text-[#F4F1EA]
            backdrop-blur-xl
            transition-all
            duration-700
            hover:border-[#D6B25E]/70
            hover:text-[#D6B25E]
            hover:shadow-[0_0_45px_rgba(214,178,94,0.18)]
            cursor-pointer
          "

        >

          <span className="
            relative
            z-10
          ">

            Contact

          </span>



          <span className="
            absolute
            inset-0
            translate-y-full
            bg-[#D6B25E]/10
            transition-transform
            duration-700
            group-hover:translate-y-0
          " />


        </Link>


      </nav>


    </header>

  );

}