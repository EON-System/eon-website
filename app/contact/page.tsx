"use client";

import { motion } from "framer-motion";
import { Background } from "@/components/background";


const contacts = [
  {
    title: "General",
    value: "hello@eon.ai",
  },
  {
    title: "Research",
    value: "research@eon.ai",
  },
  {
    title: "Partnerships",
    value: "partners@eon.ai",
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


export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-[#F4F1EA]">

      <Background />


      {/* Hero */}

      <section
        className="
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          flex-col
          justify-center
          px-6
          py-32
        "
      >

        <motion.div
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
        >

          <p
            className="
              mb-8
              text-xs
              uppercase
              tracking-[0.45em]
              text-[#D6B25E]
            "
          >
            Contact EON AI
          </p>


          <h1
            className="
              max-w-5xl
              text-5xl
              font-medium
              leading-[1.05]
              tracking-tight
              md:text-8xl
            "
          >
            Let's build the
            future together.
          </h1>


          <p
            className="
              mt-10
              max-w-2xl
              text-lg
              leading-8
              text-white/50
              md:text-xl
            "
          >
            We collaborate with creators, researchers and partners
            building the next generation of intelligent experiences.
          </p>


        </motion.div>

      </section>




      {/* Contact Cards */}

      <section
        className="
          mx-auto
          max-w-7xl
          px-6
          pb-32
        "
      >

        <div
          className="
            grid
            gap-6
            md:grid-cols-3
          "
        >

          {contacts.map((item,index)=>(
            <motion.a
              key={item.title}
              href={`mailto:${item.value}`}
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
                delay:index * 0.15,
              }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-xl
                transition
                hover:border-[#D6B25E]/30
              "
            >

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.35em]
                  text-[#D6B25E]
                "
              >
                {item.title}
              </p>


              <p
                className="
                  mt-6
                  text-lg
                  text-white/70
                "
              >
                {item.value}
              </p>


            </motion.a>
          ))}


        </div>

      </section>




      {/* Social */}

      <section
        className="
          mx-auto
          max-w-7xl
          px-6
          pb-40
        "
      >

        <div
          className="
            border-t
            border-white/10
            pt-10
          "
        >

          <p
            className="
              text-xs
              uppercase
              tracking-[0.35em]
              text-white/40
            "
          >
            Follow EON AI
          </p>


          <div className="mt-8 flex gap-8">

            {socials.map((item)=>(
              <a
                key={item.name}
                href={item.href}
                className="
                  text-white/50
                  transition
                  hover:text-white
                "
              >
                {item.name}
              </a>
            ))}

          </div>

        </div>


      </section>



    </main>
  );
}