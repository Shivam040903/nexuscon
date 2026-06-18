// Dummy schedule data 

export const days = [
  { id: 1, date: "Wed, Aug 12, 2026", label: "Day 1", theme: "Foundations & Vision" },
  { id: 2, date: "Thu, Aug 13, 2026", label: "Day 2", theme: "Build & Scale" },
  { id: 3, date: "Fri, Aug 14, 2026", label: "Day 3", theme: "What's Next" },
];

// type: keynote | talk | panel | workshop | break | networking
export const sessions = [
  // Day 1
  { id: "d1-1", day: 1, start: "09:00", end: "09:30", title: "Registration & Morning Coffee", room: "Main Foyer", type: "break", track: null, speakers: [] },
  { id: "d1-2", day: 1, start: "09:30", end: "10:00", title: "Opening Ceremony & Welcome Address", room: "Grand Hall", type: "keynote", track: null, speakers: [] },
  { id: "d1-3", day: 1, start: "10:00", end: "11:00", title: "Keynote: The Next Decade of Applied AI", room: "Grand Hall", type: "keynote", track: "ai", speakers: ["ananya-krishnan"], description: "A look at how applied AI moves from pilot projects to systems that run entire products, and what that means for teams building today." },
  { id: "d1-4", day: 1, start: "11:00", end: "11:20", title: "Networking Break", room: "Expo Foyer", type: "break", track: null, speakers: [] },
  { id: "d1-5", day: 1, start: "11:20", end: "12:10", title: "Panel: Scaling Cloud Infra for the AI Era", room: "Hall A", type: "panel", track: "cloud", speakers: ["marcus-chen", "vikram-rathore"], description: "Two infrastructure leaders compare notes on cost, reliability and the new demands AI workloads place on cloud platforms." },
  { id: "d1-6", day: 1, start: "12:10", end: "13:00", title: "Workshop: Designing Trustworthy AI Products", room: "Hall B", type: "workshop", track: "ai", speakers: ["sophia-lindgren"], description: "A hands-on session on building user trust into AI features, from disclosure patterns to graceful failure states." },
  { id: "d1-7", day: 1, start: "13:00", end: "14:00", title: "Lunch & Exhibitor Floor", room: "Expo Hall", type: "break", track: null, speakers: [] },
  { id: "d1-8", day: 1, start: "14:00", end: "14:50", title: "Talk: Zero-Trust Security for Modern Startups", room: "Hall A", type: "talk", track: "security", speakers: ["daniel-osei"], description: "Why zero-trust isn't just an enterprise concern, and how small teams can adopt the parts that matter most early." },
  { id: "d1-9", day: 1, start: "14:50", end: "15:40", title: "Talk: From Idea to Term Sheet", room: "Hall C", type: "talk", track: "startup", speakers: ["arjun-mehta"], description: "A practical walkthrough of what investors actually look for in the first six months of a company's life." },
  { id: "d1-10", day: 1, start: "15:40", end: "16:00", title: "Networking Break", room: "Expo Foyer", type: "break", track: null, speakers: [] },
  { id: "d1-11", day: 1, start: "16:00", end: "17:00", title: "Fireside Chat: Building Products People Love", room: "Grand Hall", type: "panel", track: "product", speakers: ["priya-deshmukh", "naledi-mokoena"], description: "An open conversation on prioritization, user research and the metrics that actually predict retention." },
  { id: "d1-12", day: 1, start: "17:00", end: "18:00", title: "Welcome Reception & Networking Mixer", room: "Sky Lounge", type: "networking", track: null, speakers: [] },

  // Day 2
  { id: "d2-1", day: 2, start: "09:30", end: "10:00", title: "Morning Coffee", room: "Main Foyer", type: "break", track: null, speakers: [] },
  { id: "d2-2", day: 2, start: "10:00", end: "10:50", title: "Keynote: Designing for a Billion Users", room: "Grand Hall", type: "keynote", track: "design", speakers: ["riya-kapoor"], description: "Lessons from designing interfaces that work for users on low-end devices, patchy networks and unfamiliar interaction patterns." },
  { id: "d2-3", day: 2, start: "10:50", end: "11:40", title: "Workshop: Hands-on with Generative AI Pipelines", room: "Hall B", type: "workshop", track: "ai", speakers: ["aisha-rahman"], description: "Bring a laptop — this session walks through building a small production-ready generation pipeline from scratch." },
  { id: "d2-4", day: 2, start: "11:40", end: "12:00", title: "Networking Break", room: "Expo Foyer", type: "break", track: null, speakers: [] },
  { id: "d2-5", day: 2, start: "12:00", end: "12:50", title: "Panel: The CISO's Playbook for 2026", room: "Hall A", type: "panel", track: "security", speakers: ["karthik-subramaniam", "daniel-osei"], description: "Two security leaders on budget, board conversations and where to focus a lean security team's attention this year." },
  { id: "d2-6", day: 2, start: "12:50", end: "13:50", title: "Lunch & Exhibitor Floor", room: "Expo Hall", type: "break", track: null, speakers: [] },
  { id: "d2-7", day: 2, start: "13:50", end: "14:40", title: "Talk: Developer Experience as a Growth Lever", room: "Hall A", type: "talk", track: "cloud", speakers: ["lucas-ferreira"], description: "Why the best growth channel for infrastructure products is often the five minutes after a developer's first sign-up." },
  { id: "d2-8", day: 2, start: "14:40", end: "15:30", title: "Talk: Metrics that Matter — Product Analytics Done Right", room: "Hall C", type: "talk", track: "product", speakers: ["naledi-mokoena"], description: "A field guide to picking the handful of metrics that actually move decisions, and ignoring the dashboards that don't." },
  { id: "d2-9", day: 2, start: "15:30", end: "15:50", title: "Networking Break", room: "Expo Foyer", type: "break", track: null, speakers: [] },
  { id: "d2-10", day: 2, start: "15:50", end: "16:40", title: "Panel: Raising in a Tighter Market", room: "Hall C", type: "panel", track: "startup", speakers: ["rohan-bhatia", "arjun-mehta"], description: "What's changed in fundraising conversations over the last two years, and what founders should do differently." },
  { id: "d2-11", day: 2, start: "16:40", end: "17:30", title: "Workshop: Design Systems at Scale", room: "Hall B", type: "workshop", track: "design", speakers: ["emma-whitfield"], description: "How to build a design system that grows with your product instead of becoming the thing everyone routes around." },
  { id: "d2-12", day: 2, start: "19:00", end: "21:30", title: "NexusCon Gala Dinner", room: "Sky Lounge", type: "networking", track: null, speakers: [], description: "A ticketed evening event for VIP and Professional pass holders. Black-tie optional." },

  // Day 3
  { id: "d3-1", day: 3, start: "09:30", end: "10:00", title: "Morning Coffee", room: "Main Foyer", type: "break", track: null, speakers: [] },
  { id: "d3-2", day: 3, start: "10:00", end: "10:50", title: "Keynote: Closing the Loop — AI Agents in Production", room: "Grand Hall", type: "keynote", track: "ai", speakers: ["sophia-lindgren"], description: "What changes when autonomous agents move from demos to systems with real users, budgets and failure modes." },
  { id: "d3-3", day: 3, start: "10:50", end: "11:40", title: "Talk: Multi-Cloud Without the Headaches", room: "Hall A", type: "talk", track: "cloud", speakers: ["vikram-rathore"], description: "A pragmatic take on when multi-cloud is worth the operational overhead, and when it isn't." },
  { id: "d3-4", day: 3, start: "11:40", end: "12:00", title: "Networking Break", room: "Expo Foyer", type: "break", track: null, speakers: [] },
  { id: "d3-5", day: 3, start: "12:00", end: "12:50", title: "Workshop: From Prototype to Pricing Page", room: "Hall B", type: "workshop", track: "product", speakers: ["priya-deshmukh"], description: "A working session on turning an early prototype into something you can confidently put a price on." },
  { id: "d3-6", day: 3, start: "12:50", end: "13:50", title: "Lunch & Exhibitor Floor", room: "Expo Hall", type: "break", track: null, speakers: [] },
  { id: "d3-7", day: 3, start: "13:50", end: "14:40", title: "Panel: The Founders' Roundtable", room: "Grand Hall", type: "panel", track: "startup", speakers: ["arjun-mehta", "rohan-bhatia", "karthik-subramaniam"], description: "Three perspectives — investor, operator and security leader — on what actually breaks early-stage companies." },
  { id: "d3-8", day: 3, start: "14:40", end: "15:10", title: "Lightning Talks: Community Showcase", room: "Expo Stage", type: "talk", track: null, speakers: [], description: "Five-minute talks from the NexusCon community, selected from this year's open call for speakers." },
  { id: "d3-9", day: 3, start: "15:10", end: "15:30", title: "Networking Break", room: "Expo Foyer", type: "break", track: null, speakers: [] },
  { id: "d3-10", day: 3, start: "15:30", end: "16:15", title: "Closing Keynote: What We Build Next", room: "Grand Hall", type: "keynote", track: "ai", speakers: ["ananya-krishnan"], description: "A closing look at the threads running through this year's program, and the open problems worth working on next." },
  { id: "d3-11", day: 3, start: "16:15", end: "17:00", title: "Closing Ceremony & Awards", room: "Grand Hall", type: "keynote", track: null, speakers: [], description: "Recognizing this year's standout community talks, exhibitors and volunteers before we close out the summit." },
  { id: "d3-12", day: 3, start: "17:00", end: "18:30", title: "Farewell Networking Hour", room: "Expo Foyer", type: "networking", track: null, speakers: [] },
];

export const getSessionsByDay = (day) => sessions.filter((s) => s.day === day).sort((a, b) => a.start.localeCompare(b.start));
