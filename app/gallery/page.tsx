"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, ZoomIn, Images, LayoutGrid, Plane, GraduationCap, Cpu } from "lucide-react";

const categories = ["All", "Robots", "Drones", "EdTech", "Events", "Automation"];

const galleryItems = [
  {
    id: 1,
    title: "LUCY Humanoid Robot",
    category: "Robots",
    tag: "Flagship Android",
    image: "/lucy.png",
    desc: "India's first bilingual conversational humanoid android.",
  },
  {
    id: 2,
    title: "ROBOTWALA Android",
    category: "Robots",
    tag: "Autonomous System",
    image: "/robotwala-main.png",
    desc: "Next-gen autonomous android with 3D LiDAR navigation.",
  },
  {
    id: 3,
    title: "Precision Drone UAV",
    category: "Drones",
    tag: "UAV Platform",
    image: "/hero-robot.jpg",
    desc: "High-altitude surveillance and payload delivery drone.",
  },
  {
    id: 4,
    title: "STEM Robotics Lab",
    category: "EdTech",
    tag: "K-12 Innovation",
    image: "/hero-robot.jpg",
    desc: "Modular lab with 50+ sensors and CBSE-aligned curriculum.",
  },
  {
    id: 5,
    title: "Smart Automation Hub",
    category: "Automation",
    tag: "Industrial IoT",
    image: "/hero-robot.jpg",
    desc: "Industrial-grade telemetry and sensor control systems.",
  },
  {
    id: 6,
    title: "National Robotics Expo",
    category: "Events",
    tag: "Live Demo",
    image: "/hero-robot.jpg",
    desc: "Robotwala showcase at India's leading robotics exhibition.",
  },
  {
    id: 7,
    title: "Agricultural Drone",
    category: "Drones",
    tag: "Precision Agri",
    image: "/hero-robot.jpg",
    desc: "Multi-spectral crop spraying drone with autonomous waypoints.",
  },
  {
    id: 8,
    title: "School Lab Setup",
    category: "EdTech",
    tag: "200+ Schools",
    image: "/hero-robot.jpg",
    desc: "Turnkey AI & Robotics lab deployed across 200+ schools.",
  },
  {
    id: 9,
    title: "Home Automation Kit",
    category: "Automation",
    tag: "Smart Living",
    image: "/hero-robot.jpg",
    desc: "Voice & app-controlled smart home ecosystem.",
  },
];

const categoryIcons: Record<string, React.ReactNode> = {
  All: <LayoutGrid className="w-4 h-4" />,
  Robots: <Cpu className="w-4 h-4" />,
  Drones: <Plane className="w-4 h-4" />,
  EdTech: <GraduationCap className="w-4 h-4" />,
  Automation: <Cpu className="w-4 h-4" />,
  Events: <Images className="w-4 h-4" />,
};

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState<(typeof galleryItems)[0] | null>(null);

  const filtered =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="w-full flex flex-col bg-[#030303] text-white min-h-screen">

      {/* HERO HEADER */}
      <section className="relative pt-16 pb-16 md:pt-24 md:pb-20 border-b border-slate-800/80 overflow-hidden">
        {/* Footer style top ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[80px] bg-gradient-to-b from-cyan-500/20 via-blue-600/10 to-transparent blur-[40px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Clean Eyebrow Text */}
          <p className="font-sans font-medium text-xs uppercase tracking-widest text-cyan-400 mb-4">
            VISUAL SHOWCASE
          </p>

          <h1 className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl uppercase tracking-[-0.035em] text-[#F5F5F5] leading-tight mb-4">
            OUR{" "}
            <span className="text-cyan-400 drop-shadow-[0_0_30px_rgba(6,182,212,0.4)]">
              GALLERY
            </span>
          </h1>

          <p className="font-sans font-normal text-sm sm:text-base text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed">
            Explore our robots, drones, labs, events, and automation systems — a visual journey through Robotwala&apos;s innovations.
          </p>
        </div>
      </section>

      {/* FILTER PILLS */}
      <section className="py-8 border-b border-slate-800/80 bg-[#030303]/90 sticky top-16 sm:top-20 z-30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {categories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`font-sans px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.45)]"
                      : "bg-[#0b111e] border border-slate-700/60 text-[#A1A1AA] hover:border-cyan-400/50 hover:text-[#F5F5F5]"
                  }`}
                >
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 font-sans text-xs text-[#A1A1AA] uppercase tracking-widest font-medium flex items-center gap-2">
            <span>Showing {filtered.length} item{filtered.length !== 1 ? "s" : ""}</span>
            {activeFilter !== "All" && (
              <span className="text-cyan-400">— {activeFilter}</span>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filtered.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: (idx % 3) * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => setLightbox(item)}
                className="group relative bg-[#0b111e] border border-slate-700/60 rounded-3xl overflow-hidden cursor-pointer hover:border-cyan-400/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300"
              >
                {/* Top cyan accent strip */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-400/80" />

                <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080d17] via-black/30 to-transparent" />
                  
                  {/* Zoom indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-400/50 flex items-center justify-center shadow-xl">
                      <ZoomIn className="w-5 h-5 text-cyan-300" />
                    </div>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="font-sans px-3 py-1 rounded-full bg-[#080d17]/90 backdrop-blur-md border border-cyan-500/30 text-[10px] uppercase tracking-widest font-medium text-cyan-300">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 space-y-1.5">
                  {/* Tag */}
                  <span className="font-sans text-[10px] uppercase tracking-[0.25em] font-medium text-cyan-400 block">
                    {item.tag}
                  </span>
                  
                  {/* Title */}
                  <h3 className="font-heading font-semibold text-lg text-[#F5F5F5] uppercase tracking-wide group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="font-sans font-normal text-xs text-[#A1A1AA] leading-relaxed pt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-32 text-center">
              <Images className="w-14 h-14 text-slate-700 mb-4" />
              <p className="font-sans font-normal text-[#A1A1AA] text-sm uppercase tracking-widest">No items in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-gradient-to-b from-[#0e1626] to-[#080d17] border border-slate-700/80 rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,1)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top cyan accent strip */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400/50 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full h-72 sm:h-96 overflow-hidden bg-black">
              <img
                src={lightbox.image}
                alt={lightbox.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="font-sans px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/40 text-[10px] uppercase tracking-widest font-medium text-cyan-300">
                  {lightbox.category}
                </span>
                <span className="font-sans text-[10px] uppercase tracking-[0.25em] font-medium text-cyan-400">
                  {lightbox.tag}
                </span>
              </div>
              
              <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-[#F5F5F5] uppercase tracking-wide">
                {lightbox.title}
              </h2>
              <p className="font-sans font-normal text-sm text-[#A1A1AA] leading-relaxed">{lightbox.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
