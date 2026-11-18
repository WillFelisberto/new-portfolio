import './globals.css';
import { Bricolage_Grotesque, Rubik, JetBrains_Mono } from 'next/font/google';
import type { Viewport } from 'next';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Toaster from '@/components/Toaster';
import BackToTop from '@/components/BackToTop';
import ContactForm from '@/components/ContactForm';
import { GoogleAnalytics } from '@/components/Header/google-analytics';

export const viewport: Viewport = {
  themeColor: '#150F23',
  width: 'device-width',
  initialScale: 1,
};

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
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL || 'https://www.willianfelisberto.com.br';

  return {
    metadataBase: new URL(baseUrl),
    title: 'Willian de Souza Felisberto | Senior Frontend & Edge AI Engineer',
    description:
      'Senior Frontend Developer & Edge AI Researcher with 7+ years of expertise in TypeScript, React, Next.js, Node.js, and TinyML. Proven track record in high-traffic e-commerce (+120% revenue) and embedded intelligence research at UFSC.',
    keywords: [
      'Senior Frontend Developer',
      'Edge AI',
      'TinyML',
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'ESP32',
      'TensorFlow Lite',
      'Compass.UOL',
      'UFSC',
      'Computer Vision',
      'Software Architecture',
    ],
    authors: [
      {
        name: 'Willian de Souza Felisberto',
        url: baseUrl,
      },
    ],
    creator: 'Willian de Souza Felisberto',
    publisher: 'Willian de Souza Felisberto',
    category: 'technology',
    classification: 'Portfolio',
    formatDetection: {
      telephone: false,
      date: false,
      email: false,
      address: false,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: '/',
    },
    openGraph: {
      siteName: 'Willian de Souza Felisberto Portfolio',
      title: 'Willian de Souza Felisberto | Senior Frontend & Edge AI Engineer',
      description:
        'Senior Frontend Developer & Edge AI Researcher with 7+ years of expertise in TypeScript, React, Next.js, Node.js, and TinyML.',
      url: baseUrl,
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

const knowledgeGraphSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://www.willianfelisberto.com.br/#website',
      url: 'https://www.willianfelisberto.com.br',
      name: 'Willian de Souza Felisberto | Portfolio',
      description:
        'Official portfolio of Senior Frontend Developer & Edge AI Researcher Willian de Souza Felisberto.',
      publisher: {
        '@id': 'https://www.willianfelisberto.com.br/#person',
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'ProfilePage',
      '@id': 'https://www.willianfelisberto.com.br/#profilepage',
      url: 'https://www.willianfelisberto.com.br',
      name: 'Willian de Souza Felisberto - Senior Frontend & Edge AI Engineer',
      isPartOf: {
        '@id': 'https://www.willianfelisberto.com.br/#website',
      },
      mainEntity: {
        '@id': 'https://www.willianfelisberto.com.br/#person',
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://www.willianfelisberto.com.br/#person',
      name: 'Willian de Souza Felisberto',
      alternateName: ['Willian Felisberto', 'Willian S. Felisberto'],
      url: 'https://www.willianfelisberto.com.br',
      image: 'https://www.willianfelisberto.com.br/images/will.jpg',
      jobTitle: 'Senior Frontend Developer & Edge AI Researcher',
      description:
        'Senior Frontend Developer & Edge AI Researcher with 7+ years of expertise in TypeScript, React, Next.js, Node.js, and TinyML.',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Santa Catarina',
        addressCountry: 'BR',
      },
      nationality: {
        '@type': 'Country',
        name: 'Brazil',
      },
      knowsLanguage: ['en', 'pt-BR'],
      worksFor: {
        '@type': 'Organization',
        name: 'Compass.UOL',
        sameAs: 'https://compass.uol/',
      },
      alumniOf: [
        {
          '@type': 'CollegeOrUniversity',
          name: 'Universidade Federal de Santa Catarina (UFSC)',
          sameAs: 'https://ufsc.br/',
        },
        {
          '@type': 'CollegeOrUniversity',
          name: 'Universidade do Extremo Sul Catarinense (UNESC)',
          sameAs: 'https://www.unesc.net/',
        },
      ],
      sameAs: [
        'https://www.linkedin.com/in/willianfelisberto/',
        'https://github.com/WillFelisberto',
        'https://ieeexplore.ieee.org/document/10850239',
      ],
      knowsAbout: [
        'Front-end Engineering',
        'React.js',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'Node.js',
        'Edge AI',
        'TinyML',
        'ESP32',
        'TensorFlow Lite for Microcontrollers',
        'Computer Vision',
        'E-commerce Architecture',
      ],
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Oracle Cloud Infrastructure 2024 Generative AI Certified Professional',
          credentialCategory: 'Professional Certification',
          recognizedBy: {
            '@type': 'Organization',
            name: 'Oracle',
          },
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Oracle Cloud Infrastructure 2024 Certified AI Foundations Associate',
          credentialCategory: 'Associate Certification',
          recognizedBy: {
            '@type': 'Organization',
            name: 'Oracle',
          },
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Oracle Cloud Infrastructure 2024 Certified Foundations Associate',
          credentialCategory: 'Foundations Certification',
          recognizedBy: {
            '@type': 'Organization',
            name: 'Oracle',
          },
        },
      ],
      publishingPrinciples: 'https://www.willianfelisberto.com.br/llms.txt',
    },
    {
      '@type': 'ScholarlyArticle',
      '@id': 'https://ieeexplore.ieee.org/document/10850239',
      name: 'Embedded TinyML for Driver Drowsiness Detection',
      headline: 'Embedded TinyML for Driver Drowsiness Detection',
      author: {
        '@id': 'https://www.willianfelisberto.com.br/#person',
      },
      publisher: {
        '@type': 'Organization',
        name: 'IEEE',
        sameAs: 'https://www.ieee.org/',
      },
      datePublished: '2024',
      url: 'https://ieeexplore.ieee.org/document/10850239',
      description:
        'Evaluation of embedded TinyML architectures (custom CNN and MobileNetV1) running at 14+ FPS on-device on ESP32-S3 for real-time driver drowsiness detection.',
    },
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(knowledgeGraphSchema),
          }}
        />
      </head>
      <body>
        <Toaster />
        <BackToTop />
        <Header />
        <GoogleAnalytics />
        <main id="main-content">{children}</main>
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
