import Link from "next/link";
import { cn } from "@/lib/utils";


type ButtonProps = {
  children: React.ReactNode;

  href?: string;

  variant?: "primary" | "glass";

  className?: string;
};


export function Button({
  children,
  href,
  variant = "primary",
  className,
}: ButtonProps) {


  const styles = cn(
    "inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-medium transition duration-300",
    
    variant === "primary" &&
      "bg-[#D6B25E] text-black hover:scale-105 hover:shadow-[0_0_40px_rgba(214,178,94,0.25)]",

    variant === "glass" &&
      "border border-white/10 bg-white/5 text-white backdrop-blur-xl hover:bg-white/10",

    className
  );


  if (href) {
    return (
      <Link
        href={href}
        className={styles}
      >
        {children}
      </Link>
    );
  }


  return (
    <button className={styles}>
      {children}
    </button>
  );
}