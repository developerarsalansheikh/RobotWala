"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  MapPin, 
  Quote, 
  Sparkles, 
  GraduationCap, 
  ChevronRight, 
  ChevronLeft, 
  Building2,
  Cpu,
  CheckCircle2
} from "lucide-react";

export interface SchoolItem {
  id: number;
  name: string;
  branch?: string;
  tagline: string;
  location: string;
  fullAddress: string;
  category: string;
  level: string;
  labType: string;
  description: string;
  highlights: string[];
  logo: string;
}

export const schoolsList: SchoolItem[] = [
  {
    id: 1,
    name: "Pakiza Play School",
    branch: "Branch 1",
    tagline: "Early Childhood STEM & Sensory Robotics Foundation",
    location: "Khajrana, Indore",
    fullAddress: "Khajrana Main Road, Near Dargah Square, Indore, MP 452016",
    category: "Early Childhood Foundation",
    level: "Playgroup to Kindergarten",
    labType: "Junior Sensory & Logic Robotics Lab",
    description:
      "Pakiza Play School Branch 1 provides an experiential early childhood maker environment where toddlers and young learners explore tactile block-coding, kinetic robot models, and sensory STEM kits that build foundational analytical thinking.",
    highlights: [
      "Physical tactile block coding for early cognitive development",
      "Child-safe kinetic kits and interactive sensor modules",
      "Teacher-guided hands-on motor skill robotics activities"
    ],
    logo: "/school-logos/pakiza-school.png"
  },
  {
    id: 2,
    name: "Pakiza Play School",
    branch: "Branch 2",
    tagline: "Creative Tinkering & Junior Automation Discovery Lab",
    location: "Manik Bagh Road, Indore",
    fullAddress: "Manik Bagh Road, Near Nai Duniya, Indore, MP 452001",
    category: "Pre-Primary & Primary",
    level: "Nursery to Grade 2",
    labType: "Creative Tinkering & STEM Explorers Suite",
    description:
      "Pakiza Play School Branch 2 fosters curiosity through hands-on snap-circuits, introductory motorized bots, and visual pattern recognition activities tailored to nurture a maker-mindset from the earliest grades.",
    highlights: [
      "Introductory robotic animal kits with sound & optical sensors",
      "DIY electronics play-boards and safe snap-circuit modules",
      "Interactive team-building and maker-mindset coaching"
    ],
    logo: "/school-logos/pps-golden.png"
  },
  {
    id: 3,
    name: "Pakiza Play School",
    branch: "Branch 3",
    tagline: "Interactive Discovery & Smart Kinetic Learning Hub",
    location: "Chandan Nagar / Dhar Road, Indore",
    fullAddress: "Dhar Road, Near Chandan Nagar Square, Indore, MP 452002",
    category: "Pre-Primary & Foundation",
    level: "Pre-Nursery to KG-II",
    labType: "Kinetic Discovery & Micro-Robotics Hub",
    description:
      "Pakiza Play School Branch 3 provides an engaging, technology-assisted learning zone featuring obstacle-sensing floor navigators, mechanical gear puzzles, and interactive STEM storytelling sessions.",
    highlights: [
      "Smart obstacle-sensing floor bot navigators",
      "Early mechanical balance and gear pulley workshops",
      "Fun coding puzzles built for curious young minds"
    ],
    logo: "/school-logos/pakiza-school.png"
  },
  {
    id: 4,
    name: "Pakiza Public School",
    branch: "Jetpura Campus",
    tagline: "Flagship CBSE K-12 Campus with Full Robotics Infrastructure",
    location: "Gram Jetpura, Ujjain Road, Indore",
    fullAddress: "Gram Jetpura, Ujjain Road, Indore, Madhya Pradesh 453555 (CBSE Affiliated)",
    category: "CBSE K-12 Campus",
    level: "Grade 1 to 12 (Senior Secondary)",
    labType: "Full-Scale AI, Drone Tech & ROS Robotics COE",
    description:
      "Pakiza Public School Jetpura features a state-of-the-art Centre of Excellence equipped with 30+ robotics workstations, aerial drone testing arenas, 3D prototyping suites, and hands-on microcontroller firmware training for competitive hackathons.",
    highlights: [
      "Full-scale dedicated robotics lab with 30+ workstations",
      "Advanced Arduino, ESP32, Raspberry Pi & ROS mobile bots",
      "Drone piloting, CAD 3D prototyping & national competition prep"
    ],
    logo: "/school-logos/pakiza-public-school.png"
  },
  {
    id: 5,
    name: "Zeenat Public School",
    branch: "Khajrana Campus",
    tagline: "STEM Innovation Hub & Applied Robotics Center",
    location: "Jakariya Colony, Khajrana, Indore",
    fullAddress: "33/34 Jakariya Colony, Khajrana, Indore, MP 452016",
    category: "Primary & Middle School",
    level: "Grade 1 to 8",
    labType: "STEM Innovation Hub & Micro-Electronics Suite",
    description:
      "Zeenat Public School empowers students through practical science and electronics, featuring autonomous line followers, obstacle-avoiding bot assemblies, and visual-to-Python coding tracks that make engineering concepts intuitive.",
    highlights: [
      "Hands-on breadboarding & smart sensor circuits",
      "Autonomous line follower & obstacle-avoiding bot workshops",
      "Block-to-text Python coding curriculum integration"
    ],
    logo: "/school-logos/zeenat-school.png"
  },
  {
    id: 6,
    name: "Ahmad Noor Memorial Higher Secondary School",
    branch: "Manik Bagh Campus",
    tagline: "Comprehensive MPBSE Secondary & Senior Secondary Tech Wing",
    location: "Vijay Palace, Manik Bagh Road, Indore",
    fullAddress: "61-62 Vijay Palace, Manik Bagh Road / Nandanvan Colony, Indore, MP 452001",
    category: "MPBSE K-12 Higher Secondary",
    level: "Grade 1 to 12",
    labType: "Industrial IoT & Smart Embedded Systems Lab",
    description:
      "A joint initiative with Pakiza Edu Group, Ahmad Noor Memorial H.S. School prepares middle and senior secondary students with real-world IoT systems, robotic arm kinematics, sensor networks, and engineering preparatory hardware projects.",
    highlights: [
      "Robotic arm kinematics, servomotors & Bluetooth controllers",
      "IoT home automation models and smart agricultural sensor setups",
      "Career mentorship for competitive engineering & tech olympiads"
    ],
    logo: "/school-logos/ahmad-noor.png"
  },
  {
    id: 7,
    name: "Saint Mariyam School",
    branch: "Chandan Nagar Campus",
    tagline: "Heritage Institution Empowering Futuristic STEM Education",
    location: "Chandan Nagar / Dhar Road, Indore",
    fullAddress: "Near Usmania Masjid, Chandan Nagar / Dhar Road, Indore, MP 452002",
    category: "K-10 Higher Secondary",
    level: "Kindergarten to Grade 10",
    labType: "Autonomous Mobile Robotics & Applied Mechanics Lab",
    description:
      "Established in 1988, Saint Mariyam School integrates modern robotics modules into its academic calendar, engaging students in multi-tier hardware building, ultrasonic radar tracking, and annual robotics innovation exhibitions.",
    highlights: [
      "Progressive STEM curriculum spanning mechanical assembly to code logic",
      "Annual Inter-School Robot Olympiad & exhibition platform",
      "Hands-on ultrasonic radar systems & robotic chassis construction"
    ],
    logo: "/school-logos/st-mariyam.png"
  },
  {
    id: 8,
    name: "The Green World International School",
    branch: "Bypass Smart Campus",
    tagline: "CBSE Global Standard Smart Campus & Next-Gen Robotics Lab",
    location: "Bypass Road, Jhalariya, Indore",
    fullAddress: "85/86 Bypass Road, Jhalariya, Near County Walk, Indore, MP 452016",
    category: "CBSE International Standard",
    level: "Pre-K to Senior Secondary",
    labType: "Next-Gen AI, Smart Automation & Aerial Drones Hub",
    description:
      "Managed by Araawali Samajik Shiksha Samiti, The Green World International School features an ultra-modern smart campus with advanced AI computer vision labs, autonomous flight simulators, and comprehensive 3D CAD masterclasses.",
    highlights: [
      "Aerial telemetry, autonomous flight controllers & drone simulators",
      "AI computer vision projects with facial recognition & gesture bots",
      "3D rapid prototyping and computer-aided design (CAD) facilities"
    ],
    logo: "/school-logos/greenvalley.png"
  },
  {
    id: 9,
    name: "Green Valley School",
    branch: "Khajrana Campus",
    tagline: "Maker Innovation Hub & Practical Engineering Suite",
    location: "Habib Colony / Khajrana, Indore",
    fullAddress: "Habib Colony, Khajrana Area, Indore, MP 452016",
    category: "Primary & High School",
    level: "Grade 1 to 10",
    labType: "Maker Innovation & Practical Automation Hub",
    description:
      "Green Valley School delivers student-centric robotics bootcamps, obstacle-avoiding bot kits, real-world sensor testing, and troubleshooting masterclasses that bridge classroom physics with practical electronics.",
    highlights: [
      "Real-world sensor interfaces: infrared, ultrasonic & moisture",
      "Interactive robotic maze-solver & battle-bot development",
      "Practical troubleshooting, soldering safety & circuit layout"
    ],
    logo: "/school-logos/greenvalley.png"
  },
  {
    id: 10,
    name: "MABFM Academy",
    branch: "Khajrana Campus",
    tagline: "Community Tech Upliftment & Applied STEM Academy",
    location: "Habib Colony, Khajrana, Indore",
    fullAddress: "Maulana Abul Barkat Farooqui Memorial Academy, Khajrana, Indore, MP 452016",
    category: "K-10 Secondary Academy",
    level: "Grade 1 to 10",
    labType: "Foundation Coding & Robotics Empowerment Lab",
    description:
      "MABFM Academy delivers accessible hands-on technology education, providing modular robotic building kits, algorithmic coding exercises, and scholarship mentoring for aspiring young innovators.",
    highlights: [
      "Modular robotic building sets with microcontroller brains",
      "Comprehensive coding literacy and electronics workshops",
      "Practical project-based scoring and skill certification"
    ],
    logo: "/school-logos/mabfm-academy.png"
  }
];

