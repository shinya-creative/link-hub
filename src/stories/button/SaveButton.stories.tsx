import type { Meta, StoryObj } from '@storybook/react';
import { SaveButton } from '@/components/SaveButton/SaveButton';

const meta = {
    title: 'Button/SaveButton',
    component: SaveButton,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary'],
        },
        size: {
            control: 'select',
            options: ['medium', 'small'],
        },
        disabled: { control: 'boolean' },
        onClick: { action: 'clicked' },
        children: { control: 'text' },
    },
} satisfies Meta<typeof SaveButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary (Save)
export const Save: Story = {
    args: {
        variant: 'primary',
        size: 'medium',
        children: '変更を保存',
    },
};

// Primary (Create)
export const Create: Story = {
    args: {
        variant: 'primary',
        size: 'small',
        children: '作成',
    },
};

// Primary (Update)
export const Update: Story = {
    args: {
        variant: 'primary',
        size: 'small',
        children: '更新する',
    },
};

// Secondary (Change Password)
export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'パスワードを変更',
    },
};

// Disabled Example
export const PrimaryDisabled: Story = {
    args: {
        variant: 'primary',
        children: '変更を保存',
        disabled: true,
    },
};
