"use client";


import { motion } from "framer-motion";



export function ScaleHover({

  children,

}: {

  children: React.ReactNode;

}) {


  return (

    <motion.div


      whileHover={{

        scale:1.03,

      }}


      transition={{

        duration:0.5,

      }}


    >

      {children}


    </motion.div>

  );

}