import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Willian de Souza Felisberto | Senior Frontend & Edge AI Engineer',
    short_name: 'Willian Felisberto',
    description:
      'Portfolio of Willian de Souza Felisberto - Senior Frontend & Edge AI Engineer.',
    start_url: '/',
    display: 'standalone',
    background_color: '#150F23',
    theme_color: '#150F23',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
