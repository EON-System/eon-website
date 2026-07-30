"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


type Brand =
  | "eon"
  | "soulmirror"
  | "futureself";


interface PageTransitionProps {

  brand?: Brand;

}



const themes = {

  eon: {

    title:"EON",

    subtitle:"Initializing Intelligence",

    color:"#D6B25E",

  },


  soulmirror: {

    title:"SOULMIRROR",

    subtitle:"Reflecting Identity",

    color:"#8B5CF6",

  },


  futureself: {

    title:"FUTURESELF",

    subtitle:"Building Tomorrow's Self",

    color:"#60A5FA",

  },


};



export function PageTransition({

  brand="eon"

}:PageTransitionProps){


  const pathname = usePathname();


  const [visible,setVisible] = useState(false);



  useEffect(()=>{


    setVisible(true);



    const timer = setTimeout(()=>{

      setVisible(false);

    },1200);



    return ()=>clearTimeout(timer);



  },[pathname]);





  const theme = themes[brand];





  return (

    <AnimatePresence>


      {visible && (

        <motion.div

          initial={{
            opacity:0,
          }}

          animate={{
            opacity:1,
          }}

          exit={{
            opacity:0,
          }}

          transition={{
            duration:0.5,
          }}

          className="
            fixed
            inset-0
            z-[200]
            flex
            items-center
            justify-center
            bg-[#050505]
          "

        >




          <div
            className="
              flex
              flex-col
              items-center
            "
          >





            <motion.h1

              initial={{
                opacity:0,
                scale:0.9,
                letterSpacing:"0.1em",
              }}


              animate={{
                opacity:1,
                scale:1,
                letterSpacing:"0.35em",
              }}


              transition={{
                duration:1,
              }}


              style={{
                color:theme.color,
              }}


              className="
                text-5xl
                font-semibold
                md:text-7xl
              "

            >

              {theme.title}


            </motion.h1>






            <motion.p

              initial={{
                opacity:0,
                y:20,
              }}


              animate={{
                opacity:1,
                y:0,
              }}


              transition={{
                delay:0.5,
                duration:0.8,
              }}


              className="
                mt-8
                text-xs
                uppercase
                tracking-[0.6em]
                text-white/40
              "

            >

              {theme.subtitle}


            </motion.p>







            <motion.div

              initial={{
                width:0,
              }}

              animate={{
                width:120,
              }}

              transition={{
                delay:0.8,
                duration:1,
              }}

              style={{
                backgroundColor:theme.color,
              }}

              className="
                mt-10
                h-px
              "

            />





          </div>





        </motion.div>

      )}


    </AnimatePresence>

  );

}