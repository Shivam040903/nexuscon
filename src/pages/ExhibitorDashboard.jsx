import { useMemo, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { LogOut, MapPin, Users, ScanLine, CheckCircle2, Circle, Save } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import CountdownTimer from "../components/CountdownTimer";
import { exhibitors } from "../data/sponsors";

const defaultTasks = [
  { id: "t1", label: "Confirm booth setup time with the operations team", done: true },
  { id: "t2", label: "Upload your exhibitor profile photo & logo", done: false },
  { id: "t3", label: "RSVP for the NexusCon Gala Dinner", done: false },
  { id: "t4", label: "Submit your lead-capture device request", done: true },
];

// Small deterministic "random" so numbers stay stable for a given exhibitor session
function seededNumber(seed, min, max) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) % 100000;
  return min + (h % (max - min));
}

export default function ExhibitorDashboard() {
  const { exhibitor, isAuthenticated, logout, openLoginModal } = useAuth();
  const [tasks, setTasks] = useState(defaultTasks);
  const [blurb, setBlurb] = useState("");
  const [saved, setSaved] = useState(false);

  const stats = useMemo(() => {
    if (!exhibitor) return { scans: 0, leads: 0 };
    return {
      scans: seededNumber(exhibitor.email, 120, 480),
      leads: seededNumber(exhibitor.email + "x", 18, 86),
    };
  }, [exhibitor]);

  const category = useMemo(() => {
    if (!exhibitor) return "General";
    const idx = seededNumber(exhibitor.email + "cat", 0, exhibitors.length);
    return exhibitors[idx]?.category || "General";
  }, [exhibitor]);

  if (!isAuthenticated) return <Navigate to="/" replace />;

  function toggleTask(id) {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  function handleSave(e) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2200);
  }

  return (
    <div className="bg-slate-50/60 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-sm text-ink-500">Welcome back,</p>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-ink-900">{exhibitor.displayName}</h1>
          </div>
          <button
            onClick={logout}
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink-600 hover:text-ink-900 bg-white border border-slate-200 hover:border-slate-300 px-4 py-2.5 rounded-full transition-colors w-fit"
          >
            <LogOut className="w-4 h-4" /> Log out
          </button>
        </div>

        {/* Top stat cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-6">
            <span className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center mb-3">
              <MapPin className="w-5 h-5" />
            </span>
            <p className="text-xs text-ink-500 uppercase tracking-wide font-semibold">Your booth</p>
            <p className="font-display text-2xl font-bold text-ink-900 mt-1">Booth {exhibitor.booth}</p>
            <p className="text-sm text-ink-500 mt-1">{category} · Expo Hall</p>
          </div>
          <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-6">
            <span className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-3">
              <ScanLine className="w-5 h-5" />
            </span>
            <p className="text-xs text-ink-500 uppercase tracking-wide font-semibold">Badge scans</p>
            <p className="font-display text-2xl font-bold text-ink-900 mt-1">{stats.scans}</p>
            <p className="text-sm text-ink-500 mt-1">Across all registered attendees</p>
          </div>
          <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-6">
            <span className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-3">
              <Users className="w-5 h-5" />
            </span>
            <p className="text-xs text-ink-500 uppercase tracking-wide font-semibold">Leads captured</p>
            <p className="font-display text-2xl font-bold text-ink-900 mt-1">{stats.leads}</p>
            <p className="text-sm text-ink-500 mt-1">Synced from your scanner</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-[1fr_1.2fr] gap-5 mt-6">
          {/* Countdown card */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-6 flex flex-col">
            <p className="text-xs text-ink-500 uppercase tracking-wide font-semibold mb-4">Time until doors open</p>
            <CountdownTimer compact />
            <p className="text-sm text-ink-600 mt-5">
              Expo Hall setup access begins the evening before Day 1. Bring your exhibitor badge to the loading dock entrance.
            </p>
          </div>

          {/* Checklist */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-6">
            <p className="text-xs text-ink-500 uppercase tracking-wide font-semibold mb-4">Pre-event checklist</p>
            <ul className="flex flex-col gap-3">
              {tasks.map((t) => (
                <li key={t.id}>
                  <button
                    onClick={() => toggleTask(t.id)}
                    className="flex items-start gap-3 text-left w-full group"
                  >
                    {t.done ? (
                      <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                    ) : (
                      <Circle className="w-5 h-5 text-ink-300 shrink-0 mt-0.5 group-hover:text-ink-400" />
                    )}
                    <span className={`text-sm ${t.done ? "text-ink-400 line-through" : "text-ink-700"}`}>{t.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Booth profile editor */}
        <form onSubmit={handleSave} className="bg-white rounded-2xl border border-slate-100 shadow-card p-6 sm:p-7 mt-6">
          <p className="text-xs text-ink-500 uppercase tracking-wide font-semibold mb-1">Booth profile</p>
          <p className="text-sm text-ink-600 mb-4">This is shown to attendees browsing the exhibitor directory.</p>
          <textarea
            rows={3}
            value={blurb}
            onChange={(e) => setBlurb(e.target.value)}
            placeholder="Tell attendees what your team is showcasing this year..."
            className="w-full rounded-xl border border-slate-200 p-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-400 resize-none"
          />
          <div className="flex items-center gap-3 mt-4">
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-5 py-2.5 rounded-full transition-colors"
            >
              <Save className="w-4 h-4" /> Save changes
            </button>
            {saved && <span className="text-sm text-brand-700 font-medium">Saved.</span>}
          </div>
        </form>

        <p className="text-center text-sm text-ink-500 mt-10">
          Looking for the public directory instead? <Link to="/sponsors" className="text-brand-700 font-medium">View sponsors & exhibitors</Link>
        </p>
      </div>
    </div>
  );
}
