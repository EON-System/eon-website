import type { Metadata } from "next";

import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";


export const metadata: Metadata = {

  title:
    "SoulMirror AI — AI for Self Discovery | EON AI",

  description:
    "Discover your personality, dreams and inner world with SoulMirror AI. A personal AI companion for self-discovery, reflection and personal growth.",

  openGraph:{

    title:
      "SoulMirror AI | EON AI",

    description:
      "An AI companion for self-discovery, dream analysis and personal evolution.",

    type:"website",

  },

  twitter:{

    card:"summary_large_image",

    title:
      "SoulMirror AI | EON AI",

    description:
      "AI for self-discovery, dreams and personal intelligence.",

  },

};


export default function SoulMirrorPage() {

  return (

    <main>

      <Section className="pt-40">

        <Container>

          <PageHeader

            badge="SoulMirror AI"

            title={
              <>
                Understand yourself
                deeper.
              </>
            }

            description="
              An AI companion for self discovery,
              reflection and personal evolution.
            "

          />

        </Container>

      </Section>

    </main>

  );

}