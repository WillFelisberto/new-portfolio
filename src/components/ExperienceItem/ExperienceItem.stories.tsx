import { Meta, StoryObj } from '@storybook/react';
import ExperienceItem, { WorkExperience } from '.';

const meta: Meta<typeof ExperienceItem> = {
  title: 'Components/ExperienceItem',
  component: ExperienceItem,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof ExperienceItem>;

const mockExperience: WorkExperience = {
  companyLogo: {
    url: '/ufsc.jpg',
  },
  role: 'Software Engineer',
  companyName: 'TechCorp',
  companyUrl: 'https://techcorp.com',
  startDate: '2020-01-01',
  endDate: '2023-01-01',
  technologies: [
    { name: 'React' },
    { name: 'Node.js' },
    { name: 'TypeScript' },
  ],
  description: {
    lexicalData: {
      root: {
        direction: 'ltr',
        format: '',
        indent: 0,
        type: 'root',
        version: 1,
        children: [
          {
            detail: 0,
            format: 0,
            mode: 'normal',
            style: '',
            text: 'Developed and maintained scalable web applications.',
            type: 'text',
            version: 1,
          },
        ],
      },
    },
  },
};

export const Default: Story = {
  args: {
    experience: mockExperience,
  },
};
