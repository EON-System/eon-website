"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


export function PageTransition() {


  const pathname = usePathname();

  const [visible, setVisible] = useState(false);



  useEffect(() => {


    setVisible(true);


    const timer = setTimeout(() => {

      setVisible(false);

    }, 4500);



    return () => clearTimeout(timer);


  }, [pathname]);





  return (


    <AnimatePresence>


      {visible && (


        <motion.div


          initial={{
            opacity:0,
          }}


          animate={{
            opacity:1,
          }}


          exit={{
            opacity:0,
          }}


          transition={{
            duration:1.2,
            ease:"easeInOut",
          }}



          className="
            fixed
            inset-0
            z-[200]
            flex
            items-center
            justify-center
            overflow-hidden
            bg-[#050505]
          "


        >





          {/* Ambient gold energy */}


          <motion.div


            animate={{

              scale:[
                1,
                1.25,
                1
              ],

              opacity:[
                0.08,
                0.25,
                0.08
              ]

            }}


            transition={{

              duration:6,

              repeat:Infinity,

              ease:"easeInOut"

            }}



            className="
              absolute
              h-[500px]
              w-[500px]
              rounded-full
              bg-[#D6B25E]
              blur-[180px]
            "


          />








          <div
            className="
              relative
              flex
              flex-col
              items-center
            "
          >








            {/* EON Logo */}


            <motion.h1


              initial={{

                opacity:0,

                scale:0.8,

                letterSpacing:"0.15em"

              }}



              animate={{

                opacity:1,

                scale:1,

                letterSpacing:"0.55em"

              }}



              transition={{

                duration:2,

                ease:"easeOut"

              }}



              style={{

                textShadow:
                "0 0 80px rgba(214,178,94,0.3)"

              }}



              className="
                text-8xl
                font-semibold
                text-[#F4F1EA]
                md:text-[10rem]
              "


            >

              EON


            </motion.h1>









            {/* Subtitle */}



            <motion.p


              initial={{

                opacity:0,

                y:30

              }}



              animate={{

                opacity:1,

                y:0

              }}



              transition={{

                delay:1.3,

                duration:1.5

              }}



              className="
                mt-10
                text-sm
                uppercase
                tracking-[0.7em]
                text-[#D6B25E]
              "


            >

              Initializing Intelligence


            </motion.p>









            {/* Energy point */}



            <motion.div


              animate={{

                opacity:[
                  0.2,
                  1,
                  0.2
                ],


                scale:[
                  1,
                  1.8,
                  1
                ]

              }}



              transition={{

                duration:3,

                repeat:Infinity,

                ease:"easeInOut"

              }}



              className="
                mt-12
                h-2
                w-2
                rounded-full
                bg-[#D6B25E]
                shadow-[0_0_60px_#D6B25E]
              "


            />







          </div>







        </motion.div>


      )}



    </AnimatePresence>


  );


}