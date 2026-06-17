import { Link } from "react-router-dom";
import { Mic2, Users, Wrench, Coffee, PartyPopper, MessageSquare, MapPin } from "lucide-react";
import TrackBadge from "./TrackBadge";
import Avatar from "./Avatar";
import { getSpeakerById } from "../data/speakers";

const typeMeta = {
  keynote: { icon: Mic2, label: "Keynote", color: "text-brand-700 bg-brand-50" },
  talk: { icon: MessageSquare, label: "Talk", color: "text-blue-700 bg-blue-50" },
  panel: { icon: Users, label: "Panel", color: "text-purple-700 bg-purple-50" },
  workshop: { icon: Wrench, label: "Workshop", color: "text-amber-700 bg-amber-50" },
  break: { icon: Coffee, label: "Break", color: "text-slate-600 bg-slate-100" },
  networking: { icon: PartyPopper, label: "Networking", color: "text-pink-700 bg-pink-50" },
};

export default function SessionCard({ session }) {
  const meta = typeMeta[session.type] || typeMeta.talk;
  const Icon = meta.icon;
  const speakerObjs = (session.speakers || []).map(getSpeakerById).filter(Boolean);
  const isFiller = session.type === "break" || session.type === "networking";

  return (
    <div className={`flex gap-4 sm:gap-6 rounded-2xl border p-5 sm:p-6 transition-colors ${isFiller ? "bg-slate-50/70 border-slate-100" : "bg-white border-slate-100 shadow-card hover:shadow-soft"}`}>
      <div className="hidden sm:flex flex-col items-center w-20 shrink-0 pt-1">
        <span className="font-display font-semibold text-ink-900 text-sm">{session.start}</span>
        <span className="text-ink-400 text-xs">{session.end}</span>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-2 sm:hidden">
          <span className="font-display font-semibold text-ink-900 text-sm">{session.start}–{session.end}</span>
        </div>
        <div className="flex flex-wrap items-center gap-2 mb-2.5">
          <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${meta.color}`}>
            <Icon className="w-3.5 h-3.5" /> {meta.label}
          </span>
          {session.track && <TrackBadge trackId={session.track} />}
        </div>

        <h3 className={`font-display font-semibold text-ink-900 ${isFiller ? "text-base" : "text-lg"}`}>{session.title}</h3>

        {session.description && <p className="text-sm text-ink-600 mt-1.5 leading-relaxed">{session.description}</p>}

        <div className="flex flex-wrap items-center gap-4 mt-3">
          <span className="inline-flex items-center gap-1.5 text-xs text-ink-500">
            <MapPin className="w-3.5 h-3.5" /> {session.room}
          </span>
        </div>

        {speakerObjs.length > 0 && (
          <div className="flex flex-wrap items-center gap-3 mt-4">
            {speakerObjs.map((sp) => (
              <Link key={sp.id} to={`/speakers/${sp.id}`} className="flex items-center gap-2 group">
                <Avatar initials={sp.initials} color={sp.color} size="sm" />
                <span className="text-sm font-medium text-ink-700 group-hover:text-brand-700 transition-colors">{sp.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
