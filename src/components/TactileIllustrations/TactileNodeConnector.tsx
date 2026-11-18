import React from 'react';
import { cn } from '@/lib/utils';

export type TactileNodeConnectorProps = {
  position: 'top' | 'bottom';
  color?: 'lime' | 'violet' | 'coral';
  className?: string;
};

/**
 * Tactile DuPont / Terminal Block Connector Jack in pure SVG.
 * Mounts onto circular timeline image nodes (12 o'clock and 6 o'clock)
 * to provide authentic hardware connection points for jumper wires.
 */
export const TactileNodeConnector: React.FC<TactileNodeConnectorProps> = ({
  position,
  color = 'violet',
  className,
}) => {
  const pinColor =
    color === 'lime' ? '#C2EF4E' : color === 'coral' ? '#FA7FAA' : '#7553FF';

  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute left-1/2 z-20 -translate-x-1/2 select-none',
        position === 'top' ? '-top-2.5' : '-bottom-2.5',
        className,
      )}
    >
      <svg
        width="22"
        height="12"
        viewBox="0 0 22 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible drop-shadow-[0_2px_0px_#0B0716]"
      >
        {/* Connector Housing / DuPont Plastic Header Block */}
        <rect
          x="1"
          y="1"
          width="20"
          height="10"
          rx="2.5"
          fill="#1F1633"
          stroke="#0B0716"
          strokeWidth="2"
        />

        {/* Tactile Inset Cavity / Socket Opening */}
        <rect
          x="4.5"
          y={position === 'top' ? '1' : '5'}
          width="13"
          height="6"
          rx="1"
          fill="#0B0716"
        />

        {/* Metallic Terminal Pin / Contact point */}
        <circle cx="11" cy="6" r="2.2" fill={pinColor} />

        {/* Center Screw Slot or Pin Divider */}
        <line
          x1="9.5"
          y1="6"
          x2="12.5"
          y2="6"
          stroke="#0B0716"
          strokeWidth="1.2"
        />

        {/* Miniature Signal Indicator (Pulsing LED on bottom outgoing connector) */}
        {position === 'bottom' && (
          <circle
            cx="17"
            cy="6"
            r="1.2"
            fill={pinColor}
            className="animate-pulse"
          />
        )}
      </svg>
    </div>
  );
};

export default TactileNodeConnector;
