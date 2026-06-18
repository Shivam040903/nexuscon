// Dummy venue, ticket and FAQ data 

export const venue = {
  name: "Jaipur Exhibition & Convention Centre (JECC)",
  address: "Sitapura Industrial Area, Tonk Road, Jaipur, Rajasthan 302022",
  mapQuery: "Jaipur Exhibition and Convention Centre Sitapura Jaipur",
  halls: [
    { name: "Grand Hall", use: "Keynotes & closing ceremony", capacity: "2,000 seats" },
    { name: "Hall A", use: "Breakout talks & panels", capacity: "400 seats" },
    { name: "Hall B", use: "Hands-on workshops", capacity: "200 seats" },
    { name: "Hall C", use: "Breakout talks & panels", capacity: "300 seats" },
    { name: "Expo Hall", use: "Sponsor & exhibitor floor", capacity: "120 booths" },
    { name: "Sky Lounge", use: "Evening networking events", capacity: "500 guests" },
  ],
  transport: [
    { label: "Jaipur International Airport", detail: "18 km away, approx. 35 minutes by road" },
    { label: "Jaipur Junction Railway Station", detail: "14 km away, approx. 25 minutes by road" },
    { label: "Shuttle Service", detail: "Complimentary shuttles run from all five partner hotels on all three event days" },
    { label: "On-site Parking", detail: "Parking available for up to 1,500 vehicles, included with every pass" },
  ],
  hotels: [
    { name: "The Sitapura Grand", distance: "0.8 km from venue", tier: "Premium", note: "Discounted NexusCon rate, shuttle included" },
    { name: "Pink City Suites", distance: "2.1 km from venue", tier: "Premium", note: "Discounted NexusCon rate, shuttle included" },
    { name: "Tonk Road Business Hotel", distance: "3.4 km from venue", tier: "Standard", note: "Discounted NexusCon rate, shuttle included" },
    { name: "Sitapura Inn & Suites", distance: "1.6 km from venue", tier: "Standard", note: "Discounted NexusCon rate, shuttle included" },
    { name: "Heritage Tonk Residency", distance: "4.7 km from venue", tier: "Budget", note: "Discounted NexusCon rate, shuttle included" },
  ],
};

export const faqs = [
  {
    question: "How does check-in and badge collection work?",
    answer: "Badge collection opens at 8:00 AM on Day 1 at the Main Foyer registration desk. Bring a valid photo ID and your ticket confirmation email, either printed or on your phone. Returning for Day 2 or 3, you can enter directly with the badge from Day 1.",
  },
  {
    question: "Is there a dress code?",
    answer: "Business casual is the norm for all three days. The Day 2 Gala Dinner suggests black-tie optional, but it's entirely your call — plenty of attendees come straight from the conference floor.",
  },
  {
    question: "What food options are available?",
    answer: "Lunch is included with every pass on all three days, with dedicated vegetarian, non-vegetarian, vegan and Jain food counters. Coffee, tea and snacks are available throughout the day near each hall.",
  },
  {
    question: "Is the venue accessible?",
    answer: "Yes. JECC is fully wheelchair accessible, including ramps, accessible restrooms and reserved seating in every hall. Sign language interpretation is available on request — email accessibility@nexuscon.example two weeks ahead of the event.",
  },
  {
    question: "Will sessions be recorded?",
    answer: "Most keynote and breakout sessions are recorded and made available to Professional and VIP pass holders within two weeks of the event. Workshops are not recorded to keep the hands-on format effective.",
  },
  {
    question: "Is Wi-Fi available throughout the venue?",
    answer: "Yes, complimentary high-speed Wi-Fi covers all halls, the expo floor and the Sky Lounge. Network details are printed on the back of your badge.",
  },
  {
    question: "Can I bring a guest who isn't registered?",
    answer: "All attendees, including guests, need a valid pass to enter the venue. Day passes are available at a reduced rate if someone wants to join for a single day.",
  },
];

export const tickets = [
  {
    name: "Standard",
    price: "₹4,999",
    period: "per attendee",
    popular: false,
    features: [
      "Access to all keynotes & breakout sessions",
      "Full expo floor access",
      "Conference kit & badge",
      "Lunch included, all 3 days",
      "Session slides shared post-event",
    ],
  },
  {
    name: "Professional",
    price: "₹9,999",
    period: "per attendee",
    popular: true,
    features: [
      "Everything in Standard",
      "Access to all hands-on workshops",
      "Welcome reception & networking mixer entry",
      "Session recordings for 30 days post-event",
      "Priority seating in Grand Hall",
    ],
  },
  {
    name: "VIP",
    price: "₹19,999",
    period: "per attendee",
    popular: false,
    features: [
      "Everything in Professional",
      "NexusCon Gala Dinner invite",
      "1:1 speaker meet & greet slots",
      "VIP lounge access all 3 days",
      "Dedicated concierge support",
      "Premium swag box",
    ],
  },
];

export const stats = [
  { value: "12,000+", label: "Attendees expected" },
  { value: "40+", label: "Sessions across 3 days" },
  { value: "60+", label: "Speakers & panelists" },
  { value: "80+", label: "Sponsors & exhibitors" },
];
