import { Check } from "lucide-react";

export default function TicketCard({ ticket }) {
  return (
    <div
      className={`relative flex flex-col rounded-3xl p-7 sm:p-8 border transition-all ${
        ticket.popular
          ? "border-brand-600 bg-ink-900 text-white shadow-glow sm:-translate-y-3"
          : "border-slate-200 bg-white text-ink-900 shadow-card"
      }`}
    >
      {ticket.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          Most popular
        </span>
      )}
      <h3 className="font-display font-semibold text-lg">{ticket.name}</h3>
      <div className="mt-3 flex items-baseline gap-1.5">
        <span className="font-display text-3xl sm:text-4xl font-bold">{ticket.price}</span>
        <span className={`text-sm ${ticket.popular ? "text-slate-300" : "text-ink-500"}`}>{ticket.period}</span>
      </div>

      <ul className="flex flex-col gap-3 mt-6 mb-8">
        {ticket.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <Check className={`w-4 h-4 mt-0.5 shrink-0 ${ticket.popular ? "text-brand-400" : "text-brand-600"}`} />
            <span className={ticket.popular ? "text-slate-200" : "text-ink-600"}>{f}</span>
          </li>
        ))}
      </ul>

      <button
        className={`mt-auto w-full text-center font-semibold py-3 rounded-full transition-colors ${
          ticket.popular ? "bg-brand-500 hover:bg-brand-600 text-white" : "bg-ink-900 hover:bg-ink-800 text-white"
        }`}
      >
        Get {ticket.name} pass
      </button>
    </div>
  );
}
