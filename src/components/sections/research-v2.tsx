import { Reveal } from "@/components/motion/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";


const researchItems = [

  {
    number: "01",
    title: "Personal AI",
    description:
      "Creating intelligent systems that adapt to individual human needs."
  },


  {
    number: "02",
    title: "Memory Systems",
    description:
      "Exploring AI architectures that understand context and personal history."
  },


  {
    number: "03",
    title: "Human Behavior",
    description:
      "Studying the connection between intelligence and human experience."
  },


  {
    number: "04",
    title: "Future Interfaces",
    description:
      "Building new ways for humans to interact with intelligent systems."
  }

];



export function ResearchV2() {


  return (

    <Section id="research">


      <Container>


        <Reveal>


          <div className="max-w-4xl">


            <p className="
              text-sm
              uppercase
              tracking-[0.4em]
              text-[#D6B25E]
            ">

              Research

            </p>



            <h2 className="
              mt-6
              text-5xl
              font-semibold
              leading-tight
              text-[#F4F1EA]
              md:text-6xl
            ">

              Exploring the future
              of intelligence.

            </h2>



            <p className="
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-white/50
            ">

              EON AI researches the next generation
              of personal intelligence systems.

            </p>


          </div>


        </Reveal>





        <div className="
          mt-20
          grid
          gap-6
          md:grid-cols-2
        ">



          {researchItems.map((item,index)=>(


            <Reveal

              key={item.number}

              delay={index * 0.1}

            >


              <GlassCard>


                <div className="
                  flex
                  items-start
                  justify-between
                ">


                  <span className="
                    text-5xl
                    font-semibold
                    text-[#D6B25E]/50
                  ">

                    {item.number}

                  </span>


                </div>




                <h3 className="
                  mt-12
                  text-3xl
                  font-semibold
                  text-[#F4F1EA]
                ">

                  {item.title}

                </h3>



                <p className="
                  mt-5
                  text-base
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