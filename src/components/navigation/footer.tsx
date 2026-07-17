import Link from "next/link";

import { siteConfig } from "@/config/site";


export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">


        <div className="grid gap-12 md:grid-cols-4">


          <div className="md:col-span-2">

            <Link
              href="/"
              className="text-2xl font-semibold tracking-tight"
            >
              EON AI
            </Link>


            <p className="mt-6 max-w-md text-white/50 leading-8">
              Building personal intelligence systems
              for human evolution.
            </p>

          </div>



          <div>

            <h3 className="text-sm uppercase tracking-[0.3em] text-white/40">
              Explore
            </h3>


            <div className="mt-6 flex flex-col gap-4">

              {siteConfig.navigation.map((item) => (

                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/60 transition hover:text-white"
                >
                  {item.name}
                </Link>

              ))}

            </div>

          </div>




          <div>

            <h3 className="text-sm uppercase tracking-[0.3em] text-white/40">
              Products
            </h3>


            <div className="mt-6 flex flex-col gap-4">

              {siteConfig.products.map((product) => (

                <Link
                  key={product.name}
                  href={product.href}
                  className="text-white/60 transition hover:text-white"
                >
                  {product.name}
                </Link>

              ))}

            </div>

          </div>


        </div>



        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} EON AI. All rights reserved.
          </p>


          <p>
            Personal Intelligence Company
          </p>

        </div>


      </div>

    </footer>
  );
}