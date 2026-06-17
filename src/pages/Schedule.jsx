import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Download } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import SessionCard from "../components/SessionCard";
import { days, getSessionsByDay } from "../data/schedule";
import { tracks } from "../data/speakers";

export default function Schedule() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeDay, setActiveDay] = useState(1);
  const [activeTrack, setActiveTrack] = useState(searchParams.get("track") || "all");

  useEffect(() => {
    const t = searchParams.get("track");
    if (t) setActiveTrack(t);
  }, [searchParams]);

  const sessions = getSessionsByDay(activeDay).filter((s) => activeTrack === "all" || s.track === activeTrack);

  return (
    <div className="bg-slate-50/60 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <SectionHeading
          eyebrow="Agenda"
          title="Three days of sessions, organized by track"
          description="Filter by track or browse a full day at a time. Times are local to Jaipur (IST)."
        />

        {/* Day tabs */}
        <div className="flex gap-2 mt-10 bg-white border border-slate-100 rounded-full p-1.5 w-full sm:w-fit mx-auto overflow-x-auto scrollbar-hide">
          {days.map((d) => (
            <button
              key={d.id}
              onClick={() => setActiveDay(d.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                activeDay === d.id ? "bg-brand-600 text-white" : "text-ink-600 hover:bg-slate-50"
              }`}
            >
              {d.label} <span className="hidden sm:inline">· {d.date}</span>
            </button>
          ))}
        </div>

        <p className="text-center text-sm text-ink-500 mt-4">
          {days.find((d) => d.id === activeDay)?.theme}
        </p>

        {/* Track filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          <button
            onClick={() => {
              setActiveTrack("all");
              setSearchParams({});
            }}
            className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
              activeTrack === "all" ? "bg-ink-900 text-white border-ink-900" : "bg-white text-ink-600 border-slate-200 hover:border-slate-300"
            }`}
          >
            All tracks
          </button>
          {tracks.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setActiveTrack(t.id);
                setSearchParams({ track: t.id });
              }}
              className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                activeTrack === t.id ? `${t.className} border-transparent ring-2 ring-offset-1 ring-current` : "bg-white text-ink-600 border-slate-200 hover:border-slate-300"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Sessions */}
        <div className="flex flex-col gap-4 mt-10">
          {sessions.length === 0 && (
            <p className="text-center text-ink-500 py-10">No sessions in this track for {days.find((d) => d.id === activeDay)?.label}.</p>
          )}
          {sessions.map((s) => (
            <SessionCard key={s.id} session={s} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="inline-flex items-center gap-2 text-sm font-semibold text-ink-700 bg-white border border-slate-200 hover:border-slate-300 px-5 py-2.5 rounded-full transition-colors">
            <Download className="w-4 h-4" /> Download full agenda (PDF)
          </button>
        </div>
      </div>
    </div>
  );
}
