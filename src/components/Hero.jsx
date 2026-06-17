import { Link } from "react-router-dom";
import { ArrowRight, MapPin, CalendarDays, Star } from "lucide-react";
import Avatar from "./Avatar";
import CountdownTimer from "./CountdownTimer";
import { speakers } from "../data/speakers";

const previewSpeakers = speakers.slice(0, 5);

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-mint-radial">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-14 sm:pt-20 pb-16 sm:pb-20 flex flex-col items-center text-center">
        <div className="flex items-center gap-3 bg-white/80 border border-slate-100 shadow-card rounded-full pl-2 pr-4 py-1.5 mb-7">
          <div className="flex -space-x-2.5">
            {previewSpeakers.map((s) => (
              <Avatar key={s.id} initials={s.initials} color={s.color} size="sm" ring />
            ))}
          </div>
          <div className="flex flex-col items-start">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-brand-500 text-brand-500" />
              ))}
            </div>
            <span className="text-xs text-ink-600 font-medium">Trusted by 12,000+ attendees</span>
          </div>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[1.08] text-ink-900 max-w-3xl">
          Where builders meet
          <br />
          <span className="text-brand-600">the future.</span>
        </h1>

        <p className="text-ink-600 text-base sm:text-lg mt-6 max-w-xl">
          Three days of keynotes, workshops and hallway conversations across AI, cloud, product, design, security and startups — all under one roof in Jaipur.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm font-medium text-ink-700">
          <span className="inline-flex items-center gap-1.5 bg-white/80 border border-slate-100 rounded-full px-3.5 py-1.5">
            <CalendarDays className="w-4 h-4 text-brand-600" /> Aug 12–14, 2026
          </span>
          <span className="inline-flex items-center gap-1.5 bg-white/80 border border-slate-100 rounded-full px-3.5 py-1.5">
            <MapPin className="w-4 h-4 text-brand-600" /> JECC, Jaipur
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-9">
          <Link
            to="/tickets"
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-7 py-3.5 rounded-full shadow-glow transition-colors"
          >
            Get tickets <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/schedule"
            className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-slate-300 text-ink-800 font-semibold px-7 py-3.5 rounded-full transition-colors"
          >
            View full schedule
          </Link>
        </div>

        <div className="mt-12 bg-white/90 border border-slate-100 shadow-soft rounded-2xl px-6 sm:px-10 py-5">
          <p className="text-xs uppercase tracking-wide text-ink-500 font-semibold mb-3 text-center">Counting down to opening keynote</p>
          <CountdownTimer />
        </div>
      </div>
    </section>
  );
}
