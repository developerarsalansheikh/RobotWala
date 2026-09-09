'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

// ─── Types ───────────────────────────────────────────────────────────────────
interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
}



// ─── Canvas Particle System ───────────────────────────────────────────────────
function ParticleCanvas({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  const spawnParticle = useCallback((cx: number, cy: number): Particle => {
    const angle = Math.random() * Math.PI * 2;
    const speed = 0.3 + Math.random() * 1.2;
    const dist = 80 + Math.random() * 300;
    return {
      id: Math.random(),
      x: cx + Math.cos(angle) * dist,
      y: cy + Math.sin(angle) * dist,
      vx: -Math.cos(angle) * speed,
      vy: -Math.sin(angle) * speed,
      size: 0.8 + Math.random() * 1.6,
      opacity: 0.3 + Math.random() * 0.7,
      life: 0,
      maxLife: 60 + Math.random() * 80,
    };
  }, []);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    startTimeRef.current = performance.now();

    // Pre-populate particles
    for (let i = 0; i < 180; i++) {
      particlesRef.current.push(spawnParticle(cx, cy));
    }

    const draw = (now: number) => {
      const elapsed = (now - startTimeRef.current) / 1000;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Spawn new particles continuously
      if (elapsed < 3.8) {
        const rate = elapsed > 1.5 ? 4 : 1;
        for (let i = 0; i < rate; i++) {
          particlesRef.current.push(spawnParticle(canvas.width / 2, canvas.height / 2));
        }
      }

      particlesRef.current.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        const lifeFrac = p.life / p.maxLife;
        const alpha = p.opacity * Math.sin(lifeFrac * Math.PI);

        // Particle glow
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        grad.addColorStop(0, `rgba(56,189,248,${alpha})`);
        grad.addColorStop(0.5, `rgba(99,179,237,${alpha * 0.5})`);
        grad.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(186,230,253,${alpha})`;
        ctx.fill();

        if (p.life >= p.maxLife) {
          particlesRef.current.splice(idx, 1);
        }
      });

      // Central energy core glow
      if (elapsed >= 0.4) {
        const coreAlpha = Math.min(1, (elapsed - 0.4) / 0.4);
        const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 40);
        coreGrad.addColorStop(0, `rgba(125,211,252,${coreAlpha * 0.9})`);
        coreGrad.addColorStop(0.4, `rgba(56,189,248,${coreAlpha * 0.4})`);
        coreGrad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.beginPath();
        ctx.arc(cx, cy, 40, 0, Math.PI * 2);
        ctx.fillStyle = coreGrad;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(cx, cy, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224,242,254,${coreAlpha})`;
        ctx.fill();
      }

      // Tech circuit lines
      if (elapsed >= 1.5) {
        const lineAlpha = Math.min(0.5, (elapsed - 1.5) / 0.6);
        ctx.strokeStyle = `rgba(56,189,248,${lineAlpha})`;
        ctx.lineWidth = 0.5;

        const linePatterns = [
          [cx - 120, cy - 30, cx - 60, cy - 30, cx - 60, cy],
          [cx + 120, cy - 30, cx + 60, cy - 30, cx + 60, cy],
          [cx - 100, cy + 50, cx - 40, cy + 50, cx - 40, cy + 10],
          [cx + 100, cy + 50, cx + 40, cy + 50, cx + 40, cy + 10],
          [cx - 200, cy, cx - 80, cy],
          [cx + 200, cy, cx + 80, cy],
        ];

        linePatterns.forEach(pts => {
          ctx.beginPath();
          ctx.moveTo(pts[0], pts[1]);
          for (let i = 2; i < pts.length; i += 2) {
            ctx.lineTo(pts[i], pts[i + 1]);
          }
          ctx.stroke();
        });
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    animFrameRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resize);
      particlesRef.current = [];
    };
  }, [active, spawnParticle]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: active ? 1 : 0 }}
    />
  );
}

