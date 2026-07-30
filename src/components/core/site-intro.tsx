"use client";

import { usePathname } from "next/navigation";
import { EonIntro } from "./eon-intro";


export function SiteIntro(){

  const pathname = usePathname();


  if(pathname !== "/"){
    return null;
  }


  return <EonIntro />;

}