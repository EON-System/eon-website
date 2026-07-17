import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";


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