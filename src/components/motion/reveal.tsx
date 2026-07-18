"use client";

import { motion } from "framer-motion";

import { motionConfig } from "@/lib/motion";


interface RevealProps {

  children: React.ReactNode;

  delay?: number;

  className?: string;

}



export function Reveal({

  children,

  delay = 0,

  className,

}: RevealProps) {


  return (

    <motion.div


      initial={{

        opacity: 0,

        y: 60,

        scale: 0.96,

        filter: "blur(14px)",

      }}



      whileInView={{

        opacity: 1,

        y: 0,

        scale: 1,

        filter: "blur(0px)",

      }}



      viewport={motionConfig.viewport}



      transition={{

        ...motionConfig.transition,

        delay,

      }}



      className={className}


    >

      {children}


    </motion.div>

  );

}