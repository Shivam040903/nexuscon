import { getTrackById } from "../data/speakers";

export default function TrackBadge({ trackId, size = "sm" }) {
  const track = getTrackById(trackId);
  if (!track) return null;
  const sizeClasses = size === "sm" ? "text-xs px-2.5 py-1" : "text-sm px-3 py-1.5";
  return (
    <span className={`inline-flex items-center rounded-full font-medium whitespace-nowrap ${track.className} ${sizeClasses}`}>
      {track.label}
    </span>
  );
}
