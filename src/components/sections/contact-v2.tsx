import { Reveal } from "@/components/motion/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { EonButton } from "@/components/ui/eon-button";


export function ContactV2() {


  return (

    <Section id="contact">


      <Container>


        <Reveal>


          <GlassCard

            className="
              relative
              overflow-hidden
              px-8
              py-20
              text-center
              md:px-20
            "

          >


            <div className="
              absolute
              left-1/2
              top-0
              h-[300px]
              w-[300px]
              -translate-x-1/2
              rounded-full
              bg-[#D6B25E]/10
              blur-[120px]
            "/>




            <div className="
              relative
              z-10
              mx-auto
              max-w-4xl
            ">


              <p className="
                text-sm
                uppercase
                tracking-[0.45em]
                text-[#D6B25E]
              ">

                Contact

              </p>



              <h2 className="
                mt-8
                text-5xl
                font-semibold
                leading-tight
                text-[#F4F1EA]
                md:text-7xl
              ">


                Let's build
                the future
                together.


              </h2>



              <p className="
                mx-auto
                mt-8
                max-w-2xl
                text-lg
                leading-8
                text-white/50
              ">


                Connect with EON AI
                and explore the next generation
                of intelligent systems.


              </p>



              <div className="
                mt-12
                flex
                justify-center
              ">


                <EonButton href="mailto:hello@eon.ai">

                  Contact EON AI →

                </EonButton>


              </div>



            </div>


          </GlassCard>


        </Reveal>


      </Container>


    </Section>

  );

}