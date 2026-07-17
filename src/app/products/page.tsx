import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { ProductsV2 } from "@/components/sections/products-v2";


export default function ProductsPage() {

  return (
    <main>

      <Section className="pt-40">

        <Container>

          <PageHeader

            badge="Products"

            title={
              <>
                AI products
                built for humans.
              </>
            }

            description="
              EON AI creates intelligent experiences
              focused on identity, memory and growth.
            "

          />

        </Container>

      </Section>


      <ProductsV2 />

    </main>
  );
}