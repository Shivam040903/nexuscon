import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Cloud, LineChart, Palette, ShieldCheck, Rocket } from "lucide-react";
import Hero from "../components/Hero";
import StatsStrip from "../components/StatsStrip";
import SectionHeading from "../components/SectionHeading";
import SpeakerCard from "../components/SpeakerCard";
import NewsCard from "../components/NewsCard";
import Avatar from "../components/Avatar";
import { speakers } from "../data/speakers";
import { news } from "../data/news";
import { titleSponsor, sponsorTiers } from "../data/sponsors";
import { days } from "../data/schedule";

const trackCards = [
  { id: "ai", label: "AI & Machine Learning", icon: Cpu, desc: "Applied research, agentic systems and the infra behind production AI.", className: "track-ai" },
  { id: "cloud", label: "Cloud & DevOps", icon: Cloud, desc: "Scaling infrastructure, platform engineering and developer experience.", className: "track-cloud" },
  { id: "product", label: "Product & Growth", icon: LineChart, desc: "Prioritization, analytics and the craft of building things people use.", className: "track-product" },
  { id: "design", label: "Design & UX", icon: Palette, desc: "Design systems, accessibility and designing for the next billion users.", className: "track-design" },
  { id: "security", label: "Cybersecurity", icon: ShieldCheck, desc: "Zero-trust architecture, compliance and security that doesn't slow teams down.", className: "track-security" },
  { id: "startup", label: "Startups & Funding", icon: Rocket, desc: "Fundraising, growth-stage operating lessons and founder roundtables.", className: "track-startup" },
];

const featuredSpeakers = speakers.slice(0, 4);
const latestNews = news.slice(-3).reverse();
const allSponsors = sponsorTiers.flatMap((t) => t.sponsors);

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />

      {/* Tracks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <SectionHeading
          eyebrow="Six tracks, one summit"
          title="Programming for every part of the build"
          description="Every session on the schedule is tagged to one of six tracks, so you can follow the thread that matters to you across all three days."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {trackCards.map((t) => {
            const Icon = t.icon;
            return (
              <Link
                key={t.id}
                to={`/schedule?track=${t.id}`}
                className="group bg-white rounded-2xl border border-slate-100 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all p-6"
              >
                <span className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${t.className}`}>
                  <Icon className="w-5 h-5" />
                </span>
                <h3 className="font-display font-semibold text-ink-900 group-hover:text-brand-700 transition-colors">{t.label}</h3>
                <p className="text-sm text-ink-600 mt-2 leading-relaxed">{t.desc}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Schedule teaser */}
      <section className="bg-slate-50/70 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <SectionHeading
            eyebrow="Three days"
            title="A schedule built for momentum"
            description="From the opening keynote to the closing ceremony, every day moves between big-room ideas and small-room, hands-on work."
          />
          <div className="grid sm:grid-cols-3 gap-5 mt-12">
            {days.map((d) => (
              <Link
                key={d.id}
                to="/schedule"
                className="group bg-white rounded-2xl border border-slate-100 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all p-7"
              >
                <span className="text-xs font-semibold text-brand-600 uppercase tracking-wide">{d.label} · {d.date}</span>
                <h3 className="font-display font-semibold text-xl text-ink-900 mt-2 group-hover:text-brand-700 transition-colors">{d.theme}</h3>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-600 mt-4">
                  View sessions <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured speakers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <SectionHeading eyebrow="Speakers" title="Learn from people building it right now" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {featuredSpeakers.map((s) => (
            <SpeakerCard key={s.id} speaker={s} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link to="/speakers" className="inline-flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-800">
            View all 14 speakers <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Sponsors strip */}
      <section className="bg-slate-50/70 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <p className="text-center text-sm font-semibold text-ink-500 uppercase tracking-wide mb-8">
            Backed by {titleSponsor.name} and {allSponsors.length}+ sponsors & exhibitors
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {allSponsors.slice(0, 8).map((s) => (
              <div key={s.name} className="flex items-center gap-2.5 bg-white border border-slate-100 rounded-full pl-2 pr-4 py-1.5">
                <Avatar initials={s.initials} color={s.color} size="sm" />
                <span className="text-sm font-medium text-ink-700">{s.name}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link to="/sponsors" className="inline-flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-800">
              See all sponsors & exhibitors <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <SectionHeading eyebrow="Stay in the loop" title="Latest news & updates" />
        <div className="grid sm:grid-cols-3 gap-5 mt-12">
          {latestNews.map((n) => (
            <NewsCard key={n.id} item={n} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link to="/news" className="inline-flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-800">
            View all updates <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="relative overflow-hidden bg-ink-900 rounded-3xl px-6 sm:px-14 py-14 sm:py-16 text-center">
          <div className="absolute inset-0 bg-mint-radial opacity-20" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white max-w-xl mx-auto relative">
            Three days. Six tracks. One pass.
          </h2>
          <p className="text-slate-300 max-w-md mx-auto mt-4 relative">
            Early bird pricing ends soon — lock in your seat for NexusCon 2026 before rates go up.
          </p>
          <Link
            to="/tickets"
            className="relative inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-7 py-3.5 rounded-full mt-8 transition-colors"
          >
            Get your pass <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
