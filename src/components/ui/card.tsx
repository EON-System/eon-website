import { GlassCard } from "./glass-card";


export function Card({

  children,

  className,

}: {

  children: React.ReactNode;

  className?: string;

}) {


  return (

    <GlassCard className={className}>

      {children}

    </GlassCard>

  );

}