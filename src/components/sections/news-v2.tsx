import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";


const updates = [
  {
    title: "EON AI announced",
    text: "Introducing a new generation of personal intelligence systems.",
  },
  {
    title: "Building the future",
    text: "Researching AI companions designed around humans.",
  },
  {
    title: "Product ecosystem",
    text: "Creating interconnected AI experiences.",
  },
];


export function NewsV2() {
  return (
    <Section id="news">

      <Container>

        <Badge>
          Updates
        </Badge>


        <div className="mt-8 max-w-4xl">

          <Heading>
            Latest from EON AI.
          </Heading>

        </div>



        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {updates.map((item) => (

            <Card key={item.title}>

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>


              <p className="mt-4 text-white/50">
                {item.text}
              </p>

            </Card>

          ))}

        </div>


      </Container>

    </Section>
  );
}