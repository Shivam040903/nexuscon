import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const categoryColor = {
  Announcement: "bg-brand-50 text-brand-700",
  Speaker: "bg-purple-50 text-purple-700",
  Tickets: "bg-amber-50 text-amber-700",
  Program: "bg-blue-50 text-blue-700",
  Sponsors: "bg-pink-50 text-pink-700",
  Logistics: "bg-slate-100 text-slate-700",
};

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

export default function NewsCard({ item, featured = false }) {
  return (
    <Link
      to={`/news/${item.id}`}
      className={`group flex flex-col bg-white rounded-2xl border border-slate-100 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all p-6 sm:p-7 ${featured ? "sm:col-span-2" : ""}`}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColor[item.category] || "bg-slate-100 text-slate-700"}`}>
          {item.category}
        </span>
        <span className="text-xs text-ink-500">{formatDate(item.date)}</span>
      </div>
      <h3 className={`font-display font-semibold text-ink-900 group-hover:text-brand-700 transition-colors ${featured ? "text-2xl" : "text-lg"}`}>
        {item.title}
      </h3>
      <p className="text-sm text-ink-600 mt-2 leading-relaxed">{item.excerpt}</p>
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 mt-4">
        Read more <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  );
}
