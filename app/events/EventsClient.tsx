"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Award,
  ArrowRight,
  X,
  Search,
  CheckCircle2,
  Cpu,
  GraduationCap,
  Trophy,
  Sparkles,
  Plane,
  Radio,
  Share2,
  ExternalLink,
  ChevronRight,
  Filter,
} from "lucide-react";

type EventCategory = "All" | "Competitions" | "Workshops" | "Webinars" | "Expos";
type EventStatus = "All" | "Upcoming" | "Past";

interface EventItem {
  id: string;
  title: string;
  category: "Competitions" | "Workshops" | "Webinars" | "Expos";
  status: "Upcoming" | "Past";
  featured?: boolean;
  date: string;
  dateBadge: string;
  time: string;
  location: string;
  venueType: string;
  audience: string;
  image: string;
  badge: string;
  description: string;
  detailedDescription: string;
  highlights: string[];
  equipmentProvided: string[];
  certificateType: string;
  registrationOpen: boolean;
}

const EVENTS_DATA: EventItem[] = [
  {
    id: "nat-robotics-championship-2026",
    title: "National AI & Autonomous Robotics Championship 2026",
    category: "Competitions",
    status: "Upcoming",
    featured: true,
    date: "October 18 – 20, 2026",
    dateBadge: "OCT 18 - 20",
    time: "09:00 AM – 06:00 PM IST",
    location: "Indore Exhibition Centre, Madhya Pradesh",
    venueType: "Grand Arena & Competition Circuit",
    audience: "Grades 6–12 & Engineering Undergrads",
    image: "/events/event-championship.jpg",
    badge: "Flagship Tournament • ₹2.5L Grants",
    description:
      "India's premier autonomous robotics arena where 150+ teams compete in LiDAR SLAM navigation, tactical line-following speedways, and autonomous rover obstacle courses.",
    detailedDescription:
      "The ROBOTWALA National Championship brings together student innovators, school STEM clubs, and collegiate robotics developers from across India. Competing teams navigate high-precision hardware arenas including multi-terrain obstacle tracks, autonomous LiDAR positioning corridors, and speedway maze solvers. Includes jury evaluation by leading AI researchers and deep-tech venture mentors.",
    highlights: [
      "₹2,50,000 Total Innovation Grants & Cash Awards",
      "LiDAR & Real-time Computer Vision Arena Challenges",
      "Live Mentorship from Robotwala Core R&D Engineers",
      "National Ranking & Official Merit Laurels for Finalists",
    ],
    equipmentProvided: [
      "3D-Printed High-Traction Rover Chassis",
      "ESP32 Microcontroller Units & Dual Motor Drivers",
      "Ultrasonic & Infrared Sensor Arrays",
      "Dedicated High-Speed Pit Stations & 4K Arena Telemetry",
    ],
    certificateType: "Official National Merit & Innovation Credential",
    registrationOpen: true,
  },
  {
    id: "stem-humanoid-bootcamp-2026",
    title: "Hands-on STEM & Bipedal Robotics Boot Camp",
    category: "Workshops",
    status: "Upcoming",
    date: "November 05 – 07, 2026",
    dateBadge: "NOV 05 - 07",
    time: "10:00 AM – 04:30 PM IST",
    location: "DPS & Partner School Campuses, Indore",
    venueType: "Institutional STEM Innovation Lab",
    audience: "Students Aged 10–16 (Grades 5 to 10)",
    image: "/events/event-workshop.jpg",
    badge: "3-Day Intensive • Hardware Kit Included",
    description:
      "Experiential 3-day school boot camp where students assemble real walking bipedal robots from scratch, program micro-controllers with Python, and calibrate 8+ active sensors.",
    detailedDescription:
      "An experiential, zero-prerequisite robotics workshop designed to demystify embedded systems and mechanical kinematics for young students. Every attendee receives a physical modular robotics kit to assemble, wire, and flash with custom autonomous behaviors such as obstacle detection, ultrasonic radar, and voice-assisted control.",
    highlights: [
      "1:8 Dedicated Student-to-Trainer Ratio",
      "Bilingual Hands-On Instruction (English & Hindi)",
      "MicroPython & Visual Block Coding Workbench",
      "Final Day Robo-Soccer & Maze Solver Exhibition",
    ],
    equipmentProvided: [
      "Modular Bipedal Chassis & Servo Actuator Packs",
      "ESP32 Wi-Fi & Bluetooth Robotics Controllers",
      "Sensor Modules (Light, Sound, Distance, Gyro)",
      "Student Software Workbench & Take-Home Code Libraries",
    ],
    certificateType: "ROBOTWALA Certified Junior Robotics Innovator Credential",
    registrationOpen: true,
  },
  {
    id: "interschool-drone-telemetry-2026",
    title: "Inter-School Drone Racing & Flight Telemetry Cup",
    category: "Competitions",
    status: "Upcoming",
    date: "December 12 – 13, 2026",
    dateBadge: "DEC 12 - 13",
    time: "08:30 AM – 05:30 PM IST",
    location: "Emerald Heights International Sports Grounds, Indore",
    venueType: "Enclosed Tactical Flight Cage & Paddock",
    audience: "School Teams (Grades 7–12)",
    image: "/events/event-drone-race.jpg",
    badge: "FPV Aerial Circuit • DGCA Certified",
    description:
      "High-adrenaline tactical UAV piloting tournament testing high-speed precision gate maneuvers, aerodynamics tuning, and autonomous fail-safe telemetry protocols in an electrified flight cage.",
    detailedDescription:
      "A thrilling multi-round competition combining pilot reflex with telemetry engineering. Teams calibrate drone flight controllers, monitor real-time altitude and battery telemetry metrics, and compete in both manual FPV (First Person View) obstacle circuits and autonomous waypoint programming challenges.",
    highlights: [
      "Electrified 30ft High Safety Flight Cage Arena",
      "DGCA Flight Safety Certified Instructors & Referees",
      "Real-time Telemetry Data & Lap Timing Sensors",
      "State Championship Trophies & Maker Grants",
    ],
    equipmentProvided: [
      "Calibrated Training Quadcopters & FPV Goggles",
      "Telemetry Transceivers & Diagnostic Laptops",
      "Rapid Battery Charging Hubs & Spares",
      "Complete Replacement Propellers & Toolkits",
    ],
    certificateType: "State Drone League Trophy & Pilot Accreditation",
    registrationOpen: true,
  },
  {
    id: "lucy-ai-webinar-2026",
    title: "Masterclass: Conversational AI & LUCY Humanoid Architecture",
    category: "Webinars",
    status: "Upcoming",
    date: "November 22, 2026",
    dateBadge: "NOV 22",
    time: "05:00 PM – 07:00 PM IST",
    location: "Virtual Interactive Studio (Live Broadcast)",
    venueType: "Live High-Definition Stream & Simulator",
    audience: "Educators, Students, Developers & Researchers",
    image: "/lucy-robot.jpg",
    badge: "Live R&D Deep-Dive • Free Access",
    description:
      "Exclusive technical masterclass with Robotwala's R&D engineers dissecting natural language processing, speech synthesis, and real-time computer vision powering India's premier humanoid android.",
    detailedDescription:
      "Get behind-the-scenes engineering access to LUCY, India's groundbreaking bilingual conversational humanoid android. ROBOTWALA's lead AI researchers will walk through end-to-end edge inference pipelines, speech recognition algorithms in diverse ambient settings, and synchronizing servo neck-facial kinematics with generated speech responses.",
    highlights: [
      "Live Architectural Breakdown of LUCY Humanoid Android",
      "Interactive Q&A Session with Lead AI Engineers",
      "Open-Source Code Walkthrough for Audio-Visual Pipeline",
      "Free Verified Digital Masterclass Credential",
    ],
    equipmentProvided: [
      "Cloud Virtual Simulator Access",
      "Downloadable Python Voice Pipeline Notebooks",
      "Full Webinar Recording & Slide Deck Archive",
    ],
    certificateType: "Verified Digital Masterclass Completion Certificate",
    registrationOpen: true,
  },
  {
    id: "atl-educator-summit-2026",
    title: "Next-Gen Atal Tinkering Lab Educator Training Summit",
    category: "Workshops",
    status: "Past",
    date: "August 14 – 15, 2026",
    dateBadge: "AUG 14 - 15",
    time: "09:30 AM – 05:00 PM IST",
    location: "SGSITS Auditorium & Robotics Labs, Indore",
    venueType: "Institutional Technology Complex",
    audience: "120+ School STEM Educators & ATL In-charges",
    image: "/about-team.jpg",
    badge: "120+ Educators Trained • NEP-2020",
    description:
      "Capacity-building faculty summit equipping 120+ school educators with hands-on pedagogy for IoT telemetry, 3D rapid prototyping, and NEP-2020 aligned robotics curriculum implementation.",
    detailedDescription:
      "Organized to empower institutional teachers to maximize their school Atal Tinkering Labs and robotics facilities. Educators underwent practical sessions in rapid 3D printer slicing, troubleshooting sensor modules, structuring year-long student hackathons, and preparing teams for national competitions.",
    highlights: [
      "120+ Educators Certified across 60+ Campuses",
      "NEP-2020 Aligned Practical Robotics Curriculum",
      "Hands-on 3D Prototyping & Sensor Calibration",
      "Turnkey Lesson Plans & Classroom Problem Sets",
    ],
    equipmentProvided: [
      "Educator Starter Kits with 20+ Sensor Modules",
      "Curriculum Binders & Practical Evaluation Rubrics",
      "Year-Long Support Access via Teacher Portal",
    ],
    certificateType: "ROBOTWALA Master STEM Educator Accreditation",
    registrationOpen: false,
  },
  {
    id: "smart-city-automation-expo-2026",
    title: "Smart City Automation & Industrial Robotics Expo",
    category: "Expos",
    status: "Past",
    date: "July 28 – 29, 2026",
    dateBadge: "JUL 28 - 29",
    time: "10:00 AM – 07:00 PM IST",
    location: "Brilliant Convention Centre, Indore",
    venueType: "Exhibition Pavilions 2 & 3",
    audience: "Industry Delegates, Researchers & Public",
    image: "/robot-collab.jpg",
    badge: "5,000+ Attendees • Live Tech Showcase",
    description:
      "Public tech exposition exhibiting multi-axis robotic arms, automated traffic junction control algorithms, and industrial telemetry systems deployed across 20+ municipal zones.",
    detailedDescription:
      "ROBOTWALA showcased its smart traffic controller deployments alongside multi-axis pick-and-place robotic systems. Over 5,000 visitors, including municipal authorities, engineering deans, and young robotics students, experienced live demonstrations of computer-vision vehicle classification and smart density management.",
    highlights: [
      "Over 5,000 Academic & Industrial Visitors",
      "Live Demonstration of Smart Traffic Telemetry",
      "Keynote Addresses by Civic & Automation Pioneers",
      "Interactive Student Demonstration Alley",
    ],
    equipmentProvided: [
      "Full-Scale Miniature Traffic Model Grids",
      "Robotic Arm Workcells with Vision Guidance",
      "Live Cloud Telemetry Dashboards on 4K Displays",
    ],
    certificateType: "Exhibitor & Contributor Commendation",
    registrationOpen: false,
  },
  {
    id: "state-young-innovators-hackathon",
    title: "State-Level Young Innovators Robotics Hackathon",
    category: "Competitions",
    status: "Past",
    date: "June 10 – 11, 2026",
    dateBadge: "JUN 10 - 11",
    time: "36-Hour Continuous Sprint",
    location: "DAVV University Campus, Indore",
    venueType: "University Tech Park Arena",
    audience: "High School & College Innovators",
    image: "/kit-robotics-car.jpg",
    badge: "42 Finalist Teams • Incubation Grants",
    description:
      "36-hour non-stop prototyping sprint tackling real-world challenges in automated agricultural crop management, hazardous waste segregation, and disaster search & rescue.",
    detailedDescription:
      "42 shortlisted teams competed around the clock with rapid access to ROBOTWALA's inventory of sensors, motors, microcontrollers, and on-site 3D printers. The top 3 winning projects were awarded prototype manufacturing grants and direct incubation mentorship with ROBOTWALA.",
    highlights: [
      "42 Shortlisted Finalist Teams Competing",
      "24/7 Hardware Lab & Component Dispensary Access",
      "Direct Incubation Grants for Top 3 Prototypes",
      "Industry Mentors Available Throughout the Night",
    ],
    equipmentProvided: [
      "Free Access to 100+ Hardware SKUs",
      "Soldering & Rapid Prototyping Workstations",
      "Continuous Power & High-Speed Wireless Mesh",
    ],
    certificateType: "State Innovation Winner & Finalist Laurels",
    registrationOpen: false,
  },
  {
    id: "quadcopter-aerodynamics-webinar",
    title: "Foundations of Quadcopter Aerodynamics & UAV Law",
    category: "Webinars",
    status: "Past",
    date: "May 19, 2026",
    dateBadge: "MAY 19",
    time: "06:00 PM – 08:00 PM IST",
    location: "Virtual Interactive Session",
    venueType: "Live Virtual Masterclass",
    audience: "Aspiring Young Aviators & STEM Enthusiasts",
    image: "/splash-cinematic-bg.jpg",
    badge: "1,450+ Attendees • Flight Simulator",
    description:
      "Interactive webinar on quadcopter flight dynamics, rotor thrust calculation, Indian airspace regulations, and hands-on simulation setup using open-source telemetry tools.",
    detailedDescription:
      "Over 1,450 students and teachers logged in for this primer on drone aerodynamics. The session covered thrust-to-weight physics, PID controller tuning in software, and safe flying guidelines aligned with the Ministry of Civil Aviation and DGCA drone rules.",
    highlights: [
      "1,450+ Active Live Attendees Across India",
      "Software Flight Simulator Walkthrough",
      "DGCA Regulatory Compliance Checklist Provided",
      "Interactive Aircraft Aerodynamics Q&A",
    ],
    equipmentProvided: [
      "Open-Source Simulator Config Files",
      "Aerodynamic Calculation Spreadsheets",
      "Official DGCA Drone Pilot Roadmap Guide",
    ],
    certificateType: "Digital Aviation & UAV Foundations Certificate",
    registrationOpen: false,
  },
];

