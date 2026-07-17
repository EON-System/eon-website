import Link from "next/link";

export default function FutureSelfPage() {
  return (
    <main className="min-h-screen px-6 pt-40">

      <div className="mx-auto max-w-6xl">


        <span className="text-xs uppercase tracking-[0.4em] text-[#D6B25E]">
          EON AI Product
        </span>


        <h1 className="mt-8 text-6xl font-semibold md:text-8xl">
          FutureSelf AI
        </h1>


        <p className="mt-8 max-w-3xl text-xl leading-9 text-white/60">
          A personal AI companion that helps you imagine,
          design and build the future version of yourself.
        </p>



        <div className="mt-12 grid gap-6 md:grid-cols-3">


          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">

            <h3 className="text-2xl font-semibold">
              Future Vision
            </h3>

            <p className="mt-4 text-white/60">
              Explore possible paths and understand where
              your decisions can lead.
            </p>

          </div>



          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">

            <h3 className="text-2xl font-semibold">
              Personal Growth
            </h3>

            <p className="mt-4 text-white/60">
              Build habits, goals and strategies with
              an intelligent companion.
            </p>

          </div>



          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">

            <h3 className="text-2xl font-semibold">
              Life Simulation
            </h3>

            <p className="mt-4 text-white/60">
              Explore different versions of your future
              and make better decisions today.
            </p>

          </div>


        </div>



        <div className="mt-12 rounded-[40px] border border-[#D6B25E]/20 bg-[#D6B25E]/5 p-10">

          <h2 className="text-3xl font-semibold">
            Your future is not predicted.
            It is created.
          </h2>

          <p className="mt-5 max-w-2xl text-white/60">
            FutureSelf AI helps people transform
            possibilities into intentional action.
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