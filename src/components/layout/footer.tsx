"use client";

import Link from "next/link";
import { motion } from "framer-motion";


const products = [
  {
    name:"SoulMirror AI",
    href:"/products/soulmirror",
  },
  {
    name:"FutureSelf",
    href:"/products/futureself",
  },
];


const company = [
  {
    name:"Vision",
    href:"/vision",
  },
  {
    name:"Mission",
    href:"/mission",
  },
  {
    name:"Research",
    href:"/research",
  },
  {
    name:"Contact",
    href:"/contact",
  },
];


const resources = [
  {
    name:"Privacy",
    href:"/privacy",
  },
  {
    name:"Terms",
    href:"/terms",
  },
  {
    name:"Security",
    href:"/security",
  },
  {
    name:"Cookies",
    href:"/cookies",
  },
];


const socials = [
  {
    name:"X",
    href:"https://x.com/eon_ai_inc?s=11",
  },
  {
    name:"Instagram",
    href:"https://www.instagram.com/eon_ai_inc",
  },
  {
    name:"LinkedIn",
    href:"https://www.linkedin.com/in/eon-ai-a2a9a4422",
  },
  {
    name:"TikTok",
    href:"https://www.tiktok.com/@eon_ai1",
  },
];



export function Footer(){


return (

<footer

className="
relative
overflow-hidden
border-t
border-white/10
px-6
py-24

md:py-32
"

>


<div

className="
absolute
left-1/2
top-0
h-[350px]
w-[600px]
-translate-x-1/2
rounded-full
bg-[#D6B25E]/10
blur-[180px]
"

/>



<motion.div

initial={{
opacity:0,
y:40,
}}

whileInView={{
opacity:1,
y:0,
}}

viewport={{
once:true,
}}

transition={{
duration:1,
}}

className="
relative
mx-auto
max-w-7xl
"

>



{/* Brand */}

<div

className="
mb-20
mx-auto
max-w-3xl
text-center

md:mx-0
md:text-left
"

>


<Link

href="/"

className="
text-4xl
font-semibold
tracking-[0.22em]
text-[#F4F1EA]
transition-all
duration-700
hover:text-[#D6B25E]

md:text-5xl
"

>

EON AI

</Link>



<p

className="
mx-auto
mt-6
max-w-xl
text-base
leading-7
text-white/40

md:mx-0
md:mt-8
md:text-lg
md:leading-8
"

>

Building personal intelligence systems
designed around memory,
identity and human potential.

</p>


</div>







<div

className="
grid
gap-12

text-center

sm:grid-cols-2

lg:grid-cols-4
lg:text-left
"

>


<FooterColumn
title="Products"
items={products}
/>


<FooterColumn
title="Company"
items={company}
/>


<FooterColumn
title="Resources"
items={resources}
/>


<FooterColumn
title="Connect"
items={socials}
/>


</div>







<div

className="
mt-20
flex
flex-col
items-center
gap-4
border-t
border-white/10
pt-8
text-center
text-xs
uppercase
tracking-[0.3em]
text-white/30

md:flex-row
md:justify-between
"

>


<span>

© {new Date().getFullYear()} EON AI

</span>


<span>

Building the future of personal intelligence

</span>


</div>



</motion.div>


</footer>

);

}




function FooterColumn({

title,

items,

}:{

title:string;

items:{
name:string;
href:string;
}[];

}){


return (

<div>


<h3

className="
text-xs
uppercase
tracking-[0.35em]
text-[#D6B25E]
"

>

{title}

</h3>



<div

className="
mt-8
space-y-5
"

>


{items.map((item)=>(

<Link

key={item.name}

href={item.href}

className="
block
text-white/45
transition-all
duration-500
hover:text-[#D6B25E]
"

>

{item.name}

</Link>


))}


</div>


</div>

);


}