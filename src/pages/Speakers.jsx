import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import SpeakerCard from "../components/SpeakerCard";
import { speakers, tracks } from "../data/speakers";

export default function Speakers() {
  const [activeTrack, setActiveTrack] = useState("all");
  const filtered = speakers.filter((s) => activeTrack === "all" || s.track === activeTrack);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <SectionHeading
        eyebrow={`${speakers.length} confirmed speakers`}
        title="Meet the people shaping the program"
        description="Founders, operators and researchers from across AI, cloud, product, design, security and startups."
      />

      <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
        <button
          onClick={() => setActiveTrack("all")}
          className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-colors ${
            activeTrack === "all" ? "bg-ink-900 text-white border-ink-900" : "bg-white text-ink-600 border-slate-200 hover:border-slate-300"
          }`}
        >
          All
        </button>
        {tracks.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTrack(t.id)}
            className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-colors ${
              activeTrack === t.id ? `${t.className} border-transparent` : "bg-white text-ink-600 border-slate-200 hover:border-slate-300"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
        {filtered.map((s) => (
          <SpeakerCard key={s.id} speaker={s} />
        ))}
      </div>
    </div>
  );
}
