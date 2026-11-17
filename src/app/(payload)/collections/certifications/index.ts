import type { CollectionConfig } from 'payload';

export const Certifications: CollectionConfig = {
  slug: 'certifications',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'issuer', 'issueDate'],
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
      name: 'issuer',
      type: 'text',
      required: true,
    },
    {
      name: 'issueDate',
      type: 'date',
      required: true,
    },
    {
      name: 'expirationDate',
      type: 'date',
    },
    {
      name: 'credentialId',
      type: 'text',
    },
    {
      name: 'credentialUrl',
      type: 'text',
    },
    {
      name: 'certificateLogo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'skills',
      type: 'text',
    },
  ],
};
