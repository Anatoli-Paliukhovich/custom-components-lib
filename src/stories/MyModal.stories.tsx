import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import MyModal from '../components/Modal/MyModal';
import MyButton from '../components/Button/MyButton';

const meta: Meta<typeof MyModal> = {
  title: 'Example/MyModal',
  component: MyModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
      <>
        <MyButton onClick={handleOpen}>Open modal</MyButton>
        <MyModal open={isOpen} onClose={handleClose}>
          <h2>Title of the modal</h2>
          <p>Content of the modal</p>
          <MyButton variant="outlined" onClick={handleClose}>
            Close Modal
          </MyButton>
        </MyModal>
      </>
    );
  },
};
