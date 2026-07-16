import { ReactNode } from "react";
import clsx from "clsx";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export function Section({
  children,
  id,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        "relative py-32 md:py-40",
        className
      )}
    >
      {children}
    </section>
  );
}