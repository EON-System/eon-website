"use client";

import { motion } from "framer-motion";
import Link from "next/link";


const products = [
  {
    name: "SoulMirror AI",
    tagline: "Understand yourself.",
    description:
      "An AI companion designed for self-discovery, reflection and understanding your inner world.",
    features: [
      "Memory",
      "Identity",
      "Reflection",
    ],
    href: "/products/soulmirror",
    glow: "bg-[#D6B25E]/20",
  },
  {
    name: "FutureSelf AI",
    tagline: "Meet the person you can become.",
    description:
      "A personal intelligence system that helps you explore possibilities and future versions of yourself.",
    features: [
      "Vision",
      "Growth",
      "Evolution",
    ],
    href: "/products/futureself",
    glow: "bg-[#8B5CF6]/20",
  },
];


export function ProductShowcase() {

  return (

    <section
      id="products"
      className="
        relative
        mx-auto
        max-w-7xl
        px-6
        py-40
      "
    >


      {/* Header */}

      <motion.div
        initial={{
          opacity:0,
          y:50,
        }}
        whileInView={{
          opacity:1,
          y:0,
        }}
        viewport={{
          once:true,
        }}
        transition={{
          duration:1,
        }}
        className="
          max-w-4xl
        "
      >

        <p
          className="
            text-xs
            uppercase
            tracking-[0.45em]
            text-[#D6B25E]
          "
        >
          EON AI Products
        </p>


        <h2
          className="
            mt-8
            text-5xl
            font-medium
            leading-[1.05]
            tracking-tight
            md:text-8xl
          "
        >
          Intelligence
          built around humans.
        </h2>


      </motion.div>




      {/* Products */}

      <div
        className="
          mt-32
          space-y-40
        "
      >

        {products.map((product,index)=>(

          <motion.div
            key={product.name}
            initial={{
              opacity:0,
              y:100,
            }}
            whileInView={{
              opacity:1,
              y:0,
            }}
            viewport={{
              once:true,
              amount:0.25,
            }}
            transition={{
              duration:1.2,
            }}
            className="
              relative
              overflow-hidden
              rounded-[50px]
              border
              border-white/10
              bg-white/[0.025]
              p-8
              md:p-16
            "
          >


            {/* Ambient light */}

            <div
              className={`
                absolute
                -right-40
                -top-40
                h-[600px]
                w-[600px]
                rounded-full
                ${product.glow}
                blur-[160px]
              `}
            />



            <div
              className="
                relative
                grid
                gap-16
                lg:grid-cols-2
                lg:items-center
              "
            >



              {/* Text */}

              <div>


                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.4em]
                    text-white/40
                  "
                >
                  Product 0{index+1}
                </p>



                <h3
                  className="
                    mt-8
                    text-4xl
                    font-medium
                    md:text-6xl
                  "
                >
                  {product.name}
                </h3>



                <p
                  className="
                    mt-6
                    text-2xl
                    text-[#D6B25E]
                  "
                >
                  {product.tagline}
                </p>



                <p
                  className="
                    mt-8
                    max-w-lg
                    text-lg
                    leading-8
                    text-white/50
                  "
                >
                  {product.description}
                </p>



                <div
                  className="
                    mt-10
                    flex
                    flex-wrap
                    gap-3
                  "
                >

                  {product.features.map((item)=>(

                    <span
                      key={item}
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.03]
                        px-5
                        py-2
                        text-sm
                        text-white/60
                      "
                    >
                      {item}
                    </span>

                  ))}

                </div>



                <Link
                  href={product.href}
                  className="
                    mt-12
                    inline-flex
                    items-center
                    gap-3
                    text-sm
                    uppercase
                    tracking-[0.3em]
                    text-white/70
                    transition
                    hover:text-[#D6B25E]
                  "
                >

                  Explore product →

                </Link>


              </div>





              {/* Visual Scene */}

              <motion.div
                animate={{
                  y:[0,-15,0],
                }}
                transition={{
                  duration:8,
                  repeat:Infinity,
                  ease:"easeInOut",
                }}
                className="
                  relative
                  flex
                  aspect-square
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-black/20
                  backdrop-blur-xl
                "
              >


                <div
                  className="
                    h-40
                    w-40
                    rounded-full
                    border
                    border-[#D6B25E]/30
                    shadow-[0_0_80px_rgba(214,178,94,0.25)]
                  "
                />


              </motion.div>


            </div>


          </motion.div>

        ))}


      </div>


    </section>

  );
}