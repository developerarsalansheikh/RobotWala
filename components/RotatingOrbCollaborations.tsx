"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, LayoutGroup } from "framer-motion";
import { 
  GraduationCap, 
  Building2, 
  Briefcase, 
  Award, 
  ArrowUpRight, 
  Radio
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export interface CollabCard {
  id: string;
  title: string;
  tag: string;
  badge: string;
  highlight: string;
  description: string;
  metrics: string;
  icon: any;
  href: string;
  accent: string;
}

export const homeCollabs: CollabCard[] = [
  {
    id: "collab-school",
    title: "School Collaboration",
    tag: "200+ Schools",
    badge: "Grassroots STEM",
    highlight: "₹5 Lakh+ Labs",
    description:
      "We build and deploy turnkey AI & Robotics experiential labs valued at ₹5 Lakh+ to nurture young innovators with hands-on accredited curricula.",
    metrics: "50,000+ Students Inspired",
    icon: GraduationCap,
    href: "/collaborations#partnered-schools",
    accent: "from-cyan-500/20 to-blue-500/10"
  },
  {
    id: "collab-college",
    title: "College Collaboration",
    tag: "50+ Colleges",
    badge: "Advanced R&D",
    highlight: "Centres of Excellence",
    description:
      "Transforming higher education through advanced AI, ROS2 robotics, Drone telemetry labs, and institutional Centres of Excellence.",
    metrics: "Engineering Research Hubs",
    icon: Building2,
    href: "/collaborations#partnered-colleges",
    accent: "from-blue-500/20 to-indigo-500/10"
  },
  {
    id: "collab-internship",
    title: "6-Month Internship",
    tag: "Offline Intensive",
    badge: "Career Accelerator",
    highlight: "Commercial Robots",
    description:
      "6-month on-site intensive offline program providing direct hands-on commercial android development, embedded firmware, and research mentorship.",
    metrics: "100% Industry Exposure",
    icon: Briefcase,
    href: "/contact?subject=6-Month%20On-Site%20Internship#send-message",
    accent: "from-purple-500/20 to-cyan-500/10"
  },
  {
    id: "collab-franchise",
    title: "Franchise Network",
    tag: "Pan-India Expansion",
    badge: "Growth Alliance",
    highlight: "Turnkey Academy Model",
    description:
      "Partner with ROBOTWALA to establish state-of-the-art regional robotics training academies, distribution hubs, and high-margin maker spaces.",
    metrics: "Territorial Exclusivity",
    icon: Award,
    href: "/contact?subject=Franchise%20Partnership%20Inquiry#contact-form",
    accent: "from-cyan-500/20 to-purple-500/10"
  }
];

export default function RotatingOrbCollaborations() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [step, setStep] = useState<number>(0);

  // Auto-cycle grid positions in CLOCKWISE direction every 3 seconds
  useEffect(() => {
    if (hoveredId !== null) return;

    const interval = setInterval(() => {
      setStep((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [hoveredId]);

  // Clockwise Slot Calculation:
  // Slot 0 = Top-Left
  // Slot 1 = Top-Right
  // Slot 2 = Bottom-Right
  // Slot 3 = Bottom-Left
  // Clockwise flow: Top-Left -> Top-Right -> Bottom-Right -> Bottom-Left -> Top-Left
  const getCardForSlot = (slot: number) => {
    const itemIndex = ((slot - (step % 4)) % 4 + 4) % 4;
    return homeCollabs[itemIndex];
  };

  const topLeftCard = getCardForSlot(0);
  const topRightCard = getCardForSlot(1);
  const bottomRightCard = getCardForSlot(2);
  const bottomLeftCard = getCardForSlot(3);

  const renderCard = (collab: CollabCard) => {
    const Icon = collab.icon;
    const isHovered = hoveredId === collab.id;

    return (
      <motion.div
        layout
        layoutId={collab.id}
        transition={{
          layout: {
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1]
          }
        }}
        className="w-full"
      >
        <Link
          href={collab.href}
          onMouseEnter={() => setHoveredId(collab.id)}
          onMouseLeave={() => setHoveredId(null)}
          className={`group relative block rounded-3xl p-6 sm:p-7 transition-all duration-300 border overflow-hidden cursor-pointer ${
            isHovered
              ? "bg-[#0f172a] border-cyan-400 shadow-[0_0_35px_rgba(6,182,212,0.3)] scale-[1.02]"
              : "bg-[#0b111e] border-slate-700/60 hover:border-slate-600 shadow-xl"
          }`}
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-400/80" />

          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-all duration-300">
              <Icon className="w-6 h-6" />
            </div>
            <span className="px-3 py-1 rounded-full bg-white/[0.06] text-[#F5F5F5] text-[10px] uppercase tracking-widest font-semibold border border-white/10 group-hover:border-cyan-400/40 transition-colors font-sans">
              {collab.tag}
            </span>
          </div>

          <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-semibold font-sans block mb-1">
            {collab.badge}
          </span>
          <h3 className="font-heading font-semibold text-xl text-[#F5F5F5] uppercase tracking-wide group-hover:text-cyan-300 transition-colors mb-2">
            {collab.title}
          </h3>
          <p className="font-sans font-normal text-xs text-[#A1A1AA] leading-relaxed mb-4 line-clamp-3">
            {collab.description}
          </p>

          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
            <span className="text-slate-400 font-medium">{collab.metrics}</span>
            <span className="text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              <span>Explore</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </Link>
      </motion.div>
    );
  };

  return (
    <div className="w-full space-y-12">
      {/* ── SECTION HEADER ── */}
      <ScrollReveal direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 font-sans font-medium text-xs uppercase tracking-widest text-cyan-400 mb-2">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-ping" />
            <span>ECOSYSTEM &amp; PARTNERSHIPS</span>
          </div>
          <h2 className="font-heading font-semibold text-3xl sm:text-5xl uppercase tracking-[-0.025em] text-[#F5F5F5] leading-[1.1] mb-3">
            CLUB COLLABORATIONS
          </h2>
          <p className="font-sans font-normal text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
            Join hands with Robotwala to engineer India&apos;s futuristic robotics and autonomous hardware ecosystem.
          </p>
        </div>
        <Link
          href="/collaborations"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 font-sans font-semibold text-xs uppercase tracking-widest transition-all cursor-pointer flex-shrink-0"
        >
          <span>Explore All Partnerships</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </ScrollReveal>

      {/* ── 3D ROTATING SPHERE + 4 CLOCKWISE ANIMATED GRIDS (FRAMER MOTION LAYOUT GROUP) ── */}
      <LayoutGroup id="collabs-orbit-grid">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* ── LEFT COLUMN (Slot 0: Top-Left, Slot 3: Bottom-Left) ── */}
          <div className="lg:col-span-4 space-y-6 flex flex-col">
            <div className="min-h-[220px] flex items-center">{renderCard(topLeftCard)}</div>
            <div className="min-h-[220px] flex items-center">{renderCard(bottomLeftCard)}</div>
          </div>

          {/* ── CENTER 3D ROTATING INDUSTRIAL ROBOTICS CORE SHOWCASE ── */}
          <div className="lg:col-span-4 flex items-center justify-center my-4 lg:my-0">
            <ScrollReveal direction="scale">
              <div className="relative w-full max-w-[360px] flex flex-col items-center justify-center p-2 overflow-visible group">
                
                {/* ── INDUSTRIAL ROBOTICS GYROSCOPIC CORE ── */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 my-auto flex items-center justify-center">
                  
                  {/* Outer Industrial Calibration HUD Ring (0° / 90° / 180° / 270° Ticks) */}
                  <div className="absolute inset-0 rounded-full border border-slate-700/60 pointer-events-none scale-105" />
                  <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/30 animate-[spin_30s_linear_infinite] pointer-events-none scale-110" />
                  
                  {/* 4 Cardinal Crosshair Calibration Ticks */}
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2 h-3.5 bg-cyan-400 rounded-sm pointer-events-none" />
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-3.5 bg-cyan-400 rounded-sm pointer-events-none" />
                  <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3.5 h-2 bg-cyan-400 rounded-sm pointer-events-none" />
                  <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3.5 h-2 bg-cyan-400 rounded-sm pointer-events-none" />

                  {/* Inner Gyroscope Gimbal Ring 1 (Tilted 45deg) */}
                  <div className="absolute inset-3 rounded-full border border-cyan-400/40 animate-[spin_12s_linear_infinite] pointer-events-none [transform:rotateX(65deg)] shadow-[0_0_15px_rgba(6,182,212,0.2)]" />

                  {/* Inner Gyroscope Gimbal Ring 2 (Tilted -45deg counter-rotating) */}
                  <div className="absolute inset-5 rounded-full border border-slate-500/50 animate-[spin_16s_linear_infinite_reverse] pointer-events-none [transform:rotateY(65deg)]" />

                  {/* Top/Bottom Mechanical Axis Pivots */}
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)] z-20 pointer-events-none" />
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)] z-20 pointer-events-none" />

                  {/* ── THE 3D INDUSTRIAL METALLIC SPHERE ── */}
                  <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden shadow-[inset_-24px_-24px_45px_rgba(0,0,0,0.98),inset_18px_18px_40px_rgba(255,255,255,0.4),0_0_35px_rgba(6,182,212,0.25)] cursor-pointer group-hover:scale-105 transition-transform duration-500 bg-[#0f172a] border border-cyan-400/30">
                    
                    {/* High-Precision Rotating Longitude/Latitude Radar Matrix */}
                    <div 
                      className="absolute inset-0 opacity-80 mix-blend-screen animate-[spin_8s_linear_infinite]"
                      style={{
                        backgroundImage: `repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 9px, rgba(6, 182, 212, 0.4) 10px, rgba(6, 182, 212, 0.4) 12px, transparent 13px)`
                      }}
                    />

                    {/* Horizontal Titanium Segment Ribs */}
                    <div 
                      className="absolute inset-0 opacity-70 animate-[spin_20s_linear_infinite_reverse]"
                      style={{
                        backgroundImage: `repeating-linear-gradient(0deg, rgba(0,0,0,0.7) 0px, rgba(0,0,0,0.7) 8px, rgba(255,255,255,0.3) 9px, rgba(255,255,255,0.3) 13px)`
                      }}
                    />

                    {/* Industrial Core Quantum AI Reactor Spot */}
                    <div className="absolute inset-[30%] rounded-full bg-cyan-400/20 blur-md animate-pulse pointer-events-none" />
                    <div className="absolute inset-[40%] rounded-full border border-cyan-300/60 animate-ping pointer-events-none" />

                    {/* 3D Specular Chrome Glare Reflections */}
                    <div className="absolute top-2.5 right-5 w-24 h-16 rounded-full bg-white/45 blur-md pointer-events-none rotate-12" />
                    <div className="absolute top-5 right-8 w-11 h-7 rounded-full bg-white/85 blur-sm pointer-events-none" />
                    <div className="absolute bottom-4 left-5 w-14 h-7 rounded-full bg-cyan-400/30 blur-sm pointer-events-none -rotate-12" />
                  </div>

                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* ── RIGHT COLUMN (Slot 1: Top-Right, Slot 2: Bottom-Right) ── */}
          <div className="lg:col-span-4 space-y-6 flex flex-col">
            <div className="min-h-[220px] flex items-center">{renderCard(topRightCard)}</div>
            <div className="min-h-[220px] flex items-center">{renderCard(bottomRightCard)}</div>
          </div>

        </div>
      </LayoutGroup>
    </div>
  );
}