const CATEGORIES: { label: EventCategory; name: string; icon: any }[] = [
  { label: "All", name: "All Events", icon: Sparkles },
  { label: "Competitions", name: "Competitions", icon: Trophy },
  { label: "Workshops", name: "School Workshops", icon: GraduationCap },
  { label: "Webinars", name: "Webinars & Masterclasses", icon: Radio },
  { label: "Expos", name: "Tech Expos", icon: Cpu },
];

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState<EventCategory>("All");
  const [activeStatus, setActiveStatus] = useState<EventStatus>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  // Filter logic
  const filteredEvents = useMemo(() => {
    return EVENTS_DATA.filter((event) => {
      // Category filter
      if (activeCategory !== "All" && event.category !== activeCategory) {
        return false;
      }
      // Status filter
      if (activeStatus !== "All" && event.status !== activeStatus) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchesTitle = event.title.toLowerCase().includes(q);
        const matchesLocation = event.location.toLowerCase().includes(q);
        const matchesDesc = event.description.toLowerCase().includes(q);
        const matchesBadge = event.badge.toLowerCase().includes(q);
        if (!matchesTitle && !matchesLocation && !matchesDesc && !matchesBadge) {
          return false;
        }
      }
      return true;
    });
  }, [activeCategory, activeStatus, searchQuery]);

  const featuredEvent = useMemo(() => {
    return EVENTS_DATA.find((e) => e.featured) || EVENTS_DATA[0];
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#030303] text-white flex flex-col selection:bg-cyan-400 selection:text-slate-950">
      {/* ── 1. HERO SECTION WITH CINEMATIC LIGHTING ── */}
      <section className="relative pt-10 pb-14 md:pt-14 md:pb-20 border-b border-slate-800/80 overflow-hidden">
        {/* Subtle Ambient Cyan Backdrops */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[90px] bg-gradient-to-b from-cyan-500/20 via-blue-600/10 to-transparent blur-[45px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-cyan-500/[0.08] blur-[160px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Eyebrow Text (Clean & Minimal, No Border, No Dot) */}
          <p className="font-sans font-medium text-xs uppercase tracking-widest text-cyan-400 mb-4">
            ROBOTWALA GATHERINGS &amp; ARENAS
          </p>

          {/* Main Headline */}
          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-[-0.035em] text-[#F5F5F5] leading-[1.08] mb-6">
            UPCOMING &amp;{" "}
            <span className="text-cyan-400 drop-shadow-[0_0_35px_rgba(6,182,212,0.45)]">
              PAST EVENTS
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-sans font-normal text-base sm:text-lg md:text-xl text-[#A1A1AA] max-w-3xl mx-auto leading-relaxed">
            Experience high-octane robotics championships, immersive STEM school boot camps, and deep-tech AI expos engineered by ROBOTWALA to spark India&apos;s autonomous revolution.
          </p>

          {/* Key Metrics Bar */}
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { val: "50+", label: "School Boot Camps" },
              { val: "25+", label: "Championship Arenas" },
              { val: "15,000+", label: "Students Mentored" },
              { val: "₹2.5L+", label: "Innovation Grants" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#0b111e]/90 border border-slate-700/60 rounded-2xl p-4 sm:p-5 backdrop-blur-md text-center hover:border-cyan-400/40 transition-colors"
              >
                <div className="font-heading font-bold text-2xl sm:text-3xl text-cyan-300 mb-1">
                  {stat.val}
                </div>
                <div className="font-sans text-xs text-[#A1A1AA] font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. FEATURED MEGA EVENT SPOTLIGHT BANNER ── */}
      {featuredEvent && (
        <section className="py-12 border-b border-slate-800/80 bg-[#030303]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#0e1626] to-[#080d17] border border-cyan-500/40 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(6,182,212,0.15)] group">
              {/* Top Cyan Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
                {/* Visual Thumbnail */}
                <div className="lg:col-span-6 relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden bg-black border border-slate-700/60 shadow-xl">
                  <img
                    src={featuredEvent.image}
                    alt={featuredEvent.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080d17] via-black/25 to-transparent" />

                  {/* Overlaid Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-400/40 text-[11px] font-semibold uppercase tracking-widest text-cyan-300">
                      FLAGSHIP MEGA ARENA
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                    <div className="flex items-center gap-2 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                      <span className="font-semibold text-white">Registrations Open</span>
                    </div>
                    <span className="bg-cyan-400 text-slate-950 font-bold px-3 py-1.5 rounded-lg shadow-md">
                      {featuredEvent.dateBadge}
                    </span>
                  </div>
                </div>

                {/* Content Info */}
                <div className="lg:col-span-6 flex flex-col justify-center space-y-4 sm:space-y-5">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-400">
                      NATIONAL SHOWCASE
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="text-xs text-slate-400">{featuredEvent.badge}</span>
                  </div>

                  <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#F5F5F5] uppercase tracking-tight leading-tight group-hover:text-cyan-300 transition-colors">
                    {featuredEvent.title}
                  </h2>

                  <p className="font-sans text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                    {featuredEvent.description}
                  </p>

                  {/* Meta Pills */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-sans text-slate-300">
                    <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.08] p-3 rounded-xl">
                      <Calendar className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="truncate">{featuredEvent.date}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.08] p-3 rounded-xl">
                      <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="truncate">{featuredEvent.location}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-4">
                    <button
                      onClick={() => setSelectedEvent(featuredEvent)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-cyan-400 text-slate-950 font-sans font-bold text-sm uppercase tracking-wider hover:bg-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all cursor-pointer"
                    >
                      <span>Register Team Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setSelectedEvent(featuredEvent)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0b111e] hover:bg-[#141e33] border border-slate-700/80 hover:border-cyan-400/50 text-[#F5F5F5] font-sans font-semibold text-sm transition-all cursor-pointer"
                    >
                      <span>View Arena Guidelines</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 3. FILTER BAR WITH REAL TIME INTERACTION ── */}
      <section className="py-6 border-b border-slate-800/80 bg-[#030303]/95 sticky top-16 sm:top-20 z-30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.label;
                const IconComponent = cat.icon;
                return (
                  <button
                    key={cat.label}
                    onClick={() => setActiveCategory(cat.label)}
                    className={`font-sans px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 whitespace-nowrap ${isActive
                        ? "bg-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.45)]"
                        : "bg-[#0b111e] border border-slate-700/60 text-[#A1A1AA] hover:border-cyan-400/50 hover:text-[#F5F5F5]"
                      }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Timeline Filter & Search Input */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Timeline Toggle: All / Upcoming / Past */}
              <div className="inline-flex bg-[#0b111e] border border-slate-700/60 rounded-xl p-1">
                {(["All", "Upcoming", "Past"] as EventStatus[]).map((status) => {
                  const isActive = activeStatus === status;
                  return (
                    <button
                      key={status}
                      onClick={() => setActiveStatus(status)}
                      className={`font-sans text-xs font-semibold px-3.5 py-1.5 rounded-lg uppercase tracking-wider transition-all cursor-pointer ${isActive
                          ? "bg-cyan-400 text-slate-950 font-bold"
                          : "text-[#A1A1AA] hover:text-white"
                        }`}
                    >
                      {status}
                    </button>
                  );
                })}
              </div>

              {/* Search Bar */}
              <div className="relative min-w-[240px]">
                <Search className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search events, city, tech..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full font-sans text-xs bg-[#0b111e] border border-slate-700/60 rounded-xl pl-9 pr-4 py-2.5 text-white placeholder-[#A1A1AA]/60 focus:outline-none focus:border-cyan-400 transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
                    aria-label="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. EVENT GRID WITH INDUSTRY-LEVEL MEDIA CARDS ── */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        {/* Results Counter Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
          <div className="font-sans text-xs uppercase tracking-widest text-[#A1A1AA] font-medium flex items-center gap-2">
            <span>
              Showing <strong className="text-cyan-300">{filteredEvents.length}</strong> event{filteredEvents.length !== 1 ? "s" : ""}
            </span>
            {activeCategory !== "All" && (
              <span className="text-cyan-400">— {activeCategory}</span>
            )}
            {activeStatus !== "All" && (
              <span className="text-slate-400">({activeStatus})</span>
            )}
          </div>

          {(activeCategory !== "All" || activeStatus !== "All" || searchQuery) && (
            <button
              onClick={() => {
                setActiveCategory("All");
                setActiveStatus("All");
                setSearchQuery("");
              }}
              className="font-sans text-xs text-cyan-400 hover:text-cyan-300 uppercase tracking-wider font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Cards Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredEvents.map((event) => {
              const isUpcoming = event.status === "Upcoming";

              return (
                <article
                  key={event.id}
                  className="group relative bg-[#0b111e] border border-slate-700/60 rounded-3xl overflow-hidden hover:border-cyan-400/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Top Cyan Accent Strip */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-400/80 z-10" />

                  <div>
                    {/* Media Image Container */}
                    <div className="relative w-full h-52 sm:h-60 overflow-hidden bg-black">
                      <img
                        src={event.image}
                        alt={event.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080d17] via-black/30 to-transparent" />

                      {/* Top Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="font-sans px-3 py-1 rounded-full bg-[#080d17]/90 backdrop-blur-md border border-cyan-500/30 text-[10px] uppercase tracking-widest font-semibold text-cyan-300">
                          {event.category}
                        </span>
                      </div>

                      {/* Status Indicator Chip */}
                      <div className="absolute top-4 right-4">
                        <span
                          className={`font-sans px-2.5 py-1 rounded-full backdrop-blur-md text-[10px] uppercase tracking-wider font-semibold flex items-center gap-1.5 ${isUpcoming
                              ? "bg-cyan-950/80 border border-cyan-400/40 text-cyan-300"
                              : "bg-black/80 border border-slate-700 text-slate-400"
                            }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${isUpcoming ? "bg-cyan-400 animate-pulse" : "bg-slate-500"
                              }`}
                          />
                          <span>{event.status}</span>
                        </span>
                      </div>

                      {/* Bottom Date Strip */}
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 text-white font-sans text-xs font-bold uppercase tracking-wider">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{event.dateBadge}</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 space-y-3">
                      {/* Secondary Eyebrow Tag */}
                      <span className="font-sans text-[10px] uppercase tracking-[0.25em] font-semibold text-cyan-400 block">
                        {event.badge}
                      </span>

                      {/* Event Title */}
                      <h3 className="font-heading font-bold text-xl text-[#F5F5F5] uppercase tracking-wide group-hover:text-cyan-300 transition-colors leading-snug">
                        {event.title}
                      </h3>

                      {/* Description */}
                      <p className="font-sans font-normal text-xs sm:text-sm text-[#A1A1AA] leading-relaxed line-clamp-3">
                        {event.description}
                      </p>

                      {/* Location & Details Specs */}
                      <div className="pt-3 border-t border-slate-800/80 space-y-2 text-xs font-sans text-slate-300">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span className="truncate">{event.audience}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="p-6 pt-0 border-t border-slate-800/60 mt-4 flex items-center gap-3">
                    {isUpcoming ? (
                      <>
                        <button
                          onClick={() => setSelectedEvent(event)}
                          className="flex-1 py-3 px-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-sans font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all cursor-pointer text-center"
                        >
                          Register Now
                        </button>
                        <button
                          onClick={() => setSelectedEvent(event)}
                          className="py-3 px-4 rounded-xl bg-[#080d17] hover:bg-[#141e33] border border-slate-700/80 hover:border-cyan-400/50 text-[#F5F5F5] font-sans font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer"
                        >
                          Details
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => setSelectedEvent(event)}
                        className="w-full py-3 px-4 rounded-xl bg-[#080d17] hover:bg-[#141e33] border border-slate-700/80 hover:border-cyan-400/50 text-[#F5F5F5] font-sans font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer text-center"
                      >
                        View Highlights &amp; Summary
                      </button>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-28 bg-[#0b111e] border border-slate-700/60 rounded-3xl p-8">
            <Trophy className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <h3 className="font-heading font-semibold text-lg text-[#F5F5F5] uppercase tracking-wide mb-2">
              No events found matching your search
            </h3>
            <p className="font-sans text-xs text-[#A1A1AA] max-w-md mx-auto mb-6">
              Try adjusting your category pills or search keyword to view other upcoming robotics workshops and competitions.
            </p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setActiveStatus("All");
                setSearchQuery("");
              }}
              className="px-5 py-2.5 rounded-xl bg-cyan-400 text-slate-950 font-sans font-bold text-xs uppercase tracking-wider hover:bg-cyan-300 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* ── 5. INDUSTRY-GRADE INSTITUTIONAL CTA SECTION ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-20">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#0e1626] via-[#0b111e] to-[#080d17] border border-cyan-500/40 shadow-[0_30px_70px_rgba(0,0,0,0.9),0_0_40px_rgba(6,182,212,0.15)] p-8 sm:p-12 md:p-16 text-center">
          {/* Top Cyan Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[50px] bg-gradient-to-b from-cyan-500/20 to-transparent blur-[35px] pointer-events-none" />

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/40 text-[10px] uppercase tracking-widest text-cyan-300 font-semibold mb-6">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>INSTITUTIONAL PARTNERSHIPS &amp; CAMPUS DEPLOYMENTS</span>
          </div>

          {/* Bold Heading */}
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#F5F5F5] uppercase tracking-tight leading-tight max-w-3xl mx-auto mb-6">
            Want ROBOTWALA at Your{" "}
            <span className="text-cyan-400 drop-shadow-[0_0_30px_rgba(6,182,212,0.4)]">
              School or College?
            </span>
          </h2>

          {/* Description */}
          <p className="font-sans font-normal text-sm sm:text-base md:text-lg text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed mb-10">
            Empower your campus with turnkey robotics workshops, state-level hackathon arenas, and certified AI curriculum. We provide complete hardware kits, certified master trainers, and official student accreditations.
          </p>

          {/* 4 Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-10 text-left">
            {[
              {
                title: "Hardware Toolkits Provided",
                desc: "Microcontrollers, LiDAR, sensor packs, and bipedal robot chassis for all students.",
              },
              {
                title: "Certified Master Trainers",
                desc: "Experienced hardware engineers and bilingual educators deployed on-site.",
              },
              {
                title: "NEP-2020 Aligned Labs",
                desc: "Curriculum tailored for CBSE, ICSE, and university engineering accreditations.",
              },
              {
                title: "Verified Student Credentials",
                desc: "Co-branded institutional merit certificates & digital credentials for participants.",
              },
            ].map((feat, idx) => (
              <div
                key={idx}
                className="bg-white/[0.03] border border-slate-700/60 rounded-2xl p-5 backdrop-blur-md hover:border-cyan-400/40 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#F5F5F5]">
                    {feat.title}
                  </h4>
                </div>
                <p className="font-sans text-xs text-[#A1A1AA] leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?subject=Host+an+Event+at+Institution#contact-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-sans font-bold text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(6,182,212,0.45)] transition-all cursor-pointer"
            >
              <span>Collaborate With Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/collaborations"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#0b111e] hover:bg-[#141e33] border border-slate-700/80 hover:border-cyan-400/50 text-[#F5F5F5] font-sans font-semibold text-sm uppercase tracking-wider transition-all cursor-pointer"
            >
              <span>Explore Labs &amp; CoE Setup</span>
            </Link>
          </div>

          {/* Institutional Contact Strip */}
          <div className="mt-10 pt-6 border-t border-slate-800 text-xs font-sans text-[#A1A1AA]">
            Direct institutional desk:{" "}
            <a
              href="mailto:contact@robotwala.com"
              className="text-cyan-400 hover:underline font-semibold"
            >
              contact@robotwala.com
            </a>{" "}
            • Phone:{" "}
            <a
              href="tel:+919981181898"
              className="text-cyan-400 hover:underline font-semibold"
            >
              +91 99811 81898
            </a>
          </div>
        </div>
      </section>

      {/* ── 6. INTERACTIVE EVENT DETAILS & REGISTRATION MODAL ── */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-[1100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-6 overflow-y-auto"
          onClick={() => setSelectedEvent(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-3xl w-full bg-gradient-to-b from-[#0e1626] to-[#080d17] border border-slate-700/80 rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,1)] my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

            {/* Close Button */}
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400/50 transition-all cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header Image */}
            <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-black">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1626] via-black/40 to-transparent" />

              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-400/40 text-[10px] uppercase tracking-widest font-semibold text-cyan-300">
                    {selectedEvent.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-widest font-semibold text-white">
                    {selectedEvent.status}
                  </span>
                </div>
                <span className="bg-cyan-400 text-slate-950 font-sans font-bold text-xs px-3 py-1 rounded-lg">
                  {selectedEvent.dateBadge}
                </span>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold block mb-1">
                  {selectedEvent.badge}
                </span>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#F5F5F5] uppercase tracking-wide leading-tight">
                  {selectedEvent.title}
                </h3>
              </div>

              <p className="font-sans text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                {selectedEvent.detailedDescription}
              </p>

              {/* Schedule & Location Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-white/[0.02] border border-white/[0.08] rounded-2xl text-xs font-sans">
                <div>
                  <span className="text-slate-400 block mb-1">Date &amp; Timing:</span>
                  <span className="text-white font-semibold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {selectedEvent.date}
                  </span>
                  <span className="text-slate-400 block mt-0.5 ml-5">{selectedEvent.time}</span>
                </div>

                <div>
                  <span className="text-slate-400 block mb-1">Venue &amp; Format:</span>
                  <span className="text-white font-semibold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    {selectedEvent.location}
                  </span>
                  <span className="text-slate-400 block mt-0.5 ml-5">{selectedEvent.venueType}</span>
                </div>

                <div className="sm:col-span-2 pt-2 border-t border-white/[0.06]">
                  <span className="text-slate-400 block mb-1">Target Eligibility:</span>
                  <span className="text-white font-semibold flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-cyan-400" />
                    {selectedEvent.audience}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="font-heading font-bold text-xs uppercase tracking-[0.2em] text-[#F5F5F5] mb-3">
                  Event Highlights &amp; Inclusions
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedEvent.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 text-xs font-sans text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hardware Provided */}
              {selectedEvent.equipmentProvided && selectedEvent.equipmentProvided.length > 0 && (
                <div>
                  <h4 className="font-heading font-bold text-xs uppercase tracking-[0.2em] text-[#F5F5F5] mb-3">
                    Hardware &amp; Toolkits Provided
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedEvent.equipmentProvided.map((kit, i) => (
                      <span
                        key={i}
                        className="font-sans text-xs bg-white/[0.04] border border-white/[0.1] text-slate-300 px-3 py-1.5 rounded-xl flex items-center gap-1.5"
                      >
                        <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{kit}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Certificate */}
              <div className="p-4 bg-cyan-500/10 border border-cyan-400/30 rounded-2xl flex items-center gap-3">
                <Award className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <div className="text-xs font-sans">
                  <span className="text-white font-semibold block">Official Accreditation:</span>
                  <span className="text-cyan-300">{selectedEvent.certificateType}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-3 border-t border-slate-800">
                {selectedEvent.status === "Upcoming" ? (
                  <Link
                    href={`/contact?subject=${encodeURIComponent(
                      `Event Registration: ${selectedEvent.title}`
                    )}#contact-form`}
                    className="w-full sm:flex-1 py-4 px-6 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-sans font-bold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Proceed to Registration Form</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <Link
                    href={`/contact?subject=${encodeURIComponent(
                      `Inquiry for Upcoming Edition: ${selectedEvent.title}`
                    )}#contact-form`}
                    className="w-full sm:flex-1 py-4 px-6 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-sans font-bold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Inquire for Upcoming Edition</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}

                <button
                  onClick={() => setSelectedEvent(null)}
                  className="w-full sm:w-auto py-4 px-6 rounded-xl bg-[#080d17] hover:bg-[#141e33] border border-slate-700/80 text-white font-sans font-semibold text-sm transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
