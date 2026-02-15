import type { Meta, StoryObj } from '@storybook/react';
import { VisibilityToggle } from '../../components/VisibilityToggle/VisibilityToggle';
import { useState } from 'react';

const meta = {
    title: 'Icon/VisibilityToggle',
    component: VisibilityToggle,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        isVisible: {
            control: 'boolean',
            description: 'Controls the visibility state of the icon',
        },
        onToggle: { action: 'toggled' },
    },
} satisfies Meta<typeof VisibilityToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        isVisible: false,
    },
};

export const Visible: Story = {
    args: {
        isVisible: true,
    },
};

export const Interactive = () => {
    const [visible, setVisible] = useState(false);
    return (
        <VisibilityToggle
            isVisible={visible}
            onToggle={() => setVisible(!visible)}
        />
    );
};
