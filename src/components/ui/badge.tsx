import { cn } from "@/lib/utils";


type BadgeProps = {
  children: React.ReactNode;

  className?: string;
};


export function Badge({
  children,
  className,
}: BadgeProps) {

  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-[#D6B25E]/30 bg-[#D6B25E]/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[#D6B25E]",
        className
      )}
    >
      {children}
    </span>
  );
}