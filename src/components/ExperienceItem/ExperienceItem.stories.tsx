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
  description: 'Developed and maintained scalable web applications.',
};

export const Default: Story = {
  args: {
    experience: mockExperience,
  },
};
