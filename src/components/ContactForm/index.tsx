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
      className="flex items-center justify-center bg-gray-950 px-6 py-16 md:py-32"
      id="contact"
    >
      <div className="mx-auto w-full max-w-[420px]">
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
            className="h-14 w-full rounded-lg bg-gray-800 p-4 text-gray-50 ring-sky-600 placeholder:text-gray-400 focus:outline-none focus:ring-2"
            {...register('name')}
          />
          <input
            placeholder="E-mail"
            type="email"
            className="h-14 w-full rounded-lg bg-gray-800 p-4 text-gray-50 ring-sky-600 placeholder:text-gray-400 focus:outline-none focus:ring-2"
            {...register('email')}
          />
          <textarea
            placeholder={LabelMensagem}
            className="h-[138px] w-full resize-none rounded-lg bg-gray-800 p-4 text-gray-50 ring-sky-600 placeholder:text-gray-400 focus:outline-none focus:ring-2"
            {...register('message')}
            maxLength={500}
          />

          <div className="relative mx-auto mt-6 w-max">
            <Button className="relative z-[2]" disabled={isSubmitting}>
              {button}
              <HiArrowNarrowRight size={18} />
            </Button>
            <div className="absolute inset-0 bg-sky-600 opacity-20 blur-2xl" />
          </div>
        </motion.form>
      </div>
    </section>
  );
};
export default ContactForm;
