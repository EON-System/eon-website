import type { Metadata } from "next";

import { FutureSelfIntro } from "@/components/products/futureself-intro";


export const metadata: Metadata = {

  title:
    "FutureSelf AI — Meet Your Future Self | EON AI",

  description:
    "FutureSelf AI is an upcoming personal intelligence experience that helps you explore future possibilities, decisions and long-term personal growth.",

  openGraph:{

    title:
      "FutureSelf AI | EON AI",

    description:
      "Meet your future through personal intelligence.",

    type:"website",

  },

  twitter:{

    card:"summary_large_image",

    title:
      "FutureSelf AI | EON AI",

    description:
      "The next generation of personal intelligence is coming soon.",

  },

};


export default function FutureSelfPage(){

  return <FutureSelfIntro />;

}