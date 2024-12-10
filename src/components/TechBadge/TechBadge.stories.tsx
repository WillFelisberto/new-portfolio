import { Meta, StoryObj } from '@storybook/react';
import TechBadge from '.';

const meta: Meta<typeof TechBadge> = {
  title: 'Components/TechBadge',

  component: TechBadge,
} satisfies Meta<typeof TechBadge>;

export default meta;
type Story = StoryObj<typeof TechBadge>;

export const Default: Story = {
  args: {
    name: 'React',
    //👇 The args you need here will depend on your component
  },
};
