"use client";

import { motion } from "framer-motion";


export function EonSymbol() {

  const rings = [0, 1, 2, 3, 4, 5];


  return (

    <div className="relative h-[360px] w-[360px]">

      {rings.map((ring) => (

        <motion.div

          key={ring}

          className="
            absolute
            left-1/2
            top-1/2
            h-[220px]
            w-[220px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-[#D6B25E]/40
            shadow-[0_0_40px_rgba(214,178,94,0.15)]
          "

          animate={{

            rotate:
              ring % 2 === 0
              ? 360
              : -360,

            scale:[
              1,
              1.03,
              1
            ]

          }}

          transition={{

            rotate:{
              duration:30 + ring * 5,
              repeat:Infinity,
              ease:"linear"
            },

            scale:{
              duration:6,
              repeat:Infinity,
              delay:ring * 0.3
            }

          }}

          style={{

            transform:
              `
              translate(-50%,-50%)
              rotate(${ring * 30}deg)
              translateY(${ring * 8}px)
              `

          }}

        />

      ))}


      <div
        className="
          absolute
          inset-0
          rounded-full
          bg-[#D6B25E]/10
          blur-3xl
        "
      />


    </div>

  );

}