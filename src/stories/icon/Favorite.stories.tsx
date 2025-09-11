import type { Meta, StoryObj } from '@storybook/react';
import type React from 'react';
import { vars } from '../../styles/theme.css';

// 'active' もコントロールで指定されていたので型に追加
type ButtonState = 'none' | 'hover' | 'active';
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  state?: ButtonState;
};

const Stub = ({ state = 'none', style, ...rest }: ButtonProps) => {
  const isHover = state === 'hover';
  const isActive = state === 'active';
  const isNone = state === 'none';
  // 背景: hover=gray400, active=gray300, none=gray300
  const iconColor = isNone ? vars.colors.font : '#FAEF55';
  const background = isHover
    ? vars.colors.gray400
    : isActive
      ? 'transparent'
      : vars.colors.gray300;
  const visualStyles: React.CSSProperties = {
    background,
    color: iconColor,
    transition: 'background-color 120ms ease, color 120ms ease',
  } as const;

  return (
    <button
      style={{
        display: 'inline-flex',
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: vars.radii.full,
        border: 'none',
        cursor: 'pointer',
        opacity: isNone ? 0.2 : 1,
        ...visualStyles,
        ...style,
      }}
      {...rest}
    >
      <span
        aria-hidden
        style={{ width: 16, height: 16, lineHeight: 0, display: 'inline-flex' }}
      >
        <svg
          width='16'
          height='16'
          viewBox='0 0 18 18'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden
          focusable='false'
          style={{ display: 'block' }}
        >
          {isNone ? (
            // none 用: 縁取りスター
            <path
              d='M12.5217 5.11051L9.01003 0.5L5.49833 5.11051L0 6.97909L3.47157 11.9552L3.3311 17.5L9.01003 15.8955L14.689 17.5L14.5485 11.9349L18 6.97909L12.5217 5.11051ZM11.5385 6.51195L15.4314 7.81183L12.9431 11.4474L13.0234 15.3268L9.01003 14.2097L4.99666 15.3471L5.07692 11.4474L2.58863 7.85245L6.48161 6.51195L9.01003 3.16069L11.5385 6.51195Z'
              fill='currentColor'
            />
          ) : (
            // hover/active 用: 塗りつぶしスター
            <path
              d='M12.5217 5.11051L9.01003 0.5L5.49833 5.11051L0 6.97909L3.47157 11.9552L3.3311 17.5L9.01003 15.8955L14.689 17.5L14.5485 11.9349L18 6.97909L12.5217 5.11051Z'
              fill='currentColor'
            />
          )}
        </svg>
      </span>
    </button>
  );
};

const meta: Meta<typeof Stub> = {
  title: 'Icon/Favorite',
  component: Stub,
  parameters: { layout: 'centered' },
  argTypes: {
    state: {
      control: { type: 'radio' },
      options: ['none', 'hover', 'active'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Favorite: Story = {
  args: { state: 'active' },
};
