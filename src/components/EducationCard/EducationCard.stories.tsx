import { Meta, StoryObj } from '@storybook/react';
import EducationCard from '.';
import { Education } from '@/app/(payload)/payload-types';

const meta: Meta<typeof EducationCard> = {
  title: 'Components/EducationCard',
  component: EducationCard,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof EducationCard>;

const mockEducation: Education = {
  id: '1',
  createdAt: '2022-01-01',
  updatedAt: '2022-01-01',
  title: 'University of Technology',
  description: {
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
          text: 'Studied advanced computer science topics, including algorithms, data structures, and machine learning.',
          type: 'text',
          version: 1,
        },
      ],
    },
  },
  educationLogo: {
    url: '/ufsc.jpg',
    id: 'sadas',
    createdAt: '2022-01-01',
    updatedAt: '2022-01-01',
  },
  url: 'https://university.tech',
  startDate: '2018-01-01',
  endDate: '2022-01-01',
  courseName: 'Computer Science',
};

export const Default: Story = {
  args: {
    education: mockEducation,
  },
};
