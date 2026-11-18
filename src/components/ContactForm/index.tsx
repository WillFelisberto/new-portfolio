'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import SectionTitle from '../SectionTitle';
import Button from '../Button';
import {
  WorkbenchTape,
  EmptyStateProbeRobot,
} from '@/components/TactileIllustrations';
import { fadeUpAnimation } from '@/lib/animations';

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

type ContactFormType = {
  title: string;
  subtitle: string;
  button: string;
  labelName: string;
  LabelMensagem: string;
  successMessage: string;
  errorMessage: string;
};

const ContactForm = ({
  title,
  subtitle,
  button,
  labelName,
  LabelMensagem,
  successMessage,
  errorMessage,
}: ContactFormType) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await axios.post('/api/contact', data);
      toast.success(successMessage);
      reset();
    } catch {
      toast.error(errorMessage);
    }
  };

  return (
    <section
      className="flex items-center justify-center border-t border-line bg-well/60 px-6 py-16 md:py-32"
      id="contact"
    >
      <div className="relative mx-auto w-full max-w-[420px]">
        {/* Robot Probe perched on the top-right corner of the contact form */}
        <div className="absolute -top-24 right-0 z-20 hidden sm:block">
          <EmptyStateProbeRobot
            size="sm"
            symbol="✉"
            statusBadge="// TRANSMISSION: READY"
          />
        </div>

        <WorkbenchTape
          color="lime"
          label="// DISPATCH MSG"
          angle={-2}
          className="absolute -top-7 right-4 z-10"
        />
        <SectionTitle
          subtitle={subtitle}
          title={title}
          className="items-center text-center"
        />
        <motion.form
          className="mt-12 flex w-full flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
          {...fadeUpAnimation}
        >
          <input
            placeholder={labelName}
            className="h-14 w-full rounded-lg border border-line bg-surface p-4 text-ink shadow-[inset_0_2px_0_rgba(0,0,0,0.35)] transition-colors placeholder:text-dim hover:border-violet focus:border-lime focus:outline-none focus:ring-2 focus:ring-lime/40"
            {...register('name')}
          />
          <input
            placeholder="E-mail"
            type="email"
            className="h-14 w-full rounded-lg border border-line bg-surface p-4 text-ink shadow-[inset_0_2px_0_rgba(0,0,0,0.35)] transition-colors placeholder:text-dim hover:border-violet focus:border-lime focus:outline-none focus:ring-2 focus:ring-lime/40"
            {...register('email')}
          />
          <textarea
            placeholder={LabelMensagem}
            className="h-[138px] w-full resize-none rounded-lg border border-line bg-surface p-4 text-ink shadow-[inset_0_2px_0_rgba(0,0,0,0.35)] transition-colors placeholder:text-dim hover:border-violet focus:border-lime focus:outline-none focus:ring-2 focus:ring-lime/40"
            {...register('message')}
            maxLength={500}
          />

          <div className="mx-auto mt-6 w-max">
            <Button type="submit" disabled={isSubmitting}>
              {button}
              <HiArrowNarrowRight size={18} />
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};
export default ContactForm;
