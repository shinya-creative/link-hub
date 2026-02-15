import type { Meta, StoryObj } from '@storybook/react';
import type React from 'react';
import { vars } from '../../styles/theme.css';

type ButtonState = 'normal' | 'hover';
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  state?: ButtonState;
};

const Stub = ({ state = 'normal', style, ...rest }: ButtonProps) => {
  const iconColor = state === 'hover' ? '#E67274' : vars.colors.font;
  const visualStyles: React.CSSProperties = {
    background: state === 'hover' ? vars.colors.gray400 : vars.colors.gray300,
    color: iconColor,
    transition: 'background-color 120ms ease, transform 80ms ease, color 120ms ease',
  } as const;

  return (
    <button
      style={{
        display: 'inline-flex',
        width: '32px',
        height: '32px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: vars.radius.full,
        border: 'none',
        cursor: 'pointer',
        ...visualStyles,
        ...style,
      }}
      {...rest}
    >
      <span aria-hidden style={{ width: 16, height: 16, lineHeight: 0, display: 'inline-flex' }}>
        <svg
          width="14"
          height="17"
          viewBox="0 0 14 17"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
          focusable="false"
          style={{ display: 'block' }}
        >
          <path
            d="M4.375 0.5V1.38889H0V3.16667H0.875V14.7222C0.875 15.1937 1.05937 15.6459 1.38756 15.9793C1.71575 16.3127 2.16087 16.5 2.625 16.5H11.375C11.8391 16.5 12.2842 16.3127 12.6124 15.9793C12.9406 15.6459 13.125 15.1937 13.125 14.7222V3.16667H14V1.38889H9.625V0.5H4.375ZM2.625 3.16667H11.375V14.7222H2.625V3.16667ZM4.375 4.94444V12.9444H6.125V4.94444H4.375ZM7.875 4.94444V12.9444H9.625V4.94444H7.875Z"
            fill="currentColor"
          />
        </svg>
      </span>
    </button>
  );
};

const meta: Meta<typeof Stub> = {
  title: 'Icon/Delete',
  component: Stub,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    state: {
      control: { type: 'radio' },
      options: ['normal', 'hover'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Delete: Story = {
  args: {
    state: 'normal',
  },
};
