import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const button = style({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '452px',
    padding: `${vars.space.md} ${vars.space.xl}`,
    backgroundColor: vars.colors.primary,
    color: '#FFFFFF',
    borderRadius: vars.radius.md,
    border: 'none',
    fontSize: vars.fontSizes.xl,
    fontWeight: vars.fontWeights.bold,
    cursor: 'pointer',
    transition: 'background-color 0.2s ease, box-shadow 0.2s ease',
    textDecoration: 'none',
    gap: vars.space.md,
    boxShadow: vars.colors.shadow,

    ':hover': {
        backgroundColor: vars.colors.hover,
        boxShadow: 'none',
    },

    ':disabled': {
        backgroundColor: vars.colors.blue400,
        cursor: 'not-allowed',
        opacity: 0.7,
        boxShadow: 'none',
    }
});

export const hoverState = style({
    backgroundColor: vars.colors.hover,
    boxShadow: 'none',
});

export const icon = style({
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
});
