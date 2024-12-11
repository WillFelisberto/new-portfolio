'use client';

import Button from '@/components/Button';
import CMSIcon from '@/components/CmsIcon';
import RichTextComponent, { DescriptionType } from '@/components/RichText';
import TechBadge from '@/components/TechBadge';
import { motion } from 'motion/react';
import Image from 'next/image';
import { HiArrowNarrowRight } from 'react-icons/hi';

export type HeroSectionProps = {
  name: string;
  description: DescriptionType;
  technologies: { name: string }[];
  imageUrl: string;
  imageAlt: string;
  social: {
    name: string;
    url: string;
    icon: string;
  }[];
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
    <section className="flex w-full flex-col justify-end bg-hero-image bg-cover bg-center bg-no-repeat py-32 pb-10 sm:pb-32 lg:h-[755px] lg:pb-[110px]">
      <div className="container flex flex-col-reverse items-start justify-between lg:flex-row">
        <motion.div
          className="w-full lg:max-w-[530px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-sky-400">Hello, my name is</p>
          <h2 className="mt-2 text-4xl font-medium">{name}</h2>

          <div className="my-6 text-sm text-gray-400 sm:text-base">
            <RichTextComponent lexicalData={description} />
          </div>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {technologies.map((tech, i) => (
              <TechBadge
                name={tech.name}
                key={`intro-tech-${tech.name}`}
                // {...techBadgeAnimation}
                transition={{ duration: 0.2, delay: i * 0.1 }}
              />
            ))}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-5 lg:mt-10">
            <Button className="shadow-button w-max" onClick={handleContact}>
              Get in touch
              <HiArrowNarrowRight size={18} />
            </Button>

            <div className="flex h-20 items-center gap-3 text-2xl text-gray-600">
              {social.map((item, i: number) => (
                <a
                  key={i}
                  className="transition-colors hover:text-gray-100"
                  href={item.url}
                  target="_blank"
                >
                  <CMSIcon icon={item.icon} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 200, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className="origin-center"
        >
          <Image
            width={420}
            height={404}
            className="mb-6 h-[300px] w-[300px] rounded-lg object-cover shadow-2xl lg:mb-0 lg:h-[404px] lg:w-[420px]"
            src={imageUrl}
            alt={imageAlt}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
