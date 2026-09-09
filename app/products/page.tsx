"use client";

import React, { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import {
  Cpu,
  Sliders,
  Layers,
  CheckCircle,
} from "lucide-react";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Robots" | "Kits">("All");

  const productsList = [
    {
      id: "lucy",
      title: "LUCY Humanoid AI Robot",
      category: "Robots",
      tag: "Flagship Autonomous Service Robot",
      badgeColor: "border-cyan-500/40 text-cyan-300 bg-cyan-500/10",
      description:
        "Fully autonomous service android with interactive HD touch interface, SLAM navigation, and multilingual conversational AI for hospitality, corporate reception, and exhibitions.",
      image: "/lucy-robot.jpg",
      highlights: [
        "Autonomous SLAM navigation & real-time obstacle avoidance",
        "Integrated capacitive touch display & conversational voice AI",
        "Multi-floor transit capability for corporate & hospitality greetings",
      ],
    },
    {
      id: "home-automation",
      title: "Next-Gen Smart Automation Board",
      category: "Kits",
      tag: "Smart IoT Relay Controller",
      badgeColor: "border-cyan-500/40 text-cyan-300 bg-cyan-500/10",
      description:
        "Dual-core ESP32 IoT controller board equipped with 8 optocoupler-isolated relays, terminal blocks, and telemetry status LEDs for smart home and industrial appliance automation.",
      image: "/kit-iot-automation.jpg",
      highlights: [
        "High-performance ESP32-S3 IoT module with Wi-Fi & Bluetooth",
        "8-channel heavy-duty isolated relays for multi-load switching",
        "Instant cloud dashboard, smartphone app & voice-assistant integration",
      ],
    },
    {
      id: "smart-automation",
      title: "ROBOTWALA Sensor & STEM Dev Hub",
      category: "Kits",
      tag: "Interactive Sensor Lab",
      badgeColor: "border-cyan-500/40 text-cyan-300 bg-cyan-500/10",
      description:
        "All-in-one educational prototyping shield featuring an integrated 16x2 LCD display, ultrasonic distance sensor, DHT climate module, buzzer, and Arduino core interface.",
      image: "/kit-sensor-board.jpg",
      highlights: [
        "Onboard 16x2 backlit LCD screen & ultrasonic telemetry radar",
        "Plug-and-play Arduino shield form factor with zero loose wiring",
        "Pre-engineered curriculum for school & university innovation labs",
      ],
    },
    {
      id: "robotics-kit",
      title: "Autonomous Robotic Car Construction Kit",
      category: "Kits",
      tag: "STEM Robotics & Autonomy",
      badgeColor: "border-cyan-500/40 text-cyan-300 bg-cyan-500/10",
      description:
        "Modular wheeled robotic platform engineered for autonomous navigation, optical line-tracking, ultrasonic obstacle avoidance, and programmable servo articulation.",
      image: "/kit-robotics-car.jpg",
      highlights: [
        "Precision multi-sensor optical array for high-speed line tracking",
        "Ultrasonic obstacle avoidance & servo-driven radar head",
        "Includes complete open-source Arduino / C++ code & project manual",
      ],
    },
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? productsList
      : productsList.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full flex flex-col bg-[#030303] text-white">
      {/* 1. HERO SECTION (Compact Screen Height) */}
      <section className="relative py-12 md:py-16 text-center border-b border-slate-800/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="font-sans font-medium text-xs uppercase tracking-widest text-cyan-400 mb-3">
            ADVANCED HARDWARE SYSTEMS
          </p>

          <h1 className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-[-0.03em] text-[#F5F5F5] leading-[1.1] mb-4">
            <span>EXPLORE OUR </span>
            <span className="text-cyan-400 drop-shadow-[0_0_25px_rgba(6,182,212,0.4)]">
              PRODUCTS
            </span>
          </h1>

          <p className="font-sans font-normal text-sm sm:text-base text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed mb-6">
            Production-ready humanoid robotics and modular STEM development hardware engineered for real-world autonomy.
          </p>

          {/* Category Filter Pills */}
          <div className="inline-flex items-center gap-1.5 p-1 bg-[#0b111e] border border-slate-700/60 rounded-full font-sans">
            {(["All", "Robots", "Kits"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-sans font-semibold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)] scale-105"
                    : "text-[#A1A1AA] hover:text-[#F5F5F5] hover:bg-[#131f36]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. PRODUCTS GRID (Compact Screen-Size Cards, No Tech Specs) */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, idx) => (
            <ScrollReveal
              key={product.id}
              direction="up"
              delay={(idx % 3) * 0.08}
              className="relative bg-[#0b111e] border border-slate-700/60 rounded-2xl p-5 hover:border-cyan-500/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(6,182,212,0.15)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-400" />

              <div>
                {/* Top Bar Badges */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full border font-sans ${product.badgeColor}`}>
                    {product.category}
                  </span>
                  <span className="text-[9.5px] uppercase tracking-wider text-[#A1A1AA] font-normal font-sans truncate">
                    {product.tag}
                  </span>
                </div>

                {/* Visual Thumbnail (Responsive & Clean Contain) */}
                <div className="relative w-full h-44 sm:h-48 rounded-xl overflow-hidden mb-4 bg-[#050811] border border-slate-800 flex items-center justify-center p-2">
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain filter drop-shadow-md hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Title & Description */}
                <h3 className="font-heading font-semibold text-lg sm:text-xl text-[#F5F5F5] uppercase tracking-wide mb-2">
                  {product.title}
                </h3>
                <p className="font-sans font-normal text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Feature Highlights (No Technical Specification Table) */}
                <div className="space-y-2 font-sans">
                  {product.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-[#A1A1AA]">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* FINAL CTA (Compact) */}
      <section className="relative py-6 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="scale">
            <div className="relative bg-[#0b111e] border border-slate-700/60 rounded-2xl p-8 sm:p-12 text-center overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-400" />

              <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-[#F5F5F5] uppercase tracking-tight mb-3 relative z-10">
                Need Custom Robotics Hardware or Firmware?
              </h3>
              <p className="font-sans font-normal text-sm text-[#A1A1AA] max-w-lg mx-auto mb-6 leading-relaxed relative z-10">
                Our embedded systems team builds tailored autonomous hardware and custom sensors for specialized commercial payloads.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-sans font-bold text-xs uppercase tracking-widest rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all active:scale-95 relative z-10 cursor-pointer"
              >
                <span>Talk to Engineering</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}


