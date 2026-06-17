import { stats } from "../data/venue";

export default function StatsStrip() {
  return (
    <section className="bg-white border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-2 sm:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-3xl sm:text-4xl font-bold text-brand-600">{s.value}</p>
            <p className="text-ink-600 text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
