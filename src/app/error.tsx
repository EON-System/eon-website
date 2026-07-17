"use client";


export default function Error({

  reset,

}: {

  reset: () => void;

}) {


  return (

    <div className="flex min-h-screen items-center justify-center bg-[#050505] px-6">

      <div className="text-center">


        <h2 className="text-3xl font-semibold">
          Something went wrong.
        </h2>


        <p className="mt-4 text-white/50">
          EON AI encountered an unexpected error.
        </p>


        <button

          onClick={() => reset()}

          className="mt-8 rounded-full bg-[#D6B25E] px-8 py-4 text-black"

        >
          Try again

        </button>


      </div>

    </div>

  );

}