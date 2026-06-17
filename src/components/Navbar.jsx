import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, CalendarDays, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/schedule", label: "Schedule" },
  { to: "/speakers", label: "Speakers" },
  { to: "/sponsors", label: "Sponsors" },
  { to: "/news", label: "News" },
  { to: "/venue", label: "Venue" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, exhibitor, openLoginModal, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between py-3.5">
        <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <span className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center">
            <CalendarDays className="w-5 h-5 text-white" />
          </span>
          <span className="font-display font-bold text-lg text-ink-900">
            Nexus<span className="text-brand-600">Con</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive ? "bg-brand-50 text-brand-700" : "text-ink-600 hover:text-ink-900 hover:bg-slate-50"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          {isAuthenticated ? (
            <>
              <Link
                to="/exhibitor/dashboard"
                className="text-sm font-medium text-ink-600 hover:text-ink-900 px-3.5 py-2 rounded-full border border-slate-200 hover:border-slate-300 transition-colors"
              >
                {exhibitor.displayName}'s dashboard
              </Link>
              <button
                onClick={logout}
                aria-label="Log out"
                className="w-9 h-9 rounded-full border border-slate-200 hover:border-slate-300 flex items-center justify-center text-ink-600 hover:text-ink-900 transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </>
          ) : (
            <button
              onClick={openLoginModal}
              className="text-sm font-medium text-ink-600 hover:text-ink-900 px-3.5 py-2 rounded-full border border-slate-200 hover:border-slate-300 transition-colors"
            >
              Exhibitor login
            </button>
          )}
          <Link
            to="/tickets"
            className="text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 px-5 py-2.5 rounded-full transition-colors shadow-glow"
          >
            Get tickets
          </Link>
        </div>

        <button
          className="lg:hidden p-2 rounded-lg text-ink-700 hover:bg-slate-50"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pb-5 pt-2">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-3.5 py-3 rounded-xl text-base font-medium ${
                    isActive ? "bg-brand-50 text-brand-700" : "text-ink-700 hover:bg-slate-50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="flex flex-col gap-2 mt-4">
            {isAuthenticated ? (
              <>
                <Link
                  to="/exhibitor/dashboard"
                  onClick={() => setOpen(false)}
                  className="text-center text-sm font-medium text-ink-700 px-4 py-3 rounded-full border border-slate-200"
                >
                  {exhibitor.displayName}'s dashboard
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setOpen(false);
                  }}
                  className="text-center text-sm font-medium text-ink-700 px-4 py-3 rounded-full border border-slate-200"
                >
                  Log out
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  setOpen(false);
                  openLoginModal();
                }}
                className="text-center text-sm font-medium text-ink-700 px-4 py-3 rounded-full border border-slate-200"
              >
                Exhibitor login
              </button>
            )}
            <Link
              to="/tickets"
              onClick={() => setOpen(false)}
              className="text-center text-sm font-semibold text-white bg-brand-600 px-4 py-3 rounded-full"
            >
              Get tickets
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
