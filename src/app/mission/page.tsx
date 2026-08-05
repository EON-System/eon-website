import type { Metadata } from "next";

import MissionContent from "./mission-content";


export const metadata: Metadata = {

  title:
    "Mission — Building AI With Purpose | EON AI",

  description:
    "Discover the mission of EON AI to build personal intelligence systems designed around memory, identity and human potential.",

  openGraph:{

    title:
      "Mission | EON AI",

    description:
      "Creating AI companions that evolve with humanity.",

    type:
      "website",

  },

  twitter:{

    card:
      "summary_large_image",

    title:
      "Mission | EON AI",

    description:
      "Building personal intelligence with purpose.",

  },

};


export default function MissionPage() {

  return <MissionContent />;

}