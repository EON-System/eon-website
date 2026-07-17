import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";


export function CompanyV2() {

  return (
    <Section id="company">

      <Container>

        <Badge>
          Company
        </Badge>


        <div className="mt-8 max-w-4xl">

          <Heading>
            Building the future
            of personal intelligence.
          </Heading>


          <div className="mt-8">

            <Text variant="lead">
              EON AI develops intelligent systems
              that connect human identity,
              memory and future possibilities.
            </Text>

          </div>

        </div>



        <div className="mt-16">

          <Card>

            <h3 className="text-2xl font-semibold">
              Our Mission
            </h3>


            <p className="mt-4 text-white/50">
              Create AI companions that empower
              people to understand themselves
              and evolve.
            </p>


          </Card>

        </div>


      </Container>

    </Section>
  );
}