import { ReactNode } from "react";
import clsx from "clsx";

interface SectionTitleProps {
  badge?: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
}

export function SectionTitle({
  badge,
  title,
  description,
  className,
}: SectionTitleProps) {
  return (
    <div className={clsx("max-w-3xl", className)}>
      {badge && (
        <span className="mb-5 inline-flex rounded-full border border-[#D6B25E]/30 bg-[#D6B25E]/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#D6B25E]">
          {badge}
        </span>
      )}

      <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-white/60">
          {description}
        </p>
      )}
    </div>
  );
}