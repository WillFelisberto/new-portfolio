'use client';
import { motion } from 'framer-motion';
import { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
type TechBadgeProps = ComponentProps<typeof motion.span> & {
  name: string;
};

const TechBadge = ({ name, className, ...props }: TechBadgeProps) => {
  return (
    <motion.span
      className={cn(
        'label-mono inline-block rounded-md border border-line bg-raised px-3 py-1 text-xs text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_2px_0_0_#0B0716] transition-colors hover:border-lime hover:text-lime',
        className,
      )}
      {...props}
    >
      {name}
    </motion.span>
  );
};

export default TechBadge;
