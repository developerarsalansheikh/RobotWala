"use client";

import React, { useState, useEffect, Suspense } from "react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  HelpCircle,
  ShieldCheck,
  Building,
} from "lucide-react";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const subjectParam =
    searchParams.get("subject") || searchParams.get("product") || "General Inquiry";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: subjectParam,
    message: "",
  });

  useEffect(() => {
    if (subjectParam) {
      setFormData((prev) => ({ ...prev, subject: subjectParam }));
    }
  }, [subjectParam]);

  // Smooth auto-scroll if navigated with hash (#send-message, #contact-form, #send-us-a-message, #internship)
  useEffect(() => {
    const scrollToSection = () => {
      if (
        typeof window !== "undefined" &&
        (window.location.hash === "#send-message" ||
          window.location.hash === "#contact-form" ||
          window.location.hash === "#send-us-a-message" ||
          window.location.hash === "#internship")
      ) {
        const el = document.getElementById("send-message") || document.getElementById("contact-form");
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

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      setSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col bg-[#030303] text-white">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 md:py-28 text-center border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
          <p className="font-sans font-medium text-xs uppercase tracking-widest text-cyan-400 mb-4">
            DIRECT DISPATCH &amp; SUPPORT
          </p>

          <h1 className="font-heading font-bold text-4xl sm:text-6xl lg:text-7xl uppercase tracking-[-0.035em] text-[#F5F5F5] leading-[1.08] mb-6">
            <span>LET&apos;S BUILD THE </span>
            <span className="text-cyan-400 drop-shadow-[0_0_30px_rgba(6,182,212,0.4)]">
              FUTURE TOGETHER
            </span>
          </h1>

          <p className="font-sans font-normal text-base sm:text-lg text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re looking to deploy LUCY, set up a ₹5 Lakh+ school lab, explore university R&amp;D, or join our franchise network, our team is ready to assist.
          </p>
        </div>
      </section>

      {/* 2. SPLIT LAYOUT */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT COLUMN */}
            <ScrollReveal direction="left" className="lg:col-span-5 space-y-6">
              {/* Primary Contact Details Card */}
              <div className="relative bg-[#0b111e] border border-slate-700/60 rounded-3xl p-8 sm:p-10 shadow-[0_20px_45px_rgba(0,0,0,0.8)] overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-400/80" />

                <span className="font-sans text-[10px] uppercase tracking-widest text-cyan-400 font-semibold">
                  HEADQUARTERS
                </span>
                <h2 className="font-heading font-semibold text-xl text-[#F5F5F5] uppercase mt-1 mb-6">
                  ROBOTWALA CORPORATE LABS
                </h2>

                <div className="space-y-6 font-sans">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-cyan-400 flex-shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-sans text-xs uppercase tracking-wider text-[#A1A1AA] font-medium mb-1">
                        Registered Address
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-[#F5F5F5] leading-relaxed font-normal">
                        <a
                          href="https://maps.app.goo.gl/6aMUhh9mMTSoawZB6"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-2.5 hover:text-cyan-300 transition-colors"
                        >
                          <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />

                          <span>
                            Apollo Avenue, 30-B, opposite Palasia, Old Palasia,
                            Thana, Indore, Madhya Pradesh 452001
                          </span>
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-cyan-400 flex-shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-sans text-xs uppercase tracking-wider text-[#A1A1AA] font-medium mb-1">
                        Direct Hotline &amp; WhatsApp
                      </h4>
                      <a
                        href="tel:+917400844492"
                        className="font-sans text-xs sm:text-sm text-[#F5F5F5] hover:text-cyan-300 transition-colors font-semibold"
                      >
                        +91 74008 44492
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-cyan-400 flex-shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-sans text-xs uppercase tracking-wider text-[#A1A1AA] font-medium mb-1">
                        Electronic Inquiries
                      </h4>
                      <a
                        href="mailto:contact@robotwala.com"
                        className="font-sans text-xs sm:text-sm text-[#F5F5F5] hover:text-cyan-300 transition-colors font-semibold"
                      >
                        contact@robotwala.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-cyan-400 flex-shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-sans text-xs uppercase tracking-wider text-[#A1A1AA] font-medium mb-1">
                        Lab Visiting Hours
                      </h4>
                      <p className="font-sans text-xs text-[#F5F5F5] font-normal">
                        Monday &ndash; Saturday: 9:00 AM &ndash; 7:00 PM IST
                      </p>
                      <p className="font-sans text-[10px] text-[#A1A1AA] mt-0.5">
                        Sunday: Reserved for Scheduled Research Tours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Help Card */}
              <div className="bg-[#0b111e] border border-slate-700/60 rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-3">
                  <HelpCircle className="w-5 h-5 text-cyan-400" />
                  <h3 className="font-heading font-semibold text-base text-[#F5F5F5] uppercase">
                    Need Immediate Assistance?
                  </h3>
                </div>
                <p className="font-sans font-normal text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-6">
                  Our support desk operates 24/7 for urgent technical queries regarding lab hardware, trainer scheduling, and live robot telemetry.
                </p>
                <div className="flex flex-wrap items-center gap-4 font-sans font-semibold text-xs">
                  <a
                    href="https://wa.me/917805978708"
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-full bg-[#0e1626] text-cyan-400 border border-slate-700/80 hover:bg-[#131f36] transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Support</span>
                  </a>
                  <a
                    href="tel:+917400844492"
                    className="px-5 py-2.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 transition-all cursor-pointer"
                  >
                    <span>Instant Call</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* RIGHT COLUMN: Form */}
            <ScrollReveal direction="right" className="lg:col-span-7">
              <div id="send-message" className="relative bg-[#0b111e] border border-slate-700/60 rounded-3xl p-8 sm:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden scroll-mt-28">
                <div id="contact-form" className="absolute -top-28 left-0" />
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-400" />

                {submitted ? (
                  <div className="py-12 flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="font-heading font-semibold text-2xl text-[#F5F5F5] uppercase tracking-wide">
                      Transmission Received
                    </h3>
                    <p className="font-sans font-normal text-xs sm:text-sm text-[#A1A1AA] max-w-md leading-relaxed">
                      Thank you for contacting ROBOTWALA. Our team has dispatched your request to the appropriate division. An engineer will connect with you within 2 business hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          subject: "General Inquiry",
                          message: "",
                        });
                      }}
                      className="mt-4 px-6 py-2.5 rounded-full bg-[#0e1626] border border-slate-700/80 font-sans font-semibold text-xs uppercase tracking-widest text-[#F5F5F5] hover:bg-[#131f36] transition-all cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <span className="font-sans text-[10px] uppercase tracking-widest text-cyan-400 font-semibold">
                        INQUIRY DISPATCH
                      </span>
                      <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-[#F5F5F5] uppercase tracking-tight mt-1 mb-6">
                        Send Us a Message
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-sans text-[11px] uppercase tracking-wider text-[#A1A1AA] font-medium mb-2">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-slate-700 font-sans text-sm text-[#F5F5F5] placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block font-sans text-[11px] uppercase tracking-wider text-[#A1A1AA] font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. rahul@domain.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-slate-700 font-sans text-sm text-[#F5F5F5] placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-sans text-[11px] uppercase tracking-wider text-[#A1A1AA] font-medium mb-2">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          pattern="^(\+91[\-\s]?)?[6-9]\d{9}$"
                          title="Please enter a valid 10-digit Indian phone number (e.g. 9876543210 or +91 9876543210)"
                          placeholder="e.g. +91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => {
                            const value = e.target.value.replace(/[^\d+\s-]/g, "");
                            setFormData({ ...formData, phone: value });
                          }}
                          className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-slate-700 font-sans text-sm text-[#F5F5F5] placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block font-sans text-[11px] uppercase tracking-wider text-[#A1A1AA] font-medium mb-2">
                          Inquiry Subject *
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-slate-700 font-sans text-sm text-[#F5F5F5] focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                        >
                          <option value="School AI & Robotics Lab (₹5L+)" className="bg-neutral-900 text-white">
                            School AI &amp; Robotics Lab (₹5L+)
                          </option>
                          <option value="College Centre of Excellence (COE)" className="bg-neutral-900 text-white">
                            College Centre of Excellence (COE)
                          </option>
                          <option value="LUCY Humanoid Robot Inquiry" className="bg-neutral-900 text-white">
                            LUCY Humanoid Robot Inquiry
                          </option>
                          <option value="STEM & Automation Kits" className="bg-neutral-900 text-white">
                            STEM &amp; Automation Kits
                          </option>
                          <option value="6-Month On-Site Internship" className="bg-neutral-900 text-white">
                            6-Month On-Site Internship
                          </option>
                          <option value="#RevolutionByRobotwala Franchise" className="bg-neutral-900 text-white">
                            #RevolutionByRobotwala Franchise
                          </option>
                          <option value="General Inquiry" className="bg-neutral-900 text-white">
                            General Inquiry
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-sans text-[11px] uppercase tracking-wider text-[#A1A1AA] font-medium mb-2">
                        Detailed Message / Requirements *
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Please specify your organization name, location, and specific robotic or collaboration requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-slate-700 font-sans text-sm text-[#F5F5F5] placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                      />
                    </div>
                    {error && (
                      <p className="text-red-400 text-xs font-sans text-center -mt-2">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center py-4 px-8 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-sans font-semibold text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
                    >
                      {loading ? (
                        <span>Transmitting Inquiry...</span>
                      ) : (
                        <span>Submit Inquiry</span>
                      )}
                    </button>

                    <div className="pt-2 text-center">
                      <p className="font-sans font-normal text-[10px] text-[#A1A1AA] uppercase tracking-widest">
                        Encrypted SSL transmission &bull; Zero spam guarantee
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[50vh] flex items-center justify-center text-xs uppercase tracking-widest text-slate-400">
          Loading ROBOTWALA Communications...
        </div>
      }
    >
      <ContactFormInner />
    </Suspense>
  );
}
