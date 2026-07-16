"use client";

export function Background() {
  return (
    <>
      {/* Base */}
      <div className="fixed inset-0 -z-50 bg-[#050505]" />

      {/* Gold Glow */}
      <div className="fixed left-1/2 top-1/2 -z-40 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D6B25E]/10 blur-[180px]" />

      {/* Blue Accent */}
      <div className="fixed right-[-250px] top-[15%] -z-40 h-[500px] w-[500px] rounded-full bg-[#4F8CFF]/10 blur-[150px]" />

      {/* Bottom Glow */}
      <div className="fixed bottom-[-300px] left-1/2 -z-40 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[200px]" />

      {/* Noise */}
      <div
        className="fixed inset-0 -z-30 opacity-[0.03] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url('/textures/noise.png')",
        }}
      />

      {/* Grid */}
      <div className="fixed inset-0 -z-20 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Radial Mask */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_20%,#050505_90%)]" />
    </>
  );
}