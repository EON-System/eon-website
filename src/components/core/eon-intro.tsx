"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { EonSymbol } from "./eon-symbol";


export function EonIntro() {

  const [visible, setVisible] = useState(true);


  useEffect(() => {

    const timer = setTimeout(() => {

      setVisible(false);

    }, 3500);


    return () => clearTimeout(timer);

  }, []);



  if (!visible) return null;



  return (

    <motion.div

      initial={{
        opacity:1
      }}

      animate={{
        opacity:0
      }}

      transition={{
        delay:3,
        duration:0.8
      }}

      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-[#050505]
      "

    >


      <div className="flex flex-col items-center">


        <motion.div

          initial={{
            scale:0.5,
            opacity:0
          }}

          animate={{
            scale:1,
            opacity:1
          }}

          transition={{
            duration:1.5,
            ease:"easeOut"
          }}

        >

          <EonSymbol />

        </motion.div>



        <motion.h1

          initial={{
            opacity:0,
            y:20
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            delay:1,
            duration:1
          }}

          className="
            mt-10
            text-5xl
            font-semibold
            tracking-[0.2em]
            text-[#F4F1EA]
          "

        >

          EON AI

        </motion.h1>



        <motion.p

          initial={{
            opacity:0
          }}

          animate={{
            opacity:1
          }}

          transition={{
            delay:1.8,
            duration:1
          }}

          className="
            mt-6
            text-center
            text-sm
            uppercase
            tracking-[0.5em]
            text-[#D6B25E]
          "

        >

          Building AI companions
          for human evolution

        </motion.p>



      </div>


    </motion.div>

  );

}