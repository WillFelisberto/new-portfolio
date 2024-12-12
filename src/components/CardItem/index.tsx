/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { fadeUpAnimation } from '@/lib/animations';
import { motion } from 'framer-motion';
import Image from 'next/image';
import RichTextComponent from '../RichText';

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
}: CardItemProps) => {
  return (
    <motion.div
      className="grid grid-cols-[40px,1fr] gap-4 md:gap-10"
      {...fadeUpAnimation}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-4">
        {education ? (
          <div className="h-[60px] w-[60px] rounded-full border border-gray-500 bg-gray-50 p-0.5">
            <Image
              src={logoUrl}
              width={60}
              height={60}
              className="h-[60px] w-[60px] rounded-full"
              alt={`${title}`}
            />
          </div>
        ) : (
          <div className="rounded-full border border-gray-500 p-0.5">
            <Image
              src={logoUrl}
              width={40}
              height={40}
              className="rounded-full"
              alt={logoAlt}
            />
          </div>
        )}

        <div className="h-full w-[1px] bg-gray-800" />
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          {linkUrl ? (
            <a
              href={linkUrl}
              target="_blank"
              aria-label={title}
              className="text-sky-100 transition-colors hover:text-sky-500"
              rel="noreferrer"
            >
              {title}
            </a>
          ) : (
            <h4 className="text-gray-300">{title}</h4>
          )}
          {subtitle && <p className="text-gray-400">{subtitle}</p>}
          <span className="text-gray-500">{dateRange}</span>
          {description && <RichTextComponent lexicalData={description} />}
        </div>

        {additionalContent && <div className="mt-4">{additionalContent}</div>}
      </div>
    </motion.div>
  );
};

export default CardItem;
