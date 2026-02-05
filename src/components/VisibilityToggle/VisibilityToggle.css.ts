import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const button = style({
    background: 'transparent',
    border: 'none',
    padding: vars.space.xs,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vars.radius.sm,
    transition: 'background-color 0.2s ease',
    color: vars.colors.font,
    selectors: {
        '&:hover': {
            backgroundColor: vars.colors.gray100,
        },
        '&:active': {
            backgroundColor: vars.colors.gray200,
        }
    },
});

export const icon = style({
    fill: 'currentColor',
    display: 'block',
});
