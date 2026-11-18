import React from 'react';
import { cn } from '@/lib/utils';

export type TactileJumperWireProps = {
  color?: 'lime' | 'violet' | 'coral';
  label?: string;
  isLast?: boolean;
  className?: string;
};

/**
 * Neo-brutalist Breadboard / Hardware Jumper Wire in pure CSS & SVG.
 * Connects timeline nodes (Education and Work Experience) with:
 * - 4px flexible insulated cable with physical hard shadow (#0B0716)
 * - Specular 3D highlight line for round cylindrical appearance
 * - Rubber heat-shrink strain-relief sleeves at the connector terminals
 * - Optional folded wire chicote flag label (// JMP.01, // JMP.UFSC, etc.)
 * - Grounding clamp (GND // ⏚) termination for the final timeline node
 */
export const TactileJumperWire: React.FC<TactileJumperWireProps> = ({
  color = 'violet',
  label,
  isLast = false,
  className,
}) => {
  const wireBgColor =
    color === 'lime'
      ? 'bg-lime'
      : color === 'coral'
        ? 'bg-coral'
        : 'bg-violet-electric';

  const wireGlow =
    color === 'lime'
      ? 'shadow-[0_0_6px_rgba(194,239,78,0.35)]'
      : color === 'coral'
        ? 'shadow-[0_0_6px_rgba(250,127,170,0.35)]'
        : 'shadow-[0_0_6px_rgba(117,83,255,0.35)]';

  const labelColorClass =
    color === 'lime'
      ? 'border-lime/60 text-lime'
      : color === 'coral'
        ? 'border-coral/60 text-coral'
        : 'border-violet-electric/60 text-muted';

  if (isLast) {
    // Clean circuit termination: short 24px jumper wire ending at a grounded terminal lug (GND // ⏚)
    return (
      <div
        aria-hidden="true"
        className={cn(
          'relative -mt-2 flex select-none flex-col items-center',
          className,
        )}
      >
        {/* Top Heat-Shrink Strain Relief Collar */}
        <div className="rounded-xs h-2 w-2 border border-well bg-raised shadow-chip" />

        {/* Short Grounding Jumper Wire */}
        <div className="relative h-6 w-1">
          {/* Shadow */}
          <div className="absolute inset-0 translate-x-[1.5px] rounded-full bg-well" />
          {/* Insulated Core */}
          <div
            className={cn(
              'relative h-full w-full rounded-full',
              wireBgColor,
              wireGlow,
            )}
          >
            {/* Specular Highlight */}
            <div className="absolute inset-y-0 left-0 w-[1px] rounded-full bg-white/40" />
          </div>
        </div>

        {/* Grounding Lug / Test Point Termination */}
        <div className="flex items-center gap-1 rounded-sm border border-line bg-night/95 px-1.5 py-0.5 shadow-chip">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            {/* Ground symbol lines ⏚ */}
            <line
              x1="5"
              y1="1"
              x2="5"
              y2="5"
              stroke="#9A8FB5"
              strokeWidth="1.2"
            />
            <line
              x1="2"
              y1="5"
              x2="8"
              y2="5"
              stroke="#9A8FB5"
              strokeWidth="1.2"
            />
            <line
              x1="3.5"
              y1="7"
              x2="6.5"
              y2="7"
              stroke="#9A8FB5"
              strokeWidth="1.2"
            />
            <line
              x1="4.5"
              y1="9"
              x2="5.5"
              y2="9"
              stroke="#9A8FB5"
              strokeWidth="1.2"
            />
          </svg>
          <span className="font-mono text-[9px] font-bold tracking-wider text-dim">
            GND
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={cn(
        'relative -mt-2 flex h-full w-full flex-1 select-none flex-col items-center',
        className,
      )}
    >
      {/* Top Heat-Shrink Strain Relief Collar */}
      <div className="rounded-xs z-10 h-2 w-2 shrink-0 border border-well bg-raised shadow-chip" />

      {/* Main Jumper Wire Track */}
      <div className="relative w-1 flex-1">
        {/* Physical Hard Shadow */}
        <div className="absolute inset-0 translate-x-[1.5px] rounded-full bg-well" />

        {/* Insulated Wire Body */}
        <div
          className={cn(
            'relative h-full w-full rounded-full',
            wireBgColor,
            wireGlow,
          )}
        >
          {/* Specular Highlight Line (Cylindrical depth) */}
          <div className="absolute inset-y-0 left-0 w-[1px] rounded-full bg-white/45" />

          {/* Electrical Signal Pulse Bead (travels down the line) */}
          <div
            className={cn(
              'absolute left-0 top-1/4 h-3 w-full animate-pulse rounded-full bg-white/80',
            )}
          />
        </div>

        {/* Optional Folded Chicote Wire Label / Flag Tag */}
        {label && (
          <div className="absolute left-1/2 top-1/3 z-10 -translate-x-1/2 -rotate-2 whitespace-nowrap">
            <span
              className={cn(
                'rounded-xs backdrop-blur-xs border bg-night/95 px-1 py-0.5 font-mono text-[8px] font-bold tracking-wider shadow-chip',
                labelColorClass,
              )}
            >
              {label}
            </span>
          </div>
        )}
      </div>

      {/* Bottom Heat-Shrink Strain Relief Collar */}
      <div className="rounded-xs z-10 -mb-2 h-2 w-2 shrink-0 border border-well bg-raised shadow-chip" />
    </div>
  );
};

export default TactileJumperWire;
