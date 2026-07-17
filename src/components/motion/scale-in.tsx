"use client";

import { motion } from "framer-motion";


type ScaleInProps = {
  children: React.ReactNode;

  delay?: number;

  className?: string;
};


export function ScaleIn({
  children,
  delay = 0,
  className,
}: ScaleInProps) {

  return (
    <motion.div

      initial={{
        opacity: 0,
        scale: 0.85,
      }}

      whileInView={{
        opacity: 1,
        scale: 1,
      }}

      viewport={{
        once: true,
        margin: "-100px",
      }}

      transition={{
        duration: 1,
        delay,
        ease: "easeOut",
      }}

      className={className}
    >

      {children}

    </motion.div>
  );
}