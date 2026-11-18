/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { About, Technology } from '@/app/(payload)/payload-types';
import Button from '@/components/Button';
import CMSIcon from '@/components/CmsIcon';
import RichTextComponent, { RichTextProps } from '@/components/RichText';
import TechBadge from '@/components/TechBadge';
import { motion } from 'framer-motion';

import Image from 'next/image';
import { HiArrowNarrowRight } from 'react-icons/hi';
import {
  WorkbenchTape,
  TactileWire,
  TinyMLOscilloscope,
} from '@/components/TactileIllustrations';

export type HeroSectionProps = {
  name: string;
  description: RichTextProps['lexicalData'];
  technologies: Technology[];
  imageUrl: string;
  imageAlt: string;
  social: About['social'];
};

const HeroSection = ({
  name,
  description,
  imageUrl,
  imageAlt,
  technologies,
  social,
}: HeroSectionProps) => {
  const handleContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="flex w-full flex-col justify-end py-32 pb-10 sm:pb-24 lg:min-h-[755px] lg:pb-[90px]">
      <div className="container flex flex-col-reverse items-start justify-between gap-12 lg:flex-row lg:items-end">
        <motion.div
          className="w-full lg:max-w-[560px]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="label-mono text-xs font-semibold uppercase tracking-label text-coral sm:text-sm">
              {"// HELLO WORLD, I'M"}
            </span>
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" />
          </div>

          <h1 className="font-display text-5xl font-extrabold leading-[1.05] text-ink sm:text-6xl">
            <span className="chip-hl">{name.split(' ')[0]}</span>{' '}
            {name.split(' ').slice(1).join(' ')}
          </h1>

          <div className="my-6 text-base text-muted sm:text-lg">
            <RichTextComponent lexicalData={description!} />
          </div>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[400px]">
            {technologies.map((tech, i) => (
              <TechBadge
                name={tech.name!}
                key={`intro-tech-${tech.name}`}
                transition={{ duration: 0.2, delay: i * 0.1 }}
              />
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6 lg:mt-10">
            <Button className="w-max" onClick={handleContact}>
              Get in touch
              <HiArrowNarrowRight size={18} />
            </Button>

            <div className="flex items-center gap-4 text-2xl text-muted">
              {social!.map((item: any, i: number) => (
                <a
                  key={i}
                  className="rounded-md border border-line bg-surface p-2 transition-all hover:-translate-y-0.5 hover:border-lime hover:text-lime"
                  href={item.url!}
                  target="_blank"
                  rel="noreferrer"
                >
                  <CMSIcon icon={item.icon!} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, rotate: 4 }}
          animate={{ opacity: 1, y: 0, rotate: 2 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex origin-center flex-col items-center lg:items-end"
        >
          <div className="relative">
            <span
              aria-hidden
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl border border-well bg-violet-electric"
            />
            {/* Workbench Tape: Top Right */}
            <WorkbenchTape
              color="coral"
              label="// SYS:OK"
              angle={12}
              className="absolute -right-3 -top-3 z-20"
            />
            {/* Workbench Tape: Bottom Right */}
            <WorkbenchTape
              color="lime"
              label="PIN #04"
              angle={-8}
              className="absolute -bottom-3 right-6 z-20"
            />

            {/* Tactile Wire: connecting from the Edge AI badge down along the card edge */}
            <TactileWire
              label="TEST POINT #01"
              className="absolute -left-6 top-0 z-20 sm:-left-7"
            />

            {/* Senior Dev // Edge AI Badge */}
            <span
              aria-hidden
              className="label-mono absolute -left-3 -top-4 z-30 -rotate-3 rounded-md border border-well bg-coral px-3 py-1.5 text-xs font-bold text-night shadow-chip"
            >
              SENIOR DEV // EDGE AI
            </span>

            {/* Available Badge */}
            <div className="label-mono absolute -bottom-3 -right-3 z-20 flex items-center gap-2 rounded-md border border-line bg-surface/95 px-3 py-1.5 text-xs text-ink shadow-tactile backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
              </span>
              <span>7+ YRS • AVAILABLE</span>
            </div>

            <Image
              width={420}
              height={404}
              className="relative h-[300px] w-[300px] rounded-xl border border-line object-cover shadow-card lg:h-[404px] lg:w-[420px]"
              src={imageUrl}
              alt={imageAlt}
            />

            {/* TinyML Benchtop Oscilloscope resting on the bottom-left corner of the presentation card */}
            <div className="absolute -bottom-10 -left-4 z-30 sm:-bottom-12 sm:-left-8">
              <TinyMLOscilloscope className="w-[210px] sm:w-[260px] lg:w-[290px]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
