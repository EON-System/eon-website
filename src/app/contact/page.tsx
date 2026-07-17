import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { ContactV2 } from "@/components/sections/contact-v2";


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