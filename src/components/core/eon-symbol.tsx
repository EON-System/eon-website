"use client";

import { motion } from "framer-motion";


export function EonSymbol() {

  return (

    <div className="
      relative
      flex
      h-[420px]
      w-[420px]
      items-center
      justify-center
    ">


      {/* Ambient glow */}

      <motion.div

        animate={{
          scale:[1,1.08,1],
          opacity:[0.35,0.55,0.35]
        }}

        transition={{
          duration:8,
          repeat:Infinity,
          ease:"easeInOut"
        }}

        className="
          absolute
          h-72
          w-72
          rounded-full
          bg-[#D6B25E]/20
          blur-[100px]
        "

      />



      {/* Core */}

      <motion.div

        animate={{

          rotate:[0,360]

        }}

        transition={{

          duration:40,

          repeat:Infinity,

          ease:"linear"

        }}

        className="
          relative
          h-64
          w-64
          rounded-[40px]
          border
          border-[#D6B25E]/30
          bg-white/[0.03]
          backdrop-blur-3xl
          shadow-[0_0_80px_rgba(214,178,94,0.15)]
        "

      >


        {/* Inner light */}

        <div className="
          absolute
          inset-8
          rounded-[32px]
          border
          border-white/10
          bg-gradient-to-br
          from-[#D6B25E]/20
          via-transparent
          to-transparent
        "/>



        {/* EON mark */}

        <div className="
          absolute
          inset-0
          flex
          items-center
          justify-center
        ">

          <span className="
            text-5xl
            font-semibold
            tracking-[-0.08em]
            text-[#F4F1EA]
          ">

            E

          </span>


        </div>


      </motion.div>



      {/* Orbit lines */}

      <div className="
        absolute
        h-80
        w-80
        rounded-full
        border
        border-[#D6B25E]/10
      "/>



      <div className="
        absolute
        h-96
        w-96
        rounded-full
        border
        border-white/5
      "/>


    </div>

  );

}