import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { MapPin } from "lucide-react";
import PartneredSchoolsShowcase from "@/components/PartneredSchoolsShowcase";
import PartneredCollegesShowcase from "@/components/PartneredCollegesShowcase";

export const metadata = {
  title: "Collaborations & Partners | ROBOTWALA",
  description:
    "Explore institutional partnerships with 200+ schools and 50+ colleges across India, 6-month offline internships, and the #RevolutionByRobotwala franchise program.",
};

export default function CollaborationsPage() {
  const schoolLogos = [
    { name: "Pakiza Public School", location: "Indore, MP", logo: "/school-logos/pakiza-public-school.png" },
    { name: "Pakiza School", location: "Indore, MP", logo: "/school-logos/pakiza-school.png" },
    { name: "PPS Golden", location: "Indore, MP", logo: "/school-logos/pps-golden.png" },
    { name: "Zeenat Public School", location: "Bhopal, MP", logo: "/school-logos/zeenat-school.png" },
    { name: "Ahmad Noor Memorial H.S.", location: "Indore, MP", logo: "/school-logos/ahmad-noor.png" },
    { name: "St. Mariyam School", location: "Indore, MP", logo: "/school-logos/st-mariyam.png" },
    { name: "Greenvalley International", location: "Indore, MP", logo: "/school-logos/greenvalley.png" },
    { name: "MABFM Academy", location: "Khajrana, Indore", logo: "/school-logos/mabfm-academy.png" },
  ];

  return (
    <div className="w-full flex flex-col bg-[#030303] text-white">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 sm:py-28 text-center border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center relative z-10">
          <p className="font-sans font-medium text-xs uppercase tracking-widest text-cyan-400 mb-4">
            COLLABORATIONS &amp; ECOSYSTEM
          </p>

          <h1 className="font-heading font-bold text-4xl sm:text-6xl lg:text-7xl uppercase tracking-[-0.035em] text-[#F5F5F5] leading-[1.05] mb-6">
            <span>ROBOTWALA </span>
            <span className="text-cyan-400 drop-shadow-[0_0_30px_rgba(6,182,212,0.4)]">
              COLLABORATIONS
            </span>
          </h1>

          <p className="font-sans font-normal text-base sm:text-lg text-[#A1A1AA] max-w-3xl mx-auto leading-relaxed">
            Uniting schools, universities, aspiring engineers, and visionary entrepreneurs under a shared mission to engineer India&apos;s autonomous technological future.
          </p>
        </div>
      </section>

      {/* 2. TRUSTED PARTNERS — GLOBE NETWORK DESIGN */}
      <section className="relative py-20 md:py-28 border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* ── LEFT: TEXT + STATS ── */}
            <div className="flex-1 min-w-0">
              <ScrollReveal direction="up">
                <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-[#F5F5F5] leading-[1.08] mb-5">
                  Trusted Partners
                </h2>
                <p className="font-sans font-normal text-base text-[#A1A1AA] leading-relaxed mb-10 max-w-md">
                  We are proud to collaborate with industry-leading schools and institutions that share our vision and values. Their continued trust and support help us deliver excellence every step of the way.
                </p>

                {/* Stats card */}
                <div className="relative bg-[#0d1424] border border-slate-700/60 rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                  {/* Progress bar */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex-1 h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-300" />
                    </div>
                    <svg className="w-8 h-8 text-cyan-400 flex-shrink-0" viewBox="0 0 32 32" fill="none">
                      <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" opacity="0.4" />
                      <path d="M6 16 L26 16 M20 10 L26 16 L20 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* 3 Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { value: "30+", label: "Partners" },
                      { value: "200+", label: "Schools" },
                      { value: "50K+", label: "Students" },
                    ].map((s) => (
                      <div key={s.label} className="bg-[#131f36] border border-slate-700/60 rounded-xl px-4 py-4 text-center">
                        <div className="font-heading font-semibold text-xl sm:text-2xl text-[#F5F5F5] mb-1">{s.value}</div>
                        <div className="font-sans font-normal text-[10px] uppercase tracking-widest text-[#A1A1AA]">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* ── RIGHT: GLOBE + FLOATING LOGOS ── */}
            <div className="flex-1 min-w-0 flex items-center justify-center">
              <ScrollReveal direction="up" delay={0.15}>
                <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px]">

                  {/* Globe SVG wireframe */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 300 300" className="w-full h-full opacity-20" fill="none">
                      {/* Outer circle */}
                      <circle cx="150" cy="150" r="130" stroke="#22d3ee" strokeWidth="1" />
                      {/* Longitude lines */}
                      <ellipse cx="150" cy="150" rx="50" ry="130" stroke="#22d3ee" strokeWidth="0.8" />
                      <ellipse cx="150" cy="150" rx="100" ry="130" stroke="#22d3ee" strokeWidth="0.8" />
                      <line x1="150" y1="20" x2="150" y2="280" stroke="#22d3ee" strokeWidth="0.8" />
                      {/* Latitude lines */}
                      <ellipse cx="150" cy="100" rx="115" ry="28" stroke="#22d3ee" strokeWidth="0.8" />
                      <ellipse cx="150" cy="150" rx="130" ry="32" stroke="#22d3ee" strokeWidth="0.8" />
                      <ellipse cx="150" cy="200" rx="115" ry="28" stroke="#22d3ee" strokeWidth="0.8" />
                      {/* Connection dots */}
                      <circle cx="150" cy="20" r="3" fill="#22d3ee" opacity="0.6" />
                      <circle cx="150" cy="280" r="3" fill="#22d3ee" opacity="0.6" />
                      <circle cx="20" cy="150" r="3" fill="#22d3ee" opacity="0.6" />
                      <circle cx="280" cy="150" r="3" fill="#22d3ee" opacity="0.6" />
                    </svg>
                  </div>

                  {/* Center glow */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-32 h-32 rounded-full bg-cyan-500/8 blur-2xl" />
                  </div>

                  {/* Floating school logo cards around the globe */}
                  {/* Top */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.5)] overflow-hidden flex items-center justify-center animate-float-1">
                    <img src="/school-logos/pakiza-public-school.png" alt="Pakiza Public School" className="w-full h-full object-contain p-1.5" />
                  </div>
                  {/* Top-right */}
                  <div className="absolute top-10 right-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.5)] overflow-hidden flex items-center justify-center animate-float-2">
                    <img src="/school-logos/pakiza-school.png" alt="Pakiza School" className="w-full h-full object-contain p-1.5" />
                  </div>
                  {/* Right */}
                  <div className="absolute top-1/2 -translate-y-1/2 right-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.5)] overflow-hidden flex items-center justify-center animate-float-3">
                    <img src="/school-logos/pps-golden.png" alt="PPS Golden" className="w-full h-full object-contain p-1.5" />
                  </div>
                  {/* Bottom-right */}
                  <div className="absolute bottom-10 right-4 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.5)] overflow-hidden flex items-center justify-center animate-float-4">
                    <img src="/school-logos/zeenat-school.png" alt="Zeenat School" className="w-full h-full object-contain p-1.5" />
                  </div>
                  {/* Bottom */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.5)] overflow-hidden flex items-center justify-center animate-float-1">
                    <img src="/school-logos/ahmad-noor.png" alt="Ahmad Noor" className="w-full h-full object-contain p-1.5" />
                  </div>
                  {/* Bottom-left */}
                  <div className="absolute bottom-10 left-4 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.5)] overflow-hidden flex items-center justify-center animate-float-2">
                    <img src="/school-logos/st-mariyam.png" alt="St. Mariyam" className="w-full h-full object-contain p-1.5" />
                  </div>
                  {/* Left */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.5)] overflow-hidden flex items-center justify-center animate-float-3">
                    <img src="/school-logos/greenvalley.png" alt="Greenvalley" className="w-full h-full object-contain p-1.5" />
                  </div>
                  {/* Top-left */}
                  <div className="absolute top-10 left-2 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.5)] overflow-hidden flex items-center justify-center animate-float-4">
                    <img src="/school-logos/mabfm-academy.png" alt="MABFM Academy" className="w-full h-full object-contain p-1.5" />
                  </div>

                  {/* Connection lines (SVG overlay) */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25" viewBox="0 0 340 340">
                    <line x1="170" y1="16" x2="170" y2="100" stroke="#22d3ee" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="300" y1="50" x2="230" y2="110" stroke="#22d3ee" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="320" y1="170" x2="240" y2="170" stroke="#22d3ee" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="300" y1="290" x2="230" y2="230" stroke="#22d3ee" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="170" y1="324" x2="170" y2="240" stroke="#22d3ee" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="40" y1="290" x2="110" y2="230" stroke="#22d3ee" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="20" y1="170" x2="100" y2="170" stroke="#22d3ee" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="40" y1="50" x2="110" y2="110" stroke="#22d3ee" strokeWidth="1" strokeDasharray="3 3" />
                  </svg>

                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PARTNERS LIST (Clean & Static) */}
      <section className="relative py-16 pb-28 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 space-y-20">
          {/* Partnered Schools Interactive Showcase (10 Schools) */}
          <PartneredSchoolsShowcase />

          {/* Partnered Colleges & Universities Interactive Showcase */}
          <PartneredCollegesShowcase />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-8 pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <ScrollReveal direction="scale">
            <div className="relative bg-[#0b111e] border border-slate-700/60 rounded-3xl p-12 sm:p-16 text-center overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.9)]">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-400" />

              <h3 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl text-[#F5F5F5] uppercase tracking-[-0.025em] leading-[1.08] mb-6 relative z-10">
                Bring ROBOTWALA Robotics to Your School or Campus
              </h3>
              <p className="font-sans font-normal text-base text-[#A1A1AA] max-w-xl mx-auto mb-10 leading-relaxed relative z-10">
                Our institutional liaisons provide on-campus demonstrations and complete lab infrastructure proposals.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-sans font-semibold text-xs uppercase tracking-widest rounded-full shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all active:scale-95 relative z-10 cursor-pointer"
              >
                <span>Request Institutional Presentation</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

