import { Reveal } from "@/components/motion/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

import { EonButton } from "@/components/ui/eon-button";


const products = [

  {
    name: "SoulMirror AI",

    description:
      "An AI companion designed for self-discovery, reflection and personal evolution.",

    tag:
      "Personal Intelligence",

  },


  {
    name: "EON Intelligence",

    description:
      "A new generation of personal AI systems built around human memory and identity.",

    tag:
      "Future Platform",

  },

];



export function ProductsV2() {


  return (

    <Section id="products">


      <Container>


        <Reveal>


          <div className="max-w-3xl">


            <p className="
              text-sm
              uppercase
              tracking-[0.4em]
              text-[#D6B25E]
            ">

              Products

            </p>



            <h2 className="
              mt-6
              text-5xl
              font-semibold
              tracking-tight
              text-[#F4F1EA]
            ">

              Intelligence products
              for the next era.

            </h2>


          </div>


        </Reveal>





        <div className="
          mt-20
          grid
          gap-8
          lg:grid-cols-2
        ">



          {products.map((product,index)=>(


            <Reveal

              key={product.name}

              delay={index * 0.15}

            >


              <GlassCard

                className="
                  min-h-[420px]
                "

              >


                <div className="
                  flex
                  h-full
                  flex-col
                  justify-between
                ">


                  <div>


                    <span className="
                      text-xs
                      uppercase
                      tracking-[0.35em]
                      text-[#D6B25E]
                    ">

                      {product.tag}

                    </span>



                    <h3 className="
                      mt-8
                      text-4xl
                      font-semibold
                      text-[#F4F1EA]
                    ">

                      {product.name}

                    </h3>



                    <p className="
                      mt-6
                      max-w-md
                      text-lg
                      leading-8
                      text-white/50
                    ">

                      {product.description}

                    </p>


                  </div>




                  <EonButton href="/contact">

                    Explore

                  </EonButton>



                </div>


              </GlassCard>


            </Reveal>


          ))}



        </div>


      </Container>


    </Section>

  );

}