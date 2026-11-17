import { Meta, StoryObj } from '@storybook/react';
import EmptyState from '.';

const meta: Meta<typeof EmptyState> = {
  title: 'Components/EmptyState',
  component: EmptyState,
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const NoProjects: Story = {
  args: {
    title: 'No projects here yet',
    description:
      'The workbench is empty for now. New builds are on the way — check back soon.',
    actionLabel: 'Back to Home',
    actionHref: '/',
  },
};
