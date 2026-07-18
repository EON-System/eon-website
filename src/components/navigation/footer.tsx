import Link from "next/link";

import { siteConfig } from "@/config/site";


export function Footer() {


  return (

    <footer className="
      border-t
      border-white/10
      bg-[#050505]
      py-16
    ">


      <div className="
        mx-auto
        max-w-6xl
        px-6
      ">


        <div className="
          grid
          gap-12
          md:grid-cols-3
        ">



          {/* Brand */}

          <div>


            <Link

              href="/"

              className="
                text-xl
                font-semibold
                tracking-[0.3em]
                text-[#F4F1EA]
              "

            >

              EON AI

            </Link>



            <p className="
              mt-6
              max-w-xs
              text-sm
              leading-7
              text-white/40
            ">

              Building personal intelligence
              systems for the next era of humanity.

            </p>


          </div>





          {/* Navigation */}

          <div>


            <h3 className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-[#D6B25E]
            ">

              Explore

            </h3>



            <div className="
              mt-6
              flex
              flex-col
              gap-4
            ">


              {siteConfig.navigation.map((item)=>(


                <Link

                  key={item.href}

                  href={item.href}

                  className="
                    text-sm
                    text-white/50
                    transition

                    hover:text-white
                  "

                >

                  {item.name}

                </Link>


              ))}


            </div>


          </div>





          {/* Company */}

          <div>


            <h3 className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-[#D6B25E]
            ">

              Company

            </h3>



            <p className="
              mt-6
              text-sm
              leading-7
              text-white/40
            ">

              © {new Date().getFullYear()} EON AI.
              All rights reserved.

            </p>


          </div>



        </div>





        <div className="
          mt-16
          border-t
          border-white/10
          pt-8
          text-xs
          uppercase
          tracking-[0.3em]
          text-white/30
        ">


          Intelligence beyond imagination.


        </div>


      </div>


    </footer>

  );

}