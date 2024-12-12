import './globals.css';
import { Inter, IBM_Plex_Mono, Source_Code_Pro } from 'next/font/google';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Toaster from '@/components/Toaster';
import BackToTop from '@/components/BackToTop';
import ContactForm from '@/components/ContactForm';
import { GoogleAnalytics } from '@/components/Header/google-analytics';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  preload: false,
});

const codePro = Source_Code_Pro({
  variable: '--codePro',
  subsets: ['latin'],
  preload: false,
});

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
  preload: false,
});
export async function generateMetadata() {
  return {
    title: 'Portfolio Willian de Souza Felisberto',
    description:
      'Experienced Front-end Developer with 5+ years of expertise in Javascript, NodeJs, React, HTML, CSS, and Docker. Currently at Compass.UOL, maintaining a B2C e-commerce platform, with previous experience in B2B e-commerce. Committed to delivering exceptional user experiences and staying updated on web development trends.',
    keywords:
      'Front-end Developer, Javascript, NodeJs, React, HTML, CSS, Docker, Compass.UOL, B2B e-commerce, B2C e-commerce, User Experience, Web Development',
    openGraph: {
      siteName: 'Portfolio Willian de Souza Felisberto',
      title: 'Portfolio Willian de Souza Felisberto',
      description:
        'Experienced Front-end Developer with 5+ years of expertise in Javascript, NodeJs, React, HTML, CSS, and Docker. Currently at Compass.UOL, maintaining a B2C e-commerce platform, with previous experience in B2B e-commerce. Committed to delivering exceptional user experiences and staying updated on web development trends.',
      url: 'https://www.linkedin.com/in/willianfelisberto/',
      type: 'website',
      images: [
        {
          url: '/images/will.jpg', // Replace with the actual URL of your Open Graph image
          width: 1200,
          height: 630,
          alt: 'Willian de Souza Felisberto',
        },
      ],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plexMono.variable} ${codePro.variable}`}
    >
      <body>
        <Toaster />
        <BackToTop />
        <Header />
        <GoogleAnalytics />
        {children}
        <ContactForm
          title="Contact Us"
          subtitle="We would love to hear from you"
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
