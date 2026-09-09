"use client";

import React, { useState, useEffect } from "react";
import { 
  MapPin, 
  Cpu, 
  Building2, 
  CheckCircle2, 
  GraduationCap
} from "lucide-react";

export interface CollegeCardItem {
  id: number;
  code: string;
  name: string;
  shortName: string;
  role: string;
  location: string;
  fullAddress: string;
  tier: string;
  highlights: string[];
  specs: {
    students: string;
    internships: string;
    labLevel: string;
  };
}

export const collegesData: CollegeCardItem[] = [
  {
    id: 0,
    code: "COE-01",
    name: "Acropolis Institute of Technology & Research",
    shortName: "AITR Indore",
    role: "Industrial Robotics & Drone COE",
    location: "Manglia Bypass, Indore, MP",
    fullAddress: "Bypass Road, Manglia Square, Indore, MP 453771",
    tier: "Autonomous Engineering College (NAAC 'A')",
    highlights: [
      "6-DOF Articulated Robotic Arm kinematics & ROS 2 workstations",
      "Quadcopter drone avionics and autonomous flight test arena",
      "Direct 6-month offline internship and R&D pipeline"
    ],
    specs: {
      students: "2,400+ Engineers",
      internships: "50+ Seats/Cohort",
      labLevel: "Tier-1 Autonomous COE"
    }
  },
  {
    id: 1,
    code: "COE-02",
    name: "Geetanjali Institute of Technical Studies",
    shortName: "GITS Udaipur",
    role: "AI Vision & IoT Innovation Hub",
    location: "Airport Road, Udaipur, Rajasthan",
    fullAddress: "NH-76, Airport Road, Dabok, Udaipur, Rajasthan 313022",
    tier: "NBA & NAAC Accredited Engineering Campus",
    highlights: [
      "Real-time machine vision optical inspection conveyors",
      "Embedded STM32 / ESP32 sensor telemetry networks",
      "Joint technical paper publications and sponsored hackathons"
    ],
    specs: {
      students: "1,800+ Engineers",
      internships: "40+ Seats/Cohort",
      labLevel: "Industrial IoT COE"
    }
  },
  {
    id: 2,
    code: "COE-03",
    name: "Indore Institute of Science & Technology",
    shortName: "IIST Indore",
    role: "Autonomous Mobile Robots (AMR) COE",
    location: "Rau-Pithampur Road, Indore, MP",
    fullAddress: "Opposite IIM, Rau, Indore, MP 453331",
    tier: "Premier Technical Research Institution",
    highlights: [
      "SLAM LiDAR mapping and AGV obstacle avoidance systems",
      "High-torque brushless BLDC motor controller tuning",
      "Inter-university autonomous robotics championship tracks"
    ],
    specs: {
      students: "1,500+ Engineers",
      internships: "35+ Seats/Cohort",
      labLevel: "Mechatronics Lab"
    }
  }
];

export default function PartneredCollegesShowcase() {
  // Default to Center Card (id: 1) so it is active and clear on initial page load
  const [activeId, setActiveId] = useState<number>(1);

  // Auto-scroll to #partnered-colleges if navigated with hash
  useEffect(() => {
    const scrollToSection = () => {
      if (
        typeof window !== "undefined" &&
        (window.location.hash === "#partnered-colleges" ||
          window.location.hash === "#college-workshops" ||
          window.location.hash === "#coe-hubs")
      ) {
        const el = document.getElementById("partnered-colleges");
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
    <div id="partnered-colleges" className="w-full space-y-8 scroll-mt-28">
      {/* ── HEADER ── */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-sans text-[10px] uppercase tracking-widest text-cyan-400 font-semibold">
              HIGHER EDUCATION &amp; R&amp;D
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#F5F5F5] uppercase tracking-tight">
            COLLEGE WORKSHOPS &amp; COE HUBS
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#A1A1AA] mt-1">
            Click on any college card below to inspect its dedicated Centre of Excellence details.
          </p>
        </div>

        <span className="font-sans font-semibold text-xs text-cyan-300 uppercase tracking-wider flex-shrink-0">
          3 Institutional Centres of Excellence
        </span>
      </div>

      {/* ── 3-CARD INTERACTIVE GRID WITH CLEAN WHITE BACKGROUND ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {collegesData.map((college) => {
          const isActive = college.id === activeId;

          return (
            <div
              key={college.id}
              onClick={() => setActiveId(college.id)}
              className={`group relative rounded-[2rem] p-7 transition-all duration-400 cursor-pointer flex flex-col justify-between overflow-hidden shadow-xl ${
                isActive
                  ? "bg-white text-slate-900 border-2 border-cyan-400 shadow-[0_20px_50px_rgba(6,182,212,0.3)] ring-4 ring-cyan-400/50 scale-[1.03] z-20 opacity-100"
                  : "bg-white/90 text-slate-800 border border-slate-200 hover:border-slate-300 hover:bg-white opacity-70 hover:opacity-100 scale-95 hover:scale-100 z-10"
              }`}
            >
              {/* Top Info */}
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider ${
                      isActive
                        ? "bg-cyan-950 text-cyan-300 border border-cyan-500/40"
                        : "bg-slate-100 text-slate-700 border border-slate-200"
                    }`}
                  >
                    <Building2 className="w-3.5 h-3.5 text-cyan-600" />
                    {college.code}
                  </span>

                  {isActive ? (
                    <span className="flex items-center gap-1 font-sans text-[10px] uppercase tracking-wider font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                      Active
                    </span>
                  ) : (
                    <span className="text-[10px] font-sans font-semibold text-slate-400 group-hover:text-cyan-600 transition-colors uppercase">
                      Tap to view
                    </span>
                  )}
                </div>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-xs text-slate-600 mb-2 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0" />
                  <span className="truncate">{college.location}</span>
                </div>

                {/* Address */}
                {isActive && (
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed line-clamp-2">
                    {college.fullAddress}
                  </p>
                )}

                {/* Role / Tag */}
                <p className="font-sans font-bold text-xs uppercase tracking-wider text-cyan-700 mb-1">
                  {college.role}
                </p>

                {/* College Name */}
                <h3 className="font-heading font-bold text-xl text-slate-900 tracking-tight leading-snug mb-2">
                  {college.name}
                </h3>

                <p className="text-xs text-slate-500 font-sans mb-4">
                  {college.tier}
                </p>

                {/* Active Card Highlights (Themed to Cyan-950 Brand) */}
                {isActive && (
                  <div className="bg-cyan-950 text-white border border-cyan-500/40 rounded-2xl p-4 mb-4 space-y-2 shadow-[0_4px_20px_rgba(6,182,212,0.18)]">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                      Lab Infrastructure &amp; Deliverables:
                    </div>
                    {college.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-200 leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-700 font-sans font-medium">
                  <GraduationCap className="w-4 h-4 text-cyan-600" />
                  <span>{college.specs.students}</span>
                </div>
                <span className="text-[11px] font-mono text-cyan-700 font-semibold">
                  {college.specs.internships}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
