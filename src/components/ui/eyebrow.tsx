import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: React.ReactNode;

  className?: string;
};

export function Eyebrow({
  children,
  className,
}: EyebrowProps) {
  return (
    <span
      className={cn(
        "text-xs font-medium uppercase tracking-[0.35em] text-[#D6B25E]",
        className
      )}
    >
      {children}
    </span>
  );
}