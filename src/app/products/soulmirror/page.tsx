import Link from "next/link";

export default function SoulMirrorPage() {
  return (
    <main className="min-h-screen px-6 pt-40">

      <div className="mx-auto max-w-6xl">

        <span className="text-xs uppercase tracking-[0.4em] text-[#D6B25E]">
          EON AI Product
        </span>


        <h1 className="mt-8 text-6xl font-semibold md:text-8xl">
          SoulMirror AI
        </h1>


        <p className="mt-8 max-w-3xl text-xl leading-9 text-white/60">
          A personal AI companion designed to help you
          explore your identity, emotions, dreams and
          personal growth.
        </p>


        <div className="mt-12 rounded-[40px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">

          <h2 className="text-3xl font-semibold">
            Understand yourself deeper.
          </h2>


          <p className="mt-5 text-white/60">
            SoulMirror combines artificial intelligence
            and self-reflection to create a new type
            of personal experience.
          </p>

        </div>


        <Link
          href="/"
          className="mt-12 inline-flex rounded-full bg-[#D6B25E] px-8 py-4 text-black"
        >
          Back to EON AI
        </Link>


      </div>

    </main>
  );
}