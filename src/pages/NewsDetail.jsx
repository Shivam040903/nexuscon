import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getNewsById, news } from "../data/news";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

export default function NewsDetail() {
  const { id } = useParams();
  const item = getNewsById(id);

  if (!item) return <Navigate to="/news" replace />;

  const more = news.filter((n) => n.id !== item.id).slice(0, 2);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <Link to="/news" className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-600 hover:text-ink-900 mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to news
      </Link>

      <span className="text-xs font-semibold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-full">{item.category}</span>
      <h1 className="font-display text-3xl font-bold text-ink-900 mt-4">{item.title}</h1>
      <p className="text-sm text-ink-500 mt-2">{formatDate(item.date)}</p>

      <p className="text-ink-700 leading-relaxed mt-6 text-lg">{item.content}</p>

      {more.length > 0 && (
        <div className="mt-14 border-t border-slate-100 pt-8">
          <h2 className="font-display text-lg font-semibold text-ink-900 mb-4">More updates</h2>
          <div className="flex flex-col gap-3">
            {more.map((n) => (
              <Link key={n.id} to={`/news/${n.id}`} className="text-brand-700 hover:text-brand-800 font-medium">
                {n.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
