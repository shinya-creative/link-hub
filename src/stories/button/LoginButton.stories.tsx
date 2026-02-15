import type { Meta, StoryObj } from '@storybook/react';
import LoginButton from '@/components/LoginButton';

const meta = {
    title: 'Button/LoginButton',
    component: LoginButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        disabled: {
            control: 'boolean',
            description: 'ボタンの無効化状態',
        },
        onClick: {
            action: 'clicked',
            description: 'クリック時のコールバック',
        },
    },
} satisfies Meta<typeof LoginButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// デフォルト状態
export const Default: Story = {
    args: {
        disabled: false,
    },
};

// 無効状態
export const Disabled: Story = {
    args: {
        disabled: true,
    },
};
