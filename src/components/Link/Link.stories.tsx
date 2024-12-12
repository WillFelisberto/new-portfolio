import { Meta, StoryFn } from '@storybook/react';
import Link from '.';

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    className: { control: 'text' },
    children: { control: 'text' },
    href: { control: 'text' },
  },
} satisfies Meta;

const Template: StoryFn<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: 'https://example.com',
  children: 'Default Link',
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  href: 'https://example.com',
  children: 'Link with Custom Class',
  className: 'text-red-500',
};
