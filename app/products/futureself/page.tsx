"use client";

import { motion } from "framer-motion";
import Link from "next/link";


export default function FutureSelfPage() {
  return (
    <main
      className="
        min-h-screen
        overflow-hidden
        px-6
        py-32
      "
    >

      <section
        className="
          mx-auto
          max-w-6xl
        "
      >


        {/* Hero */}

        <div
          className="
            text-center
          "
        >

          <motion.p
            initial={{
              opacity:0,
              y:20,
            }}
            animate={{
              opacity:1,
              y:0,
            }}
            className="
              text-xs
              uppercase
              tracking-[0.5em]
              text-[#D6B25E]
            "
          >
            EON AI Product
          </motion.p>




          <motion.h1
            initial={{
              opacity:0,
              y:40,
            }}
            animate={{
              opacity:1,
              y:0,
            }}
            transition={{
              duration:1,
            }}
            className="
              mt-10
              text-5xl
              font-medium
              leading-tight
              md:text-8xl
            "
          >
            FutureSelf AI
          </motion.h1>




          <p
            className="
              mt-6
              text-2xl
              text-[#D6B25E]
            "
          >
            Meet the person you can become.
          </p>




          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-lg
              leading-8
              text-white/50
            "
          >
            A personal intelligence system that helps you
            explore future possibilities, visualize growth
            and understand the path ahead.
          </p>


        </div>






        {/* Future Vision Scene */}

        <motion.div
          initial={{
            opacity:0,
            scale:0.8,
          }}
          animate={{
            opacity:1,
            scale:1,
          }}
          transition={{
            duration:1.2,
          }}
          className="
            relative
            mx-auto
            mt-24
            flex
            aspect-square
            max-w-xl
            items-center
            justify-center
            overflow-hidden
            rounded-full
            border
            border-[#8B5CF6]/30
            bg-white/[0.02]
          "
        >


          <div
            className="
              absolute
              h-80
              w-80
              rounded-full
              bg-[#8B5CF6]/20
              blur-[140px]
            "
          />



          <div
            className="
              relative
              flex
              h-44
              w-44
              items-center
              justify-center
              rounded-full
              border
              border-[#D6B25E]/40
              bg-black/30
              shadow-[0_0_100px_rgba(139,92,246,0.25)]
            "
          >

            <span
              className="
                text-xs
                uppercase
                tracking-[0.35em]
                text-[#D6B25E]
              "
            >
              Future
            </span>

          </div>


        </motion.div>







        {/* Features */}

        <div
          className="
            mt-32
            grid
            gap-8
            md:grid-cols-3
          "
        >

          <Feature
            title="Future Vision"
            text="Explore possible versions of yourself and imagine different life paths."
          />


          <Feature
            title="Personal Growth"
            text="Transform insights into actions and meaningful progress."
          />


          <Feature
            title="Life Simulation"
            text="Discover how choices today can influence your future."
          />


        </div>







        <div
          className="
            mt-20
            text-center
          "
        >

          <Link
            href="/"
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-white/60
              transition
              hover:text-[#D6B25E]
            "
          >
            Back to EON AI →
          </Link>

        </div>



      </section>


    </main>
  );
}





function Feature({
  title,
  text,
}: {
  title:string;
  text:string;
}) {

  return (

    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-8
      "
    >

      <h3
        className="
          text-2xl
          font-medium
        "
      >
        {title}
      </h3>


      <p
        className="
          mt-4
          leading-7
          text-white/50
        "
      >
        {text}
      </p>


    </div>

  );

}