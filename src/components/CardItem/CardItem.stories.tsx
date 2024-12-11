import { Meta, StoryObj } from '@storybook/react';
import CardItem from '.';

const meta: Meta<typeof CardItem> = {
  title: 'Components/CardItem',
  component: CardItem,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof CardItem>;

export const EducationExample: Story = {
  args: {
    logoUrl: '/ufsc.jpg',
    logoAlt: 'Education Logo',
    title: 'Computer Science',
    subtitle: 'Bachelor of Science',
    dateRange: 'Jan 2015 • Dec 2019 • (4 years)',
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
              text: 'Description',
              type: 'text',
              version: 1,
            },
          ],
        },
      },
    },
    linkUrl: 'https://university.edu',
    linkText: 'University Name',
  },
};

export const ExperienceExample: Story = {
  args: {
    logoUrl: '/ufsc.jpg',
    logoAlt: 'Company Logo',
    title: 'Company Name',
    subtitle: 'Software Engineer',
    dateRange: 'Feb 2020 • Present • (3 years)',
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
              text: 'Description',
              type: 'text',
              version: 1,
            },
          ],
        },
      },
    },
    linkUrl: 'https://company.com',
    linkText: '@ Company Name',
    additionalContent: (
      <div>
        <p className="mb-3 mt-6 text-sm font-semibold text-gray-400">Skills</p>
        <div className="mb-8 flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[350px]">
          <span className="rounded bg-gray-600 px-2 py-1 text-white">
            React
          </span>
          <span className="rounded bg-gray-600 px-2 py-1 text-white">
            Node.js
          </span>
        </div>
      </div>
    ),
  },
};
