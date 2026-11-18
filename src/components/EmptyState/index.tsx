import React from 'react';
import { cn } from '@/lib/utils';
import Link from '@/components/Link';
import { EmptyStateProbeRobot } from '@/components/TactileIllustrations/EmptyStateProbeRobot';

export type EmptyStateProps = {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
  actionOnClick?: () => void;
  className?: string;
};

/**
 * Neo-brutalist empty state featuring an author-grade isometric Robot Probe inspector.
 * Conforms to docs/ILLUSTRATION_PROMPTS.md style bible.
 */
const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  actionLabel,
  actionHref,
  actionOnClick,
  className,
}) => {
  return (
    <div
      className={cn(
        'card-tactile relative mx-auto flex max-w-[540px] flex-col items-center gap-4 p-8 text-center sm:p-10',
        className,
      )}
    >
      <EmptyStateProbeRobot
        statusBadge="// NO SIGNALS DETECTED [RETRY PROBE]"
        className="mb-2"
      />

      <h3 className="font-display text-2xl font-extrabold text-ink">{title}</h3>
      <p className="max-w-[42ch] text-sm leading-relaxed text-muted sm:text-base">
        {description}
      </p>

      {actionLabel && actionHref && (
        <Link
          href={actionHref}
          className="mt-2 rounded-md bg-lime px-4 py-2 font-mono text-xs font-bold text-night shadow-tactile transition-transform hover:-translate-y-0.5 active:translate-y-0.5"
        >
          {actionLabel}
        </Link>
      )}

      {actionLabel && actionOnClick && !actionHref && (
        <button
          type="button"
          onClick={actionOnClick}
          className="mt-2 rounded-md bg-lime px-4 py-2 font-mono text-xs font-bold text-night shadow-tactile transition-transform hover:-translate-y-0.5 active:translate-y-0.5"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