// ─── Robot Wireframe SVG ──────────────────────────────────────────────────────
function RobotWireframe({ visible }: { visible: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={visible ? { opacity: 0.12, scale: 1 } : { opacity: 0, scale: 0.85 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
    >
      <svg
        viewBox="0 0 400 500"
        className="w-[340px] h-[440px] md:w-[420px] md:h-[520px]"
        fill="none"
        stroke="rgba(56,189,248,1)"
        strokeWidth="0.8"
      >
        {/* HEAD */}
        <rect x="140" y="40" width="120" height="100" rx="12" strokeDasharray="4 3" />
        <rect x="158" y="60" width="30" height="20" rx="4" />
        <rect x="212" y="60" width="30" height="20" rx="4" />
        <circle cx="173" cy="70" r="6" />
        <circle cx="227" cy="70" r="6" />
        <line x1="165" y1="110" x2="235" y2="110" />
        <line x1="170" y1="116" x2="230" y2="116" />
        {/* HEAD HUD arcs */}
        <path d="M150 50 Q160 42 170 48" strokeDasharray="2 2" />
        <path d="M230 48 Q240 42 250 50" strokeDasharray="2 2" />
        {/* NECK */}
        <rect x="180" y="140" width="40" height="20" rx="3" strokeDasharray="3 2" />
        {/* TORSO */}
        <rect x="110" y="160" width="180" height="140" rx="8" />
        <rect x="130" y="175" width="140" height="90" rx="4" strokeDasharray="5 3" />
        {/* Torso chest panel */}
        <circle cx="200" cy="220" r="22" strokeDasharray="3 2" />
        <circle cx="200" cy="220" r="12" />
        <circle cx="200" cy="220" r="5" fill="rgba(56,189,248,0.3)" />
        {/* Torso grille lines */}
        <line x1="135" y1="196" x2="265" y2="196" />
        <line x1="135" y1="202" x2="265" y2="202" />
        {/* ARMS */}
        <rect x="60" y="165" width="50" height="110" rx="16" strokeDasharray="4 3" />
        <rect x="290" y="165" width="50" height="110" rx="16" strokeDasharray="4 3" />
        {/* HANDS */}
        <rect x="55" y="275" width="60" height="40" rx="10" strokeDasharray="3 2" />
        <rect x="285" y="275" width="60" height="40" rx="10" strokeDasharray="3 2" />
        {/* Fingers */}
        {[65, 75, 85, 95].map((x, i) => (
          <rect key={i} x={x} y="315" width="8" height="20" rx="4" strokeDasharray="2 2" />
        ))}
        {[293, 303, 313, 323].map((x, i) => (
          <rect key={i} x={x} y="315" width="8" height="20" rx="4" strokeDasharray="2 2" />
        ))}
        {/* PELVIS */}
        <rect x="120" y="300" width="160" height="40" rx="6" strokeDasharray="4 3" />
        {/* LEGS */}
        <rect x="128" y="340" width="65" height="120" rx="10" strokeDasharray="4 3" />
        <rect x="207" y="340" width="65" height="120" rx="10" strokeDasharray="4 3" />
        {/* FEET */}
        <rect x="118" y="460" width="85" height="30" rx="8" />
        <rect x="197" y="460" width="85" height="30" rx="8" />
        {/* Joints */}
        <circle cx="200" cy="160" r="8" strokeDasharray="3 2" />
        <circle cx="85" cy="195" r="12" strokeDasharray="2 2" />
        <circle cx="315" cy="195" r="12" strokeDasharray="2 2" />
        <circle cx="160" cy="340" r="10" strokeDasharray="2 2" />
        <circle cx="240" cy="340" r="10" strokeDasharray="2 2" />
        {/* Cross-hairs */}
        <line x1="200" y1="30" x2="200" y2="0" strokeDasharray="2 4" />
        <line x1="185" y1="15" x2="215" y2="15" strokeDasharray="2 4" />
      </svg>
    </motion.div>
  );
}

// ─── Animated Grid ────────────────────────────────────────────────────────────
function AnimatedGrid({ visible }: { visible: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 0.18 : 0 }}
      transition={{ duration: 1.5, ease: 'easeIn' }}
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(56,189,248,0.35) 1px, transparent 1px),
          linear-gradient(90deg, rgba(56,189,248,0.35) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 0%, transparent 100%)',
      }}
    />
  );
}


// ─── Scan Line ────────────────────────────────────────────────────────────────
function ScanLine({ visible }: { visible: boolean }) {
  return (
    <motion.div
      className="absolute left-0 right-0 h-[1px] pointer-events-none"
      style={{ background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.6), transparent)' }}
      initial={{ top: '0%', opacity: 0 }}
      animate={visible ? {
        top: ['0%', '100%'],
        opacity: [0, 0.6, 0.6, 0],
      } : { opacity: 0 }}
      transition={{ duration: 2.5, delay: 1.5, ease: 'linear', repeat: 0 }}
    />
  );
}

