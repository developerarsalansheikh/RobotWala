"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import RotatingOrbCollaborations from "@/components/RotatingOrbCollaborations";
import {
  ArrowRight,
  Cpu,
  Plane,
  GraduationCap,
  Building2,
  Briefcase,
  Layers,
  Zap,
  Radio,
  Clock,
  ShieldCheck,
  Compass,
  ArrowUpRight,
  Sliders,
  CheckCircle,
  Award,
  Users,
  Eye,
  Check,
  ChevronRight,
  Images,
} from "lucide-react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<string>("AI & Robotics");

  useEffect(() => {
    const saved = localStorage.getItem("activeTab");
    if (saved) {
      setActiveTab(saved);
    }
  }, []);

  const handleSelectTab = (tabName: string) => {
    setActiveTab(tabName);
    try {
      localStorage.setItem("activeTab", tabName);
    } catch {}
  };

  const categories = [
    {
      name: "AI & Robotics",
      icon: Cpu,
      title: "Next-Gen Humanoid & Autonomous Android Systems",
      desc: "Architecting interactive humanoid robots equipped with bilingual conversational AI, 3D LiDAR spatial mapping, and vision intelligence for enterprise reception, hospitality, and healthcare research.",
      bullets: [
        "Real-time dual neural conversational engine (Voice + NLP)",
        "SLAM autonomous indoor navigation with obstacle avoidance",
        "18-axis high precision articulation and interactive visor",
      ],
      tag: "Flagship Robotics",
      ctaHref: "/products#lucy",
      ctaText: "Explore Humanoid Systems",
    },
    {
      name: "Automation",
      icon: Cpu,
      title: "Smart Industrial & Residential IoT Ecosystems",
      desc: "Full-stack telemetry and industrial controller hubs designed for predictive maintenance, smart facility automation, zero-latency mesh networking, and cloud diagnostics.",
      bullets: [
        "Optocoupler-isolated industrial relays with surge safety",
        "CAN-Bus, Modbus RTU, and MQTT real-time cloud streaming",
        "Cross-platform iOS, Android, and Web telemetry dashboards",
      ],
      tag: "Enterprise IoT",
      ctaHref: "/products#kits",
      ctaText: "Explore Automation Kits",
    },
    {
      name: "Drone Technology",
      icon: Plane,
      title: "Autonomous Aerial Avionics & Payload Drones",
      desc: "Specialized UAV platforms engineered for topographic LiDAR surveying, precision agricultural spraying, and high-altitude security surveillance with fail-safe telemetry.",
      bullets: [
        "Autonomous waypoint trajectory navigation with live obstacle triage",
        "Multi-spectral high resolution optical sensor payloads",
        "Long-range encrypted telemetry and automatic return-to-home",
      ],
      tag: "UAV Systems",
      ctaHref: "/services",
      ctaText: "Explore Drone Tech",
    },
    {
      name: "EdTech",
      icon: GraduationCap,
      title: "Modular STEM Labs & Certified Curriculum",
      desc: "Turnkey experiential learning packages featuring 50+ modular sensors, robotic kits, visual block and Python programming environments, and CBSE/ICSE aligned syllabi.",
      bullets: [
        "50+ plug-and-play sensors with zero-soldering RJ25 connectors",
        "Comprehensive 300-page project blueprint & video library",
        "National robotics olympiad participation and certification",
      ],
      tag: "K-12 & Higher Ed",
      ctaHref: "/collaborations#partnered-schools",
      ctaText: "Explore STEM Labs",
    },
  ];

  const products = [
    {
      id: "lucy",
      title: "LUCY Humanoid",
      category: "Robots",
      tag: "Flagship Android",
      badgeColor: "border-cyan-500/40 text-cyan-300 bg-cyan-500/10",
      description:
        "Autonomous interactive humanoid assistant with cutting-edge conversational NLP, computer vision, and hospitality greeting capabilities.",
      features: ["Bilingual NLP Engine", "3D LiDAR Navigation", "Emotion Detection"],
      image: "/lucy.png",
      cta: "Explore LUCY",
      href: "/products#lucy",
    },
    {
      id: "home-automation",
      title: "Home Automation",
      category: "Kits",
      tag: "Smart Living IoT",
      badgeColor: "border-cyan-500/40 text-cyan-300 bg-cyan-500/10",
      description:
        "Next-generation IoT ecosystem offering intelligent lighting, thermal optimization, appliance safety, and voice controls.",
      features: ["Zero-Latency Mesh", "Voice & App Control", "Power Optimization"],
      image: null,
      icon: Cpu,
      cta: "View Kit Specs",
      href: "/products#kits",
    },
    {
      id: "smart-automation",
      title: "Smart Automation",
      category: "Kits",
      tag: "Industrial Grade",
      badgeColor: "border-cyan-500/40 text-cyan-300 bg-cyan-500/10",
      description:
        "Industrial-grade sensor hubs and robotic actuators tailored for automated assembly lines, predictive maintenance, and telemetry.",
      features: ["CAN-Bus Protocols", "Predictive Diagnostics", "Fail-Safe Relays"],
      image: null,
      icon: Sliders,
      cta: "Explore Systems",
      href: "/products#kits",
    },
    {
      id: "robotics-kit",
      title: "STEM Robotics Kit",
      category: "Kits",
      tag: "STEM Innovation",
      badgeColor: "border-cyan-500/40 text-cyan-300 bg-cyan-500/10",
      description:
        "Modular STEM robotics construction suite empowering students and makers to build autonomous rovers, bionics, and robotics machines.",
      features: ["50+ Modular Sensors", "Python & C++ SDK", "Plug-and-Play Servos"],
      image: null,
      icon: Layers,
      cta: "Get Started",
      href: "/products#kits",
    },
  ];

  const collaborations = [
    {
      title: "School Collaboration",
      tag: "200+ Schools",
      highlight: "₹5 Lakh+ Labs",
      description:
        "We build and deploy turnkey AI & Robotics labs valued at ₹5 Lakh+ to nurture young innovators from grassroots levels with hands-on accredited curricula.",
      icon: GraduationCap,
      metrics: "50,000+ Students Inspired",
      badge: "Grassroots STEM",
      href: "/collaborations#partnered-schools",
    },
    {
      title: "College Collaboration",
      tag: "50+ Colleges",
      highlight: "Centres of Excellence",
      description:
        "Transforming higher education through advanced AI, ROS2 robotics, and Drone Labs, patent guidance, student symposiums, and university COE infrastructure.",
      icon: Building2,
      metrics: "Engineering & R&D Hubs",
      badge: "Advanced R&D",
      href: "/collaborations#partnered-colleges",
    },
    {
      title: "Internship Program",
      tag: "6-Month Program",
      highlight: "On-Site & Practical",
      description:
        "6-month on-site intensive offline internship program providing direct hands-on commercial android development, embedded firmware, and research mentorship.",
      icon: Briefcase,
      metrics: "100% Industry Exposure",
      badge: "Career Accelerator",
      href: "/contact?subject=6-Month%20On-Site%20Internship#send-message",
    },
    {
      title: "Franchise Network",
      tag: "Pan India",
      highlight: "#RevolutionByRobotwala",
      description:
        "#RevolutionByRobotwala — Partner with Robotwala to establish robotics training academies and smart tech innovation hubs in your territory with full support.",
      icon: Award,
      metrics: "Pan-India Expansion",
      badge: "Business Partnership",
      href: "/contact?subject=Franchise%20Partnership%20Inquiry#contact-form",
    },
  ];

  const services = [
    {
      number: "01",
      title: "Smart City & Traffic Telemetry",
      badge: "Vision Systems & Telemetry",
      description:
        "Real-time computer vision networks that dynamically analyze traffic density, automatically route emergency vehicles, and optimize transit throughput with sub-second decision making.",
      icon: Radio,
      details: ["Real-time density analysis", "Dynamic green corridor routing", "Automated transit diagnostics"],
    },
    {
      number: "02",
      title: "Precision Industrial Robotics",
      badge: "Industrial Automation",
      description:
        "Sub-millimeter accurate industrial arms, micro-actuation systems, and automated guided vehicles engineered for manufacturing, sorting, and clean-room assembly lines.",
      icon: Cpu,
      details: ["0.02mm positional repeatability", "6-Axis high payload arms", "Autonomous fleet navigation"],
    },
    {
      number: "03",
      title: "EdTech Labs & Hardware Kits",
      badge: "Curriculum & Hardware",
      description:
        "End-to-end experiential learning systems equipped with modular microcontrollers, sensor suites, and step-by-step accredited curricula for aspiring engineers.",
      icon: GraduationCap,
      details: ["CBSE/ICSE aligned modules", "Visual & Python coding IDE", "Project blueprint manuals"],
    },
    {
      number: "04",
      title: "Autonomous Drone Systems",
      badge: "Autonomous Avionics",
      description:
        "Autonomous aerial surveillance, LiDAR terrain contour mapping, precision agriculture spraying, and enterprise payload drone solutions engineered for rugged operations.",
      icon: Plane,
      details: ["Obstacle avoidance", "Autonomous flight path planner", "Multi-spectral sensor integration"],
    },
  ];

  const selectedCategoryData =
    categories.find((c) => c.name === activeTab) || categories[0];

  return (
    <div className="w-full flex flex-col bg-[#030303] text-white">
      {/* ── 1. HERO SECTION WITH BACKGROUND VIDEO ── */}
      <section className="relative min-h-screen flex items-center justify-center -mt-16 sm:-mt-20 pb-20 md:pb-24 overflow-hidden border-b border-slate-800">
        {/* Background Looping Video - Crystal Clear & Unobstructed */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover brightness-100 contrast-100 saturate-100"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>

          {/* Ambient corner glows to eliminate dark corner shading */}
          <div className="absolute -left-24 top-1/4 w-96 h-96 bg-cyan-500/[0.12] blur-[130px] rounded-full pointer-events-none" />
          <div className="absolute -right-24 top-1/4 w-96 h-96 bg-cyan-500/[0.12] blur-[130px] rounded-full pointer-events-none" />
          <div className="absolute -left-20 bottom-10 w-80 h-80 bg-blue-500/[0.08] blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -right-20 bottom-10 w-80 h-80 bg-blue-500/[0.08] blur-[120px] rounded-full pointer-events-none" />

          {/* Seamless top & bottom edge blending only */}
          <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-[#030303]/50 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-transparent pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center relative z-10 pt-28 sm:pt-32 md:pt-36">
          {/* Top Clean Subtitle */}
          <p className="font-medium text-xs sm:text-sm uppercase tracking-widest text-cyan-400 mb-4">
            Next-Gen Autonomous Intelligence &amp; Robotics
          </p>

          {/* Main Headline - Sora 700 with tight letter spacing */}
          <h1 className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-[-0.035em] text-[#F5F5F5] leading-[1.06] max-w-5xl mb-6 drop-shadow-[0_10px_35px_rgba(0,0,0,0.95)]">
            <span className="block">ENGINEERING</span>
            <span className="block text-cyan-400 drop-shadow-[0_0_35px_rgba(6,182,212,0.4)]">
              TOMORROW&apos;S
            </span>
            <span className="block">ROBOTICS</span>
          </h1>

          {/* Subtitle - Inter 400 with spacious line-height */}
          <p className="font-sans font-normal text-base sm:text-lg md:text-xl text-[#A1A1AA] leading-relaxed max-w-3xl mb-10 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            Let&apos;s Innovate &amp; Learn Beyond Boundaries with India&apos;s leading AI, Automation, and cognitive humanoid robotics pioneer.
          </p>

          {/* Action CTAs - Inter 600 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link
              href="/contact?subject=Book%20a%20Demo"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full font-sans font-semibold text-xs uppercase tracking-widest text-slate-950 bg-cyan-400 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-200 active:scale-95 cursor-pointer shadow-lg"
            >
              <span>Book a Demo</span>
            </Link>

            <Link
              href="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full font-sans font-semibold text-xs uppercase tracking-widest text-[#F5F5F5] bg-[#0b111e] hover:bg-[#131f36] hover:text-white border border-slate-700/80 transition-all duration-200 backdrop-blur-md cursor-pointer"
            >
              <span>Explore Products</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. SYSTEMATIC IMPACT METRICS STRIP (SOLID COLOR PALETTE) ── */}
      <section className="relative z-20 w-full border-b border-slate-800 bg-[#0b111e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-slate-800">
          {[
            { value: "25+", label: "Robots Launched" },
            { value: "200+", label: "Schools Inspired" },
            { value: "50+", label: "Colleges Inspired" },
            { value: "50K+", label: "Students Taught" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              delay={idx * 0.1}
              className={`py-8 md:py-10 flex flex-col items-center justify-center text-center ${idx === 4 ? "col-span-2 md:col-span-1" : ""
                }`}
            >
              <span className="font-heading font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-cyan-400 drop-shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                {stat.value}
              </span>
              <span className="mt-2 font-sans font-medium text-[10px] sm:text-xs text-[#A1A1AA] uppercase tracking-widest">
                {stat.label}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── 3. TECHNOLOGY SPECTRUM (WHAT WE BUILD) ── */}
      <section id="what-we-build" className="relative py-20 md:py-28 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Header */}
          <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full uppercase tracking-widest text-cyan-300 font-semibold mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)] font-sans">

              <span>TECHNOLOGY SPECTRUM</span>
            </div>
            <h2 className="font-heading font-semibold text-3xl sm:text-5xl uppercase tracking-[-0.025em] text-[#F5F5F5] leading-[1.1] mb-4">
              Robotics that solve real-world problems.
            </h2>
            <p className="font-sans font-normal text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
              From cognitive androids to industrial telemetry and hands-on STEM laboratories, our technological spectrum drives sustainable autonomy.
            </p>
          </ScrollReveal>

          {/* Interactive Category Selector Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 max-w-4xl mx-auto mb-10">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = activeTab === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => handleSelectTab(cat.name)}
                  className={`flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-sans font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer ${isSelected
                    ? "bg-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-105 border border-cyan-300"
                    : "bg-[#0b111e] border border-slate-700/60 text-[#A1A1AA] hover:border-cyan-400/40 hover:bg-[#131f36] hover:text-[#F5F5F5]"
                    }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? "text-slate-950" : "text-cyan-400"}`} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Category Showcase Card */}
          <div className="relative rounded-3xl bg-[#0b111e] border border-slate-700/60 p-6 sm:p-10 lg:p-12 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-400" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Details */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-[10px] uppercase tracking-widest font-semibold border border-cyan-500/30 mb-4 font-sans">
                  <span>{selectedCategoryData.tag}</span>
                </div>
                <h3 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#F5F5F5] uppercase tracking-tight mb-4">
                  {selectedCategoryData.title}
                </h3>
                <p className="font-sans font-normal text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-6">
                  {selectedCategoryData.desc}
                </p>

                <div className="space-y-3 mb-8">
                  {selectedCategoryData.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3 font-sans font-normal text-xs sm:text-sm text-[#A1A1AA]">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={selectedCategoryData.ctaHref}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-sans font-semibold text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-200 active:scale-95 cursor-pointer"
                >
                  <span>{selectedCategoryData.ctaText}</span>
                </Link>
              </div>

              {/* Right Visual Image Showcase */}
              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="relative w-full max-w-md h-72 sm:h-80 rounded-2xl overflow-hidden bg-black border border-slate-700/60 flex items-center justify-center shadow-[0_20px_45px_rgba(0,0,0,0.9)]">
                  <img
                    src="/hero-robot.jpg"
                    alt="ROBOTWALA Next-Gen Autonomous System"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080d17] via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-4 left-4 px-3 py-1 rounded bg-[#080d17]/90 border border-slate-700 text-cyan-400 text-[10px] uppercase tracking-widest font-semibold font-sans">
                    NEXT-GEN SYSTEM
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <span className="font-heading font-semibold text-lg text-[#F5F5F5] uppercase tracking-wide block mb-1">
                      {selectedCategoryData.name}
                    </span>
                    <span className="font-sans font-normal text-xs text-[#A1A1AA]">Enterprise Robotics &bull; Autonomous Architecture</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. FEATURED PRODUCTS (4-COLUMN GRID) ── */}
      <section className="relative py-20 md:py-28 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <ScrollReveal direction="up" className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-6 border-b border-slate-800 pb-6">
            <div>
              <div className="font-sans font-medium text-xs uppercase tracking-widest text-cyan-400 mb-2">
                PRODUCTION-READY HARDWARE
              </div>
              <h2 className="font-heading font-semibold text-3xl sm:text-5xl uppercase tracking-[-0.025em] text-[#F5F5F5]">
                FEATURED PRODUCTS
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center font-sans font-semibold text-xs uppercase tracking-widest text-[#A1A1AA] hover:text-cyan-300 transition-colors cursor-pointer"
            >
              <span>View All Products</span>
            </Link>
          </ScrollReveal>

          {/* 4 Hardware Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {products.map((product, idx) => {
              const Icon = product.icon || Cpu;
              return (
                <ScrollReveal
                  key={product.id}
                  direction="up"
                  delay={(idx % 4) * 0.1}
                  className="relative flex flex-col justify-between bg-[#0b111e] border border-slate-700/60 rounded-3xl p-6 sm:p-8 hover:border-cyan-500/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-400/80" />

                  <div>
                    {/* Badge Row */}
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <span
                        className={`text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full border font-sans ${product.badgeColor}`}
                      >
                        {product.category}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-[#A1A1AA] font-normal font-sans">
                        {product.tag}
                      </span>
                    </div>

                    {/* Visual Media / Icon */}
                    <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-5 bg-black border border-slate-700/60 flex items-center justify-center">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center p-4 text-center">
                          <div className="p-3.5 rounded-2xl bg-white/[0.05] border border-white/[0.1] text-cyan-400 mb-2">
                            <Icon className="w-8 h-8 stroke-[1.5]" />
                          </div>
                          <span className="text-[10px] tracking-widest uppercase text-[#A1A1AA] font-sans">
                            {product.title}
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080d17] via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Title & Desc */}
                    <h3 className="font-heading font-semibold text-xl text-[#F5F5F5] tracking-wide uppercase mb-2">
                      {product.title}
                    </h3>
                    <p className="font-sans font-normal text-xs text-[#A1A1AA] leading-relaxed mb-5">
                      {product.description}
                    </p>

                    {/* Key Bullets */}
                    <div className="space-y-2 mb-6 font-sans font-normal">
                      {product.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-[11px] text-[#A1A1AA]">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={product.href}
                    className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl bg-[#0e1626] hover:bg-cyan-400 hover:text-slate-950 text-[#F5F5F5] border border-slate-700/80 font-sans font-semibold text-xs uppercase tracking-wider transition-all duration-200 active:scale-95 cursor-pointer"
                  >
                    <span>{product.cta}</span>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. VISUAL GALLERY SHOWCASE STRIP ── */}
      <section className="relative py-20 md:py-28 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <ScrollReveal direction="up" className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <div className="font-sans font-medium text-xs uppercase tracking-widest text-cyan-400 mb-2">
                VISUAL SHOWCASE
              </div>
              <h2 className="font-heading font-semibold text-3xl sm:text-5xl uppercase tracking-[-0.025em] text-[#F5F5F5]">
                INNOVATION GALLERY
              </h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center px-6 py-3 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 font-sans font-semibold text-xs uppercase tracking-widest transition-all cursor-pointer"
            >
              <span>Explore Full Gallery</span>
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "LUCY Humanoid Robot",
                category: "Robots",
                tag: "Flagship Android",
                image: "/lucy.png",
                desc: "India's first bilingual conversational humanoid android.",
              },
              {
                title: "ROBOTWALA Android",
                category: "Robots",
                tag: "Autonomous System",
                image: "/robotwala-main.png",
                desc: "Next-gen autonomous android with 3D LiDAR navigation.",
              },
              {
                title: "Precision Drone UAV",
                category: "Drones",
                tag: "UAV Platform",
                image: "/hero-robot.jpg",
                desc: "High-altitude surveillance and payload delivery drone.",
              },
            ].map((item, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 0.12}>
                <Link
                  href="/gallery"
                  className="group relative bg-[#0b111e] border border-slate-700/60 rounded-3xl overflow-hidden hover:border-cyan-400/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300 cursor-pointer block"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-400/80" />
                  <div className="relative w-full h-56 sm:h-60 overflow-hidden bg-black">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080d17] via-black/30 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-[#080d17]/90 backdrop-blur-md border border-cyan-500/30 text-[10px] uppercase tracking-widest font-semibold text-cyan-300 font-sans">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-1.5">
                    <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-cyan-400 block font-sans">
                      {item.tag}
                    </span>
                    <h3 className="font-heading font-semibold text-lg text-[#F5F5F5] uppercase tracking-wide group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-sans font-normal text-xs text-[#A1A1AA] leading-relaxed pt-1">{item.desc}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CLUB COLLABORATIONS (3D ROTATING METALLIC ORB + 4 ANIMATED GRIDS) ── */}
      <section className="relative py-20 md:py-28 border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <RotatingOrbCollaborations />
        </div>
      </section>

      {/* ── 7. WHAT WE OFFER (SERVICE SUITE) ── */}
      <section className="relative py-20 md:py-28 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <ScrollReveal direction="up" className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <div className="font-sans font-medium text-xs uppercase tracking-widest text-cyan-400 mb-2">
                COMPREHENSIVE CAPABILITIES
              </div>
              <h2 className="font-heading font-semibold text-3xl sm:text-5xl uppercase tracking-[-0.025em] text-[#F5F5F5]">
                WHAT WE OFFER
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center font-sans font-semibold text-xs uppercase tracking-widest text-[#A1A1AA] hover:text-cyan-300 transition-colors flex-shrink-0 cursor-pointer"
            >
              <span>View Full Service Suite</span>
            </Link>
          </ScrollReveal>

          <div className="space-y-4 sm:space-y-6">
            {services.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <ScrollReveal key={idx} direction="up" delay={idx * 0.08}>
                  <div className="relative bg-[#0b111e] border border-slate-700/60 rounded-3xl p-6 sm:p-8 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-400/80" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                      <div className="lg:col-span-3 flex items-center gap-4">
                        <span className="font-heading font-semibold text-3xl sm:text-4xl text-white/20">
                          {srv.number}
                        </span>
                        <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-cyan-400">
                          <Icon className="w-6 h-6" />
                        </div>
                      </div>

                      <div className="lg:col-span-5">
                        <div className="inline-block text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 mb-2 border border-cyan-500/20 font-semibold font-sans">
                          {srv.badge}
                        </div>
                        <h3 className="font-heading font-semibold text-xl sm:text-2xl text-[#F5F5F5] uppercase tracking-wide mb-2">
                          {srv.title}
                        </h3>
                        <p className="font-sans font-normal text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                          {srv.description}
                        </p>
                      </div>

                      <div className="lg:col-span-4 flex flex-col justify-center space-y-2 border-t lg:border-t-0 lg:border-l border-slate-700/60 pt-4 lg:pt-0 lg:pl-6">
                        {srv.details.map((detail, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2.5 font-sans font-normal text-xs text-[#A1A1AA]">
                            <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                        <div className="pt-2">
                          <Link
                            href="/services"
                            className="inline-flex items-center font-sans font-semibold text-xs text-cyan-300 uppercase tracking-widest hover:text-white transition-colors cursor-pointer"
                          >
                            <span>Learn More</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 8. CONVERSION ARENA / FINAL CTA ── */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <ScrollReveal direction="scale">
            <div className="relative bg-[#0b111e] border border-slate-700/60 rounded-3xl p-8 sm:p-14 lg:p-16 text-center shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-400" />

              <div className="relative z-10 max-w-3xl mx-auto">
                <div className="font-sans font-medium text-xs uppercase tracking-widest text-cyan-400 mb-4">
                  ROBOTWALA ENTERPRISE
                </div>

                <h2 className="font-heading font-semibold text-3xl sm:text-5xl md:text-6xl uppercase tracking-[-0.03em] text-[#F5F5F5] leading-[1.08] mb-6">
                  Ready to Transform Your Future?
                </h2>

                <p className="font-sans font-normal text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-10 max-w-2xl mx-auto">
                  We integrate Innovation, Technical Expertise, and Unwavering commitment to engineer future-proof robotics. Let&apos;s discuss how our robotic solutions can revolutionize your operations.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-sans font-semibold text-xs uppercase tracking-widest rounded-full hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-200 active:scale-95 cursor-pointer shadow-lg"
                  >
                    <span>Start Your Project</span>
                  </Link>
                  <Link
                    href="/products"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#0e1626] hover:bg-[#131f36] text-[#F5F5F5] border border-slate-700/80 font-sans font-semibold text-xs uppercase tracking-widest rounded-full transition-all cursor-pointer"
                  >
                    <span>Explore Products</span>
                  </Link>
                </div>

                {/* 3 Trust Metrics (Clean & Static) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-800">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-2 text-[#F5F5F5] font-heading font-semibold text-base uppercase">
                      <Clock className="w-4 h-4 text-cyan-400" />
                      <span>16+ Years</span>
                    </div>
                    <span className="font-sans font-normal text-[10px] uppercase tracking-widest text-[#A1A1AA] mt-1">
                      Industry Experience
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-2 text-[#F5F5F5] font-heading font-semibold text-base uppercase">
                      <ShieldCheck className="w-4 h-4 text-cyan-400" />
                      <span>World-Class</span>
                    </div>
                    <span className="font-sans font-normal text-[10px] uppercase tracking-widest text-[#A1A1AA] mt-1">
                      Engineers &amp; Innovators
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-2 text-[#F5F5F5] font-heading font-semibold text-base uppercase">
                      <Compass className="w-4 h-4 text-cyan-400" />
                      <span>Global Reach</span>
                    </div>
                    <span className="font-sans font-normal text-[10px] uppercase tracking-widest text-[#A1A1AA] mt-1">
                      Pan-India &amp; International
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
