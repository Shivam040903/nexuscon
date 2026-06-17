import { useState } from "react";
import { MapPin, Plane, Train, Bus, ParkingCircle, ChevronDown } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { venue, faqs } from "../data/venue";

const transportIcons = [Plane, Train, Bus, ParkingCircle];

function FaqItem({ faq, isOpen, onClick }) {
  return (
    <div className="border-b border-slate-100 py-4">
      <button onClick={onClick} className="w-full flex items-center justify-between text-left gap-4">
        <span className="font-medium text-ink-900">{faq.question}</span>
        <ChevronDown className={`w-5 h-5 text-ink-500 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && <p className="text-ink-600 text-sm leading-relaxed mt-3">{faq.answer}</p>}
    </div>
  );
}

export default function Venue() {
  const [openFaq, setOpenFaq] = useState(0);
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(venue.mapQuery)}&output=embed`;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <SectionHeading eyebrow="Venue & travel" title={venue.name} description={venue.address} />

      <div className="mt-10 rounded-3xl overflow-hidden border border-slate-100 shadow-card h-72 sm:h-96">
        <iframe
          title="Venue map"
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Halls */}
      <div className="mt-16">
        <h2 className="font-display text-xl font-semibold text-ink-900 mb-5">Inside the venue</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {venue.halls.map((h) => (
            <div key={h.name} className="bg-white rounded-2xl border border-slate-100 shadow-card p-6">
              <p className="font-display font-semibold text-ink-900">{h.name}</p>
              <p className="text-sm text-ink-600 mt-1.5">{h.use}</p>
              <p className="text-xs text-ink-500 mt-2 font-medium">{h.capacity}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Transport */}
      <div className="mt-16">
        <h2 className="font-display text-xl font-semibold text-ink-900 mb-5">Getting there</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {venue.transport.map((t, i) => {
            const Icon = transportIcons[i] || MapPin;
            return (
              <div key={t.label} className="flex items-start gap-4 bg-white rounded-2xl border border-slate-100 shadow-card p-6">
                <span className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-display font-semibold text-ink-900">{t.label}</p>
                  <p className="text-sm text-ink-600 mt-1">{t.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Hotels */}
      <div className="mt-16">
        <h2 className="font-display text-xl font-semibold text-ink-900 mb-5">Partner hotels</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {venue.hotels.map((h) => (
            <div key={h.name} className="bg-white rounded-2xl border border-slate-100 shadow-card p-6">
              <div className="flex items-center justify-between">
                <p className="font-display font-semibold text-ink-900">{h.name}</p>
                <span className="text-xs font-semibold text-ink-500 bg-slate-100 px-2 py-0.5 rounded-full">{h.tier}</span>
              </div>
              <p className="text-sm text-ink-600 mt-1.5">{h.distance}</p>
              <p className="text-xs text-brand-700 mt-2 font-medium">{h.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div id="faqs" className="mt-16 scroll-mt-24">
        <h2 className="font-display text-xl font-semibold text-ink-900 mb-2">Frequently asked questions</h2>
        <p className="text-ink-600 text-sm mb-4">Everything you need to know before you arrive.</p>
        <div className="bg-white rounded-2xl border border-slate-100 shadow-card px-6 sm:px-8 py-2">
          {faqs.map((faq, i) => (
            <FaqItem key={faq.question} faq={faq} isOpen={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </div>
  );
}
