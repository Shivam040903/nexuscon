import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Link2, AtSign, CalendarDays } from "lucide-react";
import Avatar from "../components/Avatar";
import TrackBadge from "../components/TrackBadge";
import SessionCard from "../components/SessionCard";
import { getSpeakerById } from "../data/speakers";
import { sessions } from "../data/schedule";

export default function SpeakerDetail() {
  const { id } = useParams();
  const speaker = getSpeakerById(id);

  if (!speaker) return <Navigate to="/speakers" replace />;

  const speakerSessions = sessions.filter((s) => s.speakers?.includes(speaker.id));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <Link to="/speakers" className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-600 hover:text-ink-900 mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to all speakers
      </Link>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-card p-7 sm:p-10 flex flex-col sm:flex-row gap-7 items-start">
        <Avatar initials={speaker.initials} color={speaker.color} size="xl" />
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <TrackBadge trackId={speaker.track} />
            <span className="text-xs font-semibold text-ink-500 bg-slate-100 px-2.5 py-1 rounded-full">{speaker.type}</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-ink-900">{speaker.name}</h1>
          <p className="text-ink-600 mt-1">{speaker.title} · {speaker.company}</p>
          <p className="text-ink-600 leading-relaxed mt-5">{speaker.bio}</p>

          <div className="flex items-center gap-3 mt-6">
            <a href={speaker.social.linkedin} className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors" aria-label="LinkedIn">
              <Link2 className="w-4 h-4 text-ink-700" />
            </a>
            <a href={speaker.social.twitter} className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors" aria-label="Twitter">
              <AtSign className="w-4 h-4 text-ink-700" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="font-display text-xl font-semibold text-ink-900 flex items-center gap-2 mb-5">
          <CalendarDays className="w-5 h-5 text-brand-600" /> Speaking at NexusCon
        </h2>
        <div className="flex flex-col gap-4">
          {speakerSessions.length === 0 && <p className="text-ink-500 text-sm">Session details for this speaker will be announced soon.</p>}
          {speakerSessions.map((s) => (
            <SessionCard key={s.id} session={s} />
          ))}
        </div>
      </div>
    </div>
  );
}
