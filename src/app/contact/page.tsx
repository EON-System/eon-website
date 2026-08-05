import type { Metadata } from "next";

import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { ContactV2 } from "@/components/sections/contact-v2";


export const metadata: Metadata = {

  title:
    "Contact — EON AI",

  description:
    "Contact EON AI for partnerships, media inquiries, research collaborations and business opportunities.",

  openGraph:{

    title:
      "Contact | EON AI",

    description:
      "Connect with EON AI and build the future together.",

      type:"website",

  },

  twitter:{

    card:"summary_large_image",

    title:
      "Contact | EON AI",

    description:
      "Let's build the future together.",

  },

};


export default function ContactPage() {

  return (

    <main>

      <Section className="pt-40">

        <Container>

          <PageHeader

            badge="Contact"

            title={
              <>
                Let's build
                the future.
              </>
            }

            description="
              Connect with EON AI and explore
              future collaboration opportunities.
            "

          />

        </Container>

      </Section>


      <ContactV2 />

    </main>

  );

}