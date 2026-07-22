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


      {/* Deep golden aura */}

      <motion.div

        animate={{
          scale:[1,1.2,1],
          opacity:[0.25,0.5,0.25]
        }}

        transition={{
          duration:7,
          repeat:Infinity,
          ease:"easeInOut"
        }}

        className="
          absolute
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#D6B25E]/20
          blur-[130px]
        "

      />



      {/* Outer ring */}

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
          h-[430px]
          w-[430px]
          rounded-full
          border
          border-[#D6B25E]/50
          shadow-[0_0_90px_rgba(214,178,94,0.35)]
        "

      />



      {/* Outer ring glow */}

      <motion.div

        animate={{
          opacity:[0.2,0.55,0.2]
        }}

        transition={{
          duration:5,
          repeat:Infinity
        }}

        className="
          absolute
          h-[430px]
          w-[430px]
          rounded-full
          border
          border-[#D6B25E]/30
          blur-[8px]
        "

      />



      {/* Inner ring */}

      <motion.div

        animate={{
          rotate:-360
        }}

        transition={{
          duration:30,
          repeat:Infinity,
          ease:"linear"
        }}

        className="
          absolute
          h-[250px]
          w-[250px]
          rounded-full
          border
          border-[#D6B25E]
          shadow-[0_0_70px_rgba(214,178,94,0.65)]
        "

      />



      {/* Inner glow */}

      <motion.div

        animate={{
          scale:[1,1.15,1],
          opacity:[0.5,0.9,0.5]
        }}

        transition={{
          duration:4,
          repeat:Infinity,
          ease:"easeInOut"
        }}

        className="
          absolute
          h-[250px]
          w-[250px]
          rounded-full
          border
          border-[#D6B25E]/40
          blur-[15px]
        "

      />



      {/* Small center light */}

      <div className="
        h-3
        w-3
        rounded-full
        bg-[#F4F1EA]
        shadow-[0_0_50px_20px_rgba(214,178,94,0.8)]
      "/>


    </div>

  );

}