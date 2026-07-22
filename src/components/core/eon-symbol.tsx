"use client";

import { motion } from "framer-motion";


export function EonSymbol() {

  return (

    <div className="
      relative
      h-[500px]
      w-[500px]
    ">


      <motion.div

        animate={{
          rotate:360
        }}

        transition={{
          duration:60,
          repeat:Infinity,
          ease:"linear"
        }}

        className="
          absolute
          inset-20
          rounded-full
          border
          border-[#D6B25E]/20
        "

      />



      <motion.div

        animate={{
          rotate:-360
        }}

        transition={{
          duration:90,
          repeat:Infinity,
          ease:"linear"
        }}

        className="
          absolute
          inset-10
          rounded-full
          border
          border-white/10
        "

      />



      <div className="
        absolute
        inset-0
        flex
        items-center
        justify-center
      ">


        <motion.div

          animate={{
            opacity:[0.3,0.8,0.3]
          }}

          transition={{
            duration:6,
            repeat:Infinity
          }}

          className="
            h-40
            w-40
            rounded-full
            bg-[#D6B25E]/20
            blur-[80px]
          "

        />


      </div>


      <div className="
        absolute
        left-1/2
        top-1/2
        h-2
        w-2
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-[#D6B25E]
        shadow-[0_0_60px_20px_rgba(214,178,94,0.5)]
      "/>


    </div>

  );

}