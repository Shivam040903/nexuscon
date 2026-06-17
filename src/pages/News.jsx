import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import NewsCard from "../components/NewsCard";
import { news } from "../data/news";

const categories = ["All", "Announcement", "Speaker", "Tickets", "Program", "Sponsors", "Logistics"];

export default function News() {
  const [active, setActive] = useState("All");
  const sorted = [...news].sort((a, b) => new Date(b.date) - new Date(a.date));
  const filtered = active === "All" ? sorted : sorted.filter((n) => n.category === active);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <SectionHeading
        eyebrow="Newsroom"
        title="News & updates"
        description="Everything announced about NexusCon 2026 so far, newest first."
      />

      <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-colors ${
              active === c ? "bg-ink-900 text-white border-ink-900" : "bg-white text-ink-600 border-slate-200 hover:border-slate-300"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-5 mt-12">
        {filtered.length > 0 && <NewsCard item={filtered[0]} featured />}
        {filtered.slice(1).map((n) => (
          <NewsCard key={n.id} item={n} />
        ))}
        {filtered.length === 0 && <p className="text-ink-500 text-sm col-span-full text-center py-10">No updates in this category yet.</p>}
      </div>
    </div>
  );
}
