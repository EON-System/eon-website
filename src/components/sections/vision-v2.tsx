import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";


export function VisionV2() {

  return (
    <Section>

      <Container>

        <div className="mx-auto max-w-5xl text-center">


          <Heading>
            The next era of human AI interaction.
          </Heading>


          <div className="mt-8">

            <Text variant="lead">
              We believe intelligence should not
              replace humanity. It should amplify it.
            </Text>

          </div>


        </div>


      </Container>

    </Section>
  );
}