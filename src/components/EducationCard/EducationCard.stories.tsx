import { Meta, StoryObj } from '@storybook/react';
import EducationCard, { Education } from '.';

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
  title: 'University of Technology',
  description:
    'Studied advanced computer science topics, including algorithms, data structures, and machine learning.',
  educationLogo: {
    url: '/ufsc.jpg',
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
