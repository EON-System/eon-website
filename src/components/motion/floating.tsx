"use client";


import { motion } from "framer-motion";



interface FloatingProps {

  children: React.ReactNode;

  className?: string;

}



export function Floating({

  children,

  className,

}: FloatingProps) {


  return (

    <motion.div


      animate={{

        y:[0,-15,0],

      }}



      transition={{

        duration:6,

        repeat:Infinity,

        ease:"easeInOut",

      }}



      className={className}


    >

      {children}


    </motion.div>

  );

}