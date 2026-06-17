import { useState } from "react";
import { Search, MapPin } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Avatar from "../components/Avatar";
import { titleSponsor, sponsorTiers, exhibitors } from "../data/sponsors";

export default function Sponsors() {
  const [query, setQuery] = useState("");
  const filteredExhibitors = exhibitors.filter(
    (e) =>
      e.name.toLowerCase().includes(query.toLowerCase()) ||
      e.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <SectionHeading
        eyebrow="Sponsors & Exhibitors"
        title="The companies powering this year's summit"
        description="From our title sponsor to first-time exhibitors on the expo floor, here's everyone you'll find at NexusCon 2026."
      />

      {/* Title sponsor */}
      <div className="mt-12 bg-ink-900 rounded-3xl px-7 sm:px-10 py-10 flex flex-col sm:flex-row items-center gap-7 text-center sm:text-left">
        <Avatar initials={titleSponsor.initials} color="bg-white text-ink-900" size="xl" />
        <div>
          <span className="text-xs font-semibold text-brand-400 uppercase tracking-wide">Title Sponsor</span>
          <h3 className="font-display text-2xl font-bold text-white mt-1">{titleSponsor.name}</h3>
          <p className="text-slate-300 mt-2 max-w-xl">{titleSponsor.blurb}</p>
        </div>
      </div>

      {/* Tiers */}
      {sponsorTiers.map((tier) => (
        <div key={tier.tier} className="mt-14">
          <h3 className="font-display text-xl font-semibold text-ink-900 mb-5">{tier.tier} Sponsors</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tier.sponsors.map((s) => (
              <div key={s.name} className={`flex items-center gap-4 bg-white rounded-2xl border-2 ${tier.color} p-5`}>
                <Avatar initials={s.initials} color={s.color} size="md" />
                <div>
                  <p className="font-display font-semibold text-ink-900">{s.name}</p>
                  <p className="text-sm text-ink-500">{s.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Exhibitor directory */}
      <div className="mt-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
          <div>
            <h3 className="font-display text-xl font-semibold text-ink-900">Expo Floor Exhibitors</h3>
            <p className="text-ink-600 text-sm mt-1">{exhibitors.length} booths across the expo hall — search by name or category.</p>
          </div>
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-ink-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search exhibitors..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-400"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredExhibitors.map((e) => (
            <div key={e.name} className="bg-white rounded-2xl border border-slate-100 shadow-card p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-ink-500 bg-slate-100 px-2.5 py-1 rounded-full">{e.category}</span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-700">
                  <MapPin className="w-3.5 h-3.5" /> Booth {e.booth}
                </span>
              </div>
              <p className="font-display font-semibold text-ink-900 mt-1">{e.name}</p>
              <p className="text-sm text-ink-600 mt-1.5 leading-relaxed">{e.blurb}</p>
            </div>
          ))}
          {filteredExhibitors.length === 0 && (
            <p className="text-ink-500 text-sm col-span-full text-center py-10">No exhibitors match "{query}".</p>
          )}
        </div>
      </div>
    </div>
  );
}
