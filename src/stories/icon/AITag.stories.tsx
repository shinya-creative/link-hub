import type { Meta, StoryObj } from '@storybook/react';
import { AITag } from '../../components/AITag/AITag';

const meta = {
    title: 'Icon/AITag',
    component: AITag,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        state: {
            control: 'radio',
            options: ['default', 'hover', 'active'],
            description: 'Force a specific state for demonstration'
        },
    },
} satisfies Meta<typeof AITag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        state: 'default'
    }
};

export const Hover: Story = {
    args: {
        state: 'hover'
    }
};

export const Active: Story = {
    args: {
        state: 'active'
    }
};
