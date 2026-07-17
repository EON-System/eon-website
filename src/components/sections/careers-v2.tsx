import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";


export function CareersV2() {
  return (
    <Section id="careers">

      <Container>

        <Badge>
          Careers
        </Badge>


        <div className="mt-8 max-w-4xl">

          <Heading>
            Join the team
            building tomorrow.
          </Heading>

        </div>


        <div className="mt-12">

          <Card>

            <h3 className="text-2xl font-semibold">
              Future opportunities
            </h3>


            <p className="mt-4 text-white/50">
              We are looking for engineers,
              designers and researchers.
            </p>


          </Card>

        </div>


      </Container>

    </Section>
  );
}