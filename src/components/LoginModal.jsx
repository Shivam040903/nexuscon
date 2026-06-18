import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, Mail, Lock, Loader2, CalendarDays } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function LoginModal() {
  const { loginModalOpen, closeLoginModal, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  if (!loginModalOpen) return null;

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    // Simulated network delay — this is a demo login, any email/password works
    setTimeout(() => {
      login(email || "exhibitor@example.com");
      setLoading(false);
      setEmail("");
      setPassword("");
      closeLoginModal();
      navigate("/exhibitor/dashboard");
    }, 700);
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-ink-900/50 backdrop-blur-sm" onClick={closeLoginModal} />

      <div className="relative bg-white rounded-3xl shadow-soft w-full max-w-sm p-7 sm:p-8 animate-fade-up">
        <button
          onClick={closeLoginModal}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-ink-500"
        >
          <X className="w-4 h-4" />
        </button>

        <span className="w-11 h-11 rounded-xl bg-brand-600 flex items-center justify-center mb-5">
          <CalendarDays className="w-5 h-5 text-white" />
        </span>

        <h2 className="font-display text-xl font-bold text-ink-900">Exhibitor login</h2>
        <p className="text-sm text-ink-600 mt-1.5">
          Sign in to manage your booth, leads and profile.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 mt-6">
          <div className="relative">
            <Mail className="w-4 h-4 text-ink-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              required
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-400"
            />
          </div>
          <div className="relative">
            <Lock className="w-4 h-4 text-ink-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-1.5 inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 disabled:opacity-70 text-white font-semibold py-3 rounded-xl transition-colors"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="text-xs text-ink-400 mt-5 text-center leading-relaxed">
          New exhibitor? <span className="text-brand-600 font-medium">sponsors@nexuscon.com</span>
        </p>
      </div>
    </div>
  );
}
