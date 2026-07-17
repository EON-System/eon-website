"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/layout/section";

export function ContactSection() {
  return (
    <Section id="contact">
      <Container>
        <div className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-white/[0.03] p-12 text-center backdrop-blur-xl">
          <span className="text-xs uppercase tracking-[0.35em] text-[#D6B25E]">
            Contact
          </span>

          <h2 className="mt-6 text-5xl font-semibold">
            Let's build the future together.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-white/60">
            Partnerships, media, investors and talented people are welcome.
          </p>

          <a
            href="mailto:eon.ai.inc@gmail.com"
            className="mt-10 inline-flex rounded-full bg-[#D6B25E] px-8 py-4 text-black"
          >
            eon.ai.inc@gmail.com
          </a>
        </div>
      </Container>
    </Section>
  );
}