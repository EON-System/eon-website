import Link from "next/link";


export default function NotFound() {

  return (
    <main className="flex min-h-screen items-center justify-center px-6">

      <div className="text-center">

        <h1 className="text-8xl font-semibold text-[#D6B25E]">
          404
        </h1>


        <p className="mt-6 text-xl text-white/60">
          Page not found.
        </p>


        <Link
          href="/"
          className="mt-10 inline-block rounded-full bg-[#D6B25E] px-8 py-4 text-black"
        >
          Return home
        </Link>


      </div>

    </main>
  );
}