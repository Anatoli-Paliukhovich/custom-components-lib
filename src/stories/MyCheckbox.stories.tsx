import type { Meta, StoryObj } from '@storybook/react';
import MyCheckbox from '../Checkbox/MyCheckbox';

const meta: Meta<typeof MyCheckbox> = {
  title: 'Example/MyCheckbox',
  component: MyCheckbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['basic', 'disabled'],
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'Terms and Conditions',
    variant: 'basic',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    variant: 'disabled',
    disabled: true,
  },
};
