import { Meta, StoryObj } from '@storybook/react';
import Divider from '.';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    className: '',
  },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {};

export const WithCustomStyles: Story = {
  args: {
    className: 'border-b-red-500', // Exemplo de personalização
  },
};
