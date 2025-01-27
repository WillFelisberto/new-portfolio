import type { CollectionConfig } from 'payload';

export const Jobs: CollectionConfig = {
  slug: 'jobs',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: 'title', type: 'text', required: true, label: 'Job Title' },
    { name: 'company', type: 'text', required: true, label: 'Company Name' },
    { name: 'companySite', type: 'text', label: 'Company Site' },
    { name: 'location', type: 'text', required: true, label: 'Location' },
    { name: 'date', type: 'date', required: true, label: 'Applied Date' },
    { name: 'recruiter', type: 'text', label: 'Recruiter Name' },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'applied',
      options: [
        'applied',
        'interviewed',
        'offer',
        'hired',
        'rejected',
        'freezed',
      ],
      label: 'Status',
    },
    { name: 'jobDescription', type: 'textarea', label: 'Job Description' },
    {
      name: 'resume',
      type: 'upload',
      relationTo: 'media',
      label: 'Resume',
    },
  ],
};
