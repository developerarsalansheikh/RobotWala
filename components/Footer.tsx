import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight, ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/robotwala",
      hoverClass: "hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/10",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/robotwala",
      hoverClass: "hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/robotwala",
      hoverClass: "hover:text-white hover:border-slate-400 hover:bg-white/10",
      icon: (
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative z-20 border-t border-slate-700/60 bg-gradient-to-b from-[#0e1626] via-[#0b111e] to-[#080d17] pt-16 pb-12 text-slate-200 overflow-hidden shadow-[0_-15px_40px_rgba(0,0,0,0.5)]">
      {/* Top glowing ambient line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 via-blue-500 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[50px] bg-gradient-to-b from-cyan-500/20 to-transparent blur-[35px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-14 border-b border-slate-700/50">
          {/* Column 1: Brand & Mission */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative w-11 h-11 flex-shrink-0 rounded-xl overflow-hidden bg-white p-1 flex items-center justify-center border border-white/50 shadow-md group-hover:scale-105 transition-all">
                <img
                  src="/robotwala-logo.png"
                  alt="ROBOTWALA Logo"
                  className="w-full h-full object-contain filter contrast-125 brightness-105"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl tracking-[0.15em] text-[#F5F5F5] uppercase group-hover:text-cyan-300 transition-colors">
                  ROBOTWALA
                </span>
                <span className="font-sans text-[9px] uppercase tracking-[0.35em] text-cyan-400 font-semibold -mt-0.5">
                  AI &amp; ROBOTICS
                </span>
              </div>
            </Link>
            <p className="font-sans font-normal text-xs text-[#A1A1AA] leading-relaxed">
              India&apos;s leading AI, Automation, and Robotics company delivering affordable, premium, and AI-powered technology solutions for education and industry.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/40 text-[10px] uppercase tracking-widest text-cyan-300 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>#RevolutionByRobotwala</span>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-2 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`w-9 h-9 rounded-lg flex items-center justify-center text-[#A1A1AA] hover:text-[#F5F5F5] bg-white/[0.06] border border-white/[0.12] backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 ${social.hoverClass}`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-xs uppercase tracking-[0.2em] text-[#F5F5F5]">
              Company
            </h4>
            <ul className="space-y-2 text-xs font-sans font-normal text-[#A1A1AA]">
              <li>
                <Link href="/about" className="hover:text-cyan-300 transition-colors flex items-center gap-1">
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-cyan-300 transition-colors flex items-center gap-1">
                  <span>Our Products</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-300 transition-colors flex items-center gap-1">
                  <span>Robotics Solutions</span>
                </Link>
              </li>
              <li>
                <Link href="/collaborations" className="hover:text-cyan-300 transition-colors flex items-center gap-1">
                  <span>Club Collaborations</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-300 transition-colors flex items-center gap-1">
                  <span>Contact &amp; Careers</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services & Ecosystem */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-xs uppercase tracking-[0.2em] text-[#F5F5F5]">
              Solutions &amp; Labs
            </h4>
            <ul className="space-y-2 text-xs font-sans font-normal text-[#A1A1AA]">
              <li>
                <Link href="/products#lucy" className="hover:text-cyan-300 transition-colors">
                  LUCY AI Humanoid
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-300 transition-colors">
                  Smart Traffic Management
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-300 transition-colors">
                  Precision Industrial Robotics
                </Link>
              </li>
              <li>
                <Link href="/products#kits" className="hover:text-cyan-300 transition-colors">
                  STEM &amp; EdTech Kits
                </Link>
              </li>
              <li>
                <Link href="/collaborations/school" className="hover:text-cyan-300 transition-colors">
                  School AI Labs (₹5 Lakh+)
                </Link>
              </li>
              <li>
                <Link href="/collaborations/college" className="hover:text-cyan-300 transition-colors">
                  College Centres of Excellence
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Brand & Contact */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-xs uppercase tracking-[0.2em] text-[#F5F5F5]">
              Get in Touch
            </h4>

            <div className="space-y-2.5 text-xs font-sans font-normal text-[#A1A1AA]">

              {/* Address - Google Maps par khulega */}
              <a
                href="https://maps.app.goo.gl/6aMUhh9mMTSoawZB6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-cyan-300 transition-colors"
              >
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />

                <span>
                  201Apollo Avenue, 30-B, opposite Palasia, Old Palasia,
                  Thana, Indore, Madhya Pradesh 452001
                </span>
              </a>

              {/* Phone - click karne par call */}
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />

                <a
                  href="tel:+917400844492"
                  className="hover:text-cyan-300 transition-colors"
                >
                  +91 74008 44492
                </a>
              </div>

              {/* Email - Contact page par jayega */}
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />

                <Link
                  href="/contact"
                  className="hover:text-cyan-300 transition-colors"
                >
                  contact@robotwala.com
                </Link>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs font-sans font-normal text-[#A1A1AA]">
          <p>
            &copy; {new Date().getFullYear()} ROBOTWALA Inc. All rights reserved. Engineering Tomorrow&apos;s Robotics.
          </p>
          <div className="flex items-center gap-6 text-[#A1A1AA]">
            <Link href="/about" className="hover:text-[#F5F5F5] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-[#F5F5F5] transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-[#F5F5F5] transition-colors">
              Support 24/7
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
