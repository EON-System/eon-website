import { cn } from "@/lib/utils";


interface GlassCardProps {

  children: React.ReactNode;

  className?: string;

}



export function GlassCard({

  children,

  className,

}: GlassCardProps) {


  return (

    <div

      className={cn(

        `
        group
        relative
        overflow-hidden

        rounded-3xl

        border
        border-white/10

        bg-white/[0.03]

        p-6

        sm:p-8

        backdrop-blur-2xl

        transition-all
        duration-700

        hover:-translate-y-2

        hover:border-[#D6B25E]/40

        hover:shadow-[0_20px_80px_rgba(214,178,94,0.12)]
        `,

        className

      )}

    >


      <div

        className="
          pointer-events-none
          absolute
          inset-0

          opacity-0

          transition
          duration-700

          group-hover:opacity-100

          bg-[radial-gradient(circle_at_top,rgba(214,178,94,0.18),transparent_60%)]
        "

      />



      <div className="
        relative
        z-10
      ">

        {children}

      </div>


    </div>

  );

}