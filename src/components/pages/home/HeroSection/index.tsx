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
          <h2 className="font-display text-5xl font-extrabold leading-[1.05] sm:text-6xl">
            <span className="sr-only">Hello, my name is </span>
            <span className="chip-hl">{name.split(' ')[0]}</span>{' '}
            {name.split(' ').slice(1).join(' ')}
          </h2>

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
          className="relative origin-center"
        >
          <span
            aria-hidden
            className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl border border-well bg-violet-electric"
          />
          <span
            aria-hidden
            className="label-mono absolute -left-3 -top-4 z-10 -rotate-6 rounded-md border border-well bg-coral px-3 py-1.5 text-night shadow-chip"
          >
            Hello, my name is
          </span>
          <Image
            width={420}
            height={404}
            className="relative h-[300px] w-[300px] rounded-xl border border-line object-cover shadow-card lg:h-[404px] lg:w-[420px]"
            src={imageUrl}
            alt={imageAlt}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
