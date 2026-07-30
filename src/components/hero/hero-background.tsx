"use client";

import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div
      className="
        absolute
        inset-0
        overflow-hidden
        pointer-events-none
      "
    >

      {/* Deep black cinematic base */}
      <div className="absolute inset-0 bg-[#050505]" />


      {/* Dark red cinematic atmosphere */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-[20%]
          top-[15%]
          h-[650px]
          w-[900px]
          rounded-[50%]
          bg-[#5B0F0F]/40
          blur-[180px]
        "
      />


      {/* Golden EON atmosphere */}
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.12, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[10%]
          top-[25%]
          h-[550px]
          w-[700px]
          rounded-[50%]
          bg-[#D6B25E]/20
          blur-[170px]
        "
      />


      {/* Soft warm shadow */}
      <motion.div
        animate={{
          x: [0, -70, 0],
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-250px]
          left-[35%]
          h-[500px]
          w-[900px]
          rounded-[50%]
          bg-[#7A1F1F]
          blur-[220px]
        "
      />


      {/* Light ribbon 01 */}
      <motion.div
        animate={{
          x: [0, 120, 0],
          rotate: [12, 18, 12],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-20%]
          top-[35%]
          h-px
          w-[900px]
          bg-gradient-to-r
          from-transparent
          via-[#D6B25E]/20
          to-transparent
          blur-[1px]
        "
      />


      {/* Light ribbon 02 */}
      <motion.div
        animate={{
          x: [0, -160, 0],
          rotate: [-8, -14, -8],
        }}
        transition={{
          duration: 55,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-15%]
          top-[55%]
          h-px
          w-[1100px]
          bg-gradient-to-r
          from-transparent
          via-white/[0.08]
          to-transparent
          blur-[1px]
        "
      />


      {/* Light ribbon 03 */}
      <motion.div
        animate={{
          x: [0, 100, 0],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[15%]
          bottom-[25%]
          h-px
          w-[700px]
          bg-gradient-to-r
          from-transparent
          via-[#D6B25E]/10
          to-transparent
        "
      />


      {/* Cinematic vignette */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.75)_100%)]
        "
      />


      {/* Bottom cinematic fade */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-transparent
          via-transparent
          to-[#050505]
        "
      />


      {/* Fine noise */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.025]
        "
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

    </div>
  );
}