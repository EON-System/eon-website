"use client";

import { motion } from "framer-motion";


interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}


export function Reveal({
  children,
  className = "",
  delay = 0,
}: RevealProps) {

  return (
    <motion.div

      initial={{
        opacity:0,
        y:80,
        scale:0.96,
        filter:"blur(12px)",
      }}

      whileInView={{
        opacity:1,
        y:0,
        scale:1,
        filter:"blur(0px)",
      }}

      viewport={{
        once:true,
        amount:0.3,
      }}

      transition={{
        duration:1.2,
        delay,
        ease:[0.16,1,0.3,1],
      }}

      className={className}

    >

      {children}

    </motion.div>
  );
}