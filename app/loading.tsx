import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-[70vh] w-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute w-72 h-72 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

      {/* Cybernetic Tech Spinner */}
      <div className="relative flex items-center justify-center mb-6">
        {/* Outer Ring */}
        <div className="w-16 h-16 rounded-full border border-cyan-500/20 border-t-cyan-400 animate-spin" />
        
        {/* Inner Counter-Rotating Ring */}
        <div className="absolute w-10 h-10 rounded-full border border-blue-500/20 border-b-blue-400 animate-spin [animation-direction:reverse] [animation-duration:1.5s]" />
        
        {/* Central Core Pulse Dot */}
        <div className="absolute w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee] animate-pulse" />
      </div>

      {/* Futuristic Status Text */}
      <div className="flex flex-col items-center gap-1 text-center">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400 font-semibold animate-pulse">
          INITIALIZING TELEMETRY...
        </span>
        <span className="font-sans text-[11px] text-[#A1A1AA] tracking-widest uppercase">
          ROBOTWALA INTELLIGENCE
        </span>
      </div>
    </div>
  );
}
