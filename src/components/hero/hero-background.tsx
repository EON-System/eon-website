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


      {/* Main golden atmosphere */}

      <motion.div

        animate={{

          scale:[1,1.15,1],

          opacity:[0.25,0.4,0.25],

        }}

        transition={{

          duration:10,

          repeat:Infinity,

          ease:"easeInOut",

        }}

        className="
          absolute
          left-[60%]
          top-[40%]
          h-[600px]
          w-[600px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D6B25E]/10
          blur-[140px]
        "

      />



      {/* Secondary light */}

      <motion.div

        animate={{

          x:[0,40,0],

          y:[0,-30,0],

        }}

        transition={{

          duration:14,

          repeat:Infinity,

          ease:"easeInOut",

        }}

        className="
          absolute
          right-[-200px]
          top-[20%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-white/[0.03]
          blur-[120px]
        "

      />



      {/* subtle grid */}

      <div

        className="
          absolute
          inset-0
          opacity-[0.035]

          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]

          bg-[size:80px_80px]
        "

      />



      {/* dark overlay */}

      <div

        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-transparent
          via-[#050505]/40
          to-[#050505]
        "

      />


    </div>

  );

}