import type { CollectionConfig } from 'payload';

export const WorkExperience: CollectionConfig = {
  slug: 'workexperience',
  labels: {
    plural: 'Work Experiences',
    singular: 'Work Experience',
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'companyName',
  },
  fields: [
    {
      name: 'companyName',
      type: 'text',
    },
    {
      name: 'companyLogo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'companyUrl',
      type: 'text',
    },
    {
      name: 'role',
      type: 'text',
    },
    {
      name: 'startDate',
      type: 'date',
    },
    {
      name: 'endDate',
      type: 'date',
    },
    {
      name: 'technologies',
      type: 'relationship',
      relationTo: 'technologies',
      hasMany: true,
    },
    {
      name: 'description',
      type: 'richText',
    },
  ],
};
