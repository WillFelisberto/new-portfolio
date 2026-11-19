'use client';

import { Certification } from '@/app/(payload)/payload-types';
import SectionTitle from '@/components/SectionTitle';
import { motion } from 'framer-motion';
import { HiExternalLink } from 'react-icons/hi';
import { TbCertificate } from 'react-icons/tb';
import { trackEvent } from '@/lib/analytics';

type CertificationsSectionProps = {
  certifications: Certification[];
  title?: string;
  subtitle?: string;
};

export const CertificationsSection = ({
  certifications,
  title = 'Licenses & Certifications',
  subtitle = 'credentials',
}: CertificationsSectionProps) => {
  if (!certifications || certifications.length === 0) return null;

  return (
    <section className="container flex flex-col gap-10 py-16 md:flex-row md:gap-4 lg:gap-16">
      <div className="max-w-[420px]">
        <SectionTitle subtitle={subtitle} title={title} />
        <p className="mt-6 text-muted">
          Official industry certifications validating expertise in Oracle Cloud
          Infrastructure, Artificial Intelligence Agents, and enterprise cloud
          architecture.
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-4">
        {certifications.map((cert, i) => {
          const date = new Date(cert.issueDate);
          const formattedDate = date.toLocaleDateString('en-US', {
            month: 'short',
            year: 'numeric',
          });

          return (
            <motion.div
              key={cert.id || cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="card-tactile card-tactile-interactive flex flex-col justify-between gap-4 rounded-xl p-5 sm:flex-row sm:items-center sm:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-line bg-raised text-coral shadow-chip">
                  <TbCertificate size={26} />
                </div>

                <div>
                  <h3 className="font-display text-base font-bold text-ink sm:text-lg">
                    {cert.title}
                  </h3>
                  <p className="label-mono mt-0.5 text-xs text-dim">
                    {cert.issuer} • Issued {formattedDate}
                  </p>
                  {cert.skills && (
                    <p className="mt-2 text-xs text-muted">
                      <span className="font-medium text-dim">Skills:</span>{' '}
                      {cert.skills}
                    </p>
                  )}
                </div>
              </div>

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Verify ${cert.title}`}
                  onClick={() =>
                    trackEvent('certification_click', {
                      title: cert.title,
                      issuer: cert.issuer,
                      url: cert.credentialUrl!,
                    })
                  }
                  className="flex shrink-0 items-center gap-1.5 self-start rounded-md border border-line bg-surface px-3 py-1.5 font-mono text-xs font-semibold text-muted transition-all hover:-translate-y-0.5 hover:border-lime hover:text-lime sm:self-center"
                >
                  <span>Verify</span>
                  <HiExternalLink size={14} />
                </a>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
