"use client";

import { motion } from "framer-motion";


export function HeroBackground() {

  return (

    <div className="
      absolute
      inset-0
      overflow-hidden
      pointer-events-none
    ">


      {/* Main luxury light */}

      <motion.div

        animate={{

          scale:[1,1.15,1],

          opacity:[0.18,0.35,0.18],

        }}

        transition={{

          duration:12,

          repeat:Infinity,

          ease:"easeInOut",

        }}

        className="
          absolute
          left-[70%]
          top-[45%]
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D6B25E]/15
          blur-[180px]
        "

      />



      {/* Secondary warm shadow */}

      <motion.div

        animate={{

          x:[0,-40,0],

          y:[0,30,0],

        }}

        transition={{

          duration:18,

          repeat:Infinity,

          ease:"easeInOut",

        }}

        className="
          absolute
          right-[-250px]
          top-[10%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#7A1F1F]/10
          blur-[160px]
        "

      />



      {/* Data trajectory lines */}

      <div className="
        absolute
        right-[10%]
        top-[20%]
        h-[420px]
        w-[420px]
        rounded-full
        border
        border-[#D6B25E]/10
      " />


      <div className="
        absolute
        right-[5%]
        top-[15%]
        h-[520px]
        w-[520px]
        rounded-full
        border
        border-white/[0.06]
      " />



      {/* Thin golden signal */}

      <motion.div

        animate={{

          rotate:[0,360]

        }}

        transition={{

          duration:50,

          repeat:Infinity,

          ease:"linear"

        }}

        className="
          absolute
          right-[12%]
          top-[25%]
          h-[300px]
          w-[300px]
          rounded-full
          border
          border-[#D6B25E]/20
          border-t-transparent
        "

      />



      {/* Ambient particles */}

      <div className="
        absolute
        right-[32%]
        top-[35%]
        h-2
        w-2
        rounded-full
        bg-[#D6B25E]
        shadow-[0_0_50px_15px_rgba(214,178,94,0.5)]
      "/>



      <div className="
        absolute
        right-[18%]
        top-[65%]
        h-1
        w-1
        rounded-full
        bg-white/70
      "/>



      {/* Cinematic fade */}

      <div className="
        absolute
        inset-0
        bg-gradient-to-b
        from-transparent
        via-[#120D0A]/40
        to-[#120D0A]
      "/>


    </div>

  );

}