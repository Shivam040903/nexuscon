import SectionHeading from "../components/SectionHeading";
import TicketCard from "../components/TicketCard";
import { tickets } from "../data/venue";

export default function Tickets() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <SectionHeading
        eyebrow="Early bird pricing live"
        title="One pass, three days, every track"
        description="Pick the pass that matches how you want to experience NexusCon — pricing is per attendee and includes all meals listed."
      />

      <div className="grid sm:grid-cols-3 gap-6 mt-14 max-w-4xl mx-auto">
        {tickets.map((t) => (
          <TicketCard key={t.name} ticket={t} />
        ))}
      </div>

      <div className="mt-16 bg-slate-50 rounded-3xl p-8 sm:p-10 text-center max-w-3xl mx-auto">
        <h3 className="font-display text-lg font-semibold text-ink-900">Bringing a team?</h3>
        <p className="text-ink-600 mt-2">
          Groups of 5 or more get 15% off any pass tier. Email <span className="text-brand-700 font-medium">groups@nexuscon.example</span> with your team size and we'll send a custom invoice.
        </p>
      </div>
    </div>
  );
}
