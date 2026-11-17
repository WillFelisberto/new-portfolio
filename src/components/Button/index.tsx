import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'primary' | 'secondary';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg border px-5 py-3 font-mono text-sm font-semibold uppercase tracking-label transition-all duration-150 ease-out-expo hover:-translate-y-0.5 hover:shadow-tactile-lift active:translate-y-[3px] active:shadow-tactile-pressed disabled:pointer-events-none disabled:translate-y-0 disabled:opacity-50 disabled:shadow-none';

const variants: Record<ButtonVariant, string> = {
  primary: 'border-well bg-lime text-night shadow-tactile hover:bg-[#d1f56e]',
  secondary:
    'border-line bg-raised text-ink shadow-tactile hover:border-violet-electric',
};

const Button = ({
  children,
  className,
  variant = 'primary',
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn(base, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
