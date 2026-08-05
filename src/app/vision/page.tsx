import type { Metadata } from "next";

import VisionContent from "./vision-content";


export const metadata: Metadata = {

  title:
    "Vision — The Future of Personal Intelligence | EON AI",


  description:
    "Discover EON AI's vision for a future where artificial intelligence becomes a personal companion designed around memory, identity and human potential.",


  openGraph:{

    title:
      "Vision | EON AI",


    description:
      "Building the next era of personal intelligence.",


    type:
      "website",

  },


  twitter:{

    card:
      "summary_large_image",

    title:
      "Vision | EON AI",

    description:
      "The future of personal intelligence designed around humans.",

  },

};



export default function VisionPage(){

  return <VisionContent />;

}