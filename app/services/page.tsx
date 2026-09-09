import React from "react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import Link from "next/link";
import {
  Cpu,
  GraduationCap,
  Building2,
  Briefcase,
  Layers,
  ArrowRight,
  CheckCircle,
  Sliders,
  Radio,
  FileSearch,
  PenTool,
  Code,
  Rocket,
  Headphones,
  Award,
  Zap,
  Plane,
} from "lucide-react";

export const metadata = {
  title: "Services & Solutions | ROBOTWALA",
  description:
    "Comprehensive robotics solutions including humanoid robots, STEM EdTech kits, institutional collaborations, and industrial automation.",
};

export default function ServicesPage() {
  const processSteps = [
    {
      number: "01",
      title: "Consultation & Audit",
      description:
        "Comprehensive assessment of institutional requirements, operational bottlenecks, or curriculum objectives.",
      icon: FileSearch,
    },
    {
      number: "02",
      title: "Architecture & Design",
      description:
        "Precision blueprinting, hardware component mapping, CAD schematics, and custom robotic firmware models.",
      icon: PenTool,
    },
    {
      number: "03",
      title: "Development & Prototyping",
      description:
        "Precision fabrication, firmware programming, embedded sensor calibration, and stress testing.",
      icon: Code,
    },
    {
      number: "04",
      title: "On-Site Deployment",
      description:
        "Seamless physical installation, robotics lab commissioning, telemetry setup, and live staff orientation.",
      icon: Rocket,
    },
    {
      number: "05",
      title: "24/7 Dedicated Support",
      description:
        "Continuous over-the-air firmware updates, hardware maintenance, replacement parts, and dedicated trainer helpdesks.",
      icon: Headphones,
    },
  ];

  return (
    <div className="w-full flex flex-col bg-[#030303] text-white">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 md:py-28 text-center border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
          <p className="font-sans font-medium text-xs uppercase tracking-widest text-cyan-400 mb-4">
            CAPABILITIES &amp; ARCHITECTURE
          </p>

          <h1 className="font-heading font-bold text-4xl sm:text-6xl lg:text-7xl uppercase tracking-[-0.035em] text-[#F5F5F5] leading-[1.08] mb-6">
            <span>COMPREHENSIVE </span>
            <span className="text-cyan-400 drop-shadow-[0_0_30px_rgba(6,182,212,0.4)]">
              ROBOTICS SOLUTIONS
            </span>
          </h1>

          <p className="font-sans font-normal text-base sm:text-lg text-[#A1A1AA] max-w-3xl mx-auto leading-relaxed">
            From cutting-edge humanoid androids to enterprise automation and hands-on STEM education labs, explore our complete end-to-end capabilities.
          </p>
        </div>
      </section>

      {/* 2. DETAILED SECTIONS */}
      <section className="relative py-20 md:py-28 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full space-y-24">
        {/* SECTION A: OUR ROBOTS (Lucy) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <ScrollReveal direction="left" className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative bg-[#0b111e] border border-slate-700/60 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-400/80" />

              <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-black border border-slate-700/60 flex items-center justify-center">
                <img
                  src="/lucy.png"
                  alt="LUCY Humanoid Robot"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded bg-[#080d17]/90 border border-slate-700 text-cyan-300 text-[10px] uppercase tracking-widest font-semibold font-sans">
                  FLAGSHIP ANDROID
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 text-center">
                <div className="p-3 rounded-xl bg-white/[0.04] border border-slate-700/60">
                  <div className="font-heading font-semibold text-base text-[#F5F5F5]">3D LiDAR</div>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-cyan-400 font-semibold">Autonomous Map</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-slate-700/60">
                  <div className="font-heading font-semibold text-base text-[#F5F5F5]">NLP Engine</div>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-cyan-400 font-semibold">Bilingual Voice</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="lg:col-span-7 order-1 lg:order-2 space-y-5">
            <span className="font-sans text-[10px] uppercase tracking-widest text-cyan-400 font-semibold block">
              CATEGORY: ROBOTIC SYSTEMS
            </span>
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-[#F5F5F5] uppercase tracking-tight">
              OUR ROBOTS — THE LUCY ECOSYSTEM
            </h2>
            <p className="font-sans font-normal text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
              LUCY is our flagship humanoid assistant engineered for corporate reception, hospitality greeting, healthcare guidance, and educational demonstrations. Built with adaptive intelligence and ultra-smooth multi-axis articulation.
            </p>
            <div className="space-y-3 pt-2 font-sans font-normal">
              {[
                "Natural conversational interaction with multi-turn context memory and emotion parsing.",
                "Obstacle-evasive autonomous navigation for complex, crowded floorplans.",
                "Custom brand persona, corporate knowledge base integration, and API hooks.",
                "Enterprise fleet telemetry with real-time status diagnostics and remote teleoperation.",
              ].map((feat, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#A1A1AA]">
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <Link
                href="/products#lucy"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-sans font-semibold text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all active:scale-95 cursor-pointer"
              >
                <span>View LUCY Specifications</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* SECTION B: OUR EDTECH SOLUTIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="font-sans text-[10px] uppercase tracking-widest text-cyan-400 font-semibold block">
              CATEGORY: KITS &amp; HARDWARE
            </span>
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-[#F5F5F5] uppercase tracking-tight">
              OUR EDTECH &amp; AUTOMATION SOLUTIONS
            </h2>
            <p className="font-sans font-normal text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
              We engineer modular hardware kits that turn complex electronics and robotics into accessible, engaging, and practical learning modules for all age groups.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-[#0b111e] border border-slate-700/60 rounded-2xl p-4">
                <Sliders className="w-5 h-5 text-cyan-400 mb-2" />
                <h4 className="font-heading font-semibold text-xs uppercase text-[#F5F5F5] mb-1">
                  Home Automation
                </h4>
                <p className="font-sans font-normal text-[11px] text-[#A1A1AA] leading-normal">
                  Smart relays, IoT sensors, voice control, and mobile app integration.
                </p>
              </div>

              <div className="bg-[#0b111e] border border-slate-700/60 rounded-2xl p-4">
                <Radio className="w-5 h-5 text-cyan-400 mb-2" />
                <h4 className="font-heading font-semibold text-xs uppercase text-[#F5F5F5] mb-1">
                  Smart Automation
                </h4>
                <p className="font-sans font-normal text-[11px] text-[#A1A1AA] leading-normal">
                  Industrial telemetry, automatic sorting, and predictive diagnostics.
                </p>
              </div>

              <div className="bg-[#0b111e] border border-slate-700/60 rounded-2xl p-4">
                <Layers className="w-5 h-5 text-cyan-400 mb-2" />
                <h4 className="font-heading font-semibold text-xs uppercase text-[#F5F5F5] mb-1">
                  Robotics STEM Kit
                </h4>
                <p className="font-sans font-normal text-[11px] text-[#A1A1AA] leading-normal">
                  50+ plug-and-play sensors, microcontrollers, and bionic chassis.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/products#kits"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#0e1626] hover:bg-[#131f36] text-[#F5F5F5] hover:text-cyan-300 border border-slate-700/80 font-sans font-semibold text-xs uppercase tracking-widest transition-all cursor-pointer"
              >
                <span>Browse All Kits</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative bg-[#0b111e] border border-slate-700/60 rounded-3xl p-8 space-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-400/80" />

              <span className="font-sans text-[10px] uppercase tracking-widest text-cyan-400 font-semibold">
                CURRICULUM HIGHLIGHTS
              </span>
              <h3 className="font-heading font-semibold text-xl text-[#F5F5F5] uppercase tracking-wide">
                Aligned with National Education Policy (NEP)
              </h3>
              <p className="font-sans font-normal text-xs text-[#A1A1AA] leading-relaxed">
                Every kit includes comprehensive lesson plans, interactive video guides, block-based coding environments for beginners, and full C++/Python SDKs for advanced learners.
              </p>
              <div className="space-y-2.5 pt-2 border-t border-slate-700/60 font-sans font-normal">
                <div className="flex items-center gap-2 text-xs text-[#A1A1AA]">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Interactive Scratch &amp; Blockly visual coding</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#A1A1AA]">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Real-world sensor integration (Ultrasonic, IR, Gyro)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#A1A1AA]">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Industry-standard breadboard &amp; PCB prototyping</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION C: INSTITUTIONAL COLLABORATIONS */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-sans text-[10px] uppercase tracking-widest text-cyan-400 font-semibold block mb-2">
              INSTITUTIONAL ALLIANCES
            </span>
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-[#F5F5F5] uppercase tracking-tight">
              SCHOOL &amp; COLLEGE LAB COLLABORATIONS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* School Collab Box */}
            <div className="relative bg-[#0b111e] border border-slate-700/60 rounded-3xl p-8 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300 shadow-[0_20px_45px_rgba(0,0,0,0.8)] flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-400/80" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-cyan-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-[10px] uppercase tracking-widest font-semibold font-sans">
                    200+ Schools Partnered
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-2xl text-[#F5F5F5] uppercase tracking-wide mb-2">
                  School Robotics Lab (₹5 Lakh+ Value)
                </h3>
                <p className="font-sans font-normal text-xs text-[#A1A1AA] mb-6">
                  Turnkey AI &amp; Robotics laboratory setup engineered for K-12 institutions to foster early invention.
                </p>
                <div className="space-y-3 font-sans font-normal">
                  {[
                    "Complete physical lab infrastructure: workstations, 3D printers, and modular kits.",
                    "Certified on-campus robotics master trainer provided for regular sessions.",
                    "Annual STEM competition sponsorship and inter-school hackathon entries.",
                    "Student progress grading and recognized robotics innovation diplomas.",
                  ].map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#A1A1AA]">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-700/60 flex items-center justify-between">
                <Link
                  href="/contact?subject=School%20AI%20%26%20Robotics%20Lab%20(%E2%82%B95L%2B)#send-message"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-sans font-semibold text-xs uppercase tracking-wider transition-all active:scale-95 cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                >
                  <span>Apply for School Lab</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* College Collab Box */}
            <div className="relative bg-[#0b111e] border border-slate-700/60 rounded-3xl p-8 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300 shadow-[0_20px_45px_rgba(0,0,0,0.8)] flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-400/80" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-cyan-400">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-[10px] uppercase tracking-widest font-semibold font-sans">
                    50+ Colleges Partnered
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-2xl text-[#F5F5F5] uppercase tracking-wide mb-2">
                  College Centre of Excellence (COE)
                </h3>
                <p className="font-sans font-normal text-xs text-[#A1A1AA] mb-6">
                  Industrial-grade R&amp;D research suites for engineering universities and polytechnics.
                </p>
                <div className="space-y-3 font-sans font-normal">
                  {[
                    "Industrial drone avionics, computer vision testbenches, and 6-axis robot arms.",
                    "Joint research grant applications, patent incubation, and thesis guidance.",
                    "Direct campus recruitment pipeline for top performing student engineers.",
                    "Faculty Development Programs (FDPs) on ROS2, Edge Systems, and Micro-actuation.",
                  ].map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#A1A1AA]">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-700/60 flex items-center justify-between">
                <Link
                  href="/contact?subject=College%20Centre%20of%20Excellence%20(COE)#send-message"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-sans font-semibold text-xs uppercase tracking-wider transition-all active:scale-95 cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                >
                  <span>Apply for College COE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION D: INTERNSHIP & FRANCHISE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal direction="up" delay={0.1}>
            <div id="internship" className="relative bg-[#0b111e] border border-slate-700/60 rounded-3xl p-8 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300 overflow-hidden h-full flex flex-col justify-between scroll-mt-28">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-400/80" />

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="w-6 h-6 text-cyan-400" />
                  <h3 className="font-heading font-semibold text-xl text-[#F5F5F5] uppercase">
                    6-Month On-Site Internship
                  </h3>
                </div>
                <p className="font-sans font-normal text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-4">
                  A comprehensive offline program conducted at our Indore headquarters. Interns work directly on live humanoid manufacturing, ROS algorithm development, embedded circuit layout, and IoT integrations.
                </p>
                <div className="space-y-2 font-sans font-normal text-xs text-[#A1A1AA] mb-6">
                  <div>&bull; 100% Practical laboratory work with industrial robotic components</div>
                  <div>&bull; Research paper mentorship and real-world deployment credits</div>
                  <div>&bull; Pre-placement offer (PPO) potential for standout candidates</div>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-700/60">
                <Link
                  href="/contact?subject=6-Month%20On-Site%20Internship#send-message"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-sans font-semibold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all cursor-pointer"
                >
                  <span>Explore Internship</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="relative bg-[#0b111e] border border-slate-700/60 rounded-3xl p-8 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300 overflow-hidden h-full flex flex-col justify-between">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-400/80" />

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-cyan-400" />
                  <h3 className="font-heading font-semibold text-xl text-[#F5F5F5] uppercase">
                    #RevolutionByRobotwala Franchise
                  </h3>
                </div>
                <p className="font-sans font-normal text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-4">
                  Become an official ROBOTWALA franchise partner in your region. Establish state-of-the-art robotics training academies, distribution hubs, and maker spaces with complete supply chain and marketing backing.
                </p>
                <div className="space-y-2 font-sans font-normal text-xs text-[#A1A1AA] mb-6">
                  <div>&bull; Turnkey business blueprint with fast ROI &amp; high margins</div>
                  <div>&bull; Exclusive territorial rights and hardware distribution access</div>
                  <div>&bull; National brand campaigns and continuous trainer enablement</div>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-700/60">
                <Link
                  href="/contact?subject=%23RevolutionByRobotwala%20Franchise#send-message"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-sans font-semibold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all cursor-pointer"
                >
                  <span>Franchise Inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
        </div>
      </section>

      {/* 3. OUR PROCESS TIMELINE (Clean & Steady) */}
      <section className="relative py-20 md:py-28 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-sans text-[10px] uppercase tracking-widest text-cyan-400 font-semibold">
              SYSTEMATIC EXECUTION
            </span>
            <h2 className="font-heading font-semibold text-3xl sm:text-5xl uppercase tracking-[-0.025em] text-[#F5F5F5] mt-2">
              OUR 5-STEP PROCESS TIMELINE
            </h2>
            <p className="font-sans font-normal text-xs sm:text-sm text-[#A1A1AA] mt-2">
              How we take projects from conceptual discovery to industrial-grade deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
                  <div className="relative bg-[#0b111e] border border-slate-700/60 rounded-3xl p-6 flex flex-col justify-between overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.5)] h-full">
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-400/80" />

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-heading font-semibold text-2xl text-white/30">
                          {step.number}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-cyan-400">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                      <h3 className="font-heading font-semibold text-sm text-[#F5F5F5] uppercase tracking-wider mb-2">
                        {step.title}
                      </h3>
                      <p className="font-sans font-normal text-xs text-[#A1A1AA] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-700/60 font-sans text-[10px] uppercase tracking-widest text-[#A1A1AA] font-normal">
                      Step {idx + 1} of 5
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <ScrollReveal direction="scale">
            <div className="relative bg-[#0b111e] border border-slate-700/60 rounded-3xl p-10 sm:p-14 text-center overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.8)]">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-400" />

              <h3 className="font-heading font-semibold text-2xl sm:text-4xl text-[#F5F5F5] uppercase tracking-tight mb-4 relative z-10">
                Ready to Deploy Custom Robotics in Your Organization?
              </h3>
              <p className="font-sans font-normal text-sm text-[#A1A1AA] max-w-xl mx-auto mb-8 leading-relaxed relative z-10">
                Schedule an architecture discovery session with our engineering directors.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-sans font-semibold text-xs uppercase tracking-widest rounded-full shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all active:scale-95 relative z-10 cursor-pointer"
              >
                <span>Book Consultation</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
