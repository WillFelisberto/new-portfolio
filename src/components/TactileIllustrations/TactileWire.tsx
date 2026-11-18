import React from 'react';
import { cn } from '@/lib/utils';

export type TactileWireProps = {
  className?: string;
  label?: string;
};

/**
 * Tactile Signal Patch Cable & Debug Probe in pure SVG.
 * Hugs the container border from the badge down to a physical test point clamp.
 * Features:
 * - Screw mount terminal connected to the badge.
 * - Smooth vertical curved cable draping along the container edge.
 * - Test point clamp (TEST POINT #01) gripping the card border.
 * - Pulsing lime LED indicator (#C2EF4E).
 * - Mobile-first: stays within ~36px width, hugging the border with 0 horizontal overflow.
 */
export const TactileWire: React.FC<TactileWireProps> = ({
  className,
  label = 'TEST POINT #01',
}) => {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute z-20 select-none overflow-visible drop-shadow-[2px_3px_0px_#0B0716] filter',
        className,
      )}
    >
      <svg
        width="44"
        height="150"
        viewBox="0 0 44 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[150px] w-[44px] overflow-visible"
      >
        {/* Top Screw Lug Mount (Anchored to Badge) */}
        <g id="top-mount">
          <rect
            x="14"
            y="2"
            width="18"
            height="14"
            rx="3"
            fill="#2B1D38"
            stroke="#0B0716"
            strokeWidth="2.5"
          />
          <circle
            cx="23"
            cy="9"
            r="3.5"
            fill="#C2EF4E"
            stroke="#0B0716"
            strokeWidth="1.5"
          />
          <line
            x1="21"
            y1="9"
            x2="25"
            y2="9"
            stroke="#0B0716"
            strokeWidth="1.5"
          />
        </g>

        {/* Cable Hard Physical Shadow underneath */}
        <path
          d="M 23 16 C 10 35, 6 65, 14 95 C 18 110, 26 122, 28 132"
          stroke="#0B0716"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />

        {/* Electric Violet Flexible Cable Body */}
        <path
          d="M 23 16 C 10 35, 6 65, 14 95 C 18 110, 26 122, 28 132"
          stroke="#7553FF"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Cable Specular Gloss Line */}
        <path
          d="M 23 16 C 10 35, 6 65, 14 95 C 18 110, 26 122, 28 132"
          stroke="#F6F6F8"
          strokeWidth="1"
          strokeLinecap="round"
          strokeOpacity="0.4"
          fill="none"
        />

        {/* Cable Retention Collar / Ferrule */}
        <rect
          x="22"
          y="124"
          width="12"
          height="6"
          rx="1"
          fill="#3E2C59"
          stroke="#0B0716"
          strokeWidth="1.5"
        />

        {/* Bottom Test Point Clamp (Gripping the Card Border) */}
        <g id="test-point-clamp" transform="translate(14, 128)">
          {/* Clamp Base Body */}
          <rect
            x="0"
            y="0"
            width="28"
            height="18"
            rx="3"
            fill="#1F1633"
            stroke="#0B0716"
            strokeWidth="2.5"
          />

          {/* Crocodile Teeth / Notch gripping the 1px line */}
          <path
            d="M 28 4 L 32 6 L 28 8 L 32 10 L 28 12 L 32 14"
            stroke="#FA7FAA"
            strokeWidth="2"
            fill="none"
          />

          {/* Test Point Screw Terminal */}
          <circle
            cx="8"
            cy="9"
            r="3"
            fill="#2B1D38"
            stroke="#0B0716"
            strokeWidth="1"
          />
          <line
            x1="6.5"
            y1="9"
            x2="9.5"
            y2="9"
            stroke="#C2EF4E"
            strokeWidth="1"
          />

          {/* Blinking Signal LED in Lime */}
          <circle
            cx="20"
            cy="9"
            r="3.5"
            fill="#C2EF4E"
            className="animate-pulse"
          />
          <circle
            cx="20"
            cy="9"
            r="5.5"
            stroke="#C2EF4E"
            strokeWidth="1"
            strokeOpacity="0.5"
            className="animate-ping"
          />
        </g>

        {/* Micro Technical Tag on Clamp (Centered above the clamp) */}
        {label && (
          <g id="tech-label" transform="translate(-6, 114)">
            <rect
              x="0"
              y="0"
              width="68"
              height="12"
              rx="2"
              fill="#0B0716"
              stroke="#3E2C59"
              strokeWidth="1"
            />
            <text
              x="34"
              y="8.5"
              textAnchor="middle"
              fill="#C2EF4E"
              fontSize="6.5"
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
