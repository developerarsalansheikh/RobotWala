"use client";

import React, { useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import {
  Eye,
  Target,
  CheckCircle2,
  Award,
  Cpu,
  GraduationCap,
  Bot,
  Sparkles,
  ArrowRight,
  Zap,
  Users,
  Compass,
  Lightbulb,
  Users2,
  Smile,
  TrendingUp,
} from "lucide-react";

export default function AboutPage() {
  // ── Typewriter effect for ABOUT ROBOTWALA (One by one typed character animation) ──
  const fullAboutText = "ABOUT ROBOTWALA";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullAboutText.length) {
        setTypedText(fullAboutText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 85);

    return () => clearInterval(timer);
  }, []);

  // ── Word-by-word headline animation tokens ──
  const heroWords = [
    { text: "PIONEERING", highlight: false },
    { text: "THE", highlight: false },
    { text: "FUTURE", highlight: true },
    { text: "OF", highlight: true },
    { text: "ROBOTICS", highlight: true },
  ];


  // ── Core Values ──
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Pushing boundaries in autonomous systems, intelligent mechanics, and state-of-the-art robotic kinematics.",
    },
    {
      icon: Users2,
      title: "Collaboration",
      description:
        "Fostering strategic alliances with premier schools, universities, and industrial pioneers across India.",
    },
    {
      icon: Smile,
      title: "Customer Satisfaction",
      description:
        "Delivering fail-safe, production-ready robotics solutions with 24/7 dedicated engineering support.",
    },
    {
      icon: TrendingUp,
      title: "Progress",
      description:
        "Empowering grassroots innovators and accelerating national technological self-reliance.",
    },
  ];

  // ── Timeline Milestones ──
  const journeyTimeline = [
    {
      year: "2024",
      milestone: "FOUNDED",
      title: "Foundation of ROBOTWALA",
      badge: "The Inception",
      description:
        "ROBOTWALA was established with a bold mission to pioneer indigenous AI and cutting-edge robotics in India, bridging theoretical engineering with scalable real-world autonomy.",
      icon: Award,
    },
    {
      year: "2024",
      milestone: "LUCY",
      title: "Launch of LUCY AI Humanoid Robot",
      badge: "Breakthrough AI",
      description:
        "Engineered and unveiled LUCY, India's flagship autonomous service humanoid robot featuring 3D LiDAR SLAM, bilingual conversational NLP, and multi-floor elevator transit.",
      icon: Bot,
    },
    {
      year: "2025",
      milestone: "ENTERED ED TECH",
      title: "Nationwide STEM & Robotics Revolution",
      badge: "Educational Scaling",
      description:
        "Expanded into experiential education technology, establishing over 200+ advanced robotics innovation labs and deploying hands-on hardware kits across schools and colleges in India.",
      icon: GraduationCap,
    },
    {
      year: "2025",
      milestone: "NYLA",
      title: "Unveiling NYLA Intelligent Robot",
      badge: "Autonomous Assistant",
      description:
        "Engineered NYLA, our next-generation interactive AI robot tailored for healthcare concierge, commercial banking, premium retail, and exhibition greeting experiences.",
      icon: Sparkles,
    },
    {
      year: "2025",
      milestone: "HUMANOID ROBOT",
      title: "Next-Gen Commercial Humanoid Deployment",
      badge: "Deep Kinematics",
      description:
        "Rolled out next-generation commercial humanoid androids equipped with sub-millimeter articulate bionics, dual neural engines, and real-time cloud fleet telemetry.",
      icon: Cpu,
    },
  ];

  return (
    <div className="w-full flex flex-col bg-[#030303] text-white overflow-hidden">
      {/* ── 1. HERO SECTION: WORD-BY-WORD ANIMATED HEADLINE & SLIGHTLY LARGER ABOUT ROBOTWALA BADGE ── */}
      <section className="relative py-20 md:py-28 text-center border-b border-slate-800/80 overflow-hidden">
        {/* Subtle Ambient Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-cyan-500/[0.07] blur-[160px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Much Larger, Prominent Animated "ABOUT ROBOTWALA" Typewriter */}
          <ScrollReveal direction="down">
            <div className="mb-6 flex justify-center">
              <span className="font-heading font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-[0.12em] text-cyan-400 drop-shadow-[0_0_25px_rgba(6,182,212,0.6)]">
                {typedText}
              </span>
            </div>
          </ScrollReveal>


          {/* Word-by-Word Animated Headline (Like Before with Slightly Bigger Font Size) */}
          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-[-0.035em] leading-[1.08] mb-6 flex flex-wrap justify-center gap-x-3 sm:gap-x-5 gap-y-1">
            {heroWords.map((word, i) => (
              <span
                key={i}
                className={`inline-block transition-all ${
                  word.highlight
                    ? "text-cyan-400 drop-shadow-[0_0_35px_rgba(6,182,212,0.45)]"
                    : "text-[#F5F5F5]"
                }`}
                style={{
                  animation: `wordReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards ${i * 0.13}s`,
                  opacity: 0,
                }}
              >
                {word.text}
              </span>
            ))}
          </h1>

          {/* Hero Subtitle */}
          <ScrollReveal direction="up" delay={0.25}>
            <p className="font-sans font-normal text-base sm:text-lg text-[#A1A1AA] max-w-3xl mx-auto leading-relaxed">
              ROBOTWALA is at the vanguard of India&apos;s technological revolution. We design, engineer, and deploy high-performance robotics, precision hardware, and immersive educational ecosystems.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 2. OUR VISION (Left Image slides in from left, Right Content) ── */}
      <section className="relative py-16 md:py-24 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Side: Vision Image — slides in from LEFT on scroll */}
            <ScrollReveal direction="left" className="w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
                <div className="relative w-full h-72 sm:h-96 md:h-[480px] overflow-hidden">
                  <img
                    src="/about-vision.jpg"
                    alt="ROBOTWALA Vision"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Right Side: Vision Description */}
            <ScrollReveal direction="right" className="w-full">
              <div className="flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Eye className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-400">
                    OUR VISION
                  </span>
                </div>

                <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#F5F5F5] leading-tight mb-5">
                  Democratizing Advanced Robotics for Every Enterprise &amp; Classroom
                </h2>

                <p className="font-sans text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-6">
                  To establish India as a global epicenter of artificial intelligence and robotic innovation. We envision a future where autonomous machines seamlessly assist industries, automate repetitive labor, and inspire young minds from elementary classrooms to deep-tech research laboratories.
                </p>

                {/* Key Vision Points */}
                <div className="space-y-3 font-sans">
                  {[
                    "Transforming India into a global autonomous hardware powerhouse.",
                    "Creating indigenous service humanoids with multilingual cognitive capabilities.",
                    "Bridging academic engineering curricula with hands-on industrial robotics.",
                  ].map((pt, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 3. OUR MISSION (OPPOSITE: Left Content, Right Image slides in from RIGHT) ── */}
      <section className="relative py-16 md:py-24 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Side: Mission Description (text first on desktop) */}
            <ScrollReveal direction="left" className="w-full">
              <div className="flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Target className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-400">
                    OUR MISSION
                  </span>
                </div>

                <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#F5F5F5] leading-tight mb-5">
                  Engineering Practical, Scalable Hardware &amp; Empowering Minds
                </h2>

                <p className="font-sans text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-6">
                  Deliver accessible, production-ready robotics through state-of-the-art service humanoids, smart automation boards, and institutional innovation laboratories. We aim to solve real-world challenges while equipping students and researchers with cutting-edge experiential tools.
                </p>

                {/* Key Mission Points */}
                <div className="space-y-3 font-sans">
                  {[
                    "Deploying production-ready service humanoids for corporate & hospitality use.",
                    "Equipping educational institutions with 200+ specialized STEM & AI laboratories.",
                    "Delivering fail-safe, affordable embedded IoT controllers for industry.",
                  ].map((pt, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Right Side: Mission Image — slides in from RIGHT on scroll (opposite of Vision) */}
            <ScrollReveal direction="right" className="w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
                <div className="relative w-full h-72 sm:h-96 md:h-[480px] overflow-hidden">
                  <img
                    src="/about-mission.jpg"
                    alt="ROBOTWALA Mission"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 4. OUR CORE VALUES (Restored as requested) ── */}
      <section className="relative py-20 md:py-28 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold">
              GUIDING PRINCIPLES
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-5xl uppercase tracking-[-0.025em] text-[#F5F5F5] mt-2">
              OUR CORE VALUES
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <ScrollReveal key={i} direction="up" delay={(i % 4) * 0.1}>
                  <div className="relative bg-[#0b111e] border border-slate-700/60 rounded-2xl p-7 overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.5)] h-full hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-all duration-300">
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-400/80" />

                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-[#F5F5F5] uppercase tracking-wide mb-2">
                      {v.title}
                    </h3>
                    <p className="font-sans font-normal text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. OUR JOURNEY (Fully Animated Milestones with English Continuation) ── */}
      <section className="relative py-20 md:py-28 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b111e] border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>CHRONOLOGY &amp; EVOLUTION</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-5xl uppercase tracking-tight text-[#F5F5F5] mt-1">
              OUR JOURNEY
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#A1A1AA] mt-3">
              Key milestones shaping India&apos;s robotics and autonomous intelligence landscape.
            </p>
          </div>

          {/* Animated Timeline Cards */}
          <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-28 md:ml-36 space-y-10 pb-8">
            {journeyTimeline.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
                  <div className="relative pl-8 sm:pl-12 group">
                    {/* Glowing Timeline Node Indicator */}
                    <div className="absolute -left-[17px] top-3 w-8 h-8 rounded-full bg-[#060a14] border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-[0_0_18px_rgba(6,182,212,0.6)] group-hover:scale-125 transition-transform duration-300">
                      <Icon className="w-3.5 h-3.5" />
                    </div>

                    {/* Desktop Year Label */}
                    <div className="hidden sm:block absolute -left-32 md:-left-40 top-3 text-right w-24 md:w-32">
                      <span className="font-mono font-bold text-lg text-cyan-400 block leading-none">
                        {item.year}
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-[#A1A1AA] block mt-1">
                        {item.milestone}
                      </span>
                    </div>

                    {/* Timeline Event Card */}
                    <div className="relative bg-[#0b111e] border border-slate-700/60 rounded-2xl p-6 sm:p-7 hover:border-cyan-500/50 hover:shadow-[0_15px_35px_rgba(0,0,0,0.8),0_0_25px_rgba(6,182,212,0.15)] transition-all duration-300 overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-400/80" />

                      {/* Header in Card */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="sm:hidden font-mono font-bold text-sm text-cyan-400">
                          {item.year} - {item.milestone}
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-bold">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="font-heading font-bold text-lg sm:text-xl text-[#F5F5F5] uppercase tracking-wide mb-2 group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>

                      <p className="font-sans font-normal text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}

            {/* Final Highlight: English Translation of the Continuation Statement */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="relative pl-8 sm:pl-12">
                {/* Glowing Pulse Node */}
                <div className="absolute -left-[17px] top-4 w-8 h-8 rounded-full bg-cyan-400 border-2 border-white flex items-center justify-center text-slate-950 shadow-[0_0_25px_rgba(6,182,212,0.8)] animate-pulse">
                  <Sparkles className="w-4 h-4" />
                </div>

                <div className="hidden sm:block absolute -left-32 md:-left-40 top-4 text-right w-24 md:w-32">
                  <span className="font-mono font-bold text-lg text-[#F5F5F5] block leading-none">
                    PRESENT
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-cyan-400 block mt-1">
                    &amp; BEYOND
                  </span>
                </div>

                <div className="relative bg-[#070e1c] border-2 border-cyan-400/60 rounded-2xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(6,182,212,0.25)] overflow-hidden">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest">
                      ACTIVE EXPANSION &amp; ONGOING INNOVATION
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-white uppercase tracking-tight mb-2">
                    And the Journey Continues...
                  </h3>

                  <p className="font-sans text-sm text-[#E2E8F0] leading-relaxed">
                    Our journey is relentless and ever-evolving — every single day, ROBOTWALA continues to pioneer next-generation autonomous bionics, multi-agent AI ecosystems, and nationwide innovation laboratories, elevating India to the forefront of global robotics.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 6. EXECUTIVE LEADERSHIP (Dr. Zaheeruddin Babar & Imran Sir) ── */}
      <section className="relative py-20 md:py-28 border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b111e] border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>VISIONARY LEADERSHIP</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-5xl uppercase tracking-tight text-[#F5F5F5] mt-1">
              EXECUTIVE LEADERSHIP
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#A1A1AA] mt-3">
              Guided by veteran AI researchers, academics, and robotics visionaries.
            </p>
          </div>

          {/* Leaders Stack (Dr. Zaheeruddin Babar, then Imran Sir) */}
          <div className="space-y-6">
            {/* Leader 1: Dr. Zaheeruddin Babar */}
            <ScrollReveal direction="up">
              <div className="relative bg-[#0b111e] border border-slate-700/60 rounded-3xl p-4 sm:p-6 shadow-[0_20px_45px_rgba(0,0,0,0.8)] overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-400" />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-center">
                  {/* Left Side: Photo */}
                  <div className="md:col-span-4 flex justify-center">
                    <div className="relative w-full max-w-[200px] sm:max-w-[220px] h-[210px] sm:h-[230px] rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.7)]">
                      <img
                        src="/leader-zaheeruddin.jpg"
                        alt="Dr. Zaheeruddin Babar"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Right Side: Details */}
                  <div className="md:col-span-8 flex flex-col justify-center text-center md:text-left">
                    <div className="inline-flex items-center justify-center md:justify-start gap-2 mb-1.5">
                      <span className="font-mono text-[11px] font-bold text-cyan-400 uppercase tracking-widest">
                        FOUNDER &amp; INVESTOR
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-white uppercase tracking-tight mb-1">
                      Dr. Zaheeruddin Babar
                    </h3>

                    <p className="font-mono text-xs text-cyan-300 font-semibold mb-2">
                      Ph.D. in Computer Vision &amp; Neural Systems
                    </p>

                    <p className="font-sans text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-3">
                      AI researcher and strategic technology investor, guiding advanced cognitive frameworks and innovation scaling at ROBOTWALA.
                    </p>

                    {/* Expertise Badges */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-1.5 font-mono">
                      {[
                        "AI Research",
                        "Strategic Investment",
                        "Neural Systems",
                      ].map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-full bg-[#060a14] border border-cyan-500/30 text-cyan-300 text-[10px] font-semibold uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Leader 2: Prof. Imran Baig (Imran Sir) */}
            <ScrollReveal direction="up" delay={0.15}>
              <div className="relative bg-[#0b111e] border border-slate-700/60 rounded-3xl p-4 sm:p-6 shadow-[0_20px_45px_rgba(0,0,0,0.8)] overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-400" />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-center">
                  {/* Left Side: Details */}
                  <div className="md:col-span-8 order-2 md:order-1 flex flex-col justify-center text-center md:text-left">
                    <div className="inline-flex items-center justify-center md:justify-start gap-2 mb-1.5">
                      <span className="font-mono text-[11px] font-bold text-cyan-400 uppercase tracking-widest">
                        FOUNDER &amp; CHIEF ROBOTICIST
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-white uppercase tracking-tight mb-1">
                      Prof. Imran Baig (Imran Sir)
                    </h3>

                    <p className="font-mono text-xs text-cyan-300 font-semibold mb-2">
                      M.Tech Robotics | 16+ Years Experience
                    </p>

                    <p className="font-sans text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-3">
                      Pioneering robotics architect with 16+ years of experience, leading indigenous humanoid design, kinematics, and nationwide STEM innovation labs.
                    </p>

                    {/* Expertise Badges */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-1.5 font-mono">
                      {[
                        "Robotics Architecture",
                        "Embedded Systems",
                        "STEM Innovation",
                      ].map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-full bg-[#060a14] border border-cyan-500/30 text-cyan-300 text-[10px] font-semibold uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Side: Photo */}
                  <div className="md:col-span-4 order-1 md:order-2 flex justify-center">
                    <div className="relative w-full max-w-[200px] sm:max-w-[220px] h-[210px] sm:h-[230px] rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.7)]">
                      <img
                        src="/leader-imran.jpg"
                        alt="Prof. Imran Baig"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 7. OUR TEAM SECTION (Header + Team Image) ── */}
      <section className="relative py-20 md:py-28 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b111e] border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>THE MINDS BEHIND ROBOTWALA</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-5xl uppercase tracking-tight text-[#F5F5F5] mt-1">
              OUR TEAM
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#A1A1AA] mt-3 max-w-xl mx-auto">
              A passionate collective of robotics hardware engineers, AI researchers, software developers, and innovation mentors.
            </p>
          </div>

          {/* Team Showcase Image */}
          <ScrollReveal direction="up">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
              <div className="relative w-full h-[260px] sm:h-[340px] md:h-[420px] overflow-hidden">
                <img
                  src="/about-team.jpg"
                  alt="ROBOTWALA Engineering & AI Research Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04060c] via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 8. FINAL CALL TO ACTION ── */}
      <section className="relative py-16 pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <ScrollReveal direction="scale">
            <div className="relative bg-[#0b111e] border border-slate-700/60 rounded-3xl p-8 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-400" />
              <div>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white uppercase tracking-tight">
                  Want to collaborate with our research team?
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#A1A1AA] mt-2 max-w-xl">
                  Connect with our leadership to discuss institutional innovation labs, corporate robotics deployments, or franchise partnerships.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-sans font-bold text-xs uppercase tracking-widest rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all active:scale-95 flex-shrink-0 cursor-pointer"
              >
                <span>Contact Leadership</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}


