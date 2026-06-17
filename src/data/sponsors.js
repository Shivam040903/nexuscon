// Mock sponsor & exhibitor data for NexusCon 2026

export const titleSponsor = {
  name: "Veridian Labs",
  blurb: "Returning as Title Sponsor for the second year running, Veridian Labs powers the AI infrastructure behind this year's program.",
  initials: "VL",
  color: "bg-brand-100 text-brand-700",
};

export const sponsorTiers = [
  {
    tier: "Platinum",
    color: "border-slate-300",
    sponsors: [
      { name: "OrbitScale Cloud", category: "Cloud Infrastructure", initials: "OC", color: "bg-blue-100 text-blue-700" },
      { name: "NimbusStack", category: "Multi-Cloud Platform", initials: "NS", color: "bg-blue-100 text-blue-700" },
      { name: "Helix Cloud", category: "Developer Platform", initials: "HC", color: "bg-blue-100 text-blue-700" },
    ],
  },
  {
    tier: "Gold",
    color: "border-amber-200",
    sponsors: [
      { name: "Bracket Security", category: "Cybersecurity", initials: "BS", color: "bg-amber-100 text-amber-700" },
      { name: "Ironclad Systems", category: "Cybersecurity", initials: "IS", color: "bg-amber-100 text-amber-700" },
      { name: "Flowstate App", category: "Productivity", initials: "FA", color: "bg-purple-100 text-purple-700" },
      { name: "Pulse Metrics", category: "Analytics", initials: "PM", color: "bg-purple-100 text-purple-700" },
      { name: "Northbridge Ventures", category: "Venture Capital", initials: "NV", color: "bg-orange-100 text-orange-700" },
    ],
  },
  {
    tier: "Silver",
    color: "border-slate-200",
    sponsors: [
      { name: "Studio Loom", category: "Design Consultancy", initials: "SL", color: "bg-pink-100 text-pink-700" },
      { name: "Studio Aperture", category: "Design Systems", initials: "SA", color: "bg-pink-100 text-pink-700" },
      { name: "Sundial Capital", category: "Growth Equity", initials: "SC", color: "bg-orange-100 text-orange-700" },
      { name: "DeepField AI", category: "AI Research", initials: "DF", color: "bg-emerald-100 text-emerald-700" },
      { name: "NeuralCraft", category: "ML Infrastructure", initials: "NC", color: "bg-emerald-100 text-emerald-700" },
      { name: "Anchorpoint Analytics", category: "Data Platform", initials: "AA", color: "bg-blue-100 text-blue-700" },
    ],
  },
];

export const exhibitors = [
  { name: "BrightGrid Energy", booth: "A12", category: "CleanTech", blurb: "Smart energy management tools for distributed grids." },
  { name: "Loomstack Data", booth: "B04", category: "Data Infrastructure", blurb: "Real-time data pipelines for teams without a dedicated infra org." },
  { name: "Verge Robotics", booth: "C09", category: "Robotics", blurb: "Modular robotics for warehouse and last-mile logistics." },
  { name: "Driftwood Payments", booth: "A07", category: "Fintech", blurb: "Cross-border payment rails built for marketplaces." },
  { name: "Kestrel HR", booth: "B11", category: "HR Tech", blurb: "People analytics and performance tooling for growing teams." },
  { name: "Crestline Logistics", booth: "C02", category: "Supply Chain", blurb: "Visibility software for multi-modal freight networks." },
  { name: "Hatchwell Studio", booth: "A15", category: "Developer Tools", blurb: "Low-code internal tools for engineering teams." },
  { name: "Solace Health", booth: "B08", category: "HealthTech", blurb: "Remote patient monitoring for chronic care programs." },
  { name: "Pinecrest Edu", booth: "C14", category: "EdTech", blurb: "Adaptive learning paths for technical upskilling at scale." },
  { name: "Lumen Mobility", booth: "A03", category: "Mobility", blurb: "Fleet management software for EV charging networks." },
  { name: "Wovenly Commerce", booth: "B17", category: "E-commerce", blurb: "Headless storefront infrastructure for D2C brands." },
  { name: "Granite Analytics", booth: "C06", category: "Business Intelligence", blurb: "Self-serve BI for teams that have outgrown spreadsheets." },
];
