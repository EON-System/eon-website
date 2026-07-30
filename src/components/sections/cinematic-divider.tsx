"use client";

import { motion } from "framer-motion";


export function CinematicDivider(){

return (

<div
className="
relative
h-40
overflow-hidden
"
>


<motion.div

animate={{
opacity:[0.05,0.2,0.05],
scale:[1,1.2,1],
}}

transition={{
duration:8,
repeat:Infinity,
}}

className="
absolute
left-1/2
top-1/2
h-64
w-64
-translate-x-1/2
-translate-y-1/2
rounded-full
bg-[#D6B25E]/20
blur-[120px]
"

/>


</div>

);

}