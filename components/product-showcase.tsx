"use client";

import Link from "next/link";
import { motion } from "framer-motion";


const products = [
  {
    name: "SoulMirror AI",
    subtitle: "Understand yourself.",
    description:
      "An AI companion for self-discovery, reflection and understanding your inner world.",
    href: "/products/soulmirror",
    accent: "from-[#D6B25E]/30",
  },
  {
    name: "FutureSelf AI",
    subtitle: "Meet your future.",
    description:
      "Explore possibilities, decisions and the person you can become.",
    href: "/products/futureself",
    accent: "from-[#8B5CF6]/30",
  },
];


export function ProductShowcase() {
  return (
    <section
      className="
        relative
        mx-auto
        max-w-7xl
        px-6
        py-32
      "
    >


      {/* Header */}

      <motion.div
        initial={{
          opacity:0,
          y:40,
        }}
        whileInView={{
          opacity:1,
          y:0,
        }}
        viewport={{
          once:true,
        }}
        transition={{
          duration:0.8,
        }}
        className="
          mb-20
          max-w-3xl
        "
      >

        <p
          className="
            mb-6
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
            text-4xl
            font-medium
            leading-tight
            tracking-tight
            md:text-7xl
          "
        >
          Intelligence systems
          designed around you.
        </h2>


      </motion.div>




      {/* Products */}

      <div
        className="
          grid
          gap-8
          md:grid-cols-2
        "
      >

        {products.map((product,index)=>(

          <motion.div
            key={product.name}
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
              duration:0.8,
              delay:index*0.15,
            }}
          >

            <Link
              href={product.href}
              className="
                group
                relative
                block
                min-h-[520px]
                overflow-hidden
                rounded-[40px]
                border
                border-white/10
                bg-white/[0.03]
                p-10
                backdrop-blur-xl
                transition
                duration-500
                hover:border-white/20
              "
            >


              {/* Glow */}

              <div
                className={`
                  absolute
                  -right-32
                  -top-32
                  h-[450px]
                  w-[450px]
                  rounded-full
                  bg-gradient-to-br
                  ${product.accent}
                  to-transparent
                  opacity-40
                  blur-[120px]
                  transition
                  duration-700
                  group-hover:scale-125
                `}
              />



              {/* Content */}

              <div
                className="
                  relative
                  flex
                  h-full
                  flex-col
                  justify-between
                "
              >

                <div>

                  <p
                    className="
                      text-sm
                      uppercase
                      tracking-[0.35em]
                      text-white/40
                    "
                  >
                    Product
                  </p>


                  <h3
                    className="
                      mt-8
                      text-4xl
                      font-medium
                      md:text-5xl
                    "
                  >
                    {product.name}
                  </h3>


                  <p
                    className="
                      mt-6
                      text-xl
                      text-[#D6B25E]
                    "
                  >
                    {product.subtitle}
                  </p>


                  <p
                    className="
                      mt-6
                      max-w-md
                      leading-7
                      text-white/50
                    "
                  >
                    {product.description}
                  </p>

                </div>



                <div
                  className="
                    mt-12
                    flex
                    items-center
                    gap-3
                    text-sm
                    uppercase
                    tracking-[0.3em]
                    text-white/50
                    transition
                    group-hover:text-white
                  "
                >
                  Explore

                  <span>
                    →
                  </span>

                </div>


              </div>


            </Link>


          </motion.div>

        ))}


      </div>


    </section>
  );
}