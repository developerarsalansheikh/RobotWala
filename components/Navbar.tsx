"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Collaborations", href: "/collaborations" },
    { name: "Gallery", href: "/gallery" },
    { name: "About us", href: "/about" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] w-full transition-all duration-300 ease-in-out ${
          scrolled
            ? "bg-black border-b border-white/[0.08]"
            : "bg-black/30 backdrop-blur-sm border-b border-white/[0.06]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-16 sm:h-20 flex items-center justify-between">

          {/* ── Brand Logo (Left) ── */}
          <Link
            href="/"
            className="group flex items-center gap-3.5 focus:outline-none cursor-pointer relative z-10"
            aria-label="ROBOTWALA Home"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 rounded-xl overflow-hidden bg-white p-1 flex items-center justify-center border border-white/40 shadow-[0_0_20px_rgba(6,182,212,0.35)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] group-hover:scale-105 transition-all duration-300">
              <img
                src="/robot-mascot-logo.png"
                alt="ROBOTWALA Mascot Logo"
                className="w-full h-full object-contain filter contrast-125 brightness-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg sm:text-xl tracking-tight text-[#F5F5F5] group-hover:text-cyan-400 transition-colors duration-200">
                ROBOTWALA
              </span>
              <span className="font-sans text-[10px] font-semibold tracking-wider text-cyan-400 uppercase -mt-0.5">
                AI & ROBOTICS
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav Links (Center) ── */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative group px-4 py-2 text-[13px] font-medium font-sans tracking-wide transition-colors duration-200 focus:outline-none"
                >
                  <span className={`transition-colors duration-200 ${isActive ? "text-white" : "text-white/55 group-hover:text-white"}`}>
                    {link.name}
                  </span>
                  {/* Underline indicator */}
                  <span
                    className={`absolute bottom-1 left-4 right-4 h-px bg-cyan-400 rounded-full transition-all duration-300 origin-left ${
                      isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-40"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* ── Right: CTA Button + Mobile Toggle ── */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-[13px] font-semibold font-sans text-black bg-cyan-400 hover:bg-white transition-colors duration-200 shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:shadow-[0_0_28px_rgba(255,255,255,0.15)]"
            >
              Get in Touch
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg text-white/70 hover:text-white hover:bg-white/[0.06] border border-white/[0.08] focus:outline-none transition-all duration-200"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className={`absolute transition-all duration-200 ${mobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}`}>
                <X className="w-4 h-4" />
              </span>
              <span className={`absolute transition-all duration-200 ${mobileMenuOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"}`}>
                <Menu className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Full-Screen Overlay Drawer ── */}
      <div
        className={`fixed inset-0 z-[999] lg:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Slide-in Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-[#050505] border-l border-white/[0.06] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Panel Header */}
          <div className="flex items-center justify-between px-6 h-16 sm:h-20 border-b border-white/[0.06]">
            <span className="font-heading font-bold text-sm tracking-tight text-white">Menu</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-white/50 hover:text-white hover:bg-white/[0.06] transition-all"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto" aria-label="Mobile navigation">
            {navLinks.map((link, idx) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium font-sans transition-all duration-150 ${
                    isActive
                      ? "bg-white/[0.07] text-white border border-white/[0.1]"
                      : "text-white/50 hover:text-white hover:bg-white/[0.04]"
                  }`}
                  style={{ animationDelay: `${idx * 40}ms` }}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Panel Footer CTA */}
          <div className="px-4 pb-8 pt-4 border-t border-white/[0.06]">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-4 py-3 rounded-full text-sm font-bold font-sans text-black bg-cyan-400 hover:bg-white transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
