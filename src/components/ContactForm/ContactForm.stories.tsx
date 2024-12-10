import { Meta, StoryObj } from '@storybook/react';
import ContactForm from '.';

const meta: Meta<typeof ContactForm> = {
  title: 'Components/ContactForm',
  component: ContactForm,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'Contact Us',
    subtitle: 'We would love to hear from you',
    button: 'Send Message',
    labelName: 'Your Name',
    LabelMensagem: 'Your Message',
    successMessage: 'Message sent successfully!',
    errorMessage: 'Failed to send the message. Please try again later.',
  },
};

export default meta;

type Story = StoryObj<typeof ContactForm>;

export const Default: Story = {};
