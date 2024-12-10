import { Meta, StoryObj } from '@storybook/react';
import SectionTitle from '.';

const meta: Meta<typeof SectionTitle> = {
  title: 'Components/SectionTitle',
  component: SectionTitle,
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'Section Title',
    subtitle: 'Subtitle Example',
    className: '',
  },
};

export default meta;

type Story = StoryObj<typeof SectionTitle>;

export const Default: Story = {};

export const CustomClass: Story = {
  args: {
    className: 'text-center text-gray-500',
  },
};

export const LongText: Story = {
  args: {
    title: 'This is a much longer title to test how the component handles it',
    subtitle: 'A longer subtitle to test responsiveness and styles',
  },
};
