import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

const fadeIn = keyframes({
    '0%': { opacity: 0, transform: 'translateY(4px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
});

export const hoverState = style({});
export const activeState = style({});

export const container = style({
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
});

// The tooltip is visible only when container is hovered or has hoverState class
export const tooltip = style({
    position: 'absolute',
    left: '100%',
    marginLeft: vars.space.sm, // Add some spacing between icon and tooltip
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: vars.colors.gray100,
    color: vars.colors.font,
    padding: `${vars.space.xs} ${vars.space.sm}`,
    borderRadius: vars.radii.sm,
    fontSize: vars.fontSizes.sm,
    whiteSpace: 'nowrap',
    opacity: 0,
    pointerEvents: 'none',
    transition: 'opacity 0.2s ease',
    selectors: {
        [`${container}:hover &`]: {
            opacity: 1,
            pointerEvents: 'auto',
            animation: `${fadeIn} 0.2s ease forwards`,
        },
        [`${hoverState} &`]: {
            opacity: 1,
            pointerEvents: 'auto',
            animation: `${fadeIn} 0.2s ease forwards`,
        },
    },
});

export const icon = style({
    width: '24px',
    height: '24px',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: vars.radii.full,
    backgroundColor: vars.colors.gray300,
    border: `1px solid ${vars.colors.gray300}`,
    cursor: 'pointer',
    selectors: {
        [`${container}:hover &`]: {
            backgroundColor: vars.colors.surface,
        },
        [`${hoverState} &`]: {
            backgroundColor: vars.colors.surface,
        },
        [`${activeState} &`]: {
            backgroundColor: vars.colors.surface,
        },
    },
});

export const path = style({
    fill: vars.colors.strongFont,
    transition: 'fill 0.2s ease',
    selectors: {
        [`${container}:active &`]: {
            fill: 'url(#paint0_linear_52_272)',
        },
        [`${activeState} &`]: {
            fill: 'url(#paint0_linear_52_272)',
        },
    },
});
