"use client";

import { motion } from "framer-motion";


export function EonSymbol() {

  return (

    <div className="
      relative
      flex
      h-[460px]
      w-[460px]
      items-center
      justify-center
    ">


      {/* Glow */}

      <motion.div

        animate={{
          opacity:[0.25,0.45,0.25],
          scale:[1,1.15,1]
        }}

        transition={{
          duration:8,
          repeat:Infinity,
          ease:"easeInOut"
        }}

        className="
          absolute
          h-80
          w-80
          rounded-full
          bg-[#D6B25E]/20
          blur-[100px]
        "

      />



      {/* Prism */}

      <motion.div

        animate={{
          rotateY:[0,360]
        }}

        transition={{
          duration:25,
          repeat:Infinity,
          ease:"linear"
        }}

        className="
          relative
          h-72
          w-56
          rounded-[32px]
          border
          border-[#D6B25E]/30
          bg-gradient-to-br
          from-white/[0.12]
          via-white/[0.03]
          to-transparent
          backdrop-blur-3xl
          shadow-[0_0_80px_rgba(214,178,94,0.18)]
        "

      >


        {/* Inner glass */}

        <div className="
          absolute
          inset-5
          rounded-[24px]
          border
          border-white/10
          bg-gradient-to-b
          from-[#D6B25E]/20
          to-transparent
        "/>



        {/* EON */}

        <div className="
          absolute
          inset-0
          flex
          flex-col
          items-center
          justify-center
        ">

          <span className="
            text-5xl
            font-semibold
            tracking-[-0.08em]
            text-[#F4F1EA]
          ">
            EON
          </span>


          <span className="
            mt-3
            text-[10px]
            uppercase
            tracking-[0.5em]
            text-[#D6B25E]
          ">
            Intelligence
          </span>


        </div>


      </motion.div>



      {/* Floating particles */}

      <div className="
        absolute
        right-24
        top-24
        h-2
        w-2
        rounded-full
        bg-[#D6B25E]
        shadow-[0_0_40px_10px_rgba(214,178,94,0.5)]
      "/>


    </div>

  );

}