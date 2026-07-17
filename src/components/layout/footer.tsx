import Link from "next/link";

const products = [
  {
    name: "SoulMirror AI",
    href: "/products/soulmirror",
  },
  {
    name: "FutureSelf AI",
    href: "/products/futureself",
  },
];

const company = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Technology",
    href: "#technology",
  },
  {
    name: "Mission",
    href: "#mission",
  },
];


export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-16">

      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-3 lg:px-8">

        {/* Brand */}
        <div>
          <Link
            href="/"
            className="text-xl font-semibold tracking-[0.25em]"
          >
            EON AI
          </Link>

          <p className="mt-5 max-w-sm text-sm leading-7 text-white/50">
            Creating the world's best personal AI products.
            Building intelligent companions for human evolution.
          </p>
        </div>


        {/* Products */}
        <div>
          <h3 className="mb-5 text-sm font-medium text-white">
            Products
          </h3>

          <div className="flex flex-col gap-3">
            {products.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-white/50 transition hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>


        {/* Company */}
        <div>
          <h3 className="mb-5 text-sm font-medium text-white">
            Company
          </h3>

          <div className="flex flex-col gap-3">
            {company.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-white/50 transition hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

      </div>


      <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-4 border-t border-white/10 px-6 pt-8 text-sm text-white/40 md:flex-row md:items-center md:justify-between lg:px-8">

        <p>
          © {new Date().getFullYear()} EON AI. All rights reserved.
        </p>

        <p>
          Personal Intelligence Company
        </p>

      </div>

    </footer>
  );
}