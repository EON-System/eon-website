import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";

export function AboutV2() {
  return (
    <Section id="about">

      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <Badge>
            About EON AI
          </Badge>

          <div className="mt-8">

            <Heading>
              Building the intelligence layer
              for humanity.
            </Heading>

          </div>

          <div className="mt-8">

            <Text variant="lead">
              EON AI creates personal intelligence systems
              that help people understand themselves,
              preserve their memories and design their future.
            </Text>

          </div>

        </div>



        <div className="mt-20 grid gap-6 md:grid-cols-3">

          <Card>
            <h3 className="text-xl font-semibold">
              Intelligence
            </h3>

            <p className="mt-4 text-white/50">
              AI systems designed around human needs.
            </p>
          </Card>


          <Card>
            <h3 className="text-xl font-semibold">
              Memory
            </h3>

            <p className="mt-4 text-white/50">
              Technology that remembers your journey.
            </p>
          </Card>


          <Card>
            <h3 className="text-xl font-semibold">
              Evolution
            </h3>

            <p className="mt-4 text-white/50">
              Tools for personal growth and transformation.
            </p>
          </Card>

        </div>


      </Container>

    </Section>
  );
}