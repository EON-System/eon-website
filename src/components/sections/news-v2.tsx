import { Reveal } from "@/components/motion/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";


const updates = [

  {
    date: "2027",
    title: "EON AI introduced",
    description:
      "A new generation of personal intelligence systems begins."
  },


  {
    date: "Future",
    title: "Building human-centered AI",
    description:
      "Researching technologies designed around memory and identity."
  },


  {
    date: "Ongoing",
    title: "Expanding the ecosystem",
    description:
      "Creating interconnected AI experiences for everyday life."
  }

];



export function NewsV2() {


  return (

    <Section id="news">


      <Container>


        <Reveal>


          <div className="max-w-3xl">


            <p className="
              text-sm
              uppercase
              tracking-[0.4em]
              text-[#D6B25E]
            ">

              Updates

            </p>



            <h2 className="
              mt-6
              text-5xl
              font-semibold
              text-[#F4F1EA]
            ">

              Building the future.

            </h2>



          </div>


        </Reveal>





        <div className="
          mt-16
          grid
          gap-6
          lg:grid-cols-3
        ">


          {updates.map((item,index)=>(


            <Reveal

              key={item.title}

              delay={index * 0.15}

            >


              <GlassCard>


                <span className="
                  text-xs
                  uppercase
                  tracking-[0.4em]
                  text-[#D6B25E]
                ">

                  {item.date}

                </span>



                <h3 className="
                  mt-8
                  text-2xl
                  font-semibold
                  text-[#F4F1EA]
                ">

                  {item.title}

                </h3>



                <p className="
                  mt-5
                  leading-7
                  text-white/50
                ">

                  {item.description}

                </p>


              </GlassCard>


            </Reveal>


          ))}


        </div>


      </Container>


    </Section>

  );

}