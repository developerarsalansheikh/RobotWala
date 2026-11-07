"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  Sparkles,
  Bot,
  Plane,
  Wrench,
  Trophy,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ExternalLink,
  Layers,
  Cpu,
  ArrowRight,
  Eye,
  CheckCircle2,
  SlidersHorizontal,
} from "lucide-react";

export type GalleryCategory =
  | "All"
  | "Robots & Humanoids"
  | "Drones & Aerial"
  | "Hardware Kits"
  | "Arenas & Workshops";

export interface GalleryItem {
  id: string;
  title: string;
  category: "Robots & Humanoids" | "Drones & Aerial" | "Hardware Kits" | "Arenas & Workshops";
  tag: string;
  badge: string;
  image: string;
  imageFit?: "object-contain" | "object-cover";
  imageBg?: string;
  desc: string;
  fullDesc: string;
  specs: { label: string; value: string }[];
  features: string[];
  ctaText?: string;
  ctaLink?: string;
}

const GALLERY_DATA: GalleryItem[] = [
  {
    id: "lucy-humanoid",
    title: "LUCY Humanoid Robot",
    category: "Robots & Humanoids",
    tag: "Flagship Android",
    badge: "Bilingual AI Android",
    image: "/lucy.png",
    imageFit: "object-contain",
    imageBg: "bg-gradient-to-b from-[#0e1626] to-[#080d17]",
    desc: "India's first bilingual conversational humanoid android with expressive kinematics and multi-sensor edge intelligence.",
    fullDesc:
      "LUCY is ROBOTWALA's premier bilingual conversational humanoid robot engineered for interactive institutional reception, deep-tech research, and hands-on AI demonstrations. Equipped with high-definition audio-visual sensor arrays, synchronized multi-axis servo neck kinematics, and low-latency on-device NLP inference.",
    specs: [
      { label: "Language", value: "Bilingual (Hindi & English)" },
      { label: "Kinematics", value: "Multi-Axis Facial & Head Articulation" },
      { label: "AI Engine", value: "Conversational Edge Inference" },
      { label: "Vision", value: "Depth Perception & Face Recognition" },
    ],
    features: [
      "Natural conversational dialogue in English and Hindi",
      "Real-time facial expression and greeting kinematics",
      "Dynamic obstacle sensing and interactive telemetry",
      "Ideal for academic campus reception and science expos",
    ],
    ctaText: "Explore LUCY Product",
    ctaLink: "/products#lucy",
  },
  {
    id: "lucy-robot-mall",
    title: "LUCY Autonomous Android (Live)",
    category: "Robots & Humanoids",
    tag: "Autonomous Android",
    badge: "Field Deployment",
    image: "/lucy-robot.jpg",
    imageFit: "object-cover",
    desc: "Real-world field deployment of the LUCY android interacting with visitors and students in public exhibitions.",
    fullDesc:
      "Captured live on site during premier robotics expositions. LUCY demonstrates autonomous spatial awareness, automated crowd interaction, and intelligent visitor guidance across public auditoriums and university campuses.",
    specs: [
      { label: "Deployment", value: "Exhibition Pavilions & Campuses" },
      { label: "Navigation", value: "Indoor Waypoint Guidance" },
      { label: "Autonomy", value: "Autonomous & Guided Modes" },
      { label: "Power", value: "High-Capacity Li-Ion Power Train" },
    ],
    features: [
      "Autonomous guided tours with localized speech cues",
      "Interactive Q&A engine for student groups and guests",
      "Robust industrial-grade internal aluminum skeleton",
      "Tested in high-density crowd environments",
    ],
    ctaText: "Inquire for Exhibition",
    ctaLink: "/contact?subject=Exhibition%20Deployment",
  },
  {
    id: "robotwala-android",
    title: "ROBOTWALA Autonomous Android",
    category: "Robots & Humanoids",
    tag: "Autonomous System",
    badge: "Next-Gen Android",
    image: "/robotwala-main.png",
    imageFit: "object-contain",
    imageBg: "bg-gradient-to-b from-[#0b1329] to-[#040814]",
    desc: "Next-gen autonomous android with 3D LiDAR SLAM positioning, obstacle avoidance, and onboard micro-compute.",
    fullDesc:
      "Developed at ROBOTWALA R&D labs, this autonomous android system integrates solid-state 3D LiDAR scanning, simultaneous localization and mapping (SLAM), and heavy-duty planetary gear actuators for long-endurance autonomous tasks.",
    specs: [
      { label: "Sensors", value: "3D LiDAR SLAM + Ultrasonic Array" },
      { label: "Compute", value: "Onboard Neural Accelerator" },
      { label: "Payload", value: "Industrial Transport Ready" },
      { label: "Architecture", value: "ROS2 Open Telemetry" },
    ],
    features: [
      "Millimeter-precision LiDAR indoor mapping",
      "Dynamic obstacle replanning in moving crowds",
      "Modular sensor expansion slots for custom payloads",
      "ROS2 compatible for academic and corporate research",
    ],
    ctaText: "View Robotics Solutions",
    ctaLink: "/services",
  },
  {
    id: "precision-fpv-drone",
    title: "Precision FPV Flight Drone",
    category: "Drones & Aerial",
    tag: "High-Speed UAV",
    badge: "Real Hardware",
    image: "/drone-only.png",
    imageFit: "object-cover",
    desc: "High-precision agility quadcopter with tuned PID flight controller, carbon-fiber frame, and low-latency video feed.",
    fullDesc:
      "Engineered for high-g tactical turns, obstacle racing, and aerial telemetry experimentation. Built on a rigid carbon-fiber monocoque chassis equipped with high-KV brushless motors, ESC dynamic braking, and high-gain antenna telemetry.",
    specs: [
      { label: "Propulsion", value: "Brushless High-Torque 2306 Motors" },
      { label: "Frame", value: "3K Pure Carbon-Fiber Unibody" },
      { label: "Control", value: "F4/F7 Flight Controller with Betaflight" },
      { label: "Telemetry", value: "Long-Range 5.8GHz / 2.4GHz Link" },
    ],
    features: [
      "Sub-20 millisecond control response for high-speed gates",
      "Real-time voltage, current, and RSSI telemetry",
      "Fail-safe auto-disarm and return-to-pilot protocols",
      "Used across national inter-school drone racing cups",
    ],
    ctaText: "Explore Drone Programs",
    ctaLink: "/events",
  },
  {
    id: "drone-arena-race",
    title: "Inter-School Drone Racing Arena",
    category: "Drones & Aerial",
    tag: "Tactical Arena",
    badge: "DGCA Certified Circuit",
    image: "/events/event-drone-race.jpg",
    imageFit: "object-cover",
    desc: "Electrified 30ft tactical safety flight cage where school and college pilots battle in high-speed obstacle circuits.",
    fullDesc:
      "A flagship competitive arena created by ROBOTWALA. Features high-visibility neon hexagon gates, telemetry transceivers, live lap timing sensors, and high-definition audience video feeds, maintaining strict safety protocols with certified instructors.",
    specs: [
      { label: "Arena Height", value: "30-Foot High Safety Netting" },
      { label: "Lap Timing", value: "Infrared / RF Sensor Transponders" },
      { label: "Safety", value: "Full Enclosure & Emergency Power Cuts" },
      { label: "Participants", value: "School & Collegiate Flight Pilots" },
    ],
    features: [
      "Precision gate-weaving obstacle tracks",
      "Real-time telemetry and spectator broadcast screens",
      "Certified by DGCA-trained flight safety officials",
      "High-adrenaline STEM learning through aerial mechanics",
    ],
    ctaText: "View Drone Tournaments",
    ctaLink: "/events",
  },
  {
    id: "kit-robotics-car",
    title: "Robotics Kit (Autonomous Rover)",
    category: "Hardware Kits",
    tag: "STEM Hardware Kit",
    badge: "Real Hardware Kit",
    image: "/kit-robotics-car.jpg",
    imageFit: "object-contain",
    imageBg: "bg-white",
    desc: "Complete Robotics kit to build, program, and experiment with bipedal kinematics, Bluetooth telemetry, and obstacle avoidance.",
    fullDesc:
      "Designed for young innovators from school to college level. Complete hands-on kit featuring multi-terrain 4WD chassis, microcontroller brain, ultrasonic sensor radar, infrared line-tracking sensors, and Bluetooth smartphone control.",
    specs: [
      { label: "Microcontroller", value: "Programmable Robotwala Core MCU" },
      { label: "Drive", value: "Dual Motor Driver & High-Traction Wheels" },
      { label: "Connectivity", value: "Bluetooth & Wireless Serial" },
      { label: "Coding", value: "Block Coding + Python + C++" },
    ],
    features: [
      "Build 10+ autonomous robotic projects from scratch",
      "Line follower, obstacle avoider, and smartphone-controlled rover",
      "Zero soldering required — modular quick-connect headers",
      "Includes comprehensive video guide and bilingual handbook",
    ],
    ctaText: "Explore Robotics Kits",
    ctaLink: "/products#kits",
  },
  {
    id: "kit-iot-automation",
    title: "Smart Automation (IoT 8-Relay)",
    category: "Hardware Kits",
    tag: "Industrial Automation Kit",
    badge: "Real Hardware Kit",
    image: "/kit-iot-automation.jpg",
    imageFit: "object-contain",
    imageBg: "bg-white",
    desc: "Hands-on automation and IoT kit with real-world projects featuring an ESP32 8-relay industrial grade board.",
    fullDesc:
      "Equips students and engineers with industrial-grade automation skills. Features an ESP32 Wi-Fi & Bluetooth microcontroller driving 8 isolated relay channels, optocoupler isolation, AC mains protection, and real-time MQTT cloud dashboard control.",
    specs: [
      { label: "Relays", value: "8-Channel Opto-Isolated 10A Relays" },
      { label: "MCU", value: "ESP32 Dual-Core 240MHz Wi-Fi/BT" },
      { label: "Protocol", value: "MQTT, HTTP REST, WebSockets" },
      { label: "Power", value: "Wide-Range DC Supply & Fuse Protection" },
    ],
    features: [
      "Automate home appliances, lights, and factory motors",
      "Mobile app control & custom cloud web dashboard",
      "Over-the-air (OTA) firmware update support",
      "Hands-on practice with IoT security and telemetry",
    ],
    ctaText: "Explore Automation Kits",
    ctaLink: "/products#kits",
  },
  {
    id: "kit-sensor-board",
    title: "Home Automation (Sensor Board)",
    category: "Hardware Kits",
    tag: "Smart Home Learning",
    badge: "Real Hardware Kit",
    image: "/kit-sensor-board.jpg",
    imageFit: "object-contain",
    imageBg: "bg-white",
    desc: "Beginner-friendly smart home automation learning kit with capacitive touch, temperature, humidity, and relay outputs.",
    fullDesc:
      "The perfect gateway for schools and beginner developers into intelligent living environments. Includes ambient light LDR, DHT temperature & humidity sensors, buzzer alert, capacitive touch switch inputs, and dual relay channels.",
    specs: [
      { label: "Inputs", value: "Capacitive Touch, DHT11, LDR, PIR" },
      { label: "Outputs", value: "Dual Relays, Buzzer, Status LEDs" },
      { label: "Compatibility", value: "Arduino IDE, ESP-IDF, Scratch" },
      { label: "Learning Path", value: "Beginner to Intermediate STEM" },
    ],
    features: [
      "Automatic temperature-controlled fan trigger",
      "Darkness-activated smart illumination system",
      "Intrusion alarm using passive infrared motion sensor",
      "Step-by-step experiment guide with sample codes",
    ],
    ctaText: "Explore Home Kits",
    ctaLink: "/products#kits",
  },
  {
    id: "national-championship-arena",
    title: "National AI & Robotics Championship",
    category: "Arenas & Workshops",
    tag: "Championship Tournament",
    badge: "Flagship Tournament",
    image: "/events/event-championship.jpg",
    imageFit: "object-cover",
    desc: "India's premier autonomous robotics arena with 150+ teams competing in LiDAR SLAM navigation and rover obstacle courses.",
    fullDesc:
      "ROBOTWALA's annual national championship brings together student innovators, school STEM clubs, and collegiate robotics developers from across India. High-precision hardware arenas, multi-terrain speedways, and autonomous rover challenges evaluated by deep-tech mentors.",
    specs: [
      { label: "Scale", value: "150+ Teams & 1,500+ Participants" },
      { label: "Grants", value: "₹2,50,000 Total Innovation Grants" },
      { label: "Challenges", value: "LiDAR SLAM, Maze Solver, Robo-Soccer" },
      { label: "Jury", value: "AI Researchers & Deep-Tech Engineers" },
    ],
    features: [
      "Live multi-track obstacle arena with laser timing",
      "Real-time pit station telemetry and tuning labs",
      "Official national merit accreditation for student portfolios",
      "Mentorship from ROBOTWALA Core R&D Engineers",
    ],
    ctaText: "View Event Schedule",
    ctaLink: "/events",
  },
  {
    id: "stem-bootcamp-workshop",
    title: "Hands-on STEM School Boot Camp",
    category: "Arenas & Workshops",
    tag: "Hands-on Workshop",
    badge: "15,000+ Students",
    image: "/events/event-workshop.jpg",
    imageFit: "object-cover",
    desc: "Experiential school boot camp where students assemble real robots from scratch, program microcontrollers, and calibrate sensors.",
    fullDesc:
      "Transforming classroom theory into tactile deep-tech mastery. Students work in small squads with dedicated ROBOTWALA instructors, wiring sensor buses, debugging code in Python/Block, and staging head-to-head robot races on the final day.",
    specs: [
      { label: "Duration", value: "3-Day Intensive Boot Camp" },
      { label: "Kit Policy", value: "Take-Home Hardware Kits Included" },
      { label: "Mentors", value: "1:8 Mentor-to-Student Ratio" },
      { label: "Pedagogy", value: "NEP-2020 Experiential STEM" },
    ],
    features: [
      "Real mechanical kinematics and motor physics",
      "Writing autonomous line-following algorithms",
      "Bilingual instruction in Hindi and English",
      "Certified Junior Robotics Innovator Credentials",
    ],
    ctaText: "Book School Workshop",
    ctaLink: "/collaborations#partnered-schools",
  },
  {
    id: "robotwala-team",
    title: "ROBOTWALA Core Engineering Team",
    category: "Arenas & Workshops",
    tag: "Engineering R&D",
    badge: "Core Innovators",
    image: "/about-team.jpg",
    imageFit: "object-cover",
    desc: "The passionate engineers, roboticists, and educators behind ROBOTWALA's hardware architectures and AI algorithms.",
    fullDesc:
      "Based out of Indore, Madhya Pradesh, ROBOTWALA's multidisciplinary team combines expertise in mechanical CAD, embedded firmware, computer vision, AI inference, and STEM education to democratize deep-tech robotics across India.",
    specs: [
      { label: "Headquarters", value: "Indore, Madhya Pradesh, India" },
      { label: "Specialties", value: "Embedded Systems, AI, Robotics, IoT" },
      { label: "Mission", value: "#RevolutionByRobotwala" },
      { label: "Reach", value: "50+ Schools, 20+ Colleges, Pan-India" },
    ],
    features: [
      "In-house mechanical and PCB design facilities",
      "Custom AI voice and vision model training",
      "Comprehensive teacher and institutional training",
      "Passionate about inspiring young Indian minds",
    ],
    ctaText: "About Our Mission",
    ctaLink: "/about",
  },
  {
    id: "smart-city-expo",
    title: "Smart City & Industrial Automation Expo",
    category: "Arenas & Workshops",
    tag: "Public Exposition",
    badge: "5,000+ Attendees",
    image: "/robot-collab.jpg",
    imageFit: "object-cover",
    desc: "Public exposition demonstrating multi-axis robotic arms, smart traffic controller grids, and industrial automation workcells.",
    fullDesc:
      "ROBOTWALA showcased its smart traffic controller deployments alongside multi-axis pick-and-place robotic systems. Over 5,000 visitors, including municipal authorities, engineering deans, and young robotics students, experienced live demonstrations.",
    specs: [
      { label: "Attendance", value: "5,000+ Delegates & Visitors" },
      { label: "Showcase", value: "Multi-Axis Robotic Arms & Traffic AI" },
      { label: "Impact", value: "Deployed in 20+ Municipal Zones" },
      { label: "Industry", value: "Industry 4.0 Smart Manufacturing" },
    ],
    features: [
      "Real-time vehicle density traffic control demos",
      "Industrial pick-and-place robotic workcell",
      "Cloud telemetry dashboards on 4K multi-displays",
      "Interactive student demonstration alley",
    ],
    ctaText: "Industrial Solutions",
    ctaLink: "/services",
  },
];

