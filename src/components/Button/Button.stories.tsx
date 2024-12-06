import { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      control: 'text',
      description: 'Texto ou conteúdo dentro do botão.',
      defaultValue: 'Click me!',
    },
    onClick: { action: 'clicked' },
    className: {
      control: 'text',
      description: 'Classes CSS adicionais para estilização personalizada.',
    },
    disabled: {
      control: 'boolean',
      description: 'Desativa o botão.',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Click me!',
    className: '',
    disabled: false,
  },
};

export const WithCustomClass: Story = {
  args: {
    children: 'Custom Class Button',
    className: 'bg-red-500 hover:bg-red-400',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <span>Icon Button</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25a2.25 2.25 0 10-4.5 0V9m-6 0h15M4.5 9h15M4.5 15.75h15m-15 0h15M4.5 20.25h15m-15 0h15M4.5 15.75h15m-15 0H7.5"
          />
        </svg>
      </>
    ),
  },
};
