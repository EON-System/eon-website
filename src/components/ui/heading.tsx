import { cn } from "@/lib/utils";


type HeadingProps = {
  children: React.ReactNode;

  level?: "hero" | "section" | "sub";

  className?: string;
};


export function Heading({
  children,
  level = "section",
  className,
}: HeadingProps) {


  const styles = {
    hero:
      "text-6xl leading-[1.05] font-semibold tracking-tight md:text-8xl",

    section:
      "text-5xl leading-tight font-semibold tracking-tight md:text-7xl",

    sub:
      "text-2xl leading-tight font-semibold tracking-tight md:text-4xl",
  };


  return (
    <h2
      className={cn(
        styles[level],
        className
      )}
    >
      {children}
    </h2>
  );
}