import type { CollectionConfig } from 'payload';

export const Publications: CollectionConfig = {
  slug: 'publications',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'venue', 'publicationDate'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'abstract',
      type: 'richText',
    },
    {
      name: 'venue',
      type: 'text',
      required: true,
    },
    {
      name: 'publicationDate',
      type: 'date',
      required: true,
    },
    {
      name: 'authors',
      type: 'text',
      required: true,
    },
    {
      name: 'doiUrl',
      type: 'text',
    },
    {
      name: 'pdfUrl',
      type: 'text',
    },
    {
      name: 'githubUrl',
      type: 'text',
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
        },
      ],
    },
  ],
};
