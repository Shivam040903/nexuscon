import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="max-w-md mx-auto px-4 py-32 text-center">
      <p className="font-display text-6xl font-bold text-brand-600">404</p>
      <h1 className="font-display text-2xl font-semibold text-ink-900 mt-4">Page not found</h1>
      <p className="text-ink-600 mt-2">This page wandered off the expo floor. Let's get you back.</p>
      <Link to="/" className="inline-flex items-center gap-2 mt-8 font-semibold text-brand-700 hover:text-brand-800">
        <ArrowLeft className="w-4 h-4" /> Back to home
      </Link>
    </div>
  );
}