// ─── Light Pulse Ripple ───────────────────────────────────────────────────────
function LightPulse({ trigger }: { trigger: boolean }) {
  return (
    <AnimatePresence>
      {trigger && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Multiple expanding rings */}
          {[0, 0.12, 0.24, 0.36].map((delay, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-cyan-400/50"
              initial={{ width: 0, height: 0, opacity: 0.9 }}
              animate={{ width: '200vmax', height: '200vmax', opacity: 0 }}
              transition={{ duration: 0.9, delay, ease: [0.0, 0.0, 0.2, 1] }}
            />
          ))}
          {/* Bright flash overlay */}
          <motion.div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(186,230,253,0.35) 0%, rgba(56,189,248,0.12) 40%, transparent 80%)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.7, delay: 0.05, ease: 'easeOut' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Letter-by-letter text ────────────────────────────────────────────────────
function LetterReveal({ text, delay = 0, className = '' }: { text: string; delay?: number; className?: string }) {
  const letters = text.split('');
  return (
    <span className={className} aria-label={text}>
      {letters.map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 0.3,
            delay: delay + i * 0.06,
            ease: [0.2, 0, 0.4, 1],
          }}
        >
          {ch === ' ' ? '\u00A0' : ch}
        </motion.span>
      ))}
    </span>
  );
}

