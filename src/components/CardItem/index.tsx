/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { fadeUpAnimation } from '@/lib/animations';
import { motion } from 'framer-motion';
import Image from 'next/image';
import RichTextComponent from '../RichText';
import {
  TactileNodeConnector,
  TactileJumperWire,
} from '@/components/TactileIllustrations';

export type CardItemProps = {
  logoUrl: string;
  logoAlt: string;
  title: string;
  dateRange: string;
  subtitle?: string;
  description?: any; // RichText content
  linkUrl?: string;
  education?: boolean;
  additionalContent?: React.ReactNode;
  isFirst?: boolean;
  isLast?: boolean;
  jumperColor?: 'lime' | 'violet' | 'coral';
  jumperLabel?: string;
};

const CardItem = ({
  logoUrl,
  logoAlt,
  title,
  subtitle,
  dateRange,
  description,
  linkUrl,
  education = false,
  additionalContent,
  isLast = false,
  jumperColor,
  jumperLabel,
}: CardItemProps) => {
  const resolvedJumperColor = jumperColor || (education ? 'lime' : 'violet');

  return (
    <motion.div
      className={`grid ${education ? 'grid-cols-[60px,1fr]' : 'grid-cols-[40px,1fr]'} gap-4 md:gap-8`}
      {...fadeUpAnimation}
      transition={{ duration: 0.5 }}
    >
      <div className="relative flex h-full flex-col items-center">
        {/* Hardware Node with Top & Bottom DuPont Connectors */}
        <div className="relative my-2.5">
          {/* Top Ingress Connector */}
          <TactileNodeConnector position="top" color={resolvedJumperColor} />

          {education ? (
            <div className="h-[60px] w-[60px] rounded-full border-2 border-line bg-ink p-0.5 shadow-chip">
              <Image
                src={logoUrl}
                width={60}
                height={60}
                className="h-[60px] w-[60px] rounded-full object-cover"
                alt={`${title}`}
              />
            </div>
          ) : (
            <div className="rounded-full border-2 border-line bg-surface p-0.5 shadow-chip">
              <Image
                src={logoUrl}
                width={40}
                height={40}
                className="rounded-full object-cover"
                alt={logoAlt}
              />
            </div>
          )}

          {/* Bottom Egress Connector */}
          <TactileNodeConnector position="bottom" color={resolvedJumperColor} />
        </div>

        {/* Insulated Jumper Wire connecting to next node or ground */}
        <TactileJumperWire
          color={resolvedJumperColor}
          label={jumperLabel}
          isLast={isLast}
        />
      </div>

      <div className={isLast ? '' : 'pb-8 sm:pb-10'}>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          {linkUrl ? (
            <a
              href={linkUrl}
              target="_blank"
              aria-label={title}
              className="font-display text-xl font-bold text-ink underline decoration-line decoration-2 transition-colors hover:text-lime hover:decoration-lime"
              rel="noreferrer"
            >
              {title}
            </a>
          ) : (
            <h4 className="font-display text-xl font-bold">{title}</h4>
          )}
          {subtitle && <p className="text-muted">{subtitle}</p>}
          <span className="label-mono text-xs text-dim">{dateRange}</span>
          {description && <RichTextComponent lexicalData={description} />}
        </div>

        {additionalContent && <div className="mt-4">{additionalContent}</div>}
      </div>
    </motion.div>
  );
};

export default CardItem;
