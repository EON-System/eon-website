import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";


export default function AboutPage() {

  return (
    <main>


      <Section className="pt-40">

        <Container>

          <PageHeader

            badge="About EON AI"

            title={
              <>
                Building the future
                of personal intelligence.
              </>
            }

            description="
              EON AI creates intelligent systems
              designed to understand, remember
              and empower people.
            "

          />


        </Container>

      </Section>



      <Section>

        <Container>

          <div className="grid gap-6 md:grid-cols-3">


            <Card>
              <h3 className="text-xl font-semibold">
                Vision
              </h3>

              <p className="mt-4 text-white/50">
                A future where AI amplifies human potential.
              </p>

            </Card>



            <Card>

              <h3 className="text-xl font-semibold">
                Mission
              </h3>

              <p className="mt-4 text-white/50">
                Create meaningful intelligence companions.
              </p>

            </Card>



            <Card>

              <h3 className="text-xl font-semibold">
                Values
              </h3>

              <p className="mt-4 text-white/50">
                Innovation, privacy and human-first AI.
              </p>

            </Card>


          </div>

        </Container>

      </Section>


    </main>
  );
}