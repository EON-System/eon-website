import { cn } from "@/lib/utils";

type GridProps = {
  children: React.ReactNode;

  cols?: 1 | 2 | 3 | 4;

  className?: string;
};

export function Grid({
  children,
  cols = 3,
  className,
}: GridProps) {
  const grid = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 xl:grid-cols-4",
  };

  return (
    <div
      className={cn(
        "grid gap-6",
        grid[cols],
        className
      )}
    >
      {children}
    </div>
  );
}