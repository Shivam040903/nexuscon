import { useEffect, useState } from "react";

const EVENT_DATE = new Date("2026-08-12T09:00:00+05:30");

function getTimeLeft() {
  const diff = EVENT_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, live: true };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    live: false,
  };
}

export default function CountdownTimer({ compact = false }) {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (time.live) {
    return (
      <div className="inline-flex items-center gap-2 bg-brand-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
        NexusCon is live right now
      </div>
    );
  }

  const units = [
    { value: time.days, label: "Days" },
    { value: time.hours, label: "Hrs" },
    { value: time.minutes, label: "Min" },
    { value: time.seconds, label: "Sec" },
  ];

  return (
    <div className={`flex items-center ${compact ? "gap-2" : "gap-3 sm:gap-4"}`}>
      {units.map((u, i) => (
        <div key={u.label} className="flex items-center gap-3 sm:gap-4">
          <div className="flex flex-col items-center">
            <span className={`font-display font-bold text-ink-900 tabular-nums ${compact ? "text-lg" : "text-2xl sm:text-3xl"}`}>
              {String(u.value).padStart(2, "0")}
            </span>
            <span className="text-[11px] uppercase tracking-wide text-ink-500 font-medium">{u.label}</span>
          </div>
          {i < units.length - 1 && <span className="text-slate-300 font-light text-xl -mt-3">:</span>}
        </div>
      ))}
    </div>
  );
}
