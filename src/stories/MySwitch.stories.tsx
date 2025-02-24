import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import MySwitch from '@/components/Switch/MySwitch';

const meta: Meta<typeof MySwitch> = {
  title: 'Example/MySwitch',
  component: MySwitch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: {
        type: 'boolean',
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

export const DefaultSwitch: Story = {
  args: {
    checked: false,
    disabled: false,
  },
  render: args => {
    const [checked, setChecked] = useState(args.checked);

    const handleChange = (newChecked: boolean) => {
      setChecked(newChecked);
    };

    return <MySwitch {...args} checked={checked} onChange={handleChange} />;
  },
};

export const CheckedSwitch: Story = {
  args: {
    checked: false,
    disabled: false,
  },
  render: args => {
    const [checked, setChecked] = useState(args.checked);

    const handleChange = (newChecked: boolean) => {
      setChecked(newChecked);
    };

    return <MySwitch {...args} checked={checked} onChange={handleChange} />;
  },
};

export const DisabledSwitch: Story = {
  args: {
    checked: false,
    disabled: true,
  },
  render: args => {
    const [checked, setChecked] = useState(args.checked);

    const handleChange = (newChecked: boolean) => {
      setChecked(newChecked);
    };

    return <MySwitch {...args} checked={checked} onChange={handleChange} />;
  },
};
