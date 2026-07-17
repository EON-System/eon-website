export function GridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:72px_72px]
          [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]
        "
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,178,94,0.08),transparent_55%)]" />

    </div>
  );
}