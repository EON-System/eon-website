"use client";

import { motion } from "framer-motion";


export function EonCore() {

  return (

    <div className="relative h-[420px] w-[420px]">

      {[0,1,2,3,4,5].map((item)=>(

        <motion.div

          key={item}

          animate={{
            rotate: 360,
          }}

          transition={{
            duration: 20 + item * 3,
            repeat: Infinity,
            ease: "linear",
          }}

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
          "

          style={{
            transform:
              `rotate(${item * 30}deg) translateY(${item * 8}px)`
          }}

        />

      ))}

    </div>

  );
}