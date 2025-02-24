import type { Meta, StoryObj } from '@storybook/react';
import MyInput from '../components/Input/MyInput';

const meta: Meta<typeof MyInput> = {
  title: 'Example/MyInput',
  component: MyInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['outlined', 'standard', 'filled'],
      },
    },
    error: {
      control: {
        type: 'boolean',
      },
    },
    helperText: {
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  args: {
    label: 'Outlined',
    variant: 'outlined',
    error: false,
    helperText: '',
  },
};

export const Standard: Story = {
  args: {
    label: 'Standard',
    variant: 'standard',
    error: false,
    helperText: '',
  },
};

export const Filled: Story = {
  args: {
    label: 'Filled',
    variant: 'filled',
    error: false,
    helperText: '',
  },
};

export const Error: Story = {
  args: {
    label: 'Error',
    variant: 'outlined',
    error: true,
    helperText: 'Error...',
  },
};
