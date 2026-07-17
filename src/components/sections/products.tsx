"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    title: "SoulMirror AI",
    subtitle: "Understand Yourself",
    description:
      "Discover your personality, emotions, dreams and inner patterns through an AI companion built for self-discovery.",
    status: "Available Soon",
    href: "/products/soulmirror",
  },
  {
    title: "FutureSelf AI",
    subtitle: "Create Your Future",
    description:
      "Explore future scenarios, simulate life decisions and build long-term personal growth with AI guidance.",
    status: "Coming Soon",
    href: "/products/futureself",
  },
];

export function ProductsSection() {
  return (
    <Section id="products">
      <Container>

        <SectionTitle
          badge="Products"
          title={
            <>
              One ecosystem.
              <br />
              Multiple AI companions.
            </>
          }
          description="Every EON AI product solves a different part of human growth while sharing one philosophy and one technology foundation."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >
              <Card className="flex h-full flex-col justify-between p-10">

                <div>

                  <span className="inline-flex rounded-full border border-[#D6B25E]/30 bg-[#D6B25E]/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-[#D6B25E]">
                    {product.status}
                  </span>

                  <h3 className="mt-8 text-4xl font-semibold">
                    {product.title}
                  </h3>

                  <p className="mt-3 text-lg text-[#D6B25E]">
                    {product.subtitle}
                  </p>

                  <p className="mt-8 leading-8 text-white/60">
                    {product.description}
                  </p>

                </div>

                <div className="mt-12">
                  <Button href={product.href}>
                    Learn More
                  </Button>
                </div>

              </Card>
            </motion.div>
          ))}
        </div>

      </Container>
    </Section>
  );
}