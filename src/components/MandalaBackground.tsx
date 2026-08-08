import React from 'react';

export const MandalaBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none opacity-30 sm:opacity-40">
      {/* Top Left Static Mandala Wave Motif */}
      <svg
        className="absolute -top-28 -left-28 w-[650px] h-[650px] sm:w-[850px] sm:h-[850px] text-blue-900"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.85"
      >
        <circle cx="100" cy="100" r="95" strokeDasharray="3 3" />
        <circle cx="100" cy="100" r="82" />
        <circle cx="100" cy="100" r="68" strokeDasharray="4 2" />
        <circle cx="100" cy="100" r="54" />
        <circle cx="100" cy="100" r="40" strokeDasharray="2 2" />
        <circle cx="100" cy="100" r="26" />
        <circle cx="100" cy="100" r="12" />
        
        {/* Radiating Curved Petals / Wavy Lines */}
        {Array.from({ length: 24 }).map((_, i) => (
          <g key={i} transform={`rotate(${i * 15} 100 100)`}>
            <path d="M 100 100 Q 125 45 100 5" />
            <path d="M 100 100 Q 75 45 100 5" />
          </g>
        ))}

        {Array.from({ length: 24 }).map((_, i) => (
          <path
            key={`inner-${i}`}
            d="M 100 100 Q 115 60 100 25"
            transform={`rotate(${i * 15 + 7.5} 100 100)`}
            strokeWidth="0.6"
          />
        ))}

        {/* Decorative Mandala Accent Dots */}
        {Array.from({ length: 16 }).map((_, i) => (
          <circle
            key={`dot-${i}`}
            cx={100 + 88 * Math.cos((i * 22.5 * Math.PI) / 180)}
            cy={100 + 88 * Math.sin((i * 22.5 * Math.PI) / 180)}
            r="1.8"
            fill="currentColor"
          />
        ))}
      </svg>

      {/* Top Right Orange/Amber Static Mandala Flow */}
      <svg
        className="absolute -top-16 -right-24 w-[600px] h-[600px] sm:w-[750px] sm:h-[750px] text-amber-800"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
      >
        <circle cx="100" cy="100" r="90" strokeDasharray="4 3" />
        <circle cx="100" cy="100" r="75" />
        <circle cx="100" cy="100" r="60" />
        <circle cx="100" cy="100" r="45" strokeDasharray="2 2" />

        {Array.from({ length: 24 }).map((_, i) => (
          <g key={i} transform={`rotate(${i * 15} 100 100)`}>
            <path d="M 100 100 Q 130 50 100 10" />
            <path d="M 100 100 Q 70 50 100 10" />
          </g>
        ))}
      </svg>

      {/* Middle Center Static Mandala Wave Ring */}
      <svg
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[750px] sm:w-[950px] sm:h-[950px] text-blue-950"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.7"
      >
        <circle cx="100" cy="100" r="96" strokeDasharray="5 3" />
        <circle cx="100" cy="100" r="80" />
        <circle cx="100" cy="100" r="64" strokeDasharray="3 2" />
        <circle cx="100" cy="100" r="48" />

        {Array.from({ length: 32 }).map((_, i) => (
          <path
            key={i}
            d="M 100 100 Q 120 40 100 4"
            transform={`rotate(${i * 11.25} 100 100)`}
          />
        ))}
      </svg>

      {/* Bottom Floating Mandala Art */}
      <svg
        className="absolute bottom-10 right-10 w-[650px] h-[650px] sm:w-[800px] sm:h-[800px] text-blue-900"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.85"
      >
        <circle cx="100" cy="100" r="92" />
        <circle cx="100" cy="100" r="76" strokeDasharray="3 3" />
        <circle cx="100" cy="100" r="60" />

        {Array.from({ length: 18 }).map((_, i) => (
          <g key={i} transform={`rotate(${i * 20} 100 100)`}>
            <path d="M 100 100 Q 135 55 100 8" />
            <path d="M 100 100 Q 65 55 100 8" />
          </g>
        ))}
      </svg>

      {/* Seamless Subtle Wave Lines Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='40' viewBox='0 0 80 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 Q 20 5, 40 20 T 80 20' fill='none' stroke='%231e3a8a' stroke-opacity='0.18' stroke-width='1.2'/%3E%3Cpath d='M0 30 Q 20 15, 40 30 T 80 30' fill='none' stroke='%23d97706' stroke-opacity='0.12' stroke-width='1'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
};
