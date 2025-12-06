import type { Meta, StoryObj } from '@storybook/react';
import type React from 'react';
import { vars } from '../../styles/theme.css';

type ButtonState = 'normal' | 'hover';
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  state?: ButtonState;
};

const Stub = ({ state = 'normal', style, ...rest }: ButtonProps) => {
  const iconColor = state === 'hover' ? vars.colors.strongFont : vars.colors.font;
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
        borderRadius: vars.radii.full,
        border: 'none',
        cursor: 'pointer',
        ...visualStyles,
        ...style,
      }}
      {...rest}
    >
      <span aria-hidden style={{ width: 16, height: 16, lineHeight: 0, display: 'inline-flex' }}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
          focusable="false"
          style={{ display: 'block' }}
        >
          <path
            d="M15.74 3.59283C16.0867 3.24622 16.0867 2.66852 15.74 2.33967L13.6603 0.259964C13.3315 -0.0866546 12.7538 -0.0866546 12.4072 0.259964L10.7718 1.8864L14.1047 5.21927M0 12.6671V16H3.33287L13.1626 6.16137L9.82975 2.8285L0 12.6671Z"
            fill="currentColor"
          />
        </svg>
      </span>
    </button>
  );
};

const meta: Meta<typeof Stub> = {
  title: 'Category/Button/Edit',
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

export const Edit: Story = {
  args: {
    state: 'normal',
  },
};
