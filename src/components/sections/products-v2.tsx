import Link from "next/link";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";

import { siteConfig } from "@/config/site";


export function ProductsV2() {
  return (
    <Section id="products">

      <Container>

        <Badge>
          Products
        </Badge>


        <div className="mt-8 max-w-3xl">

          <Heading>
            AI products designed
            around humans.
          </Heading>

        </div>



        <div className="mt-16 grid gap-6 md:grid-cols-2">


          {siteConfig.products.map((product)=>(
            <Link
              key={product.name}
              href={product.href}
            >

              <Card>

                <h3 className="text-3xl font-semibold">
                  {product.name}
                </h3>


                <p className="mt-4 text-white/50">
                  {product.description}
                </p>


              </Card>

            </Link>
          ))}


        </div>


      </Container>

    </Section>
  );
}