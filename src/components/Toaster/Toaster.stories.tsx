import { Meta, StoryObj } from '@storybook/react';
import Toaster from '.';
import toast from 'react-hot-toast';
import Button from '../Button';

const meta: Meta<typeof Toaster> = {
  title: 'Components/Toaster',
  component: Toaster,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Toaster>;

export default meta;

type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: () => {
    const triggerToast = () => {
      toast.success('Message sent successfully!');
      toast.error('Failed to send the message.');
    };

    return (
      <div className="flex flex-col items-center justify-center gap-4 p-8">
        <Toaster />
        <Button onClick={triggerToast}>Trigger Toasts</Button>
      </div>
    );
  },
};
