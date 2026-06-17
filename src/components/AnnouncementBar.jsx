import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <Link
      to="/tickets"
      className="block bg-gradient-to-r from-emerald-300 via-emerald-200 to-emerald-100 hover:from-emerald-400 hover:via-emerald-300 hover:to-emerald-200 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-2 text-center">
        <span className="bg-brand-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">Open</span>
        <span className="text-sm text-ink-800 font-medium">
          Early bird registration is live — save 30% on all passes
        </span>
        <ArrowRight className="w-4 h-4 text-ink-800 hidden sm:inline" />
      </div>
    </Link>
  );
}
