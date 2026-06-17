import { Link } from "react-router-dom";
import { CalendarDays, MapPin, Mail, Link2, AtSign, PlayCircle } from "lucide-react";

const columns = [
  {
    heading: "Explore",
    links: [
      { label: "Schedule", to: "/schedule" },
      { label: "Speakers", to: "/speakers" },
      { label: "Sponsors & Exhibitors", to: "/sponsors" },
      { label: "News & Updates", to: "/news" },
    ],
  },
  {
    heading: "Plan your visit",
    links: [
      { label: "Venue & Travel", to: "/venue" },
      { label: "Tickets & Pricing", to: "/tickets" },
      { label: "FAQs", to: "/venue#faqs" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-xl bg-brand-500 flex items-center justify-center">
                <CalendarDays className="w-5 h-5 text-white" />
              </span>
              <span className="font-display font-bold text-lg text-white">
                Nexus<span className="text-brand-400">Con</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
              India's multi-day summit for builders working across AI, cloud, product, design, security and startups.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                <Link2 className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                <AtSign className="w-4 h-4" />
              </a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                <PlayCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-white font-semibold text-sm mb-4">{col.heading}</h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-slate-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Get in touch</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Jaipur Exhibition & Convention Centre, Sitapura, Jaipur, Rajasthan</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <span>hello@nexuscon.example</span>
              </li>
              <li className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4 shrink-0" />
                <span>August 12–14, 2026</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© 2026 NexusCon.</p>
          <div className="flex gap-5">
            <Link to="/" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
