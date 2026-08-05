import type { Metadata } from "next";

import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { ResearchV2 } from "@/components/sections/research-v2";


export const metadata: Metadata = {

  title:
    "Research — AI Research & Human Intelligence | EON AI",

  description:
    "Explore EON AI research focused on memory, identity, personal intelligence and the future of human-AI interaction.",

  openGraph:{

    title:
      "Research | EON AI",

    description:
      "Exploring the future of personal intelligence.",

    type:
      "website",

  },

  twitter:{

    card:
      "summary_large_image",

    title:
      "Research | EON AI",

    description:
      "AI research focused on human evolution.",

  },

};



export default function ResearchPage() {

  return (

    <main>

      <Section className="pt-40">

        <Container>

          <PageHeader

            badge="Research"

            title={
              <>
                Exploring the future
                of intelligence.
              </>
            }

            description="
              Researching AI systems that connect
              technology and human experience.
            "

          />

        </Container>

      </Section>


      <ResearchV2 />

    </main>

  );

}