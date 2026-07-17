export function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-[#050505]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,178,94,0.12),transparent_45%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_90%)]" />

      <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D6B25E]/10 blur-[180px]" />
    </>
  );
}