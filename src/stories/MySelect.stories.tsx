import type { Meta, StoryObj } from '@storybook/react';
import MySelect from '../components/Select/MySelect';
import React from 'react';
const meta: Meta<typeof MySelect> = {
  title: 'Example/MySelect',
  component: MySelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
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

export const Basic: Story = {
  args: {
    label: 'Age',
    error: false,
    helperText: '',
    children: (
      <>
        <option value="option1">18</option>
        <option value="option2">33</option>
        <option value="option3">60</option>
      </>
    ),
  },
};

export const Error: Story = {
  args: {
    label: 'Name',
    error: true,
    helperText: 'Error...',
    children: (
      <>
        <option value="option1">Peter</option>
        <option value="option2">Anna</option>
        <option value="option3">Sam</option>
      </>
    ),
  },
};
