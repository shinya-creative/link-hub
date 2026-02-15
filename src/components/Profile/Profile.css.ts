import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const container = style({
    width: '72px',
    height: '72px',
    borderRadius: vars.radii.full,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
});

export const variant = styleVariants({
    icon: {
        backgroundColor: vars.colors.gray300,
    },
    initial: {
        backgroundColor: vars.colors.secondary,
    },
});

export const icon = style({
    width: '36px',
    height: '36px',
    color: vars.colors.font,
});

export const text = style({
    fontSize: '32px',
    fontWeight: vars.fontWeights.regular,
    color: vars.colors.font,
    lineHeight: 1,
});
