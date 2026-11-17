import { cn } from '@/lib/utils';
import Link from '@/components/Link';

export type EmptyStateProps = {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
  className?: string;
};

/**
 * Empty state with an authored isometric "empty box" placeholder.
 * Swap the inline SVG for a generated illustration (see docs/ILLUSTRATION_PROMPTS.md, #8).
 */
const EmptyState = ({
  title,
  description,
  actionLabel,
  actionHref,
  className,
}: EmptyStateProps) => {
  return (
    <div
      className={cn(
        'card-tactile mx-auto flex max-w-[520px] flex-col items-center gap-5 p-10 text-center',
        className,
      )}
    >
      <svg
        role="img"
        aria-label="Empty isometric box with a question mark"
        width="140"
        height="140"
        viewBox="0 0 140 140"
        fill="none"
      >
        <path
          d="M70 28 118 54v46L70 126 22 100V54L70 28Z"
          fill="#2B1D38"
          stroke="#0B0716"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M70 28 118 54 70 80 22 54 70 28Z"
          fill="#7553FF"
          stroke="#0B0716"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path d="M70 80v46" stroke="#0B0716" strokeWidth="3" />
        <path d="M22 54 70 80M118 54 70 80" stroke="#0B0716" strokeWidth="3" />
        <path
          d="m70 30 40 22-40 22-40-22 40-22Z"
          fill="#150F23"
          opacity=".55"
        />
        <circle
          cx="70"
          cy="36"
          r="13"
          fill="#C2EF4E"
          stroke="#0B0716"
          strokeWidth="3"
        />
        <path
          d="M66 32.5c0-5 8-5 8 0 0 3-4 3-4 6.5"
          stroke="#150F23"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="70" cy="42.5" r="1.4" fill="#150F23" />
      </svg>
      <h3 className="font-display text-2xl font-extrabold">{title}</h3>
      <p className="max-w-[40ch] text-muted">{description}</p>
      {actionLabel && actionHref && (
        <Link href={actionHref} className="text-lime">
          {actionLabel}
        </Link>
      )}
    </div>
  );
};

export default EmptyState;
