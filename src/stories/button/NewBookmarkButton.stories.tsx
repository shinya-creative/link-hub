import type { Meta, StoryObj } from '@storybook/react';
import { NewBookmarkButton } from '@/components/NewBookmarkButton/NewBookmarkButton';

const meta = {
    title: 'Button/NewBookmarkButton',
    component: NewBookmarkButton,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        disabled: { control: 'boolean' },
        onClick: { action: 'clicked' },
        state: {
            control: 'select',
            options: ['default', 'hover'],
            description: 'Force a specific visual state',
        },
    },
} satisfies Meta<typeof NewBookmarkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const Hover: Story = {
    args: {
        state: 'hover',
    },
};

export const NonActive: Story = {
    args: {
        disabled: true,
    },
};
