import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";


const areas = [
  "Personal AI",
  "Memory Systems",
  "Human Behavior",
  "Future Interfaces",
];


export function ResearchV2() {
  return (
    <Section id="research">

      <Container>

        <Badge>
          Research
        </Badge>


        <div className="mt-8 max-w-3xl">

          <Heading>
            Exploring the future of personal intelligence.
          </Heading>

        </div>



        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {areas.map((item)=>(
            <Card key={item}>

              <h3 className="text-2xl font-semibold">
                {item}
              </h3>

              <p className="mt-4 text-white/50">
                Advancing AI technologies
                for human potential.
              </p>

            </Card>
          ))}

        </div>


      </Container>

    </Section>
  );
}