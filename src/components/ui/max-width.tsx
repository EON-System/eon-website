import { cn } from "@/lib/utils";

type MaxWidthProps = {
  children: React.ReactNode;

  size?: "sm" | "md" | "lg";

  className?: string;
};

export function MaxWidth({
  children,
  size = "lg",
  className,
}: MaxWidthProps) {

  const widths = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
  };

  return (
    <div
      className={cn(
        "mx-auto",
        widths[size],
        className
      )}
    >
      {children}
    </div>
  );
}