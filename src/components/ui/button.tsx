import Link from "next/link";
import clsx from "clsx";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-medium transition-all duration-300",
        variant === "primary"
          ? "bg-[#D6B25E] text-black hover:scale-105"
          : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
      )}
    >
      {children}
    </Link>
  );
}