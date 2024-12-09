import { Meta, StoryObj } from '@storybook/react';
import KnownTech from '.';
import { FaReact, FaNodeJs } from 'react-icons/fa';

const meta: Meta<typeof KnownTech> = {
  title: 'Components/KnownTech',
  component: KnownTech,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof KnownTech>;

export const ReactTech: Story = {
  args: {
    tech: {
      name: 'React',
      icon: <FaReact size={24} color="#61DAFB" />,
    },
  },

  render: (args) => (
    <div style={{ maxWidth: '264px', padding: '1rem' }}>
      <KnownTech {...args} />
    </div>
  ),
};

export const NodeJsTech: Story = {
  args: {
    tech: {
      name: 'Node.js',
      icon: <FaNodeJs size={24} color="#68A063" />,
    },
  },

  render: (args) => (
    <div style={{ maxWidth: '264px', padding: '1rem' }}>
      <KnownTech {...args} />
    </div>
  ),
};
