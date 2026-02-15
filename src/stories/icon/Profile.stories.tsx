import type { Meta, StoryObj } from '@storybook/react';
import { Profile } from '../../components/Profile/Profile';

const meta = {
    title: 'Icon/Profile',
    component: Profile,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'radio',
            options: ['icon', 'initial'],
        },
        initial: {
            control: 'text',
        },
    },
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: 'icon',
    },
};

export const Initial: Story = {
    args: {
        variant: 'initial',
        initial: 'T',
    },
};
