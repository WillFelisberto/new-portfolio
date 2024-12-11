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
            text: 'Studied advanced computer science topics, including algorithms, data structures, and machine learning.',
            type: 'text',
            version: 1,
          },
        ],
      },
    },
  },
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
