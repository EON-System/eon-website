"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


export function PageTransition(){


  const pathname = usePathname();


  const [visible,setVisible] = useState(false);



  useEffect(()=>{


    setVisible(true);


    const timer = setTimeout(()=>{

      setVisible(false);

    },2500);



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
            duration:0.8,
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
                scale:0.85,
                letterSpacing:"0.05em",
              }}


              animate={{
                opacity:1,
                scale:1,
                letterSpacing:"0.35em",
              }}


              transition={{
                duration:1.5,
                ease:"easeOut",
              }}


              className="
                text-6xl
                font-semibold
                text-[#F4F1EA]
                md:text-7xl
              "

            >

              EON


            </motion.h1>






            <motion.p


              initial={{
                opacity:0,
                y:20,
              }}


              animate={{
                opacity:1,
                y:0,
              }}


              transition={{
                delay:0.8,
                duration:1,
              }}


              className="
                mt-8
                text-sm
                uppercase
                tracking-[0.55em]
                text-[#D6B25E]
              "

            >

              Initializing Intelligence


            </motion.p>





            <motion.div

              animate={{

                opacity:[
                  0.2,
                  0.8,
                  0.2
                ]

              }}

              transition={{

                duration:2,
                repeat:Infinity,

              }}

              className="
                mt-10
                h-1
                w-1
                rounded-full
                bg-[#D6B25E]
                shadow-[0_0_40px_#D6B25E]
              "

            />




          </div>




        </motion.div>


      )}


    </AnimatePresence>

  );

}