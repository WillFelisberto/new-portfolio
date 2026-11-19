'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { trackEvent } from '@/lib/analytics';

export type TinyMLOscilloscopeProps = {
  className?: string;
};

/**
 * Pure SVG + CSS TinyML Benchtop Oscilloscope / Waveform Analyzer.
 * Celebrates Willian's M.Sc. in Edge AI (UFSC), TinyML research, and embedded inference.
 * Neo-brutalist tactile aesthetic: 3px near-black borders, CRT grid, pulsing inference sine wave.
 */
export const TinyMLOscilloscope: React.FC<TinyMLOscilloscopeProps> = ({
  className,
}) => {
  const [activeMode, setActiveMode] = useState<'sine' | 'pulse'>('sine');

  return (
    <div
      className={cn(
        'group relative inline-block select-none transition-transform duration-200 hover:-translate-y-1',
        className,
      )}
      onClick={() => {
        const nextMode = activeMode === 'sine' ? 'pulse' : 'sine';
        setActiveMode(nextMode);
        trackEvent('oscilloscope_toggle', { mode: nextMode });
      }}
      title="Click to toggle TinyML waveform mode"
      role="region"
      aria-label="TinyML Oscilloscope Simulator"
    >
      <svg
        width="310"
        height="146"
        viewBox="0 0 310 146"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full max-w-[310px] drop-shadow-[4px_5px_0px_#0B0716]"
      >
        {/* Chassis Top Handle */}
        <rect
          x="100"
          y="2"
          width="110"
          height="12"
          rx="4"
          fill="#2B1D38"
          stroke="#0B0716"
          strokeWidth="3"
        />
        <rect x="115" y="6" width="80" height="4" rx="2" fill="#3E2C59" />

        {/* Main Benchtop Body */}
        <rect
          x="4"
          y="12"
          width="302"
          height="130"
          rx="10"
          fill="#1F1633"
          stroke="#0B0716"
          strokeWidth="3.5"
        />

        {/* Tactile Screws in Chassis Corners */}
        <circle
          cx="16"
          cy="24"
          r="3"
          fill="#2B1D38"
          stroke="#0B0716"
          strokeWidth="1.5"
        />
        <line
          x1="14"
          y1="24"
          x2="18"
          y2="24"
          stroke="#C2EF4E"
          strokeWidth="1"
        />
        <circle
          cx="294"
          cy="24"
          r="3"
          fill="#2B1D38"
          stroke="#0B0716"
          strokeWidth="1.5"
        />
        <line
          x1="292"
          y1="24"
          x2="296"
          y2="24"
          stroke="#C2EF4E"
          strokeWidth="1"
        />
        <circle
          cx="16"
          cy="130"
          r="3"
          fill="#2B1D38"
          stroke="#0B0716"
          strokeWidth="1.5"
        />
        <line
          x1="14"
          y1="130"
          x2="18"
          y2="130"
          stroke="#C2EF4E"
          strokeWidth="1"
        />
        <circle
          cx="294"
          cy="130"
          r="3"
          fill="#2B1D38"
          stroke="#0B0716"
          strokeWidth="1.5"
        />
        <line
          x1="292"
          y1="130"
          x2="296"
          y2="130"
          stroke="#C2EF4E"
          strokeWidth="1"
        />

        {/* Header Strip */}
        <rect
          x="28"
          y="20"
          width="170"
          height="15"
          rx="3"
          fill="#2B1D38"
          stroke="#0B0716"
          strokeWidth="1.5"
        />
        <text
          x="34"
          y="31"
          fill="#C2EF4E"
          fontSize="8.5"
          fontWeight="800"
          fontFamily="var(--font-mono, monospace)"
          letterSpacing="0.08em"
        >
          EDGE AI // ESP32-S3 LAB
        </text>

        {/* Mode Pill Badge */}
        <rect x="146" y="22" width="48" height="11" rx="2" fill="#0B0716" />
        <text
          x="170"
          y="30.5"
          textAnchor="middle"
          fill="#FA7FAA"
          fontSize="7"
          fontWeight="700"
          fontFamily="var(--font-mono, monospace)"
          letterSpacing="0.05em"
        >
          {activeMode === 'sine' ? 'RUN: 14FPS' : 'TRIG: OK'}
        </text>

        {/* CRT Screen Bezel */}
        <rect
          x="26"
          y="38"
          width="174"
          height="88"
          rx="6"
          fill="#0B0716"
          stroke="#3E2C59"
          strokeWidth="2.5"
        />

        {/* CRT Screen Internal Grid Lines */}
        <g stroke="#1F1633" strokeWidth="1" strokeDasharray="2 3">
          {/* Vertical Grid */}
          <line x1="60" y1="40" x2="60" y2="124" />
          <line x1="95" y1="40" x2="95" y2="124" />
          <line x1="130" y1="40" x2="130" y2="124" />
          <line x1="165" y1="40" x2="165" y2="124" />
          {/* Horizontal Grid */}
          <line x1="28" y1="60" x2="198" y2="60" />
          <line
            x1="28"
            y1="82"
            x2="198"
            y2="82"
            stroke="#2B1D38"
            strokeWidth="1.5"
          />
          <line x1="28" y1="104" x2="198" y2="104" />
        </g>

        {/* Animated Waveform (CSS Keyframe or Dynamic Path) */}
        {activeMode === 'sine' ? (
          <path
            d="M 28 82 Q 45 48, 62 82 T 96 82 T 130 82 T 164 82 T 198 82"
            fill="none"
            stroke="#C2EF4E"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="animate-pulse"
          />
        ) : (
          <path
            d="M 28 82 L 55 82 L 62 48 L 72 110 L 80 72 L 88 88 L 96 82 L 198 82"
            fill="none"
            stroke="#FA7FAA"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="animate-pulse"
          />
        )}

        {/* CRT Scanline Glare Overlay */}
        <path
          d="M 28 40 L 198 40 L 198 52 L 28 66 Z"
          fill="#F6F6F8"
          fillOpacity="0.04"
        />

        {/* Screen Bottom Readout */}
        <text
          x="34"
          y="118"
          fill="#9A8FB5"
          fontSize="7.5"
          fontFamily="var(--font-mono, monospace)"
        >
          INT8 QUANT • 120KB RAM
        </text>

        {/* Controls Column (Right Panel) */}
        {/* Dial 1: Frequency / Gain */}
        <g transform="translate(216, 26)">
          <circle
            cx="20"
            cy="18"
            r="15"
            fill="#2B1D38"
            stroke="#0B0716"
            strokeWidth="2.5"
          />
          <circle
            cx="20"
            cy="18"
            r="10"
            fill="#7553FF"
            stroke="#0B0716"
            strokeWidth="1.5"
          />
          {/* Dial notch */}
          <line
            x1="20"
            y1="10"
            x2="20"
            y2="15"
            stroke="#F6F6F8"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <text
            x="20"
            y="39"
            textAnchor="middle"
            fill="#BDB4D1"
            fontSize="6.5"
            fontWeight="700"
            fontFamily="var(--font-mono, monospace)"
          >
            VOLT/DIV
          </text>
        </g>

        {/* Dial 2: Timebase */}
        <g transform="translate(262, 26)">
          <circle
            cx="18"
            cy="18"
            r="15"
            fill="#2B1D38"
            stroke="#0B0716"
            strokeWidth="2.5"
          />
          <circle
            cx="18"
            cy="18"
            r="10"
            fill="#6C5FC7"
            stroke="#0B0716"
            strokeWidth="1.5"
          />
          {/* Dial notch */}
          <line
            x1="23"
            y1="12"
            x2="20"
            y2="16"
            stroke="#C2EF4E"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <text
            x="18"
            y="39"
            textAnchor="middle"
            fill="#BDB4D1"
            fontSize="6.5"
            fontWeight="700"
            fontFamily="var(--font-mono, monospace)"
          >
            TIME/DIV
          </text>
        </g>

        {/* Toggle Switch */}
        <g transform="translate(220, 74)">
          <rect
            x="0"
            y="0"
            width="22"
            height="34"
            rx="4"
            fill="#0B0716"
            stroke="#3E2C59"
            strokeWidth="1.5"
          />
          <circle
            cx="11"
            cy={activeMode === 'sine' ? '10' : '24'}
            r="7"
            fill="#C2EF4E"
            stroke="#0B0716"
            strokeWidth="2"
          />
          <text
            x="30"
            y="12"
            fill="#BDB4D1"
            fontSize="6.5"
            fontWeight="700"
            fontFamily="var(--font-mono, monospace)"
          >
            SINE
          </text>
          <text
            x="30"
            y="26"
            fill="#BDB4D1"
            fontSize="6.5"
            fontWeight="700"
            fontFamily="var(--font-mono, monospace)"
          >
            PULSE
          </text>
        </g>

        {/* Status LEDs */}
        <g transform="translate(268, 76)">
          <circle
            cx="12"
            cy="6"
            r="4.5"
            fill="#C2EF4E"
            stroke="#0B0716"
            strokeWidth="1.5"
            className="animate-pulse"
          />
          <text
            x="22"
            y="9"
            fill="#BDB4D1"
            fontSize="6.5"
            fontFamily="var(--font-mono, monospace)"
          >
            SYNC
          </text>

          <circle
            cx="12"
            cy="22"
            r="4.5"
            fill="#FA7FAA"
            stroke="#0B0716"
            strokeWidth="1.5"
          />
          <text
            x="22"
            y="25"
            fill="#BDB4D1"
            fontSize="6.5"
            fontFamily="var(--font-mono, monospace)"
          >
            GATE
          </text>
        </g>

        {/* BNC Probe Socket (Bottom Right) */}
        <g transform="translate(244, 115)">
          <circle
            cx="12"
            cy="12"
            r="9"
            fill="#2B1D38"
            stroke="#0B0716"
            strokeWidth="2"
          />
          <circle cx="12" cy="12" r="4.5" fill="#0B0716" />
          <circle cx="12" cy="12" r="2" fill="#C2EF4E" />
        </g>
      </svg>

      {/* Interactive Hint on Hover */}
      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <span className="rounded border border-line bg-night/90 px-2 py-0.5 font-mono text-xs text-lime shadow-tactile">
          [CLICK TO TOGGLE WAVEFORM]
        </span>
      </div>
    </div>
  );
};

export default TinyMLOscilloscope;
