"use client";


import { AnimatePresence, motion } from "framer-motion";

import { usePathname } from "next/navigation";

import { useEffect, useRef, useState } from "react";



export function PageTransition(){


  const pathname = usePathname();


  const mounted = useRef(false);


  const [visible,setVisible] = useState(false);




  useEffect(()=>{


    // skip first website load

    if(!mounted.current){

      mounted.current = true;

      return;

    }




    setVisible(true);



    const timer = setTimeout(()=>{


      setVisible(false);


    },4500);




    return ()=>clearTimeout(timer);



  },[pathname]);






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
          }}



          className="
            fixed
            inset-0
            z-[200]
            flex
            items-center
            justify-center
            bg-[#050505]
          "


        >





          <div
            className="
              flex
              flex-col
              items-center
            "
          >






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







            <motion.p


              initial={{

                opacity:0,

                y:20

              }}



              animate={{

                opacity:1,

                y:0

              }}



              transition={{

                delay:1.2,

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







            <motion.div


              animate={{

                opacity:[
                  0.2,
                  1,
                  0.2
                ],

                scale:[
                  1,
                  1.6,
                  1
                ]

              }}



              transition={{

                duration:3,

                repeat:Infinity

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