"use client";

import { motion } from "framer-motion";


interface CinematicSectionProps {
  children: React.ReactNode;
  className?: string;
}


export function CinematicSection({
  children,
  className = "",
}: CinematicSectionProps) {

  return (
    <motion.section

      initial={{
        opacity:0,
        y:100,
        scale:0.96,
        filter:"blur(15px)",
      }}

      whileInView={{
        opacity:1,
        y:0,
        scale:1,
        filter:"blur(0px)",
      }}

      viewport={{
        once:true,
        amount:0.2,
      }}

      transition={{
        duration:1.4,
        ease:[0.16,1,0.3,1],
      }}

      className={className}

    >

      {children}

    </motion.section>
  );
}