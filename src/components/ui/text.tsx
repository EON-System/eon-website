import { cn } from "@/lib/utils";


type TextProps = {
  children: React.ReactNode;

  variant?: "lead" | "body" | "small";

  className?: string;
};


export function Text({
  children,
  variant = "body",
  className,
}: TextProps) {


  const styles = {

    lead:
      "text-xl leading-9 text-white/60 md:text-2xl",

    body:
      "text-base leading-8 text-white/50 md:text-lg",

    small:
      "text-sm leading-6 text-white/40",

  };


  return (
    <p
      className={cn(
        styles[variant],
        className
      )}
    >
      {children}
    </p>
  );
}