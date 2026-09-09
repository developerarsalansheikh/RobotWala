"use client";

import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovered = false;
    let isVisible = false;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }

      if (dotRef.current) {
        const size = isHovered ? 8 : 6;
        dotRef.current.style.transform = `translate3d(${mouseX - size / 2}px, ${mouseY - size / 2}px, 0)`;
      }

      const target = e.target as HTMLElement | null;
      const hovered = Boolean(
        target &&
          (target.tagName === "BUTTON" ||
            target.tagName === "A" ||
            target.tagName === "INPUT" ||
            target.tagName === "TEXTAREA" ||
            target.tagName === "SELECT" ||
            target.closest("button") ||
            target.closest("a") ||
            target.classList.contains("cursor-pointer"))
      );

      if (hovered !== isHovered) {
        isHovered = hovered;
        if (dotRef.current) {
          dotRef.current.style.width = isHovered ? "8px" : "6px";
          dotRef.current.style.height = isHovered ? "8px" : "6px";
        }
        if (ringRef.current) {
          const ringSize = isHovered ? "48px" : "32px";
          ringRef.current.style.width = ringSize;
          ringRef.current.style.height = ringSize;
          ringRef.current.style.borderColor = isHovered
            ? "rgba(34, 211, 238, 0.75)"
            : "rgba(255, 255, 255, 0.25)";
          ringRef.current.style.boxShadow = isHovered
            ? "0 0 25px rgba(34, 211, 238, 0.25)"
            : "0 0 10px rgba(255, 255, 255, 0.05)";
        }
      }
    };

    const handleMouseLeave = () => {
      isVisible = false;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      isVisible = true;
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter, { passive: true });

    const animateRing = () => {
      const dx = mouseX - ringX;
      const dy = mouseY - ringY;
      ringX += dx * 0.22;
      ringY += dy * 0.22;

      if (ringRef.current) {
        const offset = isHovered ? 24 : 16;
        ringRef.current.style.transform = `translate3d(${ringX - offset}px, ${ringY - offset}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animateRing);
    };

    animationFrameId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Central Sharp Glowing Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[99999] rounded-full bg-cyan-300 shadow-[0_0_12px_#22d3ee,0_0_24px_rgba(34,211,238,0.6)] opacity-0 will-change-transform"
        style={{
          width: "6px",
          height: "6px",
          transition: "opacity 0.2s ease, width 0.2s ease, height 0.2s ease",
        }}
      />

      {/* Trailing Outer Ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[99998] rounded-full border border-white/25 bg-cyan-500/[0.03] opacity-0 will-change-transform"
        style={{
          width: "32px",
          height: "32px",
          boxShadow: "0 0 10px rgba(255, 255, 255, 0.05)",
          transition: "opacity 0.2s ease, width 0.2s ease, height 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
        }}
      />
    </>
  );
}
