import { Meta, StoryObj } from '@storybook/react';
import Toaster from '.';
import toast from 'react-hot-toast';

const meta: Meta<typeof Toaster> = {
  title: 'Components/Toaster',
  component: Toaster,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: () => {
    // Função para disparar notificações de exemplo
    const triggerToast = () => {
      toast.success('This is a success message!');
      toast.error('This is an error message!');
    };

    return (
      <>
        <Toaster />
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button
            onClick={triggerToast}
            style={{
              padding: '10px 20px',
              background: '#0070f3',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Trigger Toast
          </button>
        </div>
      </>
    );
  },
};
