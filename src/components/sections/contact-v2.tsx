import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";


export function ContactV2() {
  return (
    <Section id="contact">

      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <Badge>
            Contact
          </Badge>


          <div className="mt-8">

            <Heading>
              Build the future
              with EON AI.
            </Heading>

          </div>


          <div className="mt-8">

            <Text variant="lead">
              We collaborate with people and companies
              creating the next generation of intelligence.
            </Text>

          </div>


          <div className="mt-10">

            <Button href="mailto:hello@eon.ai">
              Contact Us
            </Button>

          </div>


        </div>

      </Container>

    </Section>
  );
}