import Link from "next/link";
import { cn } from "@/lib/utils";


interface ButtonProps {

  children: React.ReactNode;

  href?: string;

  variant?: "primary" | "secondary";

  className?: string;

  type?: "button" | "submit" | "reset";

  onClick?: () => void;

}



export function Button({

  children,

  href,

  variant = "primary",

  className,

  type = "button",

  onClick,

}: ButtonProps) {


  const buttonStyles = cn(

    `
    group
    relative
    inline-flex
    items-center
    justify-center
    overflow-hidden
    rounded-2xl
    px-8
    py-4
    text-sm
    font-medium
    transition-all
    duration-500
    backdrop-blur-xl
    `,


    variant === "primary" && `

      border
      border-[#D6B25E]/40

      bg-black/40

      text-[#F4F1EA]


      hover:border-[#D6B25E]


      hover:shadow-[0_0_45px_rgba(214,178,94,0.25)]

    `,


    variant === "secondary" && `

      border
      border-white/10

      bg-white/[0.03]

      text-white/70


      hover:bg-white/[0.08]

      hover:text-white

    `,


    className

  );



  const content = (

    <>

      <span className="
        relative
        z-10
      ">

        {children}

      </span>



      <span

        className="
        absolute
        inset-0
        translate-y-full
        bg-[#D6B25E]/10
        transition-transform
        duration-500

        group-hover:translate-y-0
        "

      />



    </>

  );



  if (href) {

    return (

      <Link

        href={href}

        className={buttonStyles}

      >

        {content}

      </Link>

    );

  }



  return (

    <button

      type={type}

      onClick={onClick}

      className={buttonStyles}

    >

      {content}

    </button>

  );

}