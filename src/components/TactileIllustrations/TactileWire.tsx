import React from 'react';
import { cn } from '@/lib/utils';

export type TactileWireProps = {
  className?: string;
  label?: string;
  variant?: 'curved-horizontal' | 'vertical-drape';
};

/**
 * Tactile Signal Cable & Test Probe in pure SVG.
 * Inspired by retro electronics test benches (Sentry S.C.R.A.P.S. aesthetic).
 * Connects visual components with a patch cord, crocodile clip/lug and blinking LED.
 */
export const TactileWire: React.FC<TactileWireProps> = ({
  className,
  label = 'SIG: 3.3V // TP-01',
  variant = 'curved-horizontal',
}) => {
  if (variant === 'vertical-drape') {
    return (
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none inline-block select-none',
          className,
        )}
      >
        <svg
          width="44"
          height="120"
          viewBox="0 0 44 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top Lug / Screw Mount */}
          <rect
            x="12"
            y="2"
            width="20"
            height="14"
            rx="3"
            fill="#2B1D38"
            stroke="#0B0716"
            strokeWidth="2.5"
          />
          <circle
            cx="22"
            cy="9"
            r="3.5"
            fill="#C2EF4E"
            stroke="#0B0716"
            strokeWidth="1.5"
          />
          <line
            x1="20"
            y1="9"
            x2="24"
            y2="9"
            stroke="#0B0716"
            strokeWidth="1.5"
          />

          {/* Hard Shadow for Cable */}
          <path
            d="M22 16 C 22 45, 38 60, 36 90 C 35 105, 26 110, 24 116"
            stroke="#0B0716"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />

          {/* Electric Violet Cable */}
          <path
            d="M22 16 C 22 45, 38 60, 36 90 C 35 105, 26 110, 24 116"
            stroke="#7553FF"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Gloss Line */}
          <path
            d="M22 16 C 22 45, 38 60, 36 90 C 35 105, 26 110, 24 116"
            stroke="#F6F6F8"
            strokeWidth="1"
            strokeLinecap="round"
            strokeOpacity="0.4"
            fill="none"
          />

          {/* Bottom Alligator Clip Probe with Pulsing LED */}
          <rect
            x="14"
            y="106"
            width="20"
            height="10"
            rx="2"
            fill="#1F1633"
            stroke="#0B0716"
            strokeWidth="2"
          />
          <circle
            cx="24"
            cy="111"
            r="3"
            fill="#C2EF4E"
            className="animate-pulse"
          />
        </svg>
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none inline-block select-none', className)}
    >
      <svg
        width="190"
        height="56"
        viewBox="0 0 190 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full max-w-[190px] overflow-visible"
      >
        {/* Left Mounting Lug */}
        <rect
          x="4"
          y="18"
          width="16"
          height="20"
          rx="3"
          fill="#2B1D38"
          stroke="#0B0716"
          strokeWidth="2.5"
        />
        <circle
          cx="12"
          cy="28"
          r="4"
          fill="#C2EF4E"
          stroke="#0B0716"
          strokeWidth="1.5"
        />
        <line
          x1="9"
          y1="28"
          x2="15"
          y2="28"
          stroke="#0B0716"
          strokeWidth="1.5"
        />

        {/* Cable Hard Physical Shadow */}
        <path
          d="M20 28 C 55 52, 100 48, 145 22 C 158 14, 168 18, 172 24"
          stroke="#0B0716"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />

        {/* Cable Main Body (Electric Violet) */}
        <path
          d="M20 28 C 55 52, 100 48, 145 22 C 158 14, 168 18, 172 24"
          stroke="#7553FF"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />

        {/* Highlight Stripe on Cable */}
        <path
          d="M22 27 C 56 50, 100 46, 144 21 C 157 13, 167 17, 170 23"
          stroke="#F6F6F8"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeOpacity="0.45"
          fill="none"
        />

        {/* Right Probe Terminal */}
        <g transform="translate(164, 14)">
          {/* Clamp body */}
          <rect
            x="0"
            y="2"
            width="22"
            height="16"
            rx="3"
            fill="#1F1633"
            stroke="#0B0716"
            strokeWidth="2.5"
          />
          {/* Teeth / Clamp detail */}
          <path
            d="M22 6 L25 8 L22 10 L25 12 L22 14"
            stroke="#FA7FAA"
            strokeWidth="2"
            fill="none"
          />
          {/* Pulsing Signal LED */}
          <circle
            cx="8"
            cy="10"
            r="3"
            fill="#C2EF4E"
            className="animate-pulse"
          />
          <circle
            cx="8"
            cy="10"
            r="5"
            stroke="#C2EF4E"
            strokeWidth="1"
            strokeOpacity="0.5"
            className="animate-ping"
          />
        </g>

        {/* Micro Technical Tag */}
        {label && (
          <g transform="translate(68, 6)">
            <rect
              x="0"
              y="0"
              width="68"
              height="14"
              rx="2"
              fill="#0B0716"
              stroke="#3E2C59"
              strokeWidth="1"
            />
            <text
              x="34"
              y="10"
              textAnchor="middle"
              fill="#C2EF4E"
              fontSize="7.5"
              fontWeight="700"
              fontFamily="var(--font-mono, monospace)"
              letterSpacing="0.06em"
            >
              {label}
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};

export default TactileWire;
