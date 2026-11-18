import React from 'react';
import { cn } from '@/lib/utils';

export type EmptyStateProbeRobotProps = {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  symbol?: string;
  statusBadge?: string;
};

/**
 * Editorial indie-comic isometric Robot Probe Inspector in pure SVG.
 * Designed according to docs/ILLUSTRATION_PROMPTS.md style bible:
 * 30° isometric angle, 3px uniform outline (#0B0716), flat fills, lime accent sparks.
 * Can be perched over empty state cards or contact form containers.
 */
export const EmptyStateProbeRobot: React.FC<EmptyStateProbeRobotProps> = ({
  className,
  size = 'md',
  symbol = '?',
  statusBadge,
}) => {
  const sizeClasses = {
    sm: 'h-24 w-24 sm:h-28 sm:w-28',
    md: 'h-36 w-36 sm:h-40 sm:w-40',
    lg: 'h-44 w-44 sm:h-48 sm:w-48',
  };

  return (
    <div
      aria-hidden="true"
      className={cn(
        'relative inline-flex select-none flex-col items-center drop-shadow-[4px_6px_0px_#0B0716] filter',
        className,
      )}
    >
      {/* Optional Status Badge / Speech Bubble */}
      {statusBadge && (
        <div className="mb-2 flex items-center gap-1.5 rounded-md border border-line bg-night/95 px-2.5 py-1 text-center shadow-tactile backdrop-blur">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-coral">
            {statusBadge}
          </span>
        </div>
      )}

      <svg
        width="160"
        height="160"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('overflow-visible', sizeClasses[size])}
      >
        {/* Soft Isometric Contact Shadow on Ground */}
        <ellipse
          cx="80"
          cy="144"
          rx="52"
          ry="12"
          fill="#0B0716"
          fillOpacity="0.4"
        />

        {/* Isometric Platform / Chassis Base */}
        <path
          d="M80 112 L126 126 L80 140 L34 126 Z"
          fill="#1F1633"
          stroke="#0B0716"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* Robot Torso / Chassis */}
        <path
          d="M50 82 L80 72 L110 82 L110 114 L80 126 L50 114 Z"
          fill="#2B1D38"
          stroke="#0B0716"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        {/* Torso Front Plate in Electric Violet */}
        <path
          d="M80 72 L110 82 L110 114 L80 126 Z"
          fill="#7553FF"
          stroke="#0B0716"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        {/* Status Indicator Meter on Torso */}
        <rect
          x="88"
          y="88"
          width="14"
          height="8"
          rx="2"
          fill="#0B0716"
          stroke="#3E2C59"
          strokeWidth="1.5"
        />
        <circle
          cx="95"
          cy="92"
          r="2"
          fill="#C2EF4E"
          className="animate-pulse"
        />

        {/* Robot Head (Isometric Box) */}
        <path
          d="M56 46 L80 34 L104 46 L104 70 L80 82 L56 70 Z"
          fill="#1F1633"
          stroke="#0B0716"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        {/* Head Top Face */}
        <path
          d="M56 46 L80 34 L104 46 L80 58 Z"
          fill="#7553FF"
          stroke="#0B0716"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        {/* Head Right Face */}
        <path
          d="M80 58 L104 46 L104 70 L80 82 Z"
          fill="#6C5FC7"
          stroke="#0B0716"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* Cute Dot Eyes & Screen Visor */}
        <rect
          x="61"
          y="56"
          width="16"
          height="8"
          rx="2"
          fill="#0B0716"
          stroke="#3E2C59"
          strokeWidth="1.5"
        />
        {/* Lime Glowing Eyes */}
        <circle cx="65" cy="60" r="1.5" fill="#C2EF4E" />
        <circle cx="73" cy="60" r="1.5" fill="#C2EF4E" />

        {/* Antenna / Probe with Pulsing Lime Bulb */}
        <path
          d="M80 34 L80 16"
          stroke="#0B0716"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Antenna Spring coil */}
        <path
          d="M77 26 C83 24, 77 22, 83 20"
          stroke="#FA7FAA"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Lime Lightbulb */}
        <circle
          cx="80"
          cy="12"
          r="5"
          fill="#C2EF4E"
          stroke="#0B0716"
          strokeWidth="2.5"
        />
        <circle
          cx="80"
          cy="12"
          r="7"
          stroke="#C2EF4E"
          strokeWidth="1"
          strokeOpacity="0.5"
          className="animate-ping"
        />

        {/* Lime Sparks / Dashes around Antenna */}
        <line
          x1="72"
          y1="8"
          x2="68"
          y2="4"
          stroke="#C2EF4E"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="88"
          y1="8"
          x2="92"
          y2="4"
          stroke="#C2EF4E"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="80"
          y1="3"
          x2="80"
          y2="0"
          stroke="#C2EF4E"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Mechanical Arm with Magnifying Glass */}
        {/* Shoulder */}
        <circle
          cx="112"
          cy="84"
          r="5"
          fill="#2B1D38"
          stroke="#0B0716"
          strokeWidth="2.5"
        />
        {/* Arm Segment */}
        <path
          d="M114 86 L130 96 L124 114"
          stroke="#0B0716"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M114 86 L130 96 L124 114"
          stroke="#FA7FAA"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Magnifying Glass Frame */}
        <circle
          cx="120"
          cy="124"
          r="16"
          fill="#1F1633"
          stroke="#0B0716"
          strokeWidth="3"
        />
        {/* Magnifying Glass Lens with Cyan/Lime Glass Reflection */}
        <circle
          cx="120"
          cy="124"
          r="12"
          fill="#0B0716"
          fillOpacity="0.6"
          stroke="#C2EF4E"
          strokeWidth="1.5"
        />
        <path
          d="M112 118 Q120 114, 126 120"
          stroke="#F6F6F8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeOpacity="0.8"
          fill="none"
        />

        {/* Question Mark or Empty/Message Symbol in Lens */}
        <text
          x="120"
          y="129"
          textAnchor="middle"
          fill="#FA7FAA"
          fontSize={symbol === '?' ? '14' : '11'}
          fontWeight="900"
          fontFamily="var(--font-mono, monospace)"
        >
          {symbol}
        </text>

        {/* Sparks around magnifying glass */}
        <circle cx="140" cy="116" r="2" fill="#C2EF4E" />
        <circle cx="102" cy="136" r="1.5" fill="#C2EF4E" />
      </svg>
    </div>
  );
};

export default EmptyStateProbeRobot;
