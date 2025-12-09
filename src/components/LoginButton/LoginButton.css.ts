import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const loginButton = style({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `${vars.space.md} ${vars.space.lg}`,
    backgroundColor: vars.colors.primary,
    color: '#FFFFFF',
    fontSize: vars.fontSizes.lxl,
    fontWeight: vars.fontWeights.bold,
    border: 'none',
    borderRadius: vars.radius.md,
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',

    ':hover': {
        backgroundColor: vars.colors.hover,
    },

    ':active': {
        backgroundColor: vars.colors.blue800,
    },

    ':disabled': {
        backgroundColor: vars.colors.gray400,
        cursor: 'not-allowed',
    },
});
