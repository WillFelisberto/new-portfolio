import { Meta, StoryObj } from '@storybook/react';
import CardItem from '.';

const meta: Meta<typeof CardItem> = {
  title: 'Components/CardItem',

  component: CardItem,
} satisfies Meta<typeof CardItem>;

export default meta;
type Story = StoryObj<typeof CardItem>;

export const Default: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
