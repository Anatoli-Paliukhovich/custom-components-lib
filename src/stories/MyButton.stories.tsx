import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import MyButton from '../Button/MyButton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/MyButton',
  component: MyButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof MyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    color: 'red',
    children: 'Какой то текст',
  },
};

export const Secondary: Story = {
  args: {
    color: 'orange',
    children: 'Какой то текст',
  },
};
