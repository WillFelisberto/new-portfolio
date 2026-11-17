'use client';

import { Toaster as ToasterProvider } from 'react-hot-toast';

const baseStyle = {
  color: '#150F23',
  border: '1px solid #0B0716',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4), 0 3px 0 0 #0B0716',
  fontFamily: 'var(--font-mono)',
  fontSize: '0.75rem',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.08em',
};

const Toaster = () => {
  return (
    <ToasterProvider
      position="bottom-center"
      toastOptions={{
        success: {
          style: { ...baseStyle, background: '#C2EF4E' },
          iconTheme: {
            primary: '#150F23',
            secondary: '#C2EF4E',
          },
        },
        error: {
          style: { ...baseStyle, background: '#FF6B6B' },
          iconTheme: {
            primary: '#150F23',
            secondary: '#FF6B6B',
          },
        },
      }}
    />
  );
};

export default Toaster;
