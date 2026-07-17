"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/layout/section";


const products = [
  {
    name: "SoulMirror AI",
    category: "Self Discovery Intelligence",
    description:
      "An AI companion for exploring identity, emotions, dreams and personal growth.",
    href: "/products/soulmirror",
  },

  {
    name: "FutureSelf AI",
    category: "Future Intelligence",
    description:
      "A personal AI experience designed to help you imagine and build your future.",
    href: "/products/futureself",
  },
];


export function ProductsSection() {
  return (
    <Section id="products">

      <Container>

        <div className="mx-auto max-w-5xl text-center">

          <span className="text-xs uppercase tracking-[0.35em] text-[#D6B25E]">
            EON AI Products
          </span>


          <h2 className="mt-8 text-5xl font-semibold md:text-6xl">
            A new generation of
            <br />
            personal intelligence.
          </h2>


          <p className="mx-auto mt-6 max-w-2xl text-white/60">
            We create AI companions designed around
            human understanding, growth and future possibilities.
          </p>


        </div>



        <div className="mt-16 grid gap-8 md:grid-cols-2">


          {products.map((product, index) => (

            <motion.div
              key={product.name}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.15,
              }}
              className="group rounded-[40px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl transition hover:border-[#D6B25E]/40"
            >


              <span className="text-xs uppercase tracking-[0.3em] text-[#D6B25E]">
                {product.category}
              </span>



              <h3 className="mt-8 text-4xl font-semibold">
                {product.name}
              </h3>



              <p className="mt-5 leading-8 text-white/60">
                {product.description}
              </p>



              <Link
                href={product.href}
                className="mt-10 inline-flex rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm transition group-hover:bg-[#D6B25E] group-hover:text-black"
              >
                Explore Product
              </Link>


            </motion.div>

          ))}


        </div>


      </Container>

    </Section>
  );
}