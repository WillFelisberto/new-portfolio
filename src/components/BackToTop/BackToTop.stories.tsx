import { Meta, StoryObj } from '@storybook/react';
import BackToTop from '.';

const meta: Meta<typeof BackToTop> = {
  title: 'Components/BackToTop',
  component: BackToTop,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof BackToTop>;

export const Default: Story = {
  render: () => (
    <div style={{ height: '2000px', padding: '1rem' }}>
      <p>Scroll down to see the BackToTop button.</p>
      <BackToTop />
    </div>
  ),
};
