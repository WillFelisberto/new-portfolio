import React from 'react';
import { cn } from '@/lib/utils';

export type WorkbenchTapeProps = {
  color?: 'coral' | 'lime' | 'violet' | 'dark';
  label?: string;
  className?: string;
  angle?: number;
};

const COLOR_MAP = {
  coral: {
    bg: '#FA7FAA',
    text: '#0B0716',
    border: '#0B0716',
  },
  lime: {
    bg: '#C2EF4E',
    text: '#0B0716',
    border: '#0B0716',
  },
  violet: {
    bg: '#7553FF',
    text: '#F6F6F8',
    border: '#0B0716',
  },
  dark: {
    bg: '#2B1D38',
    text: '#C2EF4E',
    border: '#0B0716',
  },
};

/**
 * Tactile "washi tape" strip inspired by physical engineering workbenches.
 * Has torn zig-zag edges, hard physical drop shadow, and optional mono print.
 */
export const WorkbenchTape: React.FC<WorkbenchTapeProps> = ({
  color = 'coral',
  label,
  className,
  angle = -3,
}) => {
  const c = COLOR_MAP[color] || COLOR_MAP.coral;

  return (
    <div
      aria-hidden="true"
      style={{ transform: `rotate(${angle}deg)` }}
      className={cn(
        'pointer-events-none inline-flex select-none items-center justify-center drop-shadow-[2px_3px_0px_#0B0716] filter',
        className,
      )}
    >
      <svg
        width={label ? '120' : '72'}
        height="26"
        viewBox={label ? '0 0 120 26' : '0 0 72 26'}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-auto"
      >
        {/* Torn tape body with zig-zag edge on left and right */}
        {label ? (
          <path
            d="M5 2 L0 7 L5 12 L0 17 L5 22 L0 26 L115 26 L120 21 L115 16 L120 11 L115 6 L120 2 L5 2 Z"
            fill={c.bg}
            stroke={c.border}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M4 2 L0 6 L4 11 L0 16 L4 21 L0 26 L68 26 L72 21 L68 16 L72 11 L68 6 L72 2 L4 2 Z"
            fill={c.bg}
            stroke={c.border}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        )}

        {/* Highlight inner gloss line */}
        <line
          x1="8"
          y1="5"
          x2={label ? '112' : '64'}
          y2="5"
          stroke="#FFFFFF"
          strokeOpacity="0.35"
          strokeWidth="1"
          strokeDasharray="4 2"
        />

        {/* Optional technical label */}
        {label && (
          <text
            x="60"
            y="17"
            textAnchor="middle"
            fill={c.text}
            fontSize="9"
            fontWeight="700"
            fontFamily="var(--font-mono, monospace)"
            letterSpacing="0.08em"
          >
            {label}
          </text>
        )}
      </svg>
    </div>
  );
};

export default WorkbenchTape;