const CATEGORIES: { label: GalleryCategory; icon: any; count: number }[] = [
  {
    label: "All",
    icon: Sparkles,
    count: GALLERY_DATA.length,
  },
  {
    label: "Robots & Humanoids",
    icon: Bot,
    count: GALLERY_DATA.filter((item) => item.category === "Robots & Humanoids").length,
  },
  {
    label: "Drones & Aerial",
    icon: Plane,
    count: GALLERY_DATA.filter((item) => item.category === "Drones & Aerial").length,
  },
  {
    label: "Hardware Kits",
    icon: Wrench,
    count: GALLERY_DATA.filter((item) => item.category === "Hardware Kits").length,
  },
  {
    label: "Arenas & Workshops",
    icon: Trophy,
    count: GALLERY_DATA.filter((item) => item.category === "Arenas & Workshops").length,
  },
];

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  // Filter items
  const filteredItems = useMemo(() => {
    return GALLERY_DATA.filter((item) => {
      if (activeCategory !== "All" && item.category !== activeCategory) {
        return false;
      }
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesTag = item.tag.toLowerCase().includes(q);
        const matchesBadge = item.badge.toLowerCase().includes(q);
        const matchesDesc = item.desc.toLowerCase().includes(q);
        const matchesSpecs = item.specs.some(
          (s) => s.label.toLowerCase().includes(q) || s.value.toLowerCase().includes(q)
        );
        if (!matchesTitle && !matchesTag && !matchesBadge && !matchesDesc && !matchesSpecs) {
          return false;
        }
      }
      return true;
    });
  }, [activeCategory, searchQuery]);

  // Selected item for modal
  const selectedItem =
    selectedItemIndex !== null && filteredItems[selectedItemIndex]
      ? filteredItems[selectedItemIndex]
      : null;

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;
      if (e.key === "Escape") {
        setSelectedItemIndex(null);
      } else if (e.key === "ArrowRight") {
        setSelectedItemIndex((prev) =>
          prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === "ArrowLeft") {
        setSelectedItemIndex((prev) =>
          prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1
        );
      }
    },
    [selectedItemIndex, filteredItems.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Lock scroll when modal open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedItem]);

  return (
    <div className="w-full min-h-screen bg-[#030303] text-white flex flex-col selection:bg-cyan-400 selection:text-slate-950">
      {/* ── 1. CLEAN HEADER & CONTROLS ── */}
      <section className="relative pt-24 sm:pt-28 pb-6 border-b border-slate-800/80 bg-[#030303]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="font-sans font-medium text-xs uppercase tracking-widest text-cyan-400 mb-2">
                VISUAL SHOWCASE
              </div>
              <h1 className="font-heading font-semibold text-3xl sm:text-5xl uppercase tracking-[-0.025em] text-[#F5F5F5]">
                INNOVATION GALLERY
              </h1>
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-72 flex-shrink-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search gallery..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0b111e] border border-slate-700/70 focus:border-cyan-400 focus:outline-none rounded-full py-2.5 pl-10 pr-9 text-xs text-white placeholder-slate-400 transition-colors font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-0.5"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.label;
              return (
                <button
                  key={cat.label}
                  onClick={() => setActiveCategory(cat.label)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                      : "bg-[#0b111e] text-slate-300 border border-slate-700/60 hover:border-cyan-400/40 hover:text-white"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? "bg-slate-950 text-cyan-300" : "bg-white/10 text-slate-400"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 2. GALLERY GRID ── */}
      <section className="py-10 sm:py-14 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Counter */}
          <div className="flex items-center justify-between mb-8 text-xs font-sans text-slate-400 border-b border-slate-800 pb-3">
            <div>
              Showing <span className="text-cyan-300 font-semibold">{filteredItems.length}</span>{" "}
              {filteredItems.length === 1 ? "Artifact" : "Artifacts"} in{" "}
              <span className="text-white font-medium">&quot;{activeCategory}&quot;</span>
              {searchQuery && (
                <span>
                  {" "}
                  matching &quot;<span className="text-cyan-400">{searchQuery}</span>&quot;
                </span>
              )}
            </div>
            {(activeCategory !== "All" || searchQuery) && (
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            )}
          </div>

          {filteredItems.length === 0 ? (
            <div className="text-center py-20 bg-[#0b111e]/50 border border-slate-800 rounded-3xl p-8 max-w-xl mx-auto">
              <Layers className="w-12 h-12 text-slate-500 mx-auto mb-4" />
              <h3 className="font-heading font-bold text-xl uppercase text-white mb-2">
                No Gallery Items Found
              </h3>
              <p className="font-sans text-xs text-slate-400 mb-6">
                No artifacts matched your search query or selected category filter.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="px-6 py-2.5 rounded-full bg-cyan-400 text-slate-950 font-sans font-semibold text-xs uppercase tracking-wider"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredItems.map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItemIndex(idx)}
                  className="group relative bg-[#0b111e] border border-slate-700/60 rounded-3xl overflow-hidden hover:border-cyan-400/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300 cursor-pointer block flex flex-col"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-400/80" />
                  <div
                    className={`relative w-full h-56 sm:h-60 overflow-hidden ${
                      item.imageBg || "bg-black"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className={`w-full h-full group-hover:scale-105 transition-transform duration-500 ${
                        item.imageFit === "object-contain" ? "object-contain p-3" : "object-cover"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080d17] via-black/30 to-transparent pointer-events-none" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-[#080d17]/90 backdrop-blur-md border border-cyan-500/30 text-[10px] uppercase tracking-widest font-semibold text-cyan-300 font-sans">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-1.5 flex-1 flex flex-col justify-start">
                    <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-cyan-400 block font-sans">
                      {item.tag}
                    </span>
                    <h3 className="font-heading font-semibold text-lg text-[#F5F5F5] uppercase tracking-wide group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-sans font-normal text-xs text-[#A1A1AA] leading-relaxed pt-1 line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── 4. LIGHTBOX / INSPECT MODAL ── */}
      {selectedItem && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-fade-in">
          <div
            className="relative w-full max-w-5xl max-h-[92vh] bg-[#0b111e] border border-cyan-500/50 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_40px_rgba(6,182,212,0.25)] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Accent Strip */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent z-20" />

            {/* Top Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#080d17]/80 backdrop-blur-md z-10">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/40 text-[10px] uppercase tracking-widest text-cyan-300 font-semibold font-sans">
                  {selectedItem.category}
                </span>
                <span className="text-slate-500 hidden sm:inline">•</span>
                <span className="text-xs text-slate-300 hidden sm:inline font-sans font-medium">
                  {selectedItem.badge}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {/* Prev / Next Buttons */}
                <button
                  onClick={() =>
                    setSelectedItemIndex((prev) =>
                      prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1
                    )
                  }
                  className="w-8 h-8 rounded-full bg-white/[0.05] hover:bg-white/[0.12] text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  title="Previous (Left Arrow)"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() =>
                    setSelectedItemIndex((prev) =>
                      prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0
                    )
                  }
                  className="w-8 h-8 rounded-full bg-white/[0.05] hover:bg-white/[0.12] text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  title="Next (Right Arrow)"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedItemIndex(null)}
                  className="w-8 h-8 rounded-full bg-white/[0.08] hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer ml-2"
                  title="Close (Esc)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body: Scrollable Content */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Visual Image Viewport */}
                <div
                  className={`lg:col-span-6 rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl relative w-full h-72 sm:h-96 flex items-center justify-center ${
                    selectedItem.imageBg || "bg-[#050912]"
                  }`}
                >
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className={`w-full h-full p-3 ${
                      selectedItem.imageFit === "object-contain" ? "object-contain" : "object-cover"
                    }`}
                  />
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md text-[10px] font-mono text-cyan-300 border border-white/10">
                    High-Res Showcase
                  </div>
                </div>

                {/* Content & Specs */}
                <div className="lg:col-span-6 space-y-5">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-cyan-400 block font-sans mb-1">
                      {selectedItem.tag}
                    </span>
                    <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white uppercase tracking-tight">
                      {selectedItem.title}
                    </h2>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {selectedItem.fullDesc}
                  </p>

                  {/* Technical Specs Table */}
                  <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-4 space-y-2.5">
                    <h4 className="font-heading font-semibold text-xs uppercase tracking-widest text-cyan-300">
                      Technical Specifications
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans">
                      {selectedItem.specs.map((s, idx) => (
                        <div key={idx} className="bg-white/[0.02] p-2 rounded-lg">
                          <span className="text-slate-400 block text-[10px] uppercase">{s.label}</span>
                          <span className="text-white font-medium">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Capabilities */}
                  <div className="space-y-2">
                    <h4 className="font-heading font-semibold text-xs uppercase tracking-widest text-cyan-300">
                      Key Highlights &amp; Capabilities
                    </h4>
                    <div className="space-y-1.5">
                      {selectedItem.features.map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs font-sans text-slate-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div className="px-6 py-4 bg-[#080d17] border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-400 font-sans text-center sm:text-left">
                Item {selectedItemIndex !== null ? selectedItemIndex + 1 : 1} of{" "}
                {filteredItems.length}
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                {selectedItem.ctaLink && (
                  <Link
                    href={selectedItem.ctaLink}
                    className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-sans font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.4)] cursor-pointer"
                  >
                    <span>{selectedItem.ctaText || "Explore Details"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
                <button
                  onClick={() => setSelectedItemIndex(null)}
                  className="px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white font-sans font-semibold text-xs transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── 5. CALL TO ACTION STRIP ── */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#030303] to-[#080e1a] border-t border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-sans font-semibold text-[11px] uppercase tracking-widest mb-4">
            <span>LIVE INTERACTIVE SHOWCASE</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-4xl uppercase text-white tracking-tight mb-4">
            Bring ROBOTWALA To Your Campus or Institution
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
            Experience humanoid robot live demos, experiential school boot camps, and complete Atal Tinkering Lab equipment setups customized for your organization.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact#contact-form"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-sans font-bold text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Request Campus Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/products"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0b111e] hover:bg-[#131c30] border border-slate-700 hover:border-cyan-400/50 text-white font-sans font-semibold text-xs uppercase tracking-widest transition-all text-center cursor-pointer"
            >
              <span>Explore Products &amp; Kits</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
