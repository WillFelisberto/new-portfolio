'use client';
import { Fragment } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

type SectionTitleProps = {
  title: string;
  subtitle: string;
  /** Word(s) inside `title` to render as a lime chip. Defaults to the last word. */
  highlight?: string;
  className?: string;
};

const renderTitle = (title: string, highlight?: string) => {
  const words = title.split(' ');
  const target = highlight ?? words[words.length - 1];
  const index = title.lastIndexOf(target);
  if (!target || index === -1) return title;
  return (
    <>
      {title.slice(0, index)}
      <span className="chip-hl">{target}</span>
      {title.slice(index + target.length)}
    </>
  );
};

const SectionTitle = ({
  title,
  subtitle,
  highlight,
  className,
}: SectionTitleProps) => {
  const animProps = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <motion.h3
        className="text-4xl font-extrabold leading-[1.1] sm:text-5xl"
        {...animProps}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {renderTitle(title, highlight)}
      </motion.h3>
      <motion.span
        {...animProps}
        transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="label-mono w-fit -rotate-1 rounded border border-line bg-surface px-2.5 py-1 text-coral"
      >
        {`../${subtitle}`}
      </motion.span>
    </div>
  );
};

export default SectionTitle;
