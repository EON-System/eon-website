"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/layout/section";


const technologies = [
  {
    title: "Personal Intelligence",
    description:
      "Building AI systems that understand individual context, preferences and human goals.",
  },

  {
    title: "Memory Architecture",
    description:
      "Creating intelligent memory systems that allow AI experiences to evolve over time.",
  },

  {
    title: "AI Companions",
    description:
      "Developing next-generation AI companions designed for meaningful human interaction.",
  },

  {
    title: "Human-AI Interface",
    description:
      "Exploring new ways for humans and artificial intelligence to collaborate.",
  },
];


export function TechnologySection() {
  return (
    <Section id="technology">

      <Container>


        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="max-w-4xl"
        >

          <span className="text-xs uppercase tracking-[0.4em] text-[#D6B25E]">
            Research & Technology
          </span>


          <h2 className="mt-8 text-5xl font-semibold leading-tight md:text-7xl">
            Building the foundation
            <br />
            of personal intelligence.
          </h2>


          <p className="mt-8 max-w-2xl text-xl leading-9 text-white/60">
            EON AI researches new approaches to artificial
            intelligence focused on memory, identity,
            personalization and human potential.
          </p>


        </motion.div>



        <div className="mt-20 grid gap-6 md:grid-cols-2">


          {technologies.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
              className="rounded-[36px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl transition hover:border-[#D6B25E]/30"
            >

              <div className="text-sm text-[#D6B25E]">
                0{index + 1}
              </div>


              <h3 className="mt-6 text-3xl font-semibold">
                {item.title}
              </h3>


              <p className="mt-5 leading-8 text-white/50">
                {item.description}
              </p>


            </motion.div>

          ))}


        </div>


      </Container>

    </Section>
  );
}