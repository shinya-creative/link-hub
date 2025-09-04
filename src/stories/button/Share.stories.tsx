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
          width="14"
          height="16"
          viewBox="0 0 14 16"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
          focusable="false"
          style={{ display: 'block' }}
        >
          <path
            d="M11.6667 16C11.0185 16 10.4676 15.7667 10.0139 15.3C9.56019 14.8333 9.33333 14.2667 9.33333 13.6C9.33333 13.52 9.35278 13.3333 9.39167 13.04L3.92778 9.76C3.72037 9.96 3.48056 10.1168 3.20833 10.2304C2.93611 10.344 2.64444 10.4005 2.33333 10.4C1.68519 10.4 1.13426 10.1667 0.680556 9.7C0.226852 9.23333 0 8.66667 0 8C0 7.33333 0.226852 6.76667 0.680556 6.3C1.13426 5.83333 1.68519 5.6 2.33333 5.6C2.64444 5.6 2.93611 5.6568 3.20833 5.7704C3.48056 5.884 3.72037 6.04053 3.92778 6.24L9.39167 2.96C9.36574 2.86667 9.34967 2.7768 9.34344 2.6904C9.33722 2.604 9.33385 2.5072 9.33333 2.4C9.33333 1.73333 9.56019 1.16667 10.0139 0.7C10.4676 0.233333 11.0185 0 11.6667 0C12.3148 0 12.8657 0.233333 13.3194 0.7C13.7731 1.16667 14 1.73333 14 2.4C14 3.06667 13.7731 3.63333 13.3194 4.1C12.8657 4.56667 12.3148 4.8 11.6667 4.8C11.3556 4.8 11.0639 4.7432 10.7917 4.6296C10.5194 4.516 10.2796 4.35947 10.0722 4.16L4.60833 7.44C4.63426 7.53333 4.65059 7.62347 4.65733 7.7104C4.66407 7.79733 4.66719 7.89387 4.66667 8C4.66615 8.10613 4.66304 8.20293 4.65733 8.2904C4.65163 8.37787 4.6353 8.46773 4.60833 8.56L10.0722 11.84C10.2796 11.64 10.5194 11.4835 10.7917 11.3704C11.0639 11.2573 11.3556 11.2005 11.6667 11.2C12.3148 11.2 12.8657 11.4333 13.3194 11.9C13.7731 12.3667 14 12.9333 14 13.6C14 14.2667 13.7731 14.8333 13.3194 15.3C12.8657 15.7667 12.3148 16 11.6667 16ZM11.6667 14.4C11.887 14.4 12.0719 14.3235 12.2212 14.1704C12.3706 14.0173 12.445 13.8272 12.4444 13.6C12.4439 13.3728 12.3693 13.1829 12.2204 13.0304C12.0716 12.8779 11.887 12.8011 11.6667 12.8C11.4463 12.7989 11.2617 12.8757 11.1129 13.0304C10.9641 13.1851 10.8894 13.3749 10.8889 13.6C10.8884 13.8251 10.963 14.0152 11.1129 14.1704C11.2627 14.3256 11.4473 14.4021 11.6667 14.4ZM2.33333 8.8C2.5537 8.8 2.73856 8.7232 2.88789 8.5696C3.03722 8.416 3.11163 8.22613 3.11111 8C3.11059 7.77387 3.03593 7.584 2.88711 7.4304C2.7383 7.2768 2.5537 7.2 2.33333 7.2C2.11296 7.2 1.92837 7.2768 1.77956 7.4304C1.63074 7.584 1.55607 7.77387 1.55556 8C1.55504 8.22613 1.6297 8.41627 1.77956 8.5704C1.92941 8.72453 2.114 8.80107 2.33333 8.8ZM11.6667 3.2C11.887 3.2 12.0719 3.1232 12.2212 2.9696C12.3706 2.816 12.445 2.62613 12.4444 2.4C12.4439 2.17387 12.3693 1.984 12.2204 1.8304C12.0716 1.6768 11.887 1.6 11.6667 1.6C11.4463 1.6 11.2617 1.6768 11.1129 1.8304C10.9641 1.984 10.8894 2.17387 10.8889 2.4C10.8884 2.62613 10.963 2.81627 11.1129 2.9704C11.2627 3.12453 11.4473 3.20107 11.6667 3.2Z"
            fill="currentColor"
          />
        </svg>
      </span>
    </button>
  );
};

const meta: Meta<typeof Stub> = {
  title: 'Category/Button/Share',
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

export const Share: Story = {
  args: {
    state: 'normal',
  },
};
