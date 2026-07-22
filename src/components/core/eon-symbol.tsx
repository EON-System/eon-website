"use client";

import { motion } from "framer-motion";


export function EonSymbol() {

  return (

    <div className="
      relative
      flex
      h-[520px]
      w-[520px]
      items-center
      justify-center
    ">


      {/* Golden atmosphere */}

      <motion.div

        animate={{
          scale:[1,1.15,1],
          opacity:[0.25,0.45,0.25]
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
          blur-[120px]
        "

      />



      {/* AI Core */}

      <motion.div

        animate={{
          rotate:360
        }}

        transition={{
          duration:45,
          repeat:Infinity,
          ease:"linear"
        }}

        className="
          absolute
          h-72
          w-72
          rounded-full
          border
          border-[#D6B25E]/30
        "

      />



      <motion.div

        animate={{
          rotate:-360
        }}

        transition={{
          duration:60,
          repeat:Infinity,
          ease:"linear"
        }}

        className="
          absolute
          h-96
          w-96
          rounded-full
          border
          border-white/10
        "

      />



      {/* Light rings */}

      <svg

        viewBox="0 0 500 500"

        className="
          absolute
          h-full
          w-full
        "

      >

        <motion.path

          d="
          M250 80
          C390 120 420 260 300 380
          C180 460 70 350 100 220
          C120 130 180 80 250 80
          "

          fill="none"

          stroke="#D6B25E"

          strokeOpacity="0.45"

          strokeWidth="2"

          animate={{
            rotate:360
          }}

          transition={{
            duration:40,
            repeat:Infinity,
            ease:"linear"
          }}

          style={{
            transformOrigin:"center"
          }}

        />


        <motion.path

          d="
          M250 130
          C340 160 360 270 280 330
          C190 390 120 300 150 220
          C170 170 210 140 250 130
          "

          fill="none"

          stroke="#F4F1EA"

          strokeOpacity="0.18"

          strokeWidth="1"

        />


      </svg>



      {/* Intelligence center */}

      <motion.div

        animate={{
          scale:[1,1.2,1]
        }}

        transition={{
          duration:5,
          repeat:Infinity,
          ease:"easeInOut"
        }}

        className="
          relative
          h-20
          w-20
          rounded-full
          bg-[#D6B25E]
          shadow-[0_0_100px_40px_rgba(214,178,94,0.35)]
        "

      />


    </div>

  );

}