"use client";

import { HeroBackground } from "./hero-background";
import { HeroActions } from "./hero-actions";
import { HeroStats } from "./hero-stats";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

import { FadeUp } from "@/components/motion/fade-up";

export function Hero() {
  return (
    <Section className="relative min-h-screen overflow-hidden flex items-center">

      <HeroBackground />

      <Container className="relative z-10">

        <div className="max-w-5xl">

          <FadeUp>

            <Badge>
              Personal Intelligence Company
            </Badge>

          </FadeUp>

          <FadeUp delay={0.1}>

            <Heading
              level="hero"
              className="mt-8 max-w-5xl"
            >
              Building AI
              <br />
              for human
              <br />
              evolution.
            </Heading>

          </FadeUp>

          <FadeUp delay={0.2}>

            <Text
              variant="lead"
              className="mt-8 max-w-3xl"
            >
              EON AI creates the next generation of personal
              intelligence systems designed around memory,
              identity and human potential.
            </Text>

          </FadeUp>

          <FadeUp delay={0.3}>
            <HeroActions />
          </FadeUp>

          <FadeUp delay={0.4}>
            <HeroStats />
          </FadeUp>

        </div>

      </Container>

    </Section>
  );
}