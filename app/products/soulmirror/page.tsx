"use client";

import { motion } from "framer-motion";
import Link from "next/link";


export default function SoulMirrorPage() {
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
            SoulMirror AI
          </motion.h1>



          <p
            className="
              mt-6
              text-2xl
              text-[#D6B25E]
            "
          >
            Understand yourself.
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
            An AI companion designed for self-discovery,
            reflection and deeper understanding of your
            personality, memories and inner world.
          </p>


        </div>





        {/* Visual */}

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
            rounded-full
            border
            border-[#D6B25E]/20
            bg-white/[0.02]
          "
        >

          <div
            className="
              absolute
              h-72
              w-72
              rounded-full
              bg-[#D6B25E]/10
              blur-[120px]
            "
          />


          <div
            className="
              relative
              flex
              h-40
              w-40
              items-center
              justify-center
              rounded-full
              border
              border-[#D6B25E]/40
              shadow-[0_0_80px_rgba(214,178,94,0.25)]
            "
          >

            <span
              className="
                text-sm
                uppercase
                tracking-[0.3em]
                text-[#D6B25E]
              "
            >
              Soul
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
            title="Soul Scan"
            text="AI analysis designed to explore your personality patterns and inner traits."
          />


          <Feature
            title="Dream Analysis"
            text="Discover hidden meanings and reflections through AI-powered interpretation."
          />


          <Feature
            title="Personal Memory"
            text="A companion that evolves with your journey and experiences."
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