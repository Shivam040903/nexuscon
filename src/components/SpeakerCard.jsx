import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import TrackBadge from "./TrackBadge";

export default function SpeakerCard({ speaker }) {
  return (
    <Link
      to={`/speakers/${speaker.id}`}
      className="group bg-white rounded-2xl border border-slate-100 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all p-6 flex flex-col items-center text-center"
    >
      <Avatar initials={speaker.initials} color={speaker.color} size="xl" />
      <h3 className="font-display font-semibold text-lg text-ink-900 mt-4 group-hover:text-brand-700 transition-colors">
        {speaker.name}
      </h3>
      <p className="text-sm text-ink-600 mt-1">{speaker.title}</p>
      <p className="text-sm text-ink-500">{speaker.company}</p>
      <div className="mt-4">
        <TrackBadge trackId={speaker.track} />
      </div>
    </Link>
  );
}
