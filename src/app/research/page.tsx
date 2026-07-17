import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { ResearchV2 } from "@/components/sections/research-v2";


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