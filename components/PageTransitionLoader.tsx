"use client";

import React, { useEffect, useState, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function PageTransitionLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Complete loading when pathname or searchParams change
  useEffect(() => {
    if (loading) {
      setProgress(100);
      const timer = setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [pathname, searchParams]);

  // Intercept click on internal links (exclude home page navigation where IntroAnimation handles it)
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a") as HTMLAnchorElement | null;

      if (!anchor) return;

      const href = anchor.getAttribute("href");
      const targetAttr = anchor.getAttribute("target");

      // Only handle internal relative links (not external, not new tab, not hash only, not home page)
      if (
        href &&
        !href.startsWith("http") &&
        !href.startsWith("mailto:") &&
        !href.startsWith("tel:") &&
        !href.startsWith("#") &&
        targetAttr !== "_blank" &&
        href !== pathname &&
        href !== "/" // Home page has its own dedicated preloader
      ) {
        setLoading(true);
        setProgress(25);

        if (progressTimerRef.current) clearInterval(progressTimerRef.current);
        progressTimerRef.current = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 85) {
              if (progressTimerRef.current) clearInterval(progressTimerRef.current);
              return 85;
            }
            return prev + Math.floor(Math.random() * 15 + 10);
          });
        }, 150);

        // Fallback auto-complete after 3.5s in case route doesn't change
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
          setLoading(false);
          setProgress(0);
          if (progressTimerRef.current) clearInterval(progressTimerRef.current);
        }, 3500);
      }
    };

    document.addEventListener("click", handleAnchorClick, { capture: true });

    return () => {
      document.removeEventListener("click", handleAnchorClick, { capture: true });
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    };
  }, [pathname]);

  // Never render on home page so it never clashes with the home preloader
  if (pathname === "/") return null;

  if (!loading && progress === 0) return null;

  return (
    /* ── Top Futuristic Laser Progress Bar (Sleek, Non-Intrusive) ── */
    <div className="fixed top-0 left-0 right-0 z-[999999] h-[3px] bg-cyan-950/40 pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-cyan-500 via-blue-400 to-cyan-300 transition-all duration-200 ease-out shadow-[0_0_15px_#06b6d4,0_0_30px_rgba(6,182,212,0.8)]"
        style={{
          width: `${progress}%`,
          transition: progress === 100 ? "width 0.2s ease-out, opacity 0.25s ease-out 0.05s" : "width 0.25s ease-out",
          opacity: progress === 100 ? 0 : 1,
        }}
      />
    </div>
  );
}
