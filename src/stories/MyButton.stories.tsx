import type { Meta, StoryObj } from '@storybook/react';
import MyButton from '../components/Button/MyButton';

const meta: Meta<typeof MyButton> = {
  title: 'Example/MyButton',
  component: MyButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['text', 'contained', 'outlined'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ContainedButton: Story = {
  args: {
    color: 'rgb(255, 255, 255)',
    children: 'Click',
    variant: 'contained',
    size: 'medium',
    disabled: false,
  },
};

export const OutlinedButton: Story = {
  args: {
    color: 'rgb(25, 118, 210)',
    children: 'Click',
    variant: 'outlined',
    size: 'small',
    disabled: false,
  },
};

export const TextButton: Story = {
  args: {
    color: 'rgb(25, 118, 210)',
    children: 'Click',
    variant: 'text',
    size: 'large',
    disabled: false,
  },
};
