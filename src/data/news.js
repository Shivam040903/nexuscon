// Dummy news & updates data 

export const news = [
  {
    id: "dates-venue-confirmed",
    date: "2026-01-15",
    category: "Announcement",
    title: "NexusCon 2026 Dates & Venue Confirmed",
    excerpt: "We're heading back to Jaipur. Mark your calendars for August 12–14, 2026 at the Jaipur Exhibition & Convention Centre.",
    content: "After a record-breaking third edition, NexusCon returns for 2026 with three full days of programming at the Jaipur Exhibition & Convention Centre (JECC). This year's venue offers more breakout space, a larger expo floor, and a dedicated workshop wing to handle the growing demand for hands-on sessions. Ticket tiers and the speaker call for proposals open next month.",
  },
  {
    id: "ananya-keynote",
    date: "2026-03-03",
    category: "Speaker",
    title: "Ananya Krishnan to Deliver Opening Keynote",
    excerpt: "Veridian Labs' Chief AI Officer joins NexusCon to open the summit with a look at where applied AI is headed next.",
    content: "We're thrilled to announce Ananya Krishnan, Chief AI Officer at Veridian Labs, will open this year's program with a keynote on the next decade of applied AI. Ananya will also close out the summit on Day 3, giving attendees a full-circle view of the conversation across all three days.",
  },
  {
    id: "early-bird-live",
    date: "2026-03-20",
    category: "Tickets",
    title: "Early Bird Tickets Now Live — Save 30%",
    excerpt: "Early bird pricing is live across all three pass tiers for a limited time. Grab your seat before prices go up.",
    content: "Early bird tickets are now available across Standard, Professional and VIP tiers, with savings of up to 30% off the regular price. Early bird pricing is limited and historically sells out ahead of schedule, so we'd recommend not waiting until the last week.",
  },
  {
    id: "new-workshops",
    date: "2026-04-18",
    category: "Program",
    title: "Six New Hands-on Workshops Added to Day 2",
    excerpt: "Based on attendee requests, we've expanded the workshop track with sessions on generative AI pipelines, design systems and more.",
    content: "The most common piece of feedback from last year's attendees was simple: more hands-on time, less sitting and listening. We've responded by adding six new workshops to Day 2's schedule, including a build-along generative AI pipeline session and a design systems workshop with Studio Aperture's Emma Whitfield.",
  },
  {
    id: "title-sponsor-returns",
    date: "2026-05-05",
    category: "Sponsors",
    title: "Veridian Labs Returns as Title Sponsor",
    excerpt: "Veridian Labs is back for a second year as our Title Sponsor, supporting this year's expanded AI programming.",
    content: "We're glad to confirm Veridian Labs as Title Sponsor for NexusCon 2026. Their continued support helps keep ticket prices accessible while we expand the program, and their team will be running a dedicated booth and two workshop slots on the expo floor.",
  },
  {
    id: "partner-hotels",
    date: "2026-05-22",
    category: "Logistics",
    title: "Travel & Stay: Partner Hotels Near JECC Announced",
    excerpt: "We've negotiated discounted rates with five hotels near the venue, with shuttle service included for all stays.",
    content: "Getting to and from JECC just got easier. We've partnered with five hotels within a 15-minute drive of the venue, each offering discounted NexusCon rates and a complimentary shuttle running on all three event days. Booking links and rates are live on the Venue page.",
  },
  {
    id: "app-launch",
    date: "2026-06-10",
    category: "Logistics",
    title: "NexusCon Companion App Launches for Attendees",
    excerpt: "Build your personal agenda, get session reminders and connect with other attendees through this year's companion app.",
    content: "This year's companion app lets you build a personal schedule across all three days, get push reminders before sessions start, and browse attendee profiles to plan meetups on the expo floor. Download links will be emailed to all confirmed ticket holders closer to the event.",
  },
  {
    id: "final-lineup",
    date: "2026-07-02",
    category: "Program",
    title: "Final Speaker Lineup Released — 40+ Sessions Across 3 Days",
    excerpt: "The full schedule is live, covering AI, cloud, product, design, security and startups across keynotes, panels and workshops.",
    content: "The final program is now live on the Schedule page, with over 40 sessions spread across six tracks. Whether you're tracking AI and infrastructure or product and design, there's a full day's worth of relevant programming waiting for you — and the app makes it easy to build a plan ahead of time.",
  },
];

export const getNewsById = (id) => news.find((n) => n.id === id);
