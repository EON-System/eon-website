import { cn } from "@/lib/utils";


type CardProps = {
  children: React.ReactNode;

  className?: string;

  hover?: boolean;
};


export function Card({
  children,
  className,
  hover = true,
}: CardProps) {

  return (
    <div
      className={cn(
        "rounded-[36px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl",

        hover &&
          "transition duration-500 hover:border-[#D6B25E]/30 hover:bg-white/[0.05]",

        className
      )}
    >

      {children}

    </div>
  );
}