import { Reveal } from "@/components/motion/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";


export function AboutV2() {


  return (

    <Section id="about">


      <Container>


        <Reveal>


          <div className="
            mx-auto
            max-w-5xl
            text-center
          ">


            <p className="
              text-sm
              uppercase
              tracking-[0.45em]
              text-[#D6B25E]
            ">

              About EON AI

            </p>



            <h2 className="
              mt-8
              text-5xl
              font-semibold
              leading-tight
              tracking-tight
              text-[#F4F1EA]
              md:text-7xl
            ">


              Technology that
              understands humanity.


            </h2>



            <p className="
              mx-auto
              mt-8
              max-w-3xl
              text-xl
              leading-9
              text-white/50
            ">


              We believe the next generation
              of intelligence will not replace humans.

              It will understand them.


            </p>



          </div>


        </Reveal>






        <div className="
          mt-24
          grid
          gap-8
          md:grid-cols-3
        ">



          <Reveal delay={0.1}>

            <GlassCard>


              <h3 className="
                text-2xl
                font-semibold
                text-[#F4F1EA]
              ">

                Vision

              </h3>



              <p className="
                mt-5
                leading-7
                text-white/50
              ">

                A future where every person
                has access to personal intelligence.

              </p>


            </GlassCard>


          </Reveal>





          <Reveal delay={0.2}>

            <GlassCard>


              <h3 className="
                text-2xl
                font-semibold
                text-[#F4F1EA]
              ">

                Mission

              </h3>



              <p className="
                mt-5
                leading-7
                text-white/50
              ">

                Creating AI companions that
                empower human growth.

              </p>


            </GlassCard>


          </Reveal>





          <Reveal delay={0.3}>

            <GlassCard>


              <h3 className="
                text-2xl
                font-semibold
                text-[#F4F1EA]
              ">

                Values

              </h3>



              <p className="
                mt-5
                leading-7
                text-white/50
              ">

                Privacy, innovation and
                human-first intelligence.

              </p>


            </GlassCard>


          </Reveal>



        </div>


      </Container>


    </Section>

  );

}