export default function PartneredSchoolsShowcase() {
  const [selectedId, setSelectedId] = useState<number>(4); // Default to Jetpura campus

  const activeSchool = schoolsList.find((s) => s.id === selectedId) || schoolsList[0];

  // Split schools into Left (5 schools) and Right (5 schools)
  const leftSchools = schoolsList.slice(0, 5);
  const rightSchools = schoolsList.slice(5, 10);

  // Auto-scroll to #partnered-schools if navigated with hash
  useEffect(() => {
    const scrollToSection = () => {
      if (typeof window !== "undefined" && window.location.hash === "#partnered-schools") {
        const el = document.getElementById("partnered-schools");
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 150);
        }
      }
    };

    scrollToSection();
    window.addEventListener("hashchange", scrollToSection);
    return () => window.removeEventListener("hashchange", scrollToSection);
  }, []);

  return (
    <div id="partnered-schools" className="w-full scroll-mt-28">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="font-sans text-[11px] uppercase tracking-widest text-cyan-400 font-semibold px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/20 inline-block mb-3">
          INSTITUTIONAL NETWORK • 10 PARTNER CAMPUSES
        </span>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#F5F5F5] uppercase tracking-tight">
          OUR PARTNERED SCHOOLS
        </h2>
        <p className="font-sans text-xs sm:text-sm text-[#A1A1AA] max-w-2xl mx-auto mt-2">
          Click any school logo below to inspect its dedicated robotics lab infrastructure, campus details, and curriculum focus in the center showcase.
        </p>
      </div>

      {/* ── SHOWCASE CONTAINER: LEFT CARDS | CENTER SPOTLIGHT | RIGHT CARDS ── */}
      <div className="relative max-w-7xl mx-auto">
        
        {/* DESKTOP / TABLET LAYOUT (GRID with Left 2 cols, Center 3 cols, Right 2 cols) */}
        <div className="hidden lg:grid grid-cols-12 gap-5 items-stretch">
          
          {/* ── LEFT SIDE: 5 School Cards (2 columns or stack) ── */}
          <div className="col-span-3 grid grid-cols-2 gap-4 content-center">
            {leftSchools.map((school, index) => {
              const isSelected = school.id === selectedId;
              const isSpanned = index === 4; // make 5th card span 2 cols for clean symmetry
              return (
                <button
                  key={school.id}
                  onClick={() => setSelectedId(school.id)}
                  className={`group relative rounded-2xl p-3.5 bg-white transition-all duration-300 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.03] cursor-pointer aspect-square ${
                    isSpanned ? "col-span-2 aspect-[2/1]" : ""
                  } ${
                    isSelected
                      ? "ring-4 ring-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.6)] scale-[1.04]"
                      : "opacity-90 hover:opacity-100"
                  }`}
                  title={`${school.name} - Click to view details`}
                >
                  <div className="relative w-full h-full flex flex-col items-center justify-center p-1">
                    <div className="relative w-full h-12 flex items-center justify-center">
                      <Image
                        src={school.logo}
                        alt={school.name}
                        width={90}
                        height={60}
                        className="max-h-12 w-auto object-contain filter group-hover:brightness-105 transition"
                      />
                    </div>
                    <span className="text-[10px] font-bold text-slate-800 line-clamp-1 mt-1 font-heading uppercase">
                      {school.name.replace("Pakiza Play School", "Pakiza Play").replace("Pakiza Public School", "Pakiza Public")}
                    </span>
                    {school.branch && (
                      <span className="text-[9px] font-medium text-slate-500 line-clamp-1">
                        {school.branch}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* ── CENTER SPOTLIGHT CARD ── */}
          <div className="col-span-6 flex items-center">
            <div className="w-full bg-white text-slate-900 rounded-[2rem] p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-slate-200 relative overflow-hidden transition-all duration-300">
              
              {/* Quote Icon Background Accent */}
              <div className="absolute top-5 left-5 text-cyan-400/80">
                <Quote className="w-7 h-7 rotate-180" />
              </div>

              {/* Center Content */}
              <div className="flex flex-col items-center text-center">
                
                {/* Circular School Logo */}
                <div className="relative mb-3.5">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white p-2 shadow-[0_6px_25px_rgba(0,0,0,0.12)] border-2 border-cyan-400/40 flex items-center justify-center overflow-hidden">
                    <Image
                      src={activeSchool.logo}
                      alt={activeSchool.name}
                      width={90}
                      height={90}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* School Name & Branch */}
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 uppercase tracking-tight leading-tight mb-0.5">
                  {activeSchool.name}
                </h3>
                
                {activeSchool.branch && (
                  <span className="text-cyan-600 font-sans font-semibold text-xs mb-1.5">
                    {activeSchool.branch}
                  </span>
                )}

                {/* Level / Category Badge */}
                <div className="flex flex-wrap items-center justify-center gap-1.5 mb-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-medium font-sans">
                    <GraduationCap className="w-3 h-3 text-cyan-600" />
                    {activeSchool.level}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cyan-50 text-cyan-700 text-[10px] font-semibold font-sans border border-cyan-200">
                    <Sparkles className="w-3 h-3 text-cyan-600" />
                    {activeSchool.category}
                  </span>
                </div>

                {/* Location */}
                <div className="flex items-center justify-center gap-1.5 text-xs text-slate-600 mb-4 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0" />
                  <span>{activeSchool.fullAddress}</span>
                </div>

                {/* Description / Testimonial Box */}
                <div className="relative bg-slate-50 rounded-2xl p-4 border border-slate-100 mb-4 text-slate-700 text-xs sm:text-sm leading-relaxed italic">
                  &ldquo;{activeSchool.description}&rdquo;
                </div>

                {/* Lab Focus & Key Highlights */}
                <div className="w-full text-left bg-cyan-950 text-white rounded-2xl p-4 border border-cyan-800/60">
                  <div className="flex items-center gap-2 text-cyan-300 font-semibold text-xs uppercase tracking-wider mb-2">
                    <Cpu className="w-4 h-4 text-cyan-400" />
                    <span>Lab Focus: {activeSchool.labType}</span>
                  </div>
                  <div className="space-y-1">
                    {activeSchool.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-slate-200 text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="mt-4 flex items-center justify-center gap-3">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-sans font-semibold text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 cursor-pointer"
                  >
                    <span>Request Lab Setup For School</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* ── RIGHT SIDE: 5 School Cards (2 columns or stack) ── */}
          <div className="col-span-3 grid grid-cols-2 gap-4 content-center">
            {rightSchools.map((school, index) => {
              const isSelected = school.id === selectedId;
              const isSpanned = index === 4; // make 10th card span 2 cols for clean symmetry
              return (
                <button
                  key={school.id}
                  onClick={() => setSelectedId(school.id)}
                  className={`group relative rounded-2xl p-3.5 bg-white transition-all duration-300 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.03] cursor-pointer aspect-square ${
                    isSpanned ? "col-span-2 aspect-[2/1]" : ""
                  } ${
                    isSelected
                      ? "ring-4 ring-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.6)] scale-[1.04]"
                      : "opacity-90 hover:opacity-100"
                  }`}
                  title={`${school.name} - Click to view details`}
                >
                  <div className="relative w-full h-full flex flex-col items-center justify-center p-1">
                    <div className="relative w-full h-12 flex items-center justify-center">
                      <Image
                        src={school.logo}
                        alt={school.name}
                        width={90}
                        height={60}
                        className="max-h-12 w-auto object-contain filter group-hover:brightness-105 transition"
                      />
                    </div>
                    <span className="text-[10px] font-bold text-slate-800 line-clamp-1 mt-1 font-heading uppercase">
                      {school.name.replace("Higher Secondary School", "H.S.").replace("International School", "Intl.")}
                    </span>
                    {school.branch && (
                      <span className="text-[9px] font-medium text-slate-500 line-clamp-1">
                        {school.branch}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

        </div>

        {/* MOBILE / RESPONSIVE LAYOUT (Center card on top, school cards carousel/grid below) */}
        <div className="lg:hidden space-y-8">
          {/* Center Card */}
          <div className="w-full bg-white text-slate-900 rounded-[2rem] p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-white p-2 shadow-md border-2 border-cyan-400 mb-3 flex items-center justify-center overflow-hidden">
                <Image
                  src={activeSchool.logo}
                  alt={activeSchool.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="font-heading font-bold text-xl text-slate-900 uppercase tracking-tight mb-1">
                {activeSchool.name}
              </h3>
              {activeSchool.branch && (
                <span className="text-cyan-600 font-sans font-semibold text-xs mb-2">
                  ({activeSchool.branch})
                </span>
              )}

              <div className="flex items-center gap-1 text-[11px] text-slate-600 mb-4 font-medium">
                <MapPin className="w-3 h-3 text-cyan-600 flex-shrink-0" />
                <span>{activeSchool.location}</span>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mb-4 text-slate-700 text-xs italic text-left">
                &ldquo;{activeSchool.description}&rdquo;
              </div>

              <div className="w-full text-left bg-cyan-950 text-white rounded-xl p-3.5 text-xs">
                <span className="text-cyan-400 font-semibold block mb-1">Lab: {activeSchool.labType}</span>
                <p className="text-slate-300 text-[11px]">{activeSchool.fullAddress}</p>
              </div>
            </div>
          </div>

          {/* School Grid for Mobile */}
          <div>
            <h4 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-3">
              Tap any school to view:
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {schoolsList.map((school) => {
                const isSelected = school.id === selectedId;
                return (
                  <button
                    key={school.id}
                    onClick={() => setSelectedId(school.id)}
                    className={`rounded-xl p-3 bg-white flex flex-col items-center justify-center text-center transition ${
                      isSelected ? "ring-4 ring-cyan-400 scale-105" : "opacity-80"
                    }`}
                  >
                    <div className="h-10 w-full flex items-center justify-center mb-1">
                      <Image
                        src={school.logo}
                        alt={school.name}
                        width={70}
                        height={40}
                        className="max-h-10 w-auto object-contain"
                      />
                    </div>
                    <span className="text-[10px] font-bold text-slate-900 line-clamp-1">
                      {school.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