// ─── Main Intro Component ─────────────────────────────────────────────────────
export default function IntroAnimation({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const [phase, setPhase] = useState(0);
  const [exiting, setExiting] = useState(false);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShow(false);
      return;
    }

    // Only run intro on first site load or when directly navigating to '/'
    if (!hasTriggeredRef.current || pathname === "/") {
      hasTriggeredRef.current = true;
      setShow(true);
      setPhase(0);
      setExiting(false);

      const timers: NodeJS.Timeout[] = [];
      timers.push(setTimeout(() => setPhase(1), 200));    // BUILT
      timers.push(setTimeout(() => setPhase(2), 500));    // TO THINK
      timers.push(setTimeout(() => setPhase(3), 850));    // Grid + particles
      timers.push(setTimeout(() => setPhase(4), 1200));   // Light pulse
      timers.push(setTimeout(() => setPhase(5), 1450));   // ROBOTWALA
      timers.push(setTimeout(() => setExiting(true), 1900)); // Start fadeout
      timers.push(setTimeout(() => {
        setShow(false);
        setExiting(false);
      }, 2400)); // Fully unmount

      // Bulletproof safety fallback to ensure screen is NEVER stuck
      timers.push(setTimeout(() => {
        setShow(false);
        setExiting(false);
      }, 3000));

      return () => {
        timers.forEach(clearTimeout);
      };
    } else {
      setShow(false);
    }
  }, [pathname]);

  const handleSkip = () => {
    setExiting(true);
    setTimeout(() => {
      setShow(false);
      setExiting(false);
    }, 200);
  };

  return (
    <>
      {/* ── Main intro overlay ── */}
      {show && (
        <motion.div
          className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden select-none ${
            exiting ? "pointer-events-none" : "pointer-events-auto"
          }`}
          style={{ background: '#020508' }}
          initial={{ opacity: 1 }}
          animate={exiting ? { opacity: 0, scale: 1.04 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_60%,rgba(7,24,43,1)_0%,#020508_100%)]" />

        {/* Deep vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,transparent_40%,rgba(0,0,0,0.6)_100%)]" />

        {/* Animated grid — appears at phase 3 */}
        <AnimatedGrid visible={phase >= 3} />

        {/* Canvas: particles + circuit lines */}
        <ParticleCanvas active={phase >= 3} />

        {/* Scan line sweep */}
        <ScanLine visible={phase >= 3} />

        {/* Robot wireframe — background */}
        <RobotWireframe visible={phase >= 3} />


        {/* ── Center text content ── */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center px-6">

          {/* Phase 0 → 0.5: single particle dot */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 6, height: 6,
              background: 'radial-gradient(circle, rgba(186,230,253,1) 0%, rgba(56,189,248,0.6) 60%, transparent 100%)',
              boxShadow: '0 0 12px 4px rgba(56,189,248,0.8)',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={phase >= 1
              ? { opacity: 0, scale: 0 }
              : { opacity: [0, 1, 1], scale: [0, 1.4, 1] }
            }
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />

          {/* "BUILT" — phase 1 */}
          <AnimatePresence>
            {phase >= 1 && phase < 5 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="font-['Space_Grotesk'] text-[clamp(3rem,12vw,7rem)] font-black tracking-[0.15em] leading-none text-white"
                  style={{ textShadow: '0 0 40px rgba(56,189,248,0.4), 0 0 80px rgba(56,189,248,0.15)' }}>
                  <LetterReveal text="BUILT" delay={0} />
                </h2>
              </motion.div>
            )}
          </AnimatePresence>

          {/* "TO THINK." — phase 2 */}
          <AnimatePresence>
            {phase >= 2 && phase < 5 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: [0.2, 0, 0.4, 1] }}
              >
                <h3 className="font-['Space_Grotesk'] text-[clamp(1.2rem,5vw,2.8rem)] font-semibold tracking-[0.4em] leading-none text-cyan-300/90 uppercase">
                  TO THINK.
                </h3>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Divider line — phase 3 */}
          <AnimatePresence>
            {phase >= 3 && phase < 5 && (
              <motion.div
                className="my-4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 200, opacity: 0.7 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              />
            )}
          </AnimatePresence>

          {/* "ROBOTWALA" — phase 5, revealed through light */}
          <AnimatePresence>
            {phase >= 5 && (
              <motion.div
                className="flex flex-col items-center gap-3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.2, 0, 0.4, 1] }}
              >
                {/* Logo icon */}
                <motion.div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{
                    background: 'rgba(56,189,248,0.08)',
                    border: '1px solid rgba(56,189,248,0.3)',
                    boxShadow: '0 0 30px rgba(56,189,248,0.3)',
                    backdropFilter: 'blur(10px)',
                  }}
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.1, type: 'spring', stiffness: 200 }}
                >
                  <span className="font-['Space_Grotesk'] text-3xl font-black bg-gradient-to-br from-cyan-300 via-blue-400 to-white text-transparent bg-clip-text">
                    R
                  </span>
                </motion.div>

                <motion.h1
                  className="font-['Space_Grotesk'] font-black tracking-[0.15em] leading-none text-white"
                  style={{
                    fontSize: 'clamp(3rem, 13vw, 7.5rem)',
                    textShadow: '0 0 40px rgba(56,189,248,0.9), 0 0 80px rgba(56,189,248,0.5), 0 0 120px rgba(56,189,248,0.25)',
                    filter: 'drop-shadow(0 0 30px rgba(56,189,248,0.8))',
                  }}
                  initial={{ opacity: 0, scale: 0.85, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.2, 0, 0.2, 1] }}
                >
                  <LetterReveal text="ROBOTWALA" delay={0.05} />
                </motion.h1>

                <motion.p
                  className="text-[11px] md:text-sm tracking-[0.5em] uppercase font-semibold"
                  style={{ color: 'rgba(125,211,252,0.95)' }}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  AI · ROBOTICS · INNOVATION
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Light pulse ripple — phase 4 ── */}
        <LightPulse trigger={phase >= 4} />

        {/* Loading progress bar at very bottom */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48 flex flex-col items-center gap-2">
          <div className="w-full h-[2px] bg-white/8 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #38bdf8, #818cf8)' }}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 3.8, ease: 'linear' }}
            />
          </div>
          <motion.p
            className="text-[9px] tracking-[0.3em] text-cyan-500/60 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Initializing...
          </motion.p>
        </div>

        {/* HUD tech label top-center */}
        <motion.div
          className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: phase >= 1 ? 0.5 : 0, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[9px] tracking-[0.35em] text-cyan-400/70 uppercase font-mono">
            System Boot · v2.0
          </span>
        </motion.div>

        {/* Skip button top-right */}
        <motion.button
          onClick={handleSkip}
          initial={{ opacity: 0 }}
          animate={{ opacity: phase >= 1 ? 0.6 : 0 }}
          whileHover={{ opacity: 1, scale: 1.05 }}
          className="absolute top-8 right-8 z-20 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.1] text-[10px] uppercase tracking-widest text-slate-300 hover:text-white hover:border-cyan-400/50 transition-all cursor-pointer"
        >
          Skip Intro &rarr;
        </motion.button>
      </motion.div>
      )}

      {/* ── Page content — always rendered, always interactive ── */}
      <div className="w-full flex-1 flex flex-col justify-between pointer-events-auto">
        {children}
      </div>
    </>
  );
}
