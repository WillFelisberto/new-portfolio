import './globals.css';
import { Bricolage_Grotesque, Rubik, JetBrains_Mono } from 'next/font/google';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Toaster from '@/components/Toaster';
import BackToTop from '@/components/BackToTop';
import ContactForm from '@/components/ContactForm';
import { GoogleAnalytics } from '@/components/Header/google-analytics';

const display = Bricolage_Grotesque({
  variable: '--font-display',
  subsets: ['latin'],
  display: 'swap',
});

const body = Rubik({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
});

const mono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

export async function generateMetadata() {
  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_APP_URL || 'https://www.willianfelisberto.com.br',
    ),
    title: 'Willian de Souza Felisberto | Senior Frontend & Edge AI Engineer',
    description:
      'Senior Frontend Developer & Edge AI Researcher with 7+ years of expertise in TypeScript, React, Next.js, Node.js, and TinyML. Proven track record in high-traffic e-commerce (+120% revenue) and embedded intelligence research at UFSC.',
    keywords:
      'Senior Frontend Developer, Edge AI, TinyML, React, Next.js, TypeScript, Node.js, ESP32, Compass.UOL, UFSC, Computer Vision, Software Architecture',
    authors: [
      {
        name: 'Willian de Souza Felisberto',
        url: 'https://www.willianfelisberto.com.br',
      },
    ],
    creator: 'Willian de Souza Felisberto',
    alternates: {
      canonical: '/',
    },
    openGraph: {
      siteName: 'Willian de Souza Felisberto Portfolio',
      title: 'Willian de Souza Felisberto | Senior Frontend & Edge AI Engineer',
      description:
        'Senior Frontend Developer & Edge AI Researcher with 7+ years of expertise in TypeScript, React, Next.js, Node.js, and TinyML.',
      url: 'https://www.willianfelisberto.com.br',
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: '/images/will.jpg',
          width: 800,
          height: 800,
          alt: 'Willian de Souza Felisberto',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Willian de Souza Felisberto | Senior Frontend & Edge AI Engineer',
      description:
        'Senior Frontend Developer & Edge AI Researcher with 7+ years of expertise in TypeScript, React, Next.js, Node.js, and TinyML.',
      images: ['/images/will.jpg'],
    },
  };
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Willian de Souza Felisberto',
  url: 'https://www.willianfelisberto.com.br',
  image: 'https://www.willianfelisberto.com.br/images/will.jpg',
  jobTitle: 'Senior Frontend Developer & Edge AI Researcher',
  worksFor: {
    '@type': 'Organization',
    name: 'Compass.UOL',
  },
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'Federal University of Santa Catarina',
      sameAs: 'https://ufsc.br/',
    },
  ],
  sameAs: [
    'https://www.linkedin.com/in/willianfelisberto/',
    'https://github.com/WillFelisberto',
  ],
  knowsAbout: [
    'Front-end Development',
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Edge AI',
    'TinyML',
    'ESP32',
    'Computer Vision',
    'E-commerce Engineering',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>
        <Toaster />
        <BackToTop />
        <Header />
        <GoogleAnalytics />
        {children}
        <ContactForm
          title="Contact Us"
          subtitle="I would love to hear from you"
          button="Send Message"
          labelName="Your Name"
          LabelMensagem="Your Message"
          successMessage="Message sent successfully!"
          errorMessage="Failed to send the message. Please try again later."
        />
        <Footer textFooterBy="by" textFooterMade="Made with" />
      </body>
    </html>
  );
}
