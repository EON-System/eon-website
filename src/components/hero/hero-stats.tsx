const stats = [
  {
    value: "2",
    label: "Products",
  },
  {
    value: "4",
    label: "Research Areas",
  },
  {
    value: "∞",
    label: "Vision",
  },
];

export function HeroStats() {
  return (
    <div className="mt-20 grid grid-cols-3 gap-10 border-t border-white/10 pt-10">

      {stats.map((item) => (
        <div key={item.label}>

          <div className="text-3xl font-semibold text-[#D6B25E]">
            {item.value}
          </div>

          <div className="mt-2 text-sm uppercase tracking-[0.2em] text-white/40">
            {item.label}
          </div>

        </div>
      ))}

    </div>
  );
}