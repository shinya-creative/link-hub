import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

const baseButton = style({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vars.radius.md,
    fontSize: vars.fontSizes.lxl,
    fontWeight: vars.fontWeights.bold,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
    border: 'none',
    boxShadow: vars.colors.shadow,

    ':disabled': {
        cursor: 'not-allowed',
        opacity: 0.7,
        boxShadow: 'none',
    }
});

export const sizes = styleVariants({
    medium: {
        padding: `${vars.space.md} ${vars.space.lg}`,
    },
    small: {
        padding: `${vars.space.smd} ${vars.space.lg}`,
    },
});

export const variants = styleVariants({
    primary: [baseButton, {
        backgroundColor: vars.colors.primary,
        color: '#FFFFFF',
        ':hover': {
            backgroundColor: vars.colors.hover,
            boxShadow: 'none',
        },
        ':disabled': {
            backgroundColor: vars.colors.blue400,
        }
    }],
    secondary: [baseButton, {
        backgroundColor: vars.colors.surface,
        color: vars.colors.font,
        border: `1px solid ${vars.colors.border}`,
        ':hover': {
            backgroundColor: vars.colors.gray100,
            boxShadow: 'none',
        },
    }],
});
