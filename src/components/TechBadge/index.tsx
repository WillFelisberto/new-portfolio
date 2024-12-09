'use client';
import { motion } from 'motion/react';
import { ComponentProps } from 'react';
type TechBadgeProps = ComponentProps<typeof motion.span> & {
  name: string;
};

const TechBadge = ({ name, ...props }: TechBadgeProps) => {
  return (
    <motion.span
      className="rounded-lg bg-sky-900/80 px-3 py-1 text-sm text-sky-400"
      {...props}
    >
      {name}
    </motion.span>
  );
};

export default TechBadge;
