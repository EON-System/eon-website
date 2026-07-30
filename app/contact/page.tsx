"use client";

import { motion } from "framer-motion";


const socials = [
  {
    name: "X",
    href: "https://x.com/eon_ai_inc?s=11",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/eon_ai_inc?igsh=bnY4cW1renYzNjh1&utm_source=qr",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/eon-ai-a2a9a4422?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@eon_ai1?_r=1&_t=ZS-98PeJHP2AiN",
  },
];


export default function ContactPage() {

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
          max-w-5xl
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
          Contact EON AI
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
          Let's build the
          future of intelligence.
        </motion.h1>





        <p
          className="
            mx-auto
            mt-10
            max-w-2xl
            text-lg
            leading-8
            text-white/50
          "
        >
          Interested in our products, partnerships
          or the future of personal AI?
          Connect with EON AI.
        </p>





        <div
          className="
            mt-20
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.03]
            p-10
            backdrop-blur-xl
          "
        >


          <p
            className="
              text-xs
              uppercase
              tracking-[0.4em]
              text-[#D6B25E]
            "
          >
            Email
          </p>



          <a
            href="mailto:eon.ai.inc@gmail.com"
            className="
              mt-6
              block
              text-2xl
              transition
              hover:text-[#D6B25E]
              md:text-4xl
            "
          >
            eon.ai.inc@gmail.com
          </a>


        </div>





        <div
          className="
            mt-12
            flex
            flex-wrap
            justify-center
            gap-4
          "
        >

          {socials.map((social)=>(

            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-6
                py-3
                text-sm
                text-white/60
                transition
                hover:border-[#D6B25E]/50
                hover:text-[#D6B25E]
              "
            >
              {social.name}
            </a>

          ))}

        </div>





        <div
          className="
            mt-24
            border-t
            border-white/10
            pt-10
            text-sm
            text-white/40
          "
        >

          © {new Date().getFullYear()} EON AI.
          Building personal intelligence systems
          for human evolution.

        </div>


      </section>


    </main>

  );
